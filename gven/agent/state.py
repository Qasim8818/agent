"""
State management for GVEN
Handles state creation, validation, and hash chain management
"""

import json
import hashlib
import time
from typing import Dict, Any, Optional, Tuple
from datetime import datetime
from pydantic import BaseModel, Field, validator
import logging

logger = logging.getLogger(__name__)

# Configuration constants
MAX_STATE_SIZE = 1_000_000  # 1MB max state size
MAX_LOCATION_LENGTH = 256
MAX_STATUS_LENGTH = 32
MIN_TIMESTAMP_DELTA = 0  # Seconds (can have same timestamp in tests)
MAX_HISTORICAL_STATES = 10000  # Prevent unbounded memory growth


class StateSchema(BaseModel):
    """Schema for GVEN state with enhanced validation"""
    owner: str = Field(..., description="Entity owner", min_length=1, max_length=256)
    location: str = Field(..., description="Current location", min_length=1, max_length=256)
    status: str = Field(default="active", description="Entity status", max_length=32)
    timestamp: int = Field(..., description="Unix timestamp", ge=0)
    prev_hash: str = Field(..., description="SHA-256 hash of previous state", min_length=64, max_length=64)
    
    class Config:
        extra = "allow"  # Allow additional fields
    
    @validator('status')
    def validate_status(cls, v):
        allowed = {'active', 'inactive', 'compromised', 'retired'}
        if v not in allowed:
            raise ValueError(f"Status must be one of {allowed}")
        return v
    
    @validator('prev_hash')
    def validate_hash(cls, v):
        if len(v) != 64:
            raise ValueError("prev_hash must be 64-character hex string (SHA-256)")
        try:
            int(v, 16)  # Validate it's valid hex
        except ValueError:
            raise ValueError("prev_hash must be valid hex")
        return v
    
    @validator('owner', 'location')
    def validate_no_nulls(cls, v):
        if not v or '\x00' in v:
            raise ValueError("Field cannot contain null characters")
        return v


def state_to_json(state: Dict[str, Any]) -> str:
    """Convert state to JSON with sorted keys (for consistent hashing)
    
    Args:
        state: State dictionary
        
    Returns:
        JSON string with sorted keys
        
    Raises:
        TypeError: If state contains non-serializable types
    """
    try:
        return json.dumps(state, sort_keys=True, separators=(',', ':'))
    except TypeError as e:
        logger.error(f"Failed to serialize state to JSON: {e}")
        raise


def state_hash(state: Dict[str, Any]) -> str:
    """Compute SHA-256 hash of state with error handling
    
    Args:
        state: State dictionary
        
    Returns:
        64-character hex string
        
    Raises:
        ValueError: If state cannot be serialized
    """
    try:
        state_json = state_to_json(state)
        if len(state_json) > MAX_STATE_SIZE:
            raise ValueError(f"State exceeds maximum size of {MAX_STATE_SIZE} bytes")
        return hashlib.sha256(state_json.encode()).hexdigest()
    except Exception as e:
        logger.error(f"Failed to compute state hash: {e}")
        raise


def create_state(
    owner: str,
    location: str,
    status: str = "active",
    prev_state: Optional[Dict[str, Any]] = None,
    metadata: Optional[Dict[str, Any]] = None
) -> Dict[str, Any]:
    """Create a new state with hash chain and validation
    
    Args:
        owner: Entity owner
        location: Current location
        status: Entity status
        prev_state: Previous state (for hash chain)
        metadata: Additional metadata
        
    Returns:
        New state dictionary
        
    Raises:
        ValueError: If validation fails
    """
    # Validate owner and location
    if not owner or len(owner) > 256:
        raise ValueError("Owner must be non-empty and <= 256 chars")
    if not location or len(location) > 256:
        raise ValueError("Location must be non-empty and <= 256 chars")
    
    # Compute previous hash
    if prev_state:
        try:
            prev_hash = state_hash(prev_state)
        except Exception as e:
            raise ValueError(f"Failed to hash previous state: {e}")
    else:
        prev_hash = "0" * 64  # Genesis state
    
    # Create new state
    new_state = {
        "owner": owner,
        "location": location,
        "status": status,
        "timestamp": int(time.time()),
        "prev_hash": prev_hash
    }
    
    # Add metadata if provided
    if metadata:
        # Validate metadata doesn't exceed limits
        if len(json.dumps(metadata)) > MAX_STATE_SIZE:
            raise ValueError(f"Metadata too large: exceeds {MAX_STATE_SIZE} bytes")
        new_state.update(metadata)
    
    # Validate schema
    try:
        StateSchema(**new_state)
    except Exception as e:
        raise ValueError(f"State validation failed: {e}")
    
    return new_state


