use anyhow::{Context, Result};
use std::fs;
use hex::encode;
use sha2::{Sha256, Digest};

mod tpm;
pub mod lib;

use lib::KeyPair;

fn main() -> Result<()> {
    let args: Vec<String> = std::env::args().collect();
    
    if args.len() < 2 {
        eprintln!("Usage: pq_signer <file_to_sign> [--verify] [--output <path>]");
        eprintln!("\nExamples:");
        eprintln!("  pq_signer data.json                    # Sign and save to signature.bin");
        eprintln!("  pq_signer data.json --verify           # Verify signature");
        eprintln!("  pq_signer data.json --output sig.bin   # Sign to custom path");
        std::process::exit(1);
    }

    let file_to_sign = &args[1];
    let verify_mode = args.contains(&"--verify".to_string());
    let mut output_path = "signature.bin".to_string();
    
    if let Some(idx) = args.iter().position(|x| x == "--output") {
        if idx + 1 < args.len() {
            output_path = args[idx + 1].clone();
        }
    }

    if verify_mode {
        verify_signature(file_to_sign, &output_path)?;
    } else {
        sign_file(file_to_sign, &output_path)?;
    }

    Ok(())
}

/// Sign a file using HMAC-SHA256 based signatures (MVP version)
/// Production: Replace with Dilithium3 when liboqs is available
fn sign_file(file_path: &str, output_path: &str) -> Result<()> {
    println!("[*] PQ Signer v0.1.0 - HMAC-SHA256 Signatures (MVP)");
    println!("[*] File to sign: {}", file_path);

    // Read file
    let data = fs::read(file_path)
        .with_context(|| format!("Failed to read file: {}", file_path))?;
    println!("[✓] Read {} bytes", data.len());

    // Compute file hash
    let mut hasher = Sha256::new();
    hasher.update(&data);
    let file_hash = encode(hasher.finalize());
    println!("[✓] SHA-256 hash: {}", &file_hash[..16]);

    // Generate keypair
    println!("[*] Generating keypair...");
    let keypair = KeyPair::generate()
        .context("Failed to generate keypair")?;
    println!("[✓] Keypair generated");
    println!("    Public key size: {} bytes", keypair.public_key.len());
    println!("    Secret key size: {} bytes", keypair.secret_key.len());

    // Sign the data
    println!("[*] Signing data...");
    let signature = keypair.sign(&data)
        .context("Failed to sign data")?;
    println!("[✓] Signature generated");
    println!("    Signature size: {} bytes", signature.len());
    println!("    Algorithm: HMAC-SHA256 MVP (upgrade to Dilithium3 post-quantum)");

    // Verify signature (sanity check)
    println!("[*] Verifying signature (sanity check)...");
    keypair.verify(&data, &signature)
        .context("Signature verification failed")?;
    println!("[✓] Signature verified");

    // Save signature
    fs::write(output_path, &signature)
        .with_context(|| format!("Failed to write signature to {}", output_path))?;
    println!("[✓] Signature saved to: {}", output_path);

    // Save keypair (both public and secret) as JSON for verification later
    let keypair_path = output_path.replace(".bin", ".key.json");
    let keypair_json = serde_json::to_string(&keypair)
        .context("Failed to serialize keypair")?;
    fs::write(&keypair_path, keypair_json)
        .with_context(|| format!("Failed to write keypair to {}", keypair_path))?;
    println!("[✓] Keypair saved to: {}", keypair_path);

    // Save public key separately for reference
    let pubkey_path = output_path.replace(".bin", ".pub");
    fs::write(&pubkey_path, &keypair.public_key)
        .with_context(|| format!("Failed to write public key to {}", pubkey_path))?;
    println!("[✓] Public key saved to: {}", pubkey_path);

    // Save fingerprint
    let fingerprint_path = output_path.replace(".bin", ".fingerprint");
    fs::write(&fingerprint_path, keypair.fingerprint())
        .with_context(|| format!("Failed to write fingerprint to {}", fingerprint_path))?;
    println!("[✓] Key fingerprint saved to: {}", fingerprint_path);

    println!("\n[SUCCESS] File signed successfully");
    println!("  Original file: {}", file_path);
    println!("  Signature:     {}", output_path);
    println!("  Keypair:       {}", keypair_path);
    println!("  Public key:    {}", pubkey_path);
    println!("  Fingerprint:   {}", keypair.fingerprint());

    Ok(())
}

/// Verify a signature
fn verify_signature(file_path: &str, sig_path: &str) -> Result<()> {
    println!("[*] Verifying signature...");

    // Read file
    let data = fs::read(file_path)
        .with_context(|| format!("Failed to read file: {}", file_path))?;
    println!("[✓] Read file: {} bytes", data.len());

    // Read signature
    let sig_data = fs::read(sig_path)
        .with_context(|| format!("Failed to read signature: {}", sig_path))?;
    
    // Read keypair from JSON
    let keypair_path = sig_path.replace(".bin", ".key.json");
    let keypair_json = fs::read_to_string(&keypair_path)
        .with_context(|| format!("Failed to read keypair: {}", keypair_path))?;
    let keypair: KeyPair = serde_json::from_str(&keypair_json)
        .context("Failed to parse keypair JSON")?;

    // Verify
    match keypair.verify(&data, &sig_data) {
        Ok(_) => {
            println!("[✓] Signature is VALID");
            println!("    Key fingerprint: {}", keypair.fingerprint());
            Ok(())
        }
        Err(e) => {
            println!("[✗] Signature is INVALID: {:?}", e);
            Err(e)
        }
    }
}
