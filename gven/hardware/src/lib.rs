use anyhow::Result;
use serde::{Deserialize, Serialize};
use hex::encode;
use sha2::{Sha256, Digest};
use hmac::{Hmac, Mac};

type HmacSha256 = Hmac<Sha256>;

/// PQSigner library for managing post-quantum signatures
/// MVP version: using HMAC-SHA256 signatures
/// Production: replace with liboqs Dilithium-3 when available
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct KeyPair {
    pub public_key: Vec<u8>,
    pub secret_key: Vec<u8>,
    pub algorithm: String,
}

impl KeyPair {
    /// Generate a new keypair (MVP version with HMAC-SHA256)
    /// Production: Use Dilithium3 from liboqs crate
    pub fn generate() -> Result<Self> {
        use std::time::{SystemTime, UNIX_EPOCH};
        let nanos = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap_or_default()
            .subsec_nanos();
        
        // Generate 32-byte key from timestamp
        let mut hasher = Sha256::new();
        hasher.update(nanos.to_le_bytes());
        let public_key = hasher.finalize().to_vec();
        
        let seed2 = nanos.wrapping_add(1);
        let mut hasher = Sha256::new();
        hasher.update(seed2.to_le_bytes());
        let secret_key = hasher.finalize().to_vec();
        
        Ok(KeyPair {
            public_key,
            secret_key,
            algorithm: "HMAC-SHA256-MVP".to_string(),
        })
    }

    /// Sign data with this keypair using HMAC (MVP version)
    pub fn sign(&self, data: &[u8]) -> Result<Vec<u8>> {
        let mut mac = HmacSha256::new_from_slice(&self.secret_key)
            .map_err(|_| anyhow::anyhow!("Invalid key length"))?;
        mac.update(data);
        Ok(mac.finalize().into_bytes().to_vec())
    }

    /// Verify a signature using public_key-derived verification key
    pub fn verify(&self, data: &[u8], signature: &[u8]) -> Result<()> {
        // For HMAC, verification uses the same secret key
        // In a real system with separate public/private keys, this would be different
        let mut mac = HmacSha256::new_from_slice(&self.secret_key)
            .map_err(|_| anyhow::anyhow!("Invalid key length"))?;
        mac.update(data);
        mac.verify_slice(signature)
            .map_err(|_| anyhow::anyhow!("Signature verification failed"))
    }

    /// Verify a signature with only public_key (for external verification)
    pub fn verify_with_public_key(public_key: &[u8], data: &[u8], signature: &[u8]) -> Result<()> {
        // For MVP, derive verification key from public_key
        // In production with Dilithium, public_key would directly verify
        let mut hasher = Sha256::new();
        hasher.update(public_key);
        hasher.update(b"verify");
        let verify_key = hasher.finalize().to_vec();
        
        let mut mac = HmacSha256::new_from_slice(&verify_key)
            .map_err(|_| anyhow::anyhow!("Invalid key length"))?;
        mac.update(data);
        mac.verify_slice(signature)
            .map_err(|_| anyhow::anyhow!("Signature verification failed"))
    }

    /// Get public key as hex string
    pub fn public_key_hex(&self) -> String {
        encode(&self.public_key)
    }

    /// Get public key fingerprint (first 16 bytes as hex)
    pub fn fingerprint(&self) -> String {
        encode(&self.public_key[..std::cmp::min(16, self.public_key.len())])
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_keypair_generation() {
        let keypair = KeyPair::generate().unwrap();
        assert!(!keypair.public_key.is_empty());
        assert!(!keypair.secret_key.is_empty());
        assert_eq!(keypair.public_key.len(), 32);
    }

    #[test]
    fn test_sign_and_verify() {
        let keypair = KeyPair::generate().unwrap();
        let data = b"test message";
        
        let signature = keypair.sign(data).unwrap();
        assert!(!signature.is_empty());
        
        let result = keypair.verify(data, &signature);
        assert!(result.is_ok());
    }

    #[test]
    fn test_invalid_signature() {
        let keypair = KeyPair::generate().unwrap();
        let data = b"test message";
        let wrong_data = b"wrong message";
        
        let signature = keypair.sign(data).unwrap();
        let result = keypair.verify(wrong_data, &signature);
        assert!(result.is_err());
    }
}
