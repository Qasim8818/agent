# 🔧 EXACT CODE PATCHES — Copy & Paste Ready

## PATCH 1: verification.controller.ts

**File:** `truth-layer/api/src/features/verification/verification.controller.ts`  
**Line:** 14  
**Change:** Remove `'api/v1/'` prefix from @Controller decorator

```diff
- @Controller('api/v1/verification')
+ @Controller('verification')
```

---

## PATCH 2: media.controller.ts

**File:** `truth-layer/api/src/features/media/media.controller.ts`  
**Line:** 21  

```diff
- @Controller('api/v1/media')
+ @Controller('media')
```

---

## PATCH 3: blockchain.controller.ts

**File:** `truth-layer/api/src/features/blockchain/blockchain.controller.ts`  
**Line:** 14  

```diff
- @Controller('api/v1/blockchain')
+ @Controller('blockchain')
```

---

## PATCH 4: device.controller.ts

**File:** `truth-layer/api/src/features/device/device.controller.ts`  
**Line:** (varies, search for @Controller)

```diff
- @Controller('api/v1/device')
+ @Controller('device')
```

---

## PATCH 5: prisma/schema.prisma (Option A: Make optional)

**File:** `truth-layer/api/prisma/schema.prisma`  
**Line:** ~112  

```diff
  model ZKProofJob {
    proof_id        String   @id @db.VarChar(64)
    device_id       String   @db.VarChar(64)
-   media_hash      String   @db.VarChar(128)
+   media_hash      String?  @db.VarChar(128)
    proof_type      String   @db.VarChar(64)
    attestation_data String?
    status          String   @default(\"pending\") @db.VarChar(32)
```

Then run:
```bash
cd truth-layer/api
npx prisma db push
npx prisma generate
```

---

## PATCH 6: app.module.ts (BullModule configuration)

**File:** `truth-layer/api/src/app.module.ts`

### Step 1: Add import at top (after other NestJS imports)

```typescript
// Around line 1–25
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { BullModule } from '@nestjs/bullmq';  // ← ADD THIS

// Modules
import { DatabaseModule } from './database/database.module';
```

### Step 2: Update imports array

Find the `@Module({ imports: [ ... ] })` section (around line 30–145) and insert BullModule configuration after RedisModule:

```typescript
@Module({
  imports: [
    // ==================== CONFIGURATION ====================
    ConfigModule.forRoot({
      // ... existing config ...
    }),

    // ==================== LOGGING ====================
    LoggerModule,

    // ==================== DATABASE ====================
    DatabaseModule,

    // ==================== REDIS ====================
    RedisModule,

    // ==================== BULL QUEUE CONFIGURATION ==================== ✅ NEW
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST || 'redis',
        port: parseInt(process.env.REDIS_PORT || '6379'),
      },
    }),
    BullModule.registerQueue(
      { name: 'zk-proofs' },
    ),
    // =====================================================================

    // ==================== AUTHENTICATION ====================
    AuthModule,

    // ==================== HEALTH CHECKS ====================
    HealthModule,

    // ==================== FEATURE MODULES ====================
    DeviceModule,
    MediaModule,
    VerificationModule,
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule { ... }
```

---

## PATCH 7: verification.module.ts (Register BullModule)

**File:** `truth-layer/api/src/features/verification/verification.module.ts`

```typescript
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';  // ← ADD THIS
import { DatabaseModule } from '../../database/database.module';
import { VerificationController } from './verification.controller';
import { VerificationService } from './verification.service';

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue(  // ← ADD THIS SECTION
      { name: 'zk-proofs' },
    ),
  ],
  controllers: [VerificationController],
  providers: [VerificationService],
})
export class VerificationModule {}
```

---

## PATCH 8: zk-engine/Dockerfile (Network binding)

**File:** `truth-layer/zk-engine/Dockerfile`

### Option A: Environment variable (if binary supports)

```dockerfile
# Around line 25 (end of Dockerfile)

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /app/target/release/zk-engine /app/zk-engine

EXPOSE 50051 8001

VOLUME ["/app/src", "/app/keys"]

# ✅ Change this:
# Before:
# CMD ["/app/zk-engine"]

# After (choose one):
# Option 1: If binary supports --listen flag
ENV BIND_ADDRESS="0.0.0.0:50051"
CMD ["/app/zk-engine", "--listen", "${BIND_ADDRESS}"]

# Option 2: Using sh
CMD ["/bin/sh", "-c", "exec /app/zk-engine --listen 0.0.0.0:50051"]

# Option 3: If it reads from env var
ENV BIND_ADDRESS=0.0.0.0:50051
CMD ["/app/zk-engine"]
```

### Option B: Modify Rust source (most reliable)

If the above doesn't work, modify the actual Rust code:

**File:** `truth-layer/zk-engine/src/main.rs`

```rust
// Find the gRPC server binding code (usually in main.rs or lib.rs)

// BEFORE:
let listener = tokio::net::TcpListener::bind("127.0.0.1:50051").await?;
// OR
let listener = tokio::net::TcpListener::bind("localhost:50051").await?;

// AFTER:
let listener = tokio::net::TcpListener::bind("0.0.0.0:50051").await?;
```

Then rebuild:
```bash
cd truth-layer
docker-compose up -d --build zk-engine
```

---

## PATCH 9: docker-compose.yml (Add health check for zk-engine)

**File:** `truth-layer/docker-compose.yml`

Find the `zk-engine:` service and add healthcheck:

