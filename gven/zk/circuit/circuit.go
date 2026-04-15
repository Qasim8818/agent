package circuit

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"strings"
)

// CircuitVersion defines the current circuit protocol version
const CircuitVersion = "1.0.0"

// MaxStateLength defines maximum allowed state string length (1MB)
const MaxStateLength = 1_000_000

// TransitionProof represents a zero-knowledge proof of state transition
// MVP version: Using SHA-256 hashing instead of zk-SNARK for simplicity
// Production: Replace with gnark Groth16 circuits
type TransitionProof struct {
	Version   string `json:"version,omitempty"`  // Circuit version for compatibility
	PrevHash  string `json:"prev_hash"`
	NewHash   string `json:"new_hash"`
	Timestamp int64  `json:"timestamp"`
	ProofData string `json:"proof_data"`
	Valid     bool   `json:"valid"`
	Error     string `json:"error,omitempty"`   // Error message if generation failed
}

// StateTransition represents a state change
type StateTransition struct {
	PrevState string
	NewState  string
	Timestamp int64
}

// ValidationError represents a circuit validation error
type ValidationError struct {
	Field   string
	Message string
}

// validateState performs comprehensive validation on state strings
func validateState(state string, maxLen int) error {
	if strings.TrimSpace(state) == "" {
		return fmt.Errorf("state cannot be empty or whitespace only")
	}
	if len(state) > maxLen {
		return fmt.Errorf("state exceeds maximum length of %d bytes: got %d", maxLen, len(state))
	}
	// Check for valid UTF-8 (reject control characters)
	if len(state) >= 0 {
		for i := 0; i < len(state); i++ {
			b := state[i]
			if b < 32 && b != 9 && b != 10 && b != 13 {
				return fmt.Errorf("state contains invalid control character at position %d", i)
			}
		}
	}
	return nil
}

// validateTimestamp ensures timestamp is reasonable (not in distant future or past)
func validateTimestamp(timestamp int64) error {
	if timestamp < 0 {
		return fmt.Errorf("timestamp cannot be negative: %d", timestamp)
	}
	// Unix timestamp should be in reasonable range (1970-2100)
	if timestamp > 4102444800 { // Jan 1, 2100
		return fmt.Errorf("timestamp appears to be invalid (too far in future): %d", timestamp)
	}
	return nil
}

// GenerateProof generates a proof of valid state transition with validation
// MVP version: Proof is commitment hash (replace with zk-SNARK in production)
// Returns TransitionProof with error field set on failure
func GenerateProof(prevState, newState string, timestamp int64) TransitionProof {
	// Validate inputs
	if err := validateState(prevState, MaxStateLength); err != nil {
		return TransitionProof{
			Version: CircuitVersion,
			Valid:   false,
			Error:   fmt.Sprintf("invalid prevState: %v", err),
		}
	}
	
	if err := validateState(newState, MaxStateLength); err != nil {
		return TransitionProof{
			Version: CircuitVersion,
			Valid:   false,
			Error:   fmt.Sprintf("invalid newState: %v", err),
		}
	}
	
	if err := validateTimestamp(timestamp); err != nil {
		return TransitionProof{
			Version: CircuitVersion,
			Valid:   false,
			Error:   fmt.Sprintf("invalid timestamp: %v", err),
		}
	}

	// Ensure states are different to prevent trivial proofs
	if prevState == newState {
		return TransitionProof{
			Version: CircuitVersion,
			Valid:   false,
			Error:   "prevState and newState must be different",
		}
	}

	prevHash := sha256.Sum256([]byte(prevState))
	newHash := sha256.Sum256([]byte(newState))

	prevHashHex := hex.EncodeToString(prevHash[:])
	newHashHex := hex.EncodeToString(newHash[:])

	// MVP proof: just the transition metadata
	proofData := fmt.Sprintf("%s:%s:%d", prevHashHex[:16], newHashHex[:16], timestamp)
	proofHash := sha256.Sum256([]byte(proofData))

	return TransitionProof{
		Version:   CircuitVersion,
		PrevHash:  prevHashHex,
		NewHash:   newHashHex,
		Timestamp: timestamp,
		ProofData: hex.EncodeToString(proofHash[:]),
		Valid:     true,
	}
}

// VerifyProof verifies that a proof is valid with comprehensive checks
// MVP version: Basic hash verification
// Production: zk-SNARK verification with proving key
func VerifyProof(proof TransitionProof, prevState, newState string) bool {
	// Check version compatibility
	if proof.Version != "" && proof.Version != CircuitVersion {
		return false
	}

	if !proof.Valid {
		return false
	}

	// Validate input states
	if err := validateState(prevState, MaxStateLength); err != nil {
		return false
	}
	if err := validateState(newState, MaxStateLength); err != nil {
		return false
	}

	// Verify hashes match
	prevHash := sha256.Sum256([]byte(prevState))
	newHash := sha256.Sum256([]byte(newState))

	prevHashHex := hex.EncodeToString(prevHash[:])
	newHashHex := hex.EncodeToString(newHash[:])

	if prevHashHex != proof.PrevHash || newHashHex != proof.NewHash {
		return false
	}

	// Verify proof data consistency
	expectedProofData := fmt.Sprintf("%s:%s:%d", prevHashHex[:16], newHashHex[:16], proof.Timestamp)
	expectedProofHash := sha256.Sum256([]byte(expectedProofData))
	expectedProofHex := hex.EncodeToString(expectedProofHash[:])

	if expectedProofHex != proof.ProofData {
		return false
	}

	return true
}

// AttestationCircuit proves ownership of a state without revealing identity
// MVP version: Simple hash commitment
type AttestationCircuit struct {
	Owner     string
	StateHash string
	Nonce     int64
	Version   string
}

// MaxOwnerLength defines maximum owner string length
const MaxOwnerLength = 256

// MaxStateHashLength defines expected state hash length (SHA-256 hex = 64)
const MaxStateHashLength = 64

// GenerateAttestation creates an attestation proof with validation
// Returns error message in case of invalid inputs
func GenerateAttestation(owner, stateHash string, nonce int64) (string, string) {
	// Validate owner
	if strings.TrimSpace(owner) == "" {
		return "", "owner cannot be empty"
	}
	if len(owner) > MaxOwnerLength {
		return "", fmt.Sprintf("owner exceeds maximum length of %d", MaxOwnerLength)
	}

	// Validate state hash (should be 64-char hex SHA-256)
	if len(stateHash) != MaxStateHashLength {
		return "", fmt.Sprintf("stateHash must be exactly %d characters (SHA-256 hex)", MaxStateHashLength)
	}
	if _, err := hex.DecodeString(stateHash); err != nil {
		return "", fmt.Sprintf("stateHash must be valid hex: %v", err)
	}

	// Validate nonce
	if nonce < 0 {
		return "", "nonce cannot be negative"
	}

	data := fmt.Sprintf("%s:%s:%d", owner, stateHash, nonce)
	hash := sha256.Sum256([]byte(data))
	return hex.EncodeToString(hash[:]), ""
}

// VerifyAttestation verifies an attestation with comprehensive validation
func VerifyAttestation(attestation, owner, stateHash string, nonce int64) bool {
	// Validate attestation format (should be 64-char hex)
	if len(attestation) != MaxStateHashLength {
		return false
	}
	if _, err := hex.DecodeString(attestation); err != nil {
		return false
	}

	// Generate expected attestation
	expected, err := GenerateAttestation(owner, stateHash, nonce)
	if err != "" {
		return false
	}

	return attestation == expected
}
