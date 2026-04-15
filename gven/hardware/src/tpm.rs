use anyhow::{Context, Result};
use std::process::Command;

/// TPM 2.0 utilities for hardware-rooted keys
pub struct TPMContext;

impl TPMContext {
    /// Check if TPM is available on the system
    pub fn is_available() -> bool {
        Command::new("tpm2_getcap")
            .arg("handles-persistent")
            .output()
            .map(|output| output.status.success())
            .unwrap_or(false)
    }

    /// Get TPM version
    pub fn get_version() -> Result<String> {
        let output = Command::new("tpm2_getcap")
            .arg("properties-fixed")
            .output()
            .context("Failed to execute tpm2_getcap")?;

        if output.status.success() {
            Ok(String::from_utf8_lossy(&output.stdout).to_string())
        } else {
            Err(anyhow::anyhow!("tpm2_getcap failed"))
        }
    }

    /// List persistent handles
    pub fn list_persistent_keys() -> Result<Vec<String>> {
        let output = Command::new("tpm2_getcap")
            .arg("handles-persistent")
            .output()
            .context("Failed to list TPM handles")?;

        if output.status.success() {
            let stdout = String::from_utf8_lossy(&output.stdout);
            let handles: Vec<String> = stdout
                .lines()
                .filter(|line| line.contains("0x"))
                .map(|line| line.trim().to_string())
                .collect();
            Ok(handles)
        } else {
            Ok(Vec::new())
        }
    }

    /// Create a primary key in TPM (for MVP, this is documentation)
    /// In real implementation, this would be called once during setup:
    /// 
    /// ```bash
    /// tpm2_createprimary -C o -g sha256 -G rsa -c primary.ctx
    /// tpm2_create -C primary.ctx -g sha256 -G rsa -u key.pub -r key.priv -c key.ctx
    /// tpm2_evictcontrol -C o -c key.ctx 0x81000001
    /// ```
    pub fn create_persistent_key() -> Result<()> {
        println!("[*] TPM setup instructions:");
        println!("    1. Create primary: tpm2_createprimary -C o -g sha256 -G rsa -c primary.ctx");
        println!("    2. Create key:     tpm2_create -C primary.ctx -g sha256 -G rsa -u key.pub -r key.priv");
        println!("    3. Persist key:    tpm2_evictcontrol -C o -c key.ctx 0x81000001");
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_tpm_detection() {
        // This will pass on systems with TPM2, skip on others
        if TPMContext::is_available() {
            println!("✓ TPM 2.0 detected");
        } else {
            println!("⚠ TPM 2.0 not available (using software fallback)");
        }
    }
}
