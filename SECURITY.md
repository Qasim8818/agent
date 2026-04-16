# Security Policy

## Supported Versions

| Version | Supported | Status |
|---------|-----------|--------|
| 1.x     | ✅ Yes    | Active |
| 0.x     | ❌ No     | End of Life |

## Reporting Security Vulnerabilities

**Do NOT open public GitHub issues for security vulnerabilities.**

Instead, please report security issues privately to: **security@truth-layer.dev**

Include the following information:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

We will acknowledge receipt within 48 hours and provide updates every 7 days. We appreciate responsible disclosure and will credit reporters appropriately (unless requested otherwise).

---

## Security Best Practices

### Authentication & Authorization
- ✅ All API endpoints require authentication (JWT or API Key)
- ✅ Refresh tokens are rotated on each use
- ✅ JWT tokens expire after 24 hours
- ✅ Rate limiting enforced (100 req/min per API key)
- ✅ Role-based access control (RBAC) implemented

### Data Protection
- ✅ All data encrypted in transit (TLS 1.2+)
- ✅ Sensitive data encrypted at rest (AES-256)
- ✅ Database passwords externalized via environment variables
- ✅ API keys hashed before storage (SHA-256)
- ✅ No secrets committed to version control

### Infrastructure
- ✅ Security headers enabled (X-Frame-Options, CSP, etc.)
- ✅ CORS restricted to whitelisted origins
- ✅ SQL injection prevention via parameterized queries
- ✅ CSRF tokens on state-changing operations
- ✅ Input validation on all endpoints

### Monitoring & Logging
- ✅ All authentication attempts logged
- ✅ All API calls audited with timestamp, IP, endpoint
- ✅ Failed auth attempts trigger alerts (>5 per minute)
- ✅ Security events logged to persistent storage
- ✅ Log retention: 90 days minimum

### Dependencies
- ✅ Dependencies scanned for vulnerabilities (npm audit, safety)
- ✅ Security patches applied within 7 days
- ✅ No dev dependencies in production images
- ✅ Minimal attack surface (only required packages)

### Cryptography
- ✅ Post-quantum ready (Dilithium-3 roadmap for Q3 2024)
- ✅ Cryptographically secure random generation (OsRng)
- ✅ No hardcoded cryptographic keys
- ✅ Key rotation policy documented

---

## Security Checklist for Deployment

### Pre-Production
- [ ] All secrets rotated from defaults
- [ ] HTTPS enabled on all endpoints
- [ ] JWT_SECRET is 32+ random characters
- [ ] Database password is 16+ characters with mixed character types
- [ ] API rate limiting configured
- [ ] CORS whitelist updated with production domain

### Infrastructure
- [ ] Firewall rules: only port 443 (HTTPS) exposed
- [ ] Security Group: VPN/Bastion access only for SSH
- [ ] Backups encrypted and stored off-site
- [ ] Disaster recovery plan documented
- [ ] Monitoring/alerting configured

### Operations
- [ ] Security team trained on incident response
- [ ] Incident response playbook documented
- [ ] On-call rotation established
- [ ] Log aggregation configured (CloudWatch, DataDog, etc.)
- [ ] Automated security scanning enabled

---

## Known Security Limitations (MVP)

### Cryptography
- **Current**: HMAC-SHA256 (symmetric, not post-quantum resistant)
- **Production Plan**: Dilithium-3 by Q3 2024
- **Impact**: External systems cannot verify signatures with public key alone

### TPM Attestation
- **Current**: Stubbed validation (only checks certificate length)
- **Production Plan**: Full certificate chain and signature validation
- **Impact**: Device attestation not cryptographically verified

### ZK Proofs
- **Current**: Stubbed with random bytes
- **Production Plan**: Real Groth16 proof generation via Rust engine
- **Impact**: Proofs are not cryptographically sound

These limitations are **clearly marked in code and documentation**. Production deployment requires addressing all three.

---

## Security Audit

This codebase underwent a comprehensive security audit on April 2024.

**Report**: See [AUDIT_REMEDIATION_STATUS.md](../AUDIT_REMEDIATION_STATUS.md)

**Results**:
- ✅ Deployment blockers: Fixed
- ✅ Critical security issues: Fixed/Documented
- ⚠️ MVP limitations: Documented with roadmap
- ✅ Code quality: Improved to 7/10

---

## Security Headers

### Default Security Headers
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### CORS Configuration
```
Access-Control-Allow-Origin: https://app.truth-layer.dev
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Max-Age: 3600
Access-Control-Allow-Credentials: true
```

---

## Compliance

This project aims for compliance with:
- ✅ OWASP Top 10
- ✅ NIST Cybersecurity Framework
- 🚧 SOC 2 (in progress)
- 🚧 ISO 27001 (planned for 2024)

---

## Contact

**Security**: [security@truth-layer.dev](mailto:security@truth-layer.dev)  
**General Questions**: [hello@truth-layer.dev](mailto:hello@truth-layer.dev)

---

**Last Updated**: April 16, 2024  
**Next Review**: July 16, 2024
