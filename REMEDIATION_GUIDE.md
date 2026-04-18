# ⚡ CRITICAL BUGS: REMEDIATION GUIDE

## Fix #1: Double Prefix Bug (5 minutes)

### Problem
Routes are double-prefixed: `/api/v1/api/v1/...` instead of `/api/v1/...`

### Root Cause
- `main.ts` sets global prefix: `app.setGlobalPrefix('api/v1')`
- Controllers also have `@Controller('api/v1/...')`
- Result: prefix applied twice

### Solution
Remove `'api/v1'` from all controller decorators:

**File: `truth-layer/api/src/features/verification/verification.controller.ts`**
```typescript
// BEFORE
@Controller('api/v1/verification')

// AFTER
@Controller('verification')
```

**File: `truth-layer/api/src/features/media/media.controller.ts`**
```typescript
// BEFORE
@Controller('api/v1/media')

// AFTER
@Controller('media')
```

**File: `truth-layer/api/src/features/blockchain/blockchain.controller.ts`**
```typescript
// BEFORE
@Controller('api/v1/blockchain')

// AFTER
@Controller('blockchain')
```

**File: `truth-layer/api/src/features/device/device.controller.ts`** (if exists)
```typescript
// BEFORE
@Controller('api/v1/device')

// AFTER
@Controller('device')
```

### Verification
```bash
cd truth-layer/api
npm run start:dev
# Test endpoint:
curl http://localhost:3000/api/v1/health
# Should return 200 (not 404)
```

---

## Fix #2: Prisma `media_hash` Field (10 minutes)

### Problem
`ZKProofJob.create()` doesn't provide required `media_hash` field.

### Root Cause
- Prisma schema marks `media_hash` as required (no default)
- `verification.service.ts` doesn't pass it
- Prisma validation fails

### Solution

**Option A: Make field optional** (quick, recommended for MVP)

File: `truth-layer/api/prisma/schema.prisma`
```prisma
// BEFORE (line ~112)
media_hash      String   @db.VarChar(128)

// AFTER
media_hash      String?  @db.VarChar(128)
```

Then:
```bash
cd truth-layer/api
npx prisma db push
npx prisma generate
```

**Option B: Provide value in service** (if `media_hash` should always be set)

File: `truth-layer/api/src/features/verification/verification.service.ts` (line ~51)

```typescript
// BEFORE
const verification = await this.prisma.zkProofJob.create({
  data: {
    proof_id: verificationId,
    device_id: dto.deviceId,
    proof_type: dto.proofType,
    attestation_data: dto.attestationData,
    status: 'pending',
    created_at: new Date(),
  },
});

// AFTER
const verification = await this.prisma.zkProofJob.create({
  data: {
    proof_id: verificationId,
    device_id: dto.deviceId,
    media_hash: crypto.createHash('sha256')
      .update(dto.attestationData)
      .digest('hex')
      .substring(0, 128),
    proof_type: dto.proofType,
    attestation_data: dto.attestationData,
    status: 'pending',
    created_at: new Date(),
  },
});
```

### Verification
```bash
cd truth-layer/api
npm run test -- verification.service
# Or start the app and POST to /api/v1/verification/generate-proof
```

---

## Fix #3: BullModule Configuration (10 minutes)

### Problem
`VerificationService` injects `@InjectQueue('zk-proofs')` but BullModule is not configured.

### Root Cause
- `app.module.ts` imports are missing `BullModule.forRoot()` and `BullModule.registerQueue()`
- NestJS dependency injection cannot resolve the queue

### Solution

File: `truth-layer/api/src/app.module.ts`

**Step 1: Add import at top**
```typescript
import { BullModule } from '@nestjs/bullmq';
```

**Step 2: Add to `imports` array** (after RedisModule, before AuthModule)

