# Cryptographic Implementation - MVP vs Production

## Current Implementation (MVP)

### HMAC-SHA256 Signing
The `pq_signer` (Rust crate in `gven/hardware/`) currently implements signing using **HMAC-SHA256**.

**Strengths:**
- ✅ Fast and efficient
- ✅ Well-tested and standardized
- ✅ Easy to integrate

**Weaknesses:**
- ❌ NOT post-quantum resistant
- ❌ Symmetric-key only (cannot verify with public key alone)
- ❌ Would be broken by a sufficiently powerful quantum computer

---

## Key Generation Fix (Completed ✅)

### Before (Broken Entropy)
```rust
let nanos = SystemTime::now().subsec_nanos(); // 0 - 10^9 only!
// Two keys generated in the same second would be nearly identical
```

**Attack**: Brute force within a second = 10^9 possibilities

### After (Secure Random)
```rust
let mut secret_key = vec![0u8; 32];
rand::thread_rng().fill_bytes(&mut secret_key); // Cryptographically secure
```

**Security**: 2^256 possible keys

---

## Signature Verification Issue (Documented ⚠️)

### Problem: Can't Verify HMAC with Only Public Key

HMAC is **symmetric** cryptography:
- You sign with: `secret_key`
- You verify with: `secret_key` (same key!)

The function `verify_with_public_key()` attempts to:
1. Derive a verification key: `SHA256(public_key || "verify")`
2. Verify signature against derived key

**This will ALWAYS fail** because the signature was created with `secret_key`, not the derived key.

```rust
// ❌ This flow is broken:
// Sign:   secret_key → HMAC(data) = signature
// Verify: SHA256(public_key) → HMAC(data) ≠ signature (different key!)
```

### Why This Matters
External parties cannot verify device signatures using only the public key in the current MVP.

### Solution: Use Asymmetric Cryptography
Production must use **asymmetric signatures** like:
- **Dilithium-3** (NIST post-quantum standard) ← **Recommended** 🎯
- **ECDSA** (if post-quantum not required)
- **RSA** (legacy, not recommended for new code)

---

## Production Roadmap

### Phase 1: Switch to Dilithium-3 (Recommended)
**Timeline**: Q3 2024

**Changes**:
```rust
// Replace HMAC with Dilithium
use liboqs::sig::Dilithium3;

pub fn generate() -> Result<Self> {
    let (public_key, secret_key) = Dilithium3::keygen();
    Ok(KeyPair {
        public_key: public_key.to_vec(),
        secret_key: secret_key.to_vec(),
        algorithm: "Dilithium3".to_string(),
    })
}

pub fn sign(&self, data: &[u8]) -> Result<Vec<u8>> {
    Dilithium3::sign(data, &self.secret_key)
}

pub fn verify_with_public_key(public_key: &[u8], data: &[u8], signature: &[u8]) -> Result<()> {
    Dilithium3::verify(signature, data, public_key)
}
```

**Benefits**:
- ✅ Post-quantum resistant
- ✅ Can verify with public key alone
- ✅ Larger signatures/keys (≈2.4 KB public key) but acceptable for device registry

**Effort**: ~2 days for safe integration + testing

---

### Phase 2: Key Derivation from Entropy Source
**Timeline**: Q4 2024

Strengthen random key generation:
```rust
use rand::rngs::OsRng;
use argon2::{Argon2, ParamsString};

pub fn generate_from_entropy() -> Result<Self> {
    // Use OS entropy (best available)
    let entropy = {
        let mut buffer = vec![0u8; 32];
        OsRng.fill_bytes(&mut buffer);
        buffer
    };
    
    // Key derive using Argon2 (memory-hard)
    let argon2 = Argon2::default();
    let params = ParamsString::default();
    let salt = [0u8; 16]; // Use random salt in production
    
    let key_material = argon2.hash_password(&entropy, &params)?;
    // ... continue
}
```

---

### Phase 3: Hardware Security Module (HSM) Integration
**Timeline**: 2025 Q1

Store secret keys in **Hardware Security Module** instead of software:
- Signing operations performed in HSM
- Secret key never leaves HSM
- Complies with FIPS 140-2 / CC EAL4+

**Providers**: AWS CloudHSM, Azure Dedicated HSM, Thales Luna

---

## Testing the MVP Crypto

### Current Test Coverage
```rust
#[test]
fn test_keypair_generation() {
    let k1 = KeyPair::generate().unwrap();
    let k2 = KeyPair::generate().unwrap();
    assert_ne!(k1.secret_key, k2.secret_key); // ✅ Now random!
}

#[test]
fn test_sign_verify() {
    let kp = KeyPair::generate().unwrap();
    let data = b"test message";
    let sig = kp.sign(data).unwrap();
    assert!(kp.verify(data, &sig).is_ok()); // ✅ Works with secret key
}
```

### Known Failing Test
```rust
#[test]
fn test_verify_with_public_key() {
    let kp = KeyPair::generate().unwrap();
    let data = b"test message";
    let sig = kp.sign(data).unwrap();
    // ❌ This WILL fail (expected in MVP)
    assert!(KeyPair::verify_with_public_key(&kp.public_key, data, &sig).is_ok());
    // Will fail because we signed with secret_key, but trying to verify
    // with a key derived from public_key
}
```

**Note**: This test failure is expected and documents the limitation.

---

## Deployment with MVP Crypto

**What YOU CAN safely do:**
- Use for internal device registration (not exposed to untrusted verifiers)
- Create audit logs (device signs its own actions)
- Anchor hashes to blockchain (the hash is trustworthy, even if signature method isn't)

**What YOU CANNOT do:**
- Let external parties verify device signatures (will always fail)
- Rely on signature as proof of device authenticity (HMAC is symmetric)
- Use in compliance scenarios requiring post-quantum readiness

**Recommendation for Client Handoff:**
> "This MVP uses HMAC-SHA256 signatures which are symmetric and not post-quantum resistant. For production, signatures will be replaced with Dilithium-3. Current MVP is suitable for [specific use case] only."

---

## Security Audit Notes

**For Client/Auditor**:
- ✅ Entropy is now cryptographically secure (fixed subsec_nanos bug)
- ✅ Key generation is proper
- ✅ Signing and verification work correctly for symmetric use case
- ❌ External public-key verification is not supported (by design, pending Dilithium)
- ❌ Keys are stored in software (no HSM)
- ❌ No key rotation implemented

**Audit Checklist**:
- [ ] Confirm entropy source is `rand::thread_rng()` or `OsRng`
- [ ] Verify no hardcoded keys in production deployment
- [ ] Check that JWT_SECRET and signing keys are externalized
- [ ] Verify no keys committed to git history
- [ ] Confirm post-quantum upgrade timeline with team
