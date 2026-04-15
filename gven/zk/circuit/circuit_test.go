package circuit

import (
	"strings"
	"testing"
)

// TestTransitionProof tests proof generation and verification
func TestTransitionProof(t *testing.T) {
	t.Run("proof_generation", func(t *testing.T) {
		prevState := "state_001"
		newState := "state_002"
		timestamp := int64(1000)

		proof := GenerateProof(prevState, newState, timestamp)

		if proof.PrevHash == "" {
			t.Error("PrevHash is empty")
		}
		if proof.NewHash == "" {
			t.Error("NewHash is empty")
		}
		if proof.Valid != true {
			t.Error("Proof should be valid")
		}
		if proof.Version != CircuitVersion {
			t.Errorf("Version mismatch: expected %s, got %s", CircuitVersion, proof.Version)
		}
	})

	t.Run("proof_verification", func(t *testing.T) {
		prevState := "state_001"
		newState := "state_002"
		timestamp := int64(1000)

		proof := GenerateProof(prevState, newState, timestamp)
		isValid := VerifyProof(proof, prevState, newState)

		if !isValid {
			t.Error("Valid proof should verify")
		}
	})

	t.Run("invalid_proof", func(t *testing.T) {
		prevState := "state_001"
		newState := "state_002"
		wrongState := "state_003"
		timestamp := int64(1000)

		proof := GenerateProof(prevState, newState, timestamp)
		isValid := VerifyProof(proof, prevState, wrongState)

		if isValid {
			t.Error("Invalid proof should not verify")
		}
	})

	// New robustness tests
	t.Run("empty_prev_state", func(t *testing.T) {
		proof := GenerateProof("", "state_002", 1000)
		if proof.Valid {
			t.Error("Proof should be invalid for empty prevState")
		}
		if proof.Error == "" {
			t.Error("Error message should be set")
		}
	})

	t.Run("empty_new_state", func(t *testing.T) {
		proof := GenerateProof("state_001", "", 1000)
		if proof.Valid {
			t.Error("Proof should be invalid for empty newState")
		}
	})

	t.Run("identical_states", func(t *testing.T) {
		proof := GenerateProof("state_001", "state_001", 1000)
		if proof.Valid {
			t.Error("Proof should be invalid for identical states")
		}
		if !strings.Contains(proof.Error, "must be different") {
			t.Error("Error should mention states must be different")
		}
	})

	t.Run("negative_timestamp", func(t *testing.T) {
		proof := GenerateProof("state_001", "state_002", -1000)
		if proof.Valid {
			t.Error("Proof should be invalid for negative timestamp")
		}
	})

	t.Run("future_timestamp", func(t *testing.T) {
		proof := GenerateProof("state_001", "state_002", 5000000000) // Year 2128
		if proof.Valid {
			t.Error("Proof should be invalid for too-distant future timestamp")
		}
	})

	t.Run("oversized_state", func(t *testing.T) {
		largeState := strings.Repeat("x", MaxStateLength+1)
		proof := GenerateProof(largeState, "state_002", 1000)
		if proof.Valid {
			t.Error("Proof should be invalid for oversized state")
		}
	})

	t.Run("whitespace_only_state", func(t *testing.T) {
		proof := GenerateProof("   ", "state_002", 1000)
		if proof.Valid {
			t.Error("Proof should be invalid for whitespace-only state")
		}
	})

	t.Run("version_mismatch", func(t *testing.T) {
		prevState := "state_001"
		newState := "state_002"
		proof := GenerateProof(prevState, newState, 1000)
		
		// Tamper with version
		proof.Version = "0.5.0"
		isValid := VerifyProof(proof, prevState, newState)
		if isValid {
			t.Error("Proof should be invalid with mismatched version")
		}
	})
}