```typescript
@Module({
  imports: [
    ConfigModule.forRoot({ ... }),
    LoggerModule,
    DatabaseModule,
    RedisModule,
    
    // ✅ ADD THIS SECTION:
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'redis',  // Use 'redis' in Docker
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
    }),
    BullModule.registerQueue(
      { name: 'zk-proofs' },
      { name: 'device-proofs' },  // Optional: other queues
    ),
    
    // Rest of modules:
    AuthModule,
    HealthModule,
    DeviceModule,
    MediaModule,
    VerificationModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { ... }
```

**Step 3: Update `VerificationModule` to import BullModule**

File: `truth-layer/api/src/features/verification/verification.module.ts`

```typescript
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue(
      { name: 'zk-proofs' },  // Must match the queue name in AppModule
    ),
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
})
export class VerificationModule {}
```

### Verification
```bash
cd truth-layer/api
npm run start:dev
# Should start without dependency injection errors
# Check logs for: "VerificationService: Queue 'zk-proofs' injected"
```

---

## Fix #4: ZK Engine Network Binding (5 minutes)

### Problem
ZK engine binds to `localhost` (127.0.0.1) but needs to be reachable from API container.

### Root Cause
- Default Rust/gRPC binding is `127.0.0.1:50051` (localhost only)
- Docker network cannot cross from `truth-api` container to `127.0.0.1`
- NestJS gRPC calls will timeout after 120 seconds

### Solution

File: `truth-layer/zk-engine/Dockerfile`

```dockerfile
# BEFORE
CMD ["/app/zk-engine"]

# AFTER
# Pass environment variable to bind to 0.0.0.0 instead of 127.0.0.1
ENV BIND_ADDRESS=0.0.0.0:50051
CMD ["/app/zk-engine", "--bind=${BIND_ADDRESS}"]

# OR if the binary doesn't support flags, add to entrypoint
ENTRYPOINT ["/bin/sh", "-c"]
CMD ["exec /app/zk-engine --listen 0.0.0.0:50051"]
```

**OR in Rust source** (if you have control):

File: `truth-layer/zk-engine/src/main.rs`
```rust
// BEFORE
let listener = tokio::net::TcpListener::bind("127.0.0.1:50051").await?;

// AFTER
let listener = tokio::net::TcpListener::bind("0.0.0.0:50051").await?;
```

**Update docker-compose.yml to verify network:**
```yaml
zk-engine:
  build:
    context: ./zk-engine
    dockerfile: Dockerfile
  container_name: truth-zk-engine
  environment:
    BIND_ADDRESS: 0.0.0.0:50051  # Explicit binding
    RUST_LOG: info
  ports:
    - "50051:50051"
  networks:
    - truth_network
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost:50051/health"]
    interval: 10s
    timeout: 5s
    retries: 3
```

### Verification
```bash
docker-compose up -d zk-engine
docker exec truth-zk-engine netstat -tlnp | grep 50051
# Should show: 0.0.0.0:50051 (not 127.0.0.1:50051)

# Test from API container
docker exec truth-api curl http://zk-engine:50051/health
# Should return 200 (or valid gRPC response)
```

---

## Fix #5: Rust Compilation Error (10 minutes)

### Problem
`cargo build --release` fails in hardware module.

### Root Cause
Likely duplicate `mod` declaration in `gven/hardware/src/` files.

### Solution

**Step 1: Identify the error**
```bash
cd gven/hardware
cargo build --release 2>&1 | head -100
```

**Step 2: Common fixes**

**Error: "item already defined"**
```rust
// BEFORE (gven/hardware/src/main.rs or lib.rs)
pub mod proto;
pub mod proto;  // ← Duplicate!

// AFTER
pub mod proto;  // Keep one, remove duplicate
```

**Error: "module `xyz` not found"**
```rust
// BEFORE
mod tpm;
mod tpm;  // ← Duplicate!

// AFTER
mod tpm;
```

**Error: "file not found for module"**
```rust
// If main.rs declares:
mod proto;

// But there's no proto.rs or proto/ directory:
// Create proto.rs or proto/mod.rs
```

**Step 3: Check module exports**