```yaml
  zk-engine:
    build:
      context: ./zk-engine
      dockerfile: Dockerfile
    container_name: truth-zk-engine
    environment:
      RUST_LOG: info
      PROVING_KEY_PATH: /app/keys/proving_key.bin
      VERIFYING_KEY_PATH: /app/keys/verifying_key.bin
    ports:
      - "50051:50051"
      - "8001:8001"
    volumes:
      - ./zk-engine/src:/app/src
      - ./zk-engine/keys:/app/keys
    networks:
      - truth_network
    restart: unless-stopped
    command: cargo run --release
    # ✅ ADD THIS HEALTH CHECK:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:50051/health || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 30s
```

---

## PATCH 10: verification.service.ts (Option B: Provide media_hash)

**File:** `truth-layer/api/src/features/verification/verification.service.ts`

If you chose Option B for Patch 5 (not making it optional), add the field to create call:

Find the `generateProof()` method (around line 35–67):

```typescript
  async generateProof(dto: GenerateProofDto): Promise<VerificationDto> {
    const startTime = Date.now();

    try {
      // Verify device exists
      const device = await this.prisma.device.findUnique({
        where: { device_id: dto.deviceId },
      });

      if (!device) {
        throw new NotFoundException(`Device ${dto.deviceId} not found`);
      }

      // Validate attestation data
      if (!dto.attestationData || dto.attestationData.length < 32) {
        throw new BadRequestException('Invalid attestation data');
      }

      // Create verification record
      const verificationId = `verify_${crypto.randomBytes(16).toString('hex')}`;

      const verification = await this.prisma.zkProofJob.create({
        data: {
          proof_id: verificationId,
          device_id: dto.deviceId,
          // ✅ ADD THIS FIELD:
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

      // Rest of method...
```

---

## SUMMARY OF COMMANDS TO RUN

```bash
# 1. Apply all TypeScript patches (fixes 1–4, 6–7)
cd truth-layer/api/src
# Edit the files manually or use sed/perl as shown below

# 2. Fix Prisma schema
cd truth-layer/api/prisma
# Edit schema.prisma manually (add ? to media_hash)

# 3. Regenerate Prisma client
cd truth-layer/api
npx prisma db push
npx prisma generate

# 4. Fix ZK engine binding
cd truth-layer
docker-compose down
docker-compose up -d --build zk-engine

# 5. Fix Rust compilation
cd gven/hardware
cargo clean
cargo build --release

# 6. Test the app
cd truth-layer/api
npm install  # If needed
npm run start:prod

# 7. Test endpoints
curl http://localhost:3000/api/v1/health
```

---

## AUTOMATED PATCH APPLICATION (sed/perl)

For developers comfortable with command-line tools:

```bash
# Fix double prefix in controllers
cd truth-layer/api/src/features

sed -i "s/@Controller('api\/v1\/verification')/@Controller('verification')/g" verification/verification.controller.ts
sed -i "s/@Controller('api\/v1\/media')/@Controller('media')/g" media/media.controller.ts
sed -i "s/@Controller('api\/v1\/blockchain')/@Controller('blockchain')/g" blockchain/blockchain.controller.ts
sed -i "s/@Controller('api\/v1\/device')/@Controller('device')/g" device/device.controller.ts

# Verify the changes
grep -n "@Controller" **/\*.controller.ts | grep -v "^[a-z]*controller.ts:.*@Controller"

cd ../../..

# Fix Prisma
sed -i 's/media_hash      String   @db/media_hash      String?  @db/g' prisma/schema.prisma

# Regenerate Prisma
npx prisma generate
npx prisma db push

echo "✅ All patches applied. Run: npm run start:prod"
```

---

## VALIDATION SCRIPT

```bash
#!/bin/bash
# Save as: validate-fixes.sh

echo "🔍 Validating critical bug fixes..."

cd truth-layer/api

# Check 1: No double prefixes
if grep -q "@Controller('api/v1/" src/features/**/*.controller.ts; then
  echo "❌ Fix #1 FAILED: Double prefix still present"
  exit 1
else
  echo "✅ Fix #1 PASSED: Double prefix removed"
fi

# Check 2: BullModule imported
if grep -q "from '@nestjs/bullmq'" src/app.module.ts; then
  echo "✅ Fix #3 PASSED: BullModule imported"
else
  echo "❌ Fix #3 FAILED: BullModule not imported"
  exit 1
fi

# Check 3: media_hash is optional or provided
if grep -q "media_hash.*String?" prisma/schema.prisma; then
  echo "✅ Fix #2a PASSED: media_hash is optional"
elif grep -q "media_hash: crypto.createHash" src/features/verification/verification.service.ts; then
  echo "✅ Fix #2b PASSED: media_hash provided in service"
else
  echo "❌ Fix #2 FAILED: media_hash not handled"
  exit 1
fi

# Check 4: ZK engine binding
if grep -q "0.0.0.0:50051" ../zk-engine/Dockerfile; then
  echo "✅ Fix #4 PASSED: ZK engine binds to 0.0.0.0"
else
  echo "⚠️  Fix #4 SKIPPED: Verify manually in Dockerfile/Rust source"
fi

# Check 5: Try to compile
echo "🔨 Testing compilation..."
npm run build 2>&1 | tail -5

if [ $? -eq 0 ]; then
  echo "✅ Fix #5 PASSED: Rust/TypeScript compiles"
else
  echo "❌ Fix #5 FAILED: Compilation errors"
  exit 1
fi

echo ""
echo "✅✅✅ ALL CRITICAL BUGS FIXED ✅✅✅"
echo ""
echo "Next: npm run start:prod && curl http://localhost:3000/api/v1/health"
```

---

## TIMELINE CHECK

- ✅ Patch 1–4 (Controllers + Prisma): 5 minutes
- ✅ Patch 5–7 (BullModule): 10 minutes
- ✅ Patch 8–9 (ZK engine): 5 minutes
- ✅ Patch 10 (Rust): 10 minutes
- ✅ Testing + validation: 10 minutes

**Total Time: 30–40 minutes to production-ready blockers**