def validate_state(state: Dict[str, Any]) -> Tuple[bool, Optional[str]]:
    """Validate state against schema
    
    Args:
        state: State dictionary
        
    Returns:
        (is_valid, error_message)
    """
    try:
        if not isinstance(state, dict):
            return False, "State must be a dictionary"
        
        StateSchema(**state)
        return True, None
    except Exception as e:
        return False, str(e)


def validate_transition(
    old_state: Dict[str, Any],
    new_state: Dict[str, Any]
) -> Tuple[bool, Optional[str]]:
    """Validate a state transition with comprehensive checks
    
    Args:
        old_state: Previous state
        new_state: New state
        
    Returns:
        (is_valid, error_message)
    """
    # Validate both states
    old_valid, old_err = validate_state(old_state)
    if not old_valid:
        return False, f"Old state invalid: {old_err}"
    
    new_valid, new_err = validate_state(new_state)
    if not new_valid:
        return False, f"New state invalid: {new_err}"
    
    # Check hash chain
    try:
        expected_prev_hash = state_hash(old_state)
    except Exception as e:
        return False, f"Failed to compute old state hash: {e}"
    
    if new_state["prev_hash"] != expected_prev_hash:
        return False, f"Hash chain broken: expected {expected_prev_hash}, got {new_state['prev_hash']}"
    
    # Check timestamp increases (or stays same for genesis)
    old_ts = old_state.get("timestamp", 0)
    new_ts = new_state.get("timestamp", 0)
    if new_ts < old_ts:
        return False, f"Timestamp must not decrease: {old_ts} -> {new_ts}"
    
    # Check owner stays the same (unless explicit transfer)
    if new_state.get("owner") != old_state.get("owner"):
        if not new_state.get("transfer_signature"):
            return False, "Owner change requires transfer_signature"
    
    return True, None


def create_transition_proof_input(
    old_state: Dict[str, Any],
    new_state: Dict[str, Any]
) -> Dict[str, Any]:
    """Create input for ZK proof circuit with validation
    
    Args:
        old_state: Previous state
        new_state: New state
        
    Returns:
        Input dictionary for ZK prover
        
    Raises:
        ValueError: If transition is invalid
    """
    valid, error = validate_transition(old_state, new_state)
    if not valid:
        raise ValueError(f"Invalid transition: {error}")
    
    try:
        return {
            "prev_hash": state_hash(old_state),
            "new_hash": state_hash(new_state),
            "prev_state": old_state,
            "new_state": new_state,
        }
    except Exception as e:
        raise ValueError(f"Failed to create proof input: {e}")


if __name__ == "__main__":
    # Example usage
    print("[*] State Management Example")
    
    # Create initial state
    s1 = create_state("alice", "warehouse-A")
    h1 = state_hash(s1)
    print(f"State 1 hash: {h1[:16]}...")
    
    # Create next state
    s2 = create_state("alice", "warehouse-B", prev_state=s1)
    h2 = state_hash(s2)
    print(f"State 2 hash: {h2[:16]}...")
    
    # Validate transition
    valid, error = validate_transition(s1, s2)
    print(f"Transition valid: {valid}")
    
    if valid:
        # Create proof input
        proof_input = create_transition_proof_input(s1, s2)
        print(f"✓ Created ZK proof input")
        print(f"  Prev hash: {proof_input['prev_hash'][:16]}...")
        print(f"  New hash: {proof_input['new_hash'][:16]}...")
