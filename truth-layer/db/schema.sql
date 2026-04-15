-- ==================== TRUTH LAYER DATABASE SCHEMA ====================
-- Week 1: Foundation - Device Registry, Media Tracking, Verification Records

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "hstore";

-- ==================== DEVICE REGISTRY ====================
-- Stores all registered devices (phones, cameras, etc.)
CREATE TABLE devices (
    id BIGSERIAL PRIMARY KEY,
    device_id VARCHAR(64) UNIQUE NOT NULL,  -- SHA-256 hash of public key
    public_key BYTEA NOT NULL,              -- EdDSA public key (32 bytes)
    device_type VARCHAR(32) NOT NULL,       -- 'android', 'ios', 'camera', etc.
    manufacturer VARCHAR(128) NOT NULL,     -- Samsung, Apple, Canon
    model VARCHAR(128) NOT NULL,            -- Galaxy S24, iPhone 15, R5
    os_version VARCHAR(32),                 -- Android 14.0, iOS 18.1, etc.
    hardware_backed BOOLEAN DEFAULT true,   -- Has TPM 2.0 / Secure Enclave
    attestation_token TEXT,                 -- SafetyNet/DeviceCheck token
    
    registered_at TIMESTAMPTZ DEFAULT NOW(),
    last_activity TIMESTAMPTZ DEFAULT NOW(),
    status VARCHAR(32) DEFAULT 'ACTIVE',    -- ACTIVE, REVOKED, SUSPENDED
    revoked_reason TEXT,
    revoked_at TIMESTAMPTZ,
    
    metadata JSONB,                         -- Extra device info
    
    CONSTRAINT valid_status CHECK (status IN ('ACTIVE', 'REVOKED', 'SUSPENDED')),
    INDEX idx_device_status (status),
    INDEX idx_device_public_key (public_key)
);

-- ==================== MEDIA RECORDS ====================
-- Stores metadata about media files (not the actual media)
CREATE TABLE media (
    id BIGSERIAL PRIMARY KEY,
    media_hash VARCHAR(64) UNIQUE NOT NULL, -- SHA-256 hash (hex)
    media_type VARCHAR(32) NOT NULL,        -- 'image/jpeg', 'video/mp4', etc.
    size_bytes BIGINT NOT NULL,
    
    device_id VARCHAR(64) NOT NULL,
    created_at BIGINT NOT NULL,             -- Unix timestamp from device
    location JSONB,                         -- {latitude, longitude, accuracy}
    nonce VARCHAR(64) NOT NULL,             -- Prevent replay attacks
    
    signature BYTEA NOT NULL,               -- EdDSA signature
    signature_valid BOOLEAN DEFAULT false,  -- Set by verification layer
    
    ipfs_hash VARCHAR(64),                  -- IPFS content identifier
    arweave_tx VARCHAR(64),                 -- Arweave transaction ID
    
    uploaded_at TIMESTAMPTZ DEFAULT NOW(),
    verification_status VARCHAR(32) DEFAULT 'PENDING',  -- PENDING, VERIFIED, FAILED
    
    metadata JSONB,                         -- Custom metadata from SDK
    
    CONSTRAINT valid_verification CHECK (verification_status IN ('PENDING', 'VERIFIED', 'FAILED')),
    FOREIGN KEY (device_id) REFERENCES devices(device_id) ON DELETE CASCADE,
    INDEX idx_media_hash (media_hash),
    INDEX idx_media_status (verification_status),
    INDEX idx_media_device (device_id),
    INDEX idx_media_created (created_at)
);

-- ==================== VERIFICATION RECORDS ====================
-- Stores all verification attempts and ZK proofs
CREATE TABLE verifications (
    id BIGSERIAL PRIMARY KEY,
    media_hash VARCHAR(64) NOT NULL,
    device_id VARCHAR(64) NOT NULL,
    
    -- Signature verification (fast path)
    signature_verified BOOLEAN DEFAULT false,
    signature_verified_at TIMESTAMPTZ,
    signature_error TEXT,
    
    -- ZK proof generation (async)
    zk_proof_job_id UUID,
    zk_proof BYTEA,                         -- Serialized zk-SNARK proof
    zk_proof_generated_at TIMESTAMPTZ,
    zk_proof_error TEXT,
    
    -- Blockchain anchor
    blockchain_tx VARCHAR(128),             -- Arweave TX ID or Solana hash
    blockchain_verified BOOLEAN DEFAULT false,
    blockchain_verified_at TIMESTAMPTZ,
    
    -- Final result
    overall_status VARCHAR(32) DEFAULT 'PENDING',  -- PENDING, VERIFIED, FAILED
    trust_score FLOAT DEFAULT 0.0,          -- 0.0 to 1.0
    expires_at TIMESTAMPTZ,                 -- Usually 1 year from verification
    
    verified_at TIMESTAMPTZ DEFAULT NOW(),
    verifying_node VARCHAR(128),            -- Which node performed verification
    
    INDEX idx_verification_media (media_hash),
    INDEX idx_verification_status (overall_status),
    INDEX idx_verification_created (verified_at),
    INDEX idx_verification_job (zk_proof_job_id)
);

-- ==================== DEVICE REVOCATIONS ====================
-- Tracks revoked devices and reasons
CREATE TABLE revocations (
    id BIGSERIAL PRIMARY KEY,
    device_id VARCHAR(64) NOT NULL,
    reason VARCHAR(256) NOT NULL,           -- 'COMPROMISED', 'LOST', 'USER_REQUEST', etc.
    revoked_by VARCHAR(128),                -- User ID or admin
    revoked_at TIMESTAMPTZ DEFAULT NOW(),
    evidence TEXT,                          -- Description of why revoked
    
    FOREIGN KEY (device_id) REFERENCES devices(device_id) ON DELETE CASCADE,
    INDEX idx_revocation_device (device_id),
    INDEX idx_revocation_date (revoked_at)
);

