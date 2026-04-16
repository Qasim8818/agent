# Deployment Checklist - Post-Audit Fixes

Use this checklist to verify all audit fixes are applied and the system is ready to deploy.

---

## Pre-Deployment Checks

### Dockerfiles & Build
- [ ] `/truth-layer/api/Dockerfile` exists and builds successfully
- [ ] `/gven/zk-engine/Dockerfile` exists and builds successfully
- [ ] Both Dockerfiles use multi-stage builds
- [ ] Both include HEALTHCHECK directives

### API & Swagger
- [ ] `/truth-layer/api/src/swagger.config.ts` exists
- [ ] Swagger module imported in `main.ts`
- [ ] Swagger UI accessible at `http://localhost:3000/api/docs`

### Database & Migrations
- [ ] `/truth-layer/db/migrations/` directory exists
- [ ] `/truth-layer/db/schema.sql` is in place
- [ ] Prisma schema matches raw SQL schema (or aligned)

### Monitoring Stack
- [ ] `/truth-layer/monitoring/prometheus.yml` exists
- [ ] `/truth-layer/monitoring/grafana-datasources.yml` exists
- [ ] `/truth-layer/monitoring/grafana-dashboards/` directory exists

### Environment & Secrets
- [ ] `.gitignore` includes:
  - `*.key.json`, `*.pub`, `.env`, `.env.*`
  - `venv/`, `node_modules/`, `target/`
  - Docker data volumes
- [ ] `docker-compose.yml` uses environment variables (not hardcoded secrets)
- [ ] `.env` file created with production secrets
- [ ] `.env` is NOT committed to git

### Cryptography
- [ ] `/gven/hardware/Cargo.toml` includes `rand = "0.8"`
- [ ] `/gven/hardware/src/lib.rs` uses `rand::thread_rng()` for key generation
- [ ] `generate()` function no longer uses `subsec_nanos()`

### Authentication
- [ ] `/truth-layer/api/src/auth/auth.module.ts` is fully implemented
- [ ] `/truth-layer/api/src/auth/jwt.strategy.ts` exists
- [ ] `/truth-layer/api/src/auth/jwt.guard.ts` exists
- [ ] `/truth-layer/api/src/auth/api-key.guard.ts` exists
- [ ] `/truth-layer/api/src/auth/auth.service.ts` exists

### Documentation
- [ ] `/truth-layer/SECURITY_POSTURE.md` exists
- [ ] `/CRYPTO_MVP_ROADMAP.md` exists
- [ ] `/AUDIT_REMEDIATION_STATUS.md` exists
- [ ] All files explain MVP limitations

---

## Docker Compose Startup

### Step 1: Prepare Environment
```bash
cd /home/killer123/Desktop/agent/truth-layer

# Create .env from example (or use your own)
cp .env.example .env

# Edit .env with your production secrets
nano .env
```

**Critical secrets to set:**
```
POSTGRES_PASSWORD=<secure_password>
JWT_SECRET=<secure_jwt_key>
ELASTICSEARCH_PASSWORD=<secure_password>
```

### Step 2: Start Services
```bash
docker-compose up -d
```

### Step 3: Verify Startup
```bash
# Wait 30 seconds for services to fully initialize
sleep 30

# Check all containers running
docker-compose ps
# Expected: All containers in "Up" status

# Check API health
curl http://localhost:3000/health
# Expected: 200 OK with health status

# Check Swagger UI
curl -s http://localhost:3000/api/docs | head -20
# Expected: HTML content (Swagger UI)
```

---

## Service Verification

### API Service (port 3000)
```bash
# Test unauthenticated endpoint (should fail)
curl -X GET http://localhost:3000/api/v1/devices
# Expected: 401 Unauthorized or 403 Forbidden

# Generate test JWT (if auth service ready)
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test"}'
# Expected: 401 or 200 with token

# Test with API key
curl -X GET http://localhost:3000/api/v1/devices \
  -H "X-API-Key: test-key"
# Expected: 401/403 or 200 depending on API key validation
```

### Database (port 5432)
```bash
# Test PostgreSQL connection
docker exec truth-postgres pg_isready -U truth_user
# Expected: "accepting connections"

# Verify schema loaded
docker exec truth-postgres psql -U truth_user -d truth_layer -c "\dt"
# Expected: List of tables
```

### Redis (port 6379)
```bash
# Test Redis connection
docker exec truth-redis redis-cli ping
# Expected: "PONG"
```

### Prometheus (port 9090)
```bash
# Check Prometheus targets
curl -s http://localhost:9090/api/v1/targets | jq '.data.activeTargets[] | .labels.job'
# Expected: ["api", "prometheus", "zk-engine", ...]
```

### Grafana (port 3001)
```bash
# Access Grafana
# From browser: http://localhost:3001
# Default: admin / <GF_SECURITY_ADMIN_PASSWORD>
# Verify datasources connected (prometheus, clickhouse)
```