File: `gven/hardware/src/main.rs`
```rust
use anyhow::{Context, Result};
use std::fs;
use hex::encode;
use sha2::{Sha256, Digest};

mod tpm;      // ← Declare once
pub mod lib;  // ← Declare once

use lib::KeyPair;  // ← Import public items

fn main() -> Result<()> {
    // ...
}
```

If `proto` module is needed:
```rust
pub mod proto {
    // Or reference from lib.rs if it re-exports
}
```

**Step 4: Rebuild**
```bash
cd gven/hardware
cargo clean
cargo build --release

# Check for new errors
cargo build --release 2>&1 | grep -i error
```

### Verification
```bash
cd gven/hardware
cargo build --release
# Should complete without errors
ls -la target/release/pq_signer
# Binary should exist
```

---

## FULL REMEDIATION CHECKLIST

### Phase 1: Critical Blockers (30–40 minutes total)

- [ ] **Fix #1:** Remove 'api/v1' from controller decorators (5 min)
  - [ ] verification.controller.ts
  - [ ] media.controller.ts
  - [ ] blockchain.controller.ts
  - [ ] device.controller.ts

- [ ] **Fix #2:** Handle `media_hash` field (10 min)
  - [ ] Make field optional in Prisma schema OR
  - [ ] Provide value in verification.service.ts
  - [ ] Run `npx prisma db push && npx prisma generate`

- [ ] **Fix #3:** Configure BullModule (10 min)
  - [ ] Add BullModule import to app.module.ts
  - [ ] Configure BullModule.forRoot() with Redis connection
  - [ ] Register 'zk-proofs' queue
  - [ ] Update verification.module.ts to import BullModule

- [ ] **Fix #4:** ZK engine binding (5 min)
  - [ ] Update zk-engine Dockerfile to bind 0.0.0.0:50051
  - [ ] Update docker-compose.yml environment if needed

- [ ] **Fix #5:** Rust compile error (10 min)
  - [ ] Run `cargo build --release` in gven/hardware/
  - [ ] Fix duplicate mod declarations
  - [ ] Verify binary builds successfully

### Phase 2: Testing

- [ ] Start API: `npm run start:prod`
- [ ] Test health endpoint: `curl http://localhost:3000/api/v1/health`
- [ ] Register device: `POST /api/v1/device/register`
- [ ] Upload media: `POST /api/v1/media/upload`
- [ ] Generate proof: `POST /api/v1/verification/generate-proof`
- [ ] Check docker-compose logs for errors: `docker-compose logs -f`

### Phase 3: Documentation

- [ ] Update DEPLOYMENT_CHECKLIST.md with fixes
- [ ] Update README.md with "Known Limitations"
- [ ] Update CRYPTO_FEATURES_ROADMAP.md

---

## EXPECTED OUTCOMES AFTER FIXES

| Endpoint | Before | After |
|----------|--------|-------|
| GET /api/v1/health | 404 | 200 ✅ |
| POST /api/v1/device/register | 404 | 201 ✅ |
| POST /api/v1/media/upload | 404 | 201 ✅ |
| POST /api/v1/verification/generate-proof | 500 (Prisma error) | 202 (queued) ✅ |
| App startup | Fails (missing BullModule) | Succeeds ✅ |

---

## NEXT STEPS (Phase 2: Real Implementation)

Once all 5 blockers are fixed, you have a working staging environment. Then:

1. **Implement Real ZK Proofs** (3-5 days)
   - Set up gRPC client in verification.service.ts
   - Call zk-engine service instead of setTimeout
   
2. **Implement TPM Validation** (2-3 days)
   - Integrate `tpm2-tss` or hardware attestation service
   - Parse X.509 certificates
   
3. **Implement File Signatures** (1 day)
   - Use `crypto.verify()` with device's TPM public key
   - Validate signature algorithm
   
4. **Implement Blockchain Anchoring** (3-5 days)
   - Integrate @bundlr-network/client for Arweave
   - Integrate @solana/web3.js for Solana
   - Real onchain transaction creation

**Total Phase 2 Timeline: 2-3 weeks to production-ready**