-- ==================== ZK PROOF JOBS ====================
-- Tracks asynchronous ZK proof generation
CREATE TABLE zk_proof_jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    media_hash VARCHAR(64) NOT NULL,
    device_id VARCHAR(64) NOT NULL,
    
    status VARCHAR(32) DEFAULT 'QUEUED',    -- QUEUED, PROCESSING, COMPLETED, FAILED
    priority INT DEFAULT 5,                 -- 1= highest, 10= lowest
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    started_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    
    proof_result BYTEA,
    error_message TEXT,
    
    processing_time_ms BIGINT,              -- How long proof took to generate
    gpu_used BOOLEAN DEFAULT false,
    
    INDEX idx_zk_status (status),
    INDEX idx_zk_created (created_at),
    INDEX idx_zk_priority (priority)
);

-- ==================== BLOCKCHAIN ANCHORS ====================
-- Immutable record of what was anchored to blockchain
CREATE TABLE blockchain_anchors (
    id BIGSERIAL PRIMARY KEY,
    media_hash VARCHAR(64) NOT NULL,
    blockchain VARCHAR(32) NOT NULL,        -- 'arweave', 'solana', 'ethereum', etc.
    transaction_hash VARCHAR(256) NOT NULL,
    
    zk_proof_id UUID,
    timestamp BIGINT NOT NULL,              -- Unix timestamp
    block_height BIGINT,                    -- Block number on chain
    
    anchored_at TIMESTAMPTZ DEFAULT NOW(),
    confirmed BOOLEAN DEFAULT false,
    confirmed_at TIMESTAMPTZ,
    
    INDEX idx_anchor_media (media_hash),
    INDEX idx_anchor_txhash (transaction_hash),
    INDEX idx_anchor_blockchain (blockchain),
    UNIQUE (blockchain, transaction_hash)
);

-- ==================== API AUDIT LOG ====================
-- Track all verification requests for compliance
CREATE TABLE api_audit_log (
    id BIGSERIAL PRIMARY KEY,
    request_id UUID DEFAULT uuid_generate_v4(),
    endpoint VARCHAR(256) NOT NULL,
    method VARCHAR(8) NOT NULL,             -- GET, POST, etc.
    
    client_ip INET,
    user_id UUID,
    
    request_body JSONB,                     -- Sanitized (no secrets)
    response_status INT,
    response_time_ms INT,
    
    error_message TEXT,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    INDEX idx_audit_endpoint (endpoint),
    INDEX idx_audit_timestamp (created_at),
    INDEX idx_audit_user (user_id)
);

-- ==================== BILLING & METERING ====================
-- Track usage for billing (micro-transactions)
CREATE TABLE usage_meter (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    device_id VARCHAR(64),
    
    action VARCHAR(64) NOT NULL,            -- 'VERIFICATION', 'DEVICE_REGISTRATION', etc.
    quantity INT DEFAULT 1,
    unit_price NUMERIC(19, 8),              -- In USD
    total_cost NUMERIC(19, 8),
    
    payment_status VARCHAR(32) DEFAULT 'PENDING',  -- PENDING, PAID, FAILED
    payment_txid VARCHAR(128),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    paid_at TIMESTAMPTZ,
    
    INDEX idx_meter_user (user_id),
    INDEX idx_meter_action (action),
    INDEX idx_meter_timestamp (created_at)
);

-- ==================== ANALYTICS VIEWS ====================
CREATE VIEW device_statistics AS
SELECT
    devices.device_type,
    COUNT(*) as total_devices,
    COUNT(CASE WHEN status = 'ACTIVE' THEN 1 END) as active_devices,
    COUNT(CASE WHEN status = 'REVOKED' THEN 1 END) as revoked_devices,
    MAX(last_activity) as last_activity
FROM devices
GROUP BY devices.device_type;

CREATE VIEW verification_statistics AS
SELECT
    DATE_TRUNC('hour', verifications.verified_at) as hour,
    COUNT(*) as total_verifications,
    COUNT(CASE WHEN overall_status = 'VERIFIED' THEN 1 END) as successful,
    COUNT(CASE WHEN overall_status = 'FAILED' THEN 1 END) as failed,
    AVG(trust_score) as avg_trust_score
FROM verifications
GROUP BY DATE_TRUNC('hour', verifications.verified_at);

-- ==================== INDEXES FOR PERFORMANCE ====================
CREATE INDEX idx_media_device_hash ON media(device_id, media_hash);
CREATE INDEX idx_verification_media_device ON verifications(media_hash, device_id);
CREATE INDEX idx_audit_timestamp_endpoint ON api_audit_log(created_at DESC, endpoint);

-- ==================== FOREIGN KEY CONSTRAINTS ====================
ALTER TABLE media ADD CONSTRAINT fk_media_device 
    FOREIGN KEY (device_id) REFERENCES devices(device_id) ON DELETE CASCADE;

ALTER TABLE verifications ADD CONSTRAINT fk_verification_media 
    FOREIGN KEY (media_hash) REFERENCES media(media_hash) ON DELETE CASCADE;

ALTER TABLE zk_proof_jobs ADD CONSTRAINT fk_zk_media 
    FOREIGN KEY (media_hash) REFERENCES media(media_hash) ON DELETE CASCADE;

-- ==================== ROW SECURITY ====================
-- Enable Row Level Security for multi-tenancy (future)
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE verifications ENABLE ROW LEVEL SECURITY;

COMMIT;
