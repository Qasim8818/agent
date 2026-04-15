-- ClickHouse Schema for Analytics and Verification Metrics
-- Week 1: Time-series data for real-time monitoring

CREATE DATABASE IF NOT EXISTS truth_analytics;
USE truth_analytics;

-- ==================== VERIFICATION EVENTS ====================
-- High-volume time-series data for verification metrics
CREATE TABLE verification_events (
    timestamp DateTime DEFAULT now(),
    event_type Enum('signature_verified', 'zk_proof_generated', 'blockchain_anchored', 'verification_failed') DEFAULT 'verification_failed',
    
    media_hash String,
    device_id String,
    blockchain String DEFAULT '',
    
    processing_time_ms UInt32,
    trust_score Float32,
    
    error_code String DEFAULT '',
    
    INDEX idx_timestamp (timestamp) TYPE minmax GRANULARITY 1,
    INDEX idx_device (device_id) TYPE set(1000) GRANULARITY 1,
    INDEX idx_event (event_type) TYPE set(100) GRANULARITY 1
)
ENGINE = MergeTree()
ORDER BY (timestamp, event_type, device_id)
PARTITION BY toYYYYMMDD(timestamp);

-- ==================== PERFORMANCE METRICS ====================
CREATE TABLE performance_metrics (
    timestamp DateTime DEFAULT now(),
    metric_name Enum('api_latency', 'zk_proof_time', 'db_query_time', 'blockchain_confirmation_time') DEFAULT 'api_latency',
    
    value_ms Float32,
    percentile UInt8,  -- 50, 95, 99, 99.9
    
    service String,    -- 'api', 'zk-engine', 'postgres', 'arweave'
    instance String DEFAULT '',
    
    INDEX idx_timestamp (timestamp) TYPE minmax GRANULARITY 1,
    INDEX idx_metric (metric_name) TYPE set(100) GRANULARITY 1
)
ENGINE = MergeTree()
ORDER BY (timestamp, metric_name, service)
PARTITION BY toYYYYMM(timestamp);

-- ==================== ERROR LOG ====================
CREATE TABLE error_logs (
    timestamp DateTime DEFAULT now(),
    error_code String,
    error_message String,
    
    service String,
    endpoint String DEFAULT '',
    
    severity Enum('info', 'warning', 'error', 'critical') DEFAULT 'error',
    
    user_id String DEFAULT '',
    request_id String DEFAULT '',
    
    INDEX idx_timestamp (timestamp) TYPE minmax GRANULARITY 1,
    INDEX idx_service (service) TYPE set(100) GRANULARITY 1,
    INDEX idx_severity (severity) TYPE set(10) GRANULARITY 1
)
ENGINE = MergeTree()
ORDER BY (timestamp, service, severity)
PARTITION BY toYYYYMMDD(timestamp);

-- ==================== DEVICE ACTIVITY ====================
CREATE TABLE device_activity (
    timestamp DateTime DEFAULT now(),
    device_id String,
    
    activity_type Enum('media_capture', 'verification_requested', 'signature_failed', 'device_revoked') DEFAULT 'media_capture',
    
    location GeoPoint,  -- (latitude, longitude)
    
    metadata String DEFAULT '',
    
    INDEX idx_device (device_id) TYPE set(10000) GRANULARITY 1,
    INDEX idx_timestamp (timestamp) TYPE minmax GRANULARITY 1
)
ENGINE = MergeTree()
ORDER BY (device_id, timestamp)
PARTITION BY toYYYYMMDD(timestamp);

-- ==================== BLOCKCHAIN ANCHOR EVENTS ====================
CREATE TABLE blockchain_anchors_events (
    timestamp DateTime DEFAULT now(),
    event_type Enum('submission', 'confirmation', 'failure', 'timeout') DEFAULT 'submission',
    
    blockchain String,         -- 'arweave', 'solana', etc.
    transaction_hash String,
    
    confirmation_time_seconds UInt32 DEFAULT 0,
    fee_usd Decimal(19, 8),
    
    INDEX idx_blockchain (blockchain) TYPE set(10) GRANULARITY 1,
    INDEX idx_timestamp (timestamp) TYPE minmax GRANULARITY 1
)
ENGINE = MergeTree()
ORDER BY (timestamp, blockchain)
PARTITION BY toYYYYMMDD(timestamp);

-- ==================== AGGREGATED HOURLY STATS ====================
CREATE TABLE hourly_stats (
    hour DateTime,
    
    total_verifications UInt32,
    successful_verifications UInt32,
    failed_verifications UInt32,
    
    unique_devices UInt32,
    unique_media_hashes UInt32,
    
    avg_trust_score Float32,
    avg_processing_time_ms UInt32,
    
    blockchain_anchors_count UInt32,
    zk_proofs_generated UInt32,
    
    PRIMARY KEY (hour)
)
ENGINE = SummingMergeTree()
ORDER BY hour
PARTITION BY toYYYYMM(hour);

-- ==================== MATERIALIZED VIEWS ====================
CREATE MATERIALIZED VIEW hourly_stats_mv TO hourly_stats AS
SELECT
    toStartOfHour(timestamp) as hour,
    COUNT(*) as total_verifications,
    SUM(event_type = 'signature_verified') as successful_verifications,
    SUM(event_type = 'verification_failed') as failed_verifications,
    uniq(device_id) as unique_devices,
    uniq(media_hash) as unique_media_hashes,
    avgIf(trust_score, trust_score > 0) as avg_trust_score,
    avg(processing_time_ms) as avg_processing_time_ms,
    0 as blockchain_anchors_count,
    SUM(event_type = 'zk_proof_generated') as zk_proofs_generated
FROM verification_events
GROUP BY toStartOfHour(timestamp);
