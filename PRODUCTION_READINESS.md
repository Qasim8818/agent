# Production Readiness Guide

**Status**: Ready for staging/internal testing  
**Last Updated**: April 16, 2024

---

## Pre-Production Checklist

### ✅ Infrastructure & Deployment

- [x] Docker images build successfully
- [x] docker-compose starts all services
- [x] Health check endpoints respond
- [x] Database migrations run on startup
- [x] Swagger API documentation accessible
- [x] Monitoring stack (Prometheus/Grafana) running
- [x] Logging stack (Elasticsearch/Kibana) configured

### ✅ Security Configuration

- [x] Environment variables externalized (no secrets in code)
- [x] `.gitignore` prevents committing sensitive files
- [x] CORS configured for intended origins
- [x] Rate limiting middleware enabled
- [x] Security headers (Helmet) configured
- [x] SQL injection prevention via parameterized queries
- [x] Password hashing implemented (bcrypt)
- [x] JWT secret management in place

### ✅ Authentication & Authorization

- [x] JWT authentication guards on protected endpoints
- [x] API Key authentication implemented
- [x] Role-based access control framework ready
- [x] Token refresh mechanism working
- [x] Audit logging for auth events

### ✅ Data Quality

- [x] Prisma schema aligned with SQL schema
- [x] Database indexes created for query performance
- [x] Foreign key constraints enforced
- [x] Migration strategy documented
- [x] Backup procedures documented

### ✅ Code Quality

- [x] ESLint configuration enforced
- [x] Prettier formatting applied
- [x] TypeScript strict mode enabled
- [x] No console.log in production code
- [x] Error handling comprehensive

### ✅ Testing

- [x] Integration tests written (API endpoints)
- [x] Auth service tests written
- [x] Crypto validation tests written
- [x] Python state validation tests written
- [x] Test coverage >20% (target: 80% before GA)

### ✅ CI/CD

- [x] GitHub Actions workflow created
- [x] Automated linting on PRs
- [x] Automated testing on pull requests
- [x] Docker image building automated
- [x] Vulnerability scanning enabled
- [x] Pre-commit hooks configured

### ✅ Monitoring & Observability

- [x] Prometheus metrics endpoints configured
- [x] Grafana dashboards created (skeleton)
- [x] Structured logging implemented
- [x] Error logging configured
- [x] Request tracing ready (via correlation IDs)

---

## Deployment Steps (Staging)

### 1. Prepare Environment

```bash
# Clone repository
git clone https://github.com/Qasim8818/agent.git
cd agent/truth-layer

# Create .env file with staging secrets
cp .env.example .env

# Edit with staging values
nano .env

# Required secrets:
# POSTGRES_PASSWORD=<strong_password>
# JWT_SECRET=<32_random_chars>
# DATABASE_URL=postgresql://user:pass@host/db
```

### 2. Build Services

```bash
# Build Docker images
docker-compose build

# Verify images built
docker images | grep truth-

# Expected output:
# truth-api        latest    <sha>    <size>
# truth-zk-engine  latest    <sha>    <size>
```

### 3. Start Services

```bash
# Start all services
docker-compose up -d

# Verify startup
sleep 30  # Wait for init
docker-compose ps

# Expected: All containers "Up" status
```

### 4. Database Initialization

```bash
# Run migrations
docker-compose exec api npx prisma migrate deploy

# Verify schema
docker-compose exec postgres psql -U truth_user -d truth_layer -c "\dt"

# Expected: Tables created
```

### 5. Health Checks

```bash
# API health
curl http://localhost:3000/health
# Expected: {"status":"ok","timestamp":"..."}

# Swagger UI
curl -s http://localhost:3000/api/docs | head -20
# Expected: HTML with Swagger UI

# Database
docker-compose exec postgres pg_isready -U truth_user
# Expected: accepting connections

# Redis
docker-compose exec redis redis-cli ping
# Expected: PONG
```

---

## Before Production Deployment

### Security Hardening
- [ ] Generate new JWT_SECRET (32+ random characters)
- [ ] Generate new database password (16+ mixed characters)
- [ ] Rotate API keys used for testing
- [ ] Enable HTTPS/TLS (via reverse proxy)
- [ ] Configure CORS with production domain only
- [ ] Enable security headers in production
- [ ] Set rate limits appropriate for your traffic

### Infrastructure
- [ ] Set up load balancer (NGINX/HAProxy/Traefik)
- [ ] Configure backup strategy (daily encrypted backups)
- [ ] Set up disaster recovery (HA setup)
- [ ] Establish firewall rules
- [ ] Configure VPN/bastion access
- [ ] Set up monitoring alerts
- [ ] Configure log retention policy

### Operations
- [ ] Train team on incident response
- [ ] Document runbooks for common issues
- [ ] Set up on-call rotation
- [ ] Establish change management process
- [ ] Document rollback procedures
- [ ] Test disaster recovery plan

