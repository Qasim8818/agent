# ==================== WEEK 1 IMPLEMENTATION ROADMAP ====================
# Truth Layer - Node Zero: Device Registration & Database Foundation
# Goal: Complete 40% of MVP (Database Layer + API Foundation)

## 📋 WEEK 1 DELIVERABLES (7 Days)

### Day 1-2: Database & Infrastructure ✅ (PARTIALLY COMPLETE)
**Target: Complete database initialization & Docker orchestration**

- [x] PostgreSQL schema created (db/schema.sql)
  - 8 tables: devices, media, verifications, revocations, zk_proof_jobs, blockchain_anchors, api_audit_log, usage_meter
  - 12+ performance indexes
  - Full foreign key constraints
  - Status: ✅ READY FOR IMPORT

- [x] ClickHouse analytics schema (db/clickhouse-schema.sql)
  - Time-series tables for verification events, performance metrics
  - Partitioned by date for optimal queries
  - Status: ✅ READY FOR IMPORT

- [x] Docker Compose orchestration (docker-compose.yml)
  - PostgreSQL 16, Redis 7, ClickHouse
  - Prometheus, Grafana, Elasticsearch, Kibana
  - Status: ✅ READY FOR: docker-compose up -d

- [x] Environment configuration (.env.example)
  - 150+ configuration variables
  - Status: ✅ READY FOR: cp .env.example .env

- [x] Bash setup script (scripts/setup-node-zero.sh)
  - Automated system checks
  - Database initialization
  - Docker service validation
  - Status: ✅ READY FOR: bash scripts/setup-node-zero.sh

**Day 1-2 Status**: ✅ ALL COMPLETE

---

### Day 3-4: NestJS API Foundation ⏳ (IN PROGRESS)
**Target: Device registration endpoint working end-to-end**

#### Created Infrastructure Files:

- [x] package.json (api/)
  - ✅ All dependencies specified
  - @nestjs/*, Prisma, Redis, Bull for job queue
  - TypeScript, Jest for testing
  - Status: npm install ready

- [x] main.ts (api/src/main.ts)
  - ✅ Application bootstrap with middleware setup
  - Security (Helmet, CORS, compression)
  - Global validation pipes
  - Graceful shutdown handlers
  - Health check endpoint at /health
  - Status: Ready for npm run dev

- [x] app.module.ts (api/src/app.module.ts)
  - ✅ ConfigModule with 40+ validation schemas
  - DatabaseModule (Prisma)
  - RedisModule for caching
  - BullModule for job queues
  - HealthModule, AuthModule
  - Feature modules: Device, Media, Verification
  - Status: Module wiring complete

- [x] Device Controller (api/src/features/device/device.controller.ts)
  - ✅ POST /devices/register - Device registration with TPM attestation
    - TPM validation (stub for real TPM verification)
    - Duplicate detection (one TPM per device)
    - Rate limiting (10 devices/hour per IP)
    - Generates API key + attestation proof
    - Database transaction
  - ✅ GET /devices/:id - Device info retrieval
  - ✅ GET /devices/:id/pubkey - Device public key endpoint
  - ✅ Comprehensive error handling & logging
  - Status: ❌ **NEEDS**: DeviceService class, Database service

- [x] DTOs & Response Models
  - ✅ CreateDeviceDto (with validation decorators)
  - ✅ DeviceResponseDto
  - Status: Ready for controller integration

- [x] Prisma Schema (api/prisma/schema.prisma)
  - ✅ Complete ORM models for all 8 tables
  - ✅ Enums for Status, DeviceType, VerificationStatus
  - ✅ Relations between tables (OneToMany, ManyToOne)
  - ✅ Indexes for query optimization
  - Status: Ready for: npx prisma migrate dev

**Day 3-4 TODO** (next):

- [ ] Create PrismaService class (api/src/database/prisma.service.ts)
  - Singleton connection management
  - Middleware hooks
  - Error handling

- [ ] Create DeviceService (api/src/features/device/device.service.ts)
  - Move business logic from controller
  - TPM validation service
  - Device registration workflow

- [ ] Create device.module.ts
  - Controllers & services DI
  - Exports for AppModule

- [ ] Create common interceptors (LoggingInterceptor)
- [ ] Create global exception filter (GlobalExceptionFilter)
- [ ] Create Swagger/OpenAPI integration

**Expected Completion**: Day 4 end

---

### Day 5: Complete API Endpoints ⏳
**Target: All core endpoints operational**

- [ ] Media Upload Controller
  - POST /media/upload (multipart/form-data)
  - Device signature verification
  - Storage handling (S3 or local)
  - File validation

- [ ] Verification Controller
  - GET /verify/:mediaHash (check status)
  - GET /verify/:mediaHash/proof (download proof)
  - POST /batch/verify (batch verification)

- [ ] Test all endpoints
  - Unit tests (Jest)
  - Integration tests with real PostgreSQL

**Expected Completion**: Day 5 end

---

### Day 6: Job Queue Setup ⏳
**Target: Async ZK proof generation queue working**

- [ ] ZkProofProcessor class
  - Bull queue consumer
  - gRPC call to Rust ZK engine
  - Result storage in PostgreSQL

- [ ] Queue jobs tested
  - Job creation from verification API
  - Status polling endpoint

**Expected Completion**: Day 6 end

---

### Day 7: Testing & Documentation ⏳
**Target: 80%+ test coverage, deployment ready**

- [ ] Unit test suite
  - 40+ test cases
  - Edge cases & error paths

- [ ] Docker build & run
  - Build: docker build -t truth-layer-api:0.1.0 .
  - Run: docker-compose up

- [ ] API documentation
  - Swagger/OpenAPI spec
  - Generated at /api/docs

- [ ] Deployment guide
  - Docker compose setup
  - Database migrations
  - Environment checklist

**Expected Completion**: Day 7 end (Friday)

---

## 🔧 IMPLEMENTATION SEQUENCE (Code Dependencies)

### Order to implement (respects dependencies):

1. **PrismaService** (database/prisma.service.ts)
   - Required by: Everything else
   - Complexity: Low
   - Time: 30 min

2. **DatabaseModule** (database/database.module.ts)
   - Provides PrismaService
   - Pass to AppModule
   - Time: 20 min

3. **DeviceService** (features/device/device.service.ts)
   - Methods: register(), getDevice(), getPublicKey()
   - Uses PrismaService
   - Time: 1 hour

4. **DeviceModule** (features/device/device.module.ts)
   - Exports DeviceService & DeviceController
   - Time: 15 min

5. **Common/Interceptors** (common/interceptors/logging.interceptor.ts, etc.)
   - Used globally
   - Time: 30 min

6. **Auth Guards** (auth/guards/api-key.guard.ts)
   - Protect endpoints
   - Time: 30 min

7. **MediaService** (features/media/media.service.ts)
   - File storage, signature verification
   - Time: 1.5 hours

8. **VerificationService** (features/verification/verification.service.ts)
   - Orchestrate ZK generation
   - Time: 1 hour

9. **Testing** (*.spec.ts files)
   - Test all services
   - Time: 3+ hours

---

## 💾 DATABASE MIGRATION STEPS

```bash
# 1. Generate Prisma client
npx prisma generate

# 2. Create first migration
npx prisma migrate dev --name init_schema

# 3. Seed database (optional)
npx prisma db seed
```

---

## 🚀 STARTUP SEQUENCE (Week 1 End)

### Run order for local development:

```bash
# Terminal 1: Docker services
docker-compose up -d

# Terminal 2: Wait for services
bash scripts/setup-node-zero.sh

# Terminal 3: NestJS API server
cd api
npm install
npm run dev

# Output:
# ╔════════════════════════════════════════════════════════════╗
# ║  TRUTH LAYER API - NODE ZERO                              ║
# ║  🌍 Server running on: http://0.0.0.0:3000                ║
# ║  📖 API Docs: http://localhost:3000/api/docs              ║
# ╚════════════════════════════════════════════════════════════╝
```

---

## 📊 COMPLETION METRICS (Week 1)

### Code Statistics Target:
- **API Code**: 2,500+ lines (controllers, services, DTOs)
- **Database**: 500+ lines (Prisma schema)
- **Configuration**: 500+ lines (Docker, env)
- **Tests**: 1,000+ lines
- **Total Week 1**: 4,500+ lines

### Functionality:
- 3 main endpoints (register, getDevice, mediaUpload)
- PostgreSQL schema (8 tables)
- Redis integration
- Job queue setup
- Logging & monitoring (Prometheus metrics)

### Quality Metrics:
- Test Coverage: >80%
- Linting: 0 errors
- Security: OWASP top 10 covered
- Documentation: Swagger spec complete

---

## ⚠️ BLOCKERS & RISKS

### Standard Risks:
1. **TPM validation complexity** → Mitigation: Use stub for MVP, upgrade later
2. **Docker service startup timing** → Mitigation: Wait scripts, health checks
3. **Node.js + Prisma compatibility** → Mitigation: Use proven versions (Node 18+, Prisma 5.x)

### Mitigations Applied:
- ✅ All versions pinned in package.json
- ✅ All Docker services have health checks
- ✅ All environment variables documented
- ✅ Setup script validates all prerequisites

---

## 📈 SUCCESS CRITERIA (Week 1 End)

✅ **API Running**: device registration endpoint accepts requests
✅ **Database**: PostgreSQL initialized with 8 tables
✅ **Device Created**: Can register device via POST /api/v1/devices/register
✅ **API Key Generated**: Device receives API key after registration
✅ **Device Retrieved**: Can query device info via GET /api/v1/devices/:id
✅ **Monitoring**: Prometheus metrics collected
✅ **Documentation**: Swagger spec available
✅ **Tests**: >80% code coverage
✅ **Production Ready**: Docker image builds successfully

---

## 🎯 WEEK 2 PREVIEW

Once Week 1 is complete:

- [ ] Rust ZK engine integration (gRPC calls)
- [ ] Media upload & signature verification
- [ ] ZK proof generation pipeline
- [ ] Blockchain anchoring (Arweave + Solana)
- [ ] End-to-end verification flow

---

## 📝 NOTES FOR DEVELOPER

### Local Development Setup:
```bash
# Clone/navigate to project
cd /home/killer123/Desktop/agent/truth-layer

# Start services
docker-compose up -d

# API development
cd api
npm install
npm run dev

# Monitor
docker-compose logs -f postgres  # Database
docker-compose logs -f redis     # Cache
docker-compose logs -f api       # API logs
```

### Useful Commands:
```bash
# Run tests
npm run test

# Watch tests
npm run test:watch

# Lint
npm run lint

# Generate Prisma types
npx prisma generate

# Database shell
psql -h localhost -U truth_user -d truth_layer

# Check service health
curl http://localhost:3000/health

# API documentation
open http://localhost:3000/api/docs
```

### Key Files to Know:
- `api/src/main.ts` - Application entry point
- `api/src/app.module.ts` - Root module with all imports
- `api/src/features/device/device.controller.ts` - Device endpoints
- `api/prisma/schema.prisma` - Data models
- `docker-compose.yml` - Service orchestration
- `.env.example` - Configuration template

---

## 🏁 DONE CHECKLIST (Week 1)

Estimated time per task:
- Setup scripts: ✅ 30 min (DONE)
- Docker compose: ✅ 30 min (DONE)
- Database schemas: ✅ 1 hour (DONE)
- NestJS project init: ✅ 1 hour (IN PROGRESS)
- API endpoints: ⏳ 3 hours (TODAY)
- Testing: ⏳ 2 hours (TOMORROW)
- Documentation: ⏳ 1 hour (FRIDAY)

**Total Week 1 Time**: ~16 hours of implementation

---

Generated: 2024-01-15 | Framework: NestJS + PostgreSQL + Rust gRPC | Status: Week 1 In Progress