### Elasticsearch (port 9200)
```bash
# Test ES cluster health
curl -u elastic:${ELASTICSEARCH_PASSWORD} \
  http://localhost:9200/_cluster/health
# Expected: {"status":"yellow"/"green", ...}

# Note: xpack.security.enabled is now true
```

---

## Authentication Testing

### JWT Flow
```bash
# 1. Register/Get token
TOKEN=$(curl -s -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"dev@example.com","password":"dev"}' | jq -r '.access_token')

# 2. Use token on protected endpoint
curl -X GET http://localhost:3000/api/v1/devices \
  -H "Authorization: Bearer $TOKEN"
# Expected: 200 OK with devices list
```

### API Key Flow
```bash
# Set valid API key in .env
# API_KEYS="test-api-key-1,test-api-key-2"

# Test request with API key
curl -X GET http://localhost:3000/api/v1/devices \
  -H "X-API-Key: test-api-key-1"
# Expected: 200 OK
```

---

## Security Validation

### Secrets Not in Code
```bash
# Verify no secrets in docker-compose.yml
grep -E "password|secret|key" truth-layer/docker-compose.yml | grep -v '\${'
# Expected: No matches (all should be variable references)

# Verify .env is in .gitignore
cat .gitignore | grep "\.env"
# Expected: ".env" or ".env*" listed
```

### No Hardcoded Keys
```bash
# Search for hardcoded credentials
grep -r "password_change_me\|your_jwt_secret\|admin\|default" \
  truth-layer/api/src truth-layer/gven/hardware \
  --include="*.ts" --include="*.rs" --include="*.py" | grep -v ".md\|.example"
# Expected: No results (or only in docs)
```

### Cryptography
```bash
# Verify rand is in Cargo.toml
grep "^rand" gven/hardware/Cargo.toml
# Expected: "rand = ..." line found

# Search for subsec_nanos (should be removed)
grep -r "subsec_nanos" gven/hardware/src/
# Expected: No matches
```

---

## Post-Deployment Verification

### Logs
```bash
# Check API logs for errors
docker-compose logs api | tail -50
# Expected: No ERROR or CRITICAL lines (warnings ok)

# Check Database logs
docker-compose logs postgres | tail -50
# Expected: "database system is ready to accept connections"
```

### Monitoring
```bash
# Check Prometheus scrape targets
curl -s http://localhost:9090/api/v1/targets | jq '.data.activeTargets | length'
# Expected: >3 (prometheus, api, zk-engine at minimum)

# Verify metrics being collected
curl -s http://localhost:9090/api/v1/query?query=up | jq '.data.result[] | .metric.job'
# Expected: ["prometheus", "api", "zk-engine", ...]
```

---

## Rollback Procedure (If Issues Found)

```bash
# Stop all services
docker-compose down

# Optional: Remove data volumes (CAUTION - data loss)
# docker-compose down -v

# Check for issues in logs
docker-compose logs --tail=100

# Review audit fixes in AUDIT_REMEDIATION_STATUS.md
cat /home/killer123/Desktop/agent/AUDIT_REMEDIATION_STATUS.md

# Restore from backup if needed
# (Requires backup setup to be configured)
```

---

## Readiness Criteria

You are ready to deploy to production when:

- ✅ All Docker containers start successfully (`docker-compose ps` shows all "Up")
- ✅ API responds to health check
- ✅ Swagger UI is accessible
- ✅ Authentication guards are working (protected endpoints require tokens)
- ✅ No hardcoded secrets in any config files
- ✅ `.env` file with real secrets is excluded from git
- ✅ Prometheus is scraping metrics
- ✅ Grafana datasources are connected
- ✅ All database migrations have run
- ✅ No errors in application logs

---

## Post-Launch Monitoring

Once deployed:

1. **Set up alerts** in Prometheus/Grafana for:
   - Service down (HTTP status != 2xx)
   - High error rate (>1% errors)
   - Database connection failures
   - Disk space warnings

2. **Monitor key metrics**:
   - API response time
   - Token generation rate
   - Device registration rate
   - Proof generation time
   - Database query performance

3. **Regular maintenance**:
   - Review security logs daily
   - Verify backups are running
   - Check for dependency updates (monthly)
   - Rotate secrets (quarterly)

---

## Support & Troubleshooting

### Container won't start
```bash
# View detailed error logs
docker-compose logs <service_name> --tail=100

# Try starting individually
docker-compose up postgres
# Fix issues one service at a time
```

### Can't connect to API
```bash
# Check if port 3000 is in use
lsof -i :3000

# Check API container logs
docker-compose logs api

# Verify DATABASE_URL is correct
docker-compose exec api env | grep DATABASE_URL
```

### JWT authentication failing
```bash
# Verify JWT_SECRET is set in .env
grep JWT_SECRET truth-layer/.env

# Check JWT strategy is loaded
docker-compose logs api | grep -i "jwt\|passport"

# Re-generate test token and verify expiry
```

See `SECURITY_POSTURE.md` and `CRYPTO_MVP_ROADMAP.md` for detailed troubleshooting.