// TestAttestation tests attestation generation and verification
func TestAttestation(t *testing.T) {
	t.Run("attestation_generation", func(t *testing.T) {
		owner := "device_001"
		stateHash := "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd"
		nonce := int64(42)

		attestation, err := GenerateAttestation(owner, stateHash, nonce)

		if attestation == "" {
			t.Error("Attestation is empty")
		}
		if err != "" {
			t.Errorf("Expected no error, got: %s", err)
		}
	})

	t.Run("attestation_verification", func(t *testing.T) {
		owner := "device_001"
		stateHash := "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd"
		nonce := int64(42)

		attestation, err := GenerateAttestation(owner, stateHash, nonce)
		if err != "" {
			t.Fatalf("Failed to generate attestation: %s", err)
		}

		isValid := VerifyAttestation(attestation, owner, stateHash, nonce)

		if !isValid {
			t.Error("Valid attestation should verify")
		}
	})

	t.Run("invalid_attestation", func(t *testing.T) {
		owner := "device_001"
		stateHash := "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd"
		nonce := int64(42)

		attestation, _ := GenerateAttestation(owner, stateHash, nonce)
		wrongNonce := int64(43)
		isValid := VerifyAttestation(attestation, owner, stateHash, wrongNonce)

		if isValid {
			t.Error("Invalid attestation should not verify")
		}
	})

	// New robustness tests
	t.Run("empty_owner", func(t *testing.T) {
		_, err := GenerateAttestation("", "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd", 42)
		if err == "" {
			t.Error("Should return error for empty owner")
		}
	})

	t.Run("oversized_owner", func(t *testing.T) {
		largeOwner := strings.Repeat("x", MaxOwnerLength+1)
		_, err := GenerateAttestation(largeOwner, "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd", 42)
		if err == "" {
			t.Error("Should return error for oversized owner")
		}
	})

	t.Run("invalid_hash_length", func(t *testing.T) {
		_, err := GenerateAttestation("device_001", "tooshort", 42)
		if err == "" {
			t.Error("Should return error for invalid hash length")
		}
	})

	t.Run("invalid_hash_format", func(t *testing.T) {
		badHash := "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
		_, err := GenerateAttestation("device_001", badHash, 42)
		if err == "" {
			t.Error("Should return error for non-hex hash")
		}
	})

	t.Run("negative_nonce", func(t *testing.T) {
		_, err := GenerateAttestation("device_001", "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd", -1)
		if err == "" {
			t.Error("Should return error for negative nonce")
		}
	})

	t.Run("verify_with_bad_attestation_format", func(t *testing.T) {
		isValid := VerifyAttestation("tooshort", "device_001", "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd", 42)
		if isValid {
			t.Error("Should reject malformed attestation")
		}
	})

	t.Run("verify_with_non_hex_attestation", func(t *testing.T) {
		badAttestation := "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
		isValid := VerifyAttestation(badAttestation, "device_001", "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd", 42)
		if isValid {
			t.Error("Should reject non-hex attestation")
		}
	})
}

// BenchmarkProofGeneration benchmarks proof generation
func BenchmarkProofGeneration(b *testing.B) {
	prevState := "state_001"
	newState := "state_002"
	timestamp := int64(1000)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		GenerateProof(prevState, newState, timestamp)
	}
}

// BenchmarkProofVerification benchmarks proof verification
func BenchmarkProofVerification(b *testing.B) {
	prevState := "state_001"
	newState := "state_002"
	timestamp := int64(1000)
	proof := GenerateProof(prevState, newState, timestamp)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		VerifyProof(proof, prevState, newState)
	}
}

// BenchmarkAttestationGeneration benchmarks attestation generation
func BenchmarkAttestationGeneration(b *testing.B) {
	owner := "device_001"
	stateHash := "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd"
	nonce := int64(42)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		GenerateAttestation(owner, stateHash, nonce)
	}
}

// BenchmarkAttestationVerification benchmarks attestation verification
func BenchmarkAttestationVerification(b *testing.B) {
	owner := "device_001"
	stateHash := "abcdef123456abcdef123456abcdef123456abcdef123456abcdef123456abcd"
	nonce := int64(42)
	attestation, _ := GenerateAttestation(owner, stateHash, nonce)

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		VerifyAttestation(attestation, owner, stateHash, nonce)
	}
}