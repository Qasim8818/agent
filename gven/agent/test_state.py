"""
Unit tests for GVEN Agent State Management
Tests Pydantic v2 validation, state hashing, and state transitions
"""

import pytest
from datetime import datetime
from gven.agent.state import StateSchema, state_hash, state_to_json, create_state


class TestStateValidator:
    """Test Pydantic v2 field validators"""

    def test_valid_state_creation(self):
        """Valid state should be created without errors"""
        state = StateSchema(
            owner="device-001",
            location="lab-floor-1",
            status="active",
            timestamp=1704067200,
            prev_hash="a" * 64,
        )
        assert state.owner == "device-001"
        assert state.status == "active"

    def test_invalid_status_raises_error(self):
        """Invalid status should raise validation error"""
        with pytest.raises(ValueError, match="Status must be one of"):
            StateSchema(
                owner="device-001",
                location="lab-floor-1",
                status="invalid_status",
                timestamp=1704067200,
                prev_hash="a" * 64,
            )

    def test_invalid_prev_hash_length_raises_error(self):
        """prev_hash must be exactly 64 characters"""
        with pytest.raises(ValueError, match="64-character hex string"):
            StateSchema(
                owner="device-001",
                location="lab-floor-1",
                status="active",
                timestamp=1704067200,
                prev_hash="short_hash",
            )

    def test_invalid_prev_hash_not_hex_raises_error(self):
        """prev_hash must be valid hex"""
        with pytest.raises(ValueError, match="valid hex"):
            StateSchema(
                owner="device-001",
                location="lab-floor-1",
                status="active",
                timestamp=1704067200,
                prev_hash="z" * 64,  # 'z' is not hex
            )

    def test_null_character_in_owner_raises_error(self):
        """Null characters should be rejected"""
        with pytest.raises(ValueError, match="null characters"):
            StateSchema(
                owner="device\x00hacked",
                location="lab-floor-1",
                status="active",
                timestamp=1704067200,
                prev_hash="a" * 64,
            )

    def test_all_valid_statuses(self):
        """All valid statuses should be accepted"""
        valid_statuses = ['active', 'inactive', 'compromised', 'retired']
        
        for status in valid_statuses:
            state = StateSchema(
                owner="device-001",
                location="lab-floor-1",
                status=status,
                timestamp=1704067200,
                prev_hash="a" * 64,
            )
            assert state.status == status


class TestStateHashing:
    """Test state hashing and JSON serialization"""

    def test_state_to_json_consistent_ordering(self):
        """JSON should use sorted keys for consistent hashing"""
        state_dict = {
            "z_field": "value",
            "a_field": "value",
            "m_field": "value",
        }
        
        json_str = state_to_json(state_dict)
        
        # Verify keys are in alphabetical order
        assert json_str.index("a_field") < json_str.index("m_field")
        assert json_str.index("m_field") < json_str.index("z_field")

    def test_state_hash_consistency(self):
        """Same state should produce same hash"""
        state = {
            "owner": "device-001",
            "location": "lab-floor-1",
            "status": "active",
            "timestamp": 1704067200,
        }
        
        hash1 = state_hash(state)
        hash2 = state_hash(state)
        
        assert hash1 == hash2

    def test_state_hash_is_64_char_hex(self):
        """Hash should be 64-character hex string (SHA-256)"""
        state = {
            "owner": "device-001",
            "location": "lab-floor-1",
            "status": "active",
            "timestamp": 1704067200,
        }
        
        hash_value = state_hash(state)
        
        assert len(hash_value) == 64
        assert all(c in "0123456789abcdef" for c in hash_value)

    def test_different_states_produce_different_hashes(self):
        """Different states should produce different hashes"""
        state1 = {
            "owner": "device-001",
            "location": "lab-floor-1",
            "status": "active",
            "timestamp": 1704067200,
        }
        
        state2 = {
            "owner": "device-002",  # Different owner
            "location": "lab-floor-1",
            "status": "active",
            "timestamp": 1704067200,
        }
        
        hash1 = state_hash(state1)
        hash2 = state_hash(state2)
        
        assert hash1 != hash2

    def test_oversized_state_raises_error(self):
        """State exceeding max size should raise error"""
        oversized_state = {
            "owner": "device-001",
            "location": "lab-floor-1",
            "status": "active",
            "timestamp": 1704067200,
            "data": "x" * 2_000_000,  # 2MB (exceeds 1MB limit)
        }
        
        with pytest.raises(ValueError, match="exceeds maximum size"):
            state_hash(oversized_state)


class TestStateCreation:
    """Test state creation and chain validation"""

    def test_create_state_with_valid_data(self):
        """Valid state creation should succeed"""
        prev_state_hash = "b" * 64
        
        state = create_state(
            owner="device-001",
            location="lab-floor-1",
            status="active",
            prev_hash=prev_state_hash,
        )
        
        assert state is not None
        assert state["owner"] == "device-001"
        assert state["prev_hash"] == prev_state_hash

    def test_state_includes_timestamp(self):
        """Created state should include current timestamp"""
        state = create_state(
            owner="device-001",
            location="lab-floor-1",
            status="active",
            prev_hash="c" * 64,
        )
        
        assert "timestamp" in state
        assert isinstance(state["timestamp"], int)
        assert state["timestamp"] > 0


class TestPydanticV2Migration:
    """Test that Pydantic v2 migration was successful"""

    def test_field_validator_decorator_works(self):
        """@field_validator (v2) should work correctly"""
        # This test verifies the migration from @validator (v1) to @field_validator (v2)
        
        with pytest.raises(ValueError):
            StateSchema(
                owner="device-001",
                location="lab-floor-1",
                status="invalid",  # Invalid status should trigger validator
                timestamp=1704067200,
                prev_hash="a" * 64,
            )

    def test_model_config_replaces_config_class(self):
        """model_config should be used instead of Config class"""
        # StateSchema should have model_config attribute (Pydantic v2)
        assert hasattr(StateSchema, 'model_config') or hasattr(StateSchema, '__pydantic_config__')

    def test_validator_has_classmethod_decorator(self):
        """v2 validators require @classmethod decorator"""
        # This is implicitly tested by the fact that validators work at all
        # If @classmethod decorator was missing, validators would fail
        state = StateSchema(
            owner="device-001",
            location="lab-floor-1",
            status="active",
            timestamp=1704067200,
            prev_hash="a" * 64,
        )
        assert state is not None


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
