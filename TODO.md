# Truth Layer API Critical Fixes - Implementation TODO

## Status: In Progress (0/11 complete)

### 1. Prisma Schema Fix ✅ [PENDING]
- [ ] Update truth-layer/api/prisma/schema.prisma (add Device fields, MediaFile, Verification, ZKProofJob fields)
- [ ] Run `cd truth-layer/api && npx prisma db push && npx prisma generate`

### 2. Package.json Dependencies ✅ [PENDING]
- [ ] Add nest-winston, joi, multer, types
- [ ] Run `cd truth-layer/api && npm install`

### 3. verification.service.ts Bull Import Fix ✅ [PENDING]
- [ ] Change @nestjs/bull → @nestjs/bullmq

### 4. main.ts Winston Fix ✅ [PENDING]
- [ ] Fix nest-winston provider import/setup

### 5. app.module.ts BullModule + API_KEYS ✅ [PENDING]
- [ ] Add BullModule.forRoot/Queue
- [ ] Add API_KEYS to Joi validation

### 6. docker-compose.yml Prod Fixes ✅ [PENDING]
- [ ] Fix command, remove node_modules vol, add env_file

### 7. Create .env.example ✅ [PENDING]

### 8. Create STUBS_NOTICE.md ✅ [PENDING]

### 9. device.service.ts Queries (if needed post-schema) ✅ [PENDING]

### 10. Test Schema Sync ✅ [PENDING]
- [ ] docker compose up, check no Prisma errors

### 11. Full E2E Test ✅ [PENDING]
- [ ] Device register, media upload, verification queue

**Next:** Schema + package.json → npm install → prisma generate