### Compliance
- [ ] Complete security audit
- [ ] Review data retention policies
- [ ] Establish audit logging review schedule
- [ ] Document compliance requirements
- [ ] Set up compliance scanning

---

## Known Limitations Before GA

| Issue | Impact | Timeline | Workaround |
|-------|--------|----------|-----------|
| **Cryptography: HMAC-SHA256** | Not post-quantum resistant | Q3 2024 | Use for MVP only |
| **TPM Validation: Stubbed** | Not cryptographically verified | Q3 2024 | Internal use only |
| **ZK Proofs: Stubbed** | Not real proofs | Q3 2024 | Replace with real engine |
| **Test Coverage: ~20%** | Unknown code paths | Q2 2024 | Target 80% before GA |

---

## Monitoring Setup

### Create Grafana Dashboards For:
- [ ] API Response Time (p50, p95, p99)
- [ ] Error Rate by Endpoint
- [ ] Database Query Performance
- [ ] Redis Cache Hit Rate
- [ ] Device Registration Rate
- [ ] Proof Generation Time
- [ ] Blockchain Confirmation Time

### Set Up Alerts For:
- [ ] API down (HTTP 500+ >1%)
- [ ] Database connection failures
- [ ] High memory usage (>80%)
- [ ] Disk space low (<10% free)
- [ ] Failed auth attempts (>5/min)
- [ ] Proof generation timeout (>120s)

---

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| **API Response Time (p50)** | <100ms | ? |
| **API Response Time (p99)** | <500ms | ? |
| **Error Rate** | <0.1% | ? |
| **Database Query (p95)** | <50ms | ? |
| **Proof Generation** | <120s | ? |
| **Availability** | 99.9% | ? |

---

## Runbooks (Common Issues)

### API Won't Start
```bash
# Check logs
docker-compose logs api | tail -50

# Common issues:
# 1. DATABASE_URL not set
docker-compose exec api env | grep DATABASE_URL

# 2. Database not ready
docker-compose logs postgres | tail -20

# 3. Port already in use
lsof -i :3000
```

### Database Connection Failed
```bash
# Check postgres health
docker-compose exec postgres pg_isready -U truth_user

# Check connection string
echo $DATABASE_URL

# Verify credentials
psql $DATABASE_URL -c "SELECT 1"
```

### Performance Degradation
```bash
# Check CPU usage
docker stats

# Check database slow queries
docker-compose exec postgres psql -U truth_user -d truth_layer \
  -c "SELECT query, calls, mean_time FROM pg_stat_statements \
       ORDER BY mean_time DESC LIMIT 10"

# Check Redis memory
docker-compose exec redis redis-cli INFO memory
```

---

## Rollback Procedure

```bash
# 1. Stop current deployment
docker-compose down

# 2. Restore from backup
# (Restore database, volumes, etc.)

# 3. Checkout previous version
git checkout v1.0.0

# 4. Restart services
docker-compose up -d

# 5. Verify
curl http://localhost:3000/health
```

---

## Post-Deployment Verification

After deploying to production, verify:

```bash
# API is responding
curl -s https://<your-domain>/health | jq .

# All endpoints accessible
curl -s https://<your-domain>/api/docs | grep "<title>"

# Database is connected
# (Check dashboard or query logs)

# Monitoring is working
# (Check Prometheus/Grafana)

# Logs are being collected
# (Check Elasticsearch/Kibana)

# Backups are running
# (Verify backup schedule)

# Alerts are configured
# (Test alert channels)
```

---

## Success Criteria

✅ **Ready for Staging** when:
- All services start without errors
- All health checks pass
- All tests pass
- No critical security issues found

✅ **Ready for Production** when:
- Staging environment stable for 7+ days
- All team members trained
- Runbooks documented and tested
- Monitoring alerts working
- Backup/DR tested
- Security audit passed

---

## Support & Escalation

### Severity Levels
- **Critical**: Service down, data loss risk → 15 min response
- **High**: Degraded performance, auth failures → 1 hour response
- **Medium**: API errors, non-critical features → 4 hour response
- **Low**: Documentation, minor bugs → 24 hour response

### Escalation Path
1. On-call engineer
2. Team lead
3. Senior architect
4. External consultants (if needed)

---

## Contact

- **On-Call**: [pagerduty.com/service/...](https://pagerduty.com)
- **Slack**: #production-incidents
- **Email**: security@truth-layer.dev

---

## Version History

| Date | Version | Notes |
|------|---------|-------|
| 2024-04-16 | 1.0.0-alpha | Initial staging release |
| TBD | 1.0.0 | Production GA |

---

For questions, see [README.md](README.md) or [SECURITY.md](SECURITY.md)
