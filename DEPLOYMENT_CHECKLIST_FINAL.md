# 🚀 DEPLOYMENT CHECKLIST — Truth Layer API

**Last Updated:** April 20, 2026  
**Status:** Ready for Staging  
**Target:** Production Cloud (AWS/GCP/Azure)

---

## PRE-STAGING CHECKLIST (Internal Testing)

### Environment Setup
- [ ] Clone repository: `git clone <repo>`
- [ ] Install dependencies: `npm install`
- [ ] Copy `.env.example` → `.env` (use dev values)
- [ ] Generate dev secrets:
  ```bash
  export JWT_SECRET=$(openssl rand -base64 32)
  export API_KEY_1=$(uuidgen)
  export POSTGRES_PASSWORD=dev_password_123
  ```
- [ ] Update `.env` with generated values
- [ ] Verify `.env` is in `.gitignore` ✅

### Build & Test
- [ ] Run `npm run build` (should show 0 errors)
- [ ] Run `npm run lint` (fix ESLint config if needed)
- [ ] Run `npm run test` (document coverage gaps)
- [ ] Run `npm run test:cov` (capture baseline metrics)
- [ ] Verify `dist/` directory is fresh and complete
- [ ] Verify `node_modules/.prisma/client` exists

### Docker Setup (Local Testing)
- [ ] Ensure Docker daemon is running: `docker --version`
- [ ] Ensure Docker Compose is available: `docker compose version`
- [ ] Build images: `docker compose build`
- [ ] Start services: `docker compose up -d`
- [ ] Wait 10 seconds for DB initialization
- [ ] Run migrations: `docker compose exec api npx prisma migrate dev`
- [ ] Verify health check: `curl http://localhost:3000/health`
- [ ] Check Swagger UI: Open `http://localhost:3000/api/docs` in browser
- [ ] Stop services: `docker compose down`

---

## STAGING DEPLOYMENT CHECKLIST (Internal Testing Environment)

### Preparation
- [ ] Code review: All PRs approved and merged to main
- [ ] Branch protection: Only main branch for staging
- [ ] Secrets management: Set up in staging environment (AWS Secrets Manager / GCP Secret Manager)
- [ ] Database: Create staging PostgreSQL instance
- [ ] Redis: Create staging Redis instance  
- [ ] Backups: Enable automated daily backups
- [ ] Monitoring: Enable CloudWatch/Stackdriver logs

### Secrets (Must Generate Before Staging)
```bash
# Generate strong values
JWT_SECRET=$(openssl rand -base64 32)
DB_PASSWORD=$(openssl rand -base64 16 | tr '+/' '-_')
API_KEYS=$(uuidgen),$(uuidgen),$(uuidgen)

# Store in cloud secret manager
# AWS: aws secretsmanager create-secret --name truth-layer-staging
# GCP: gcloud secrets create truth-layer-staging
```

**Required Secrets:**
- [ ] `JWT_SECRET` (32+ random characters)
- [ ] `POSTGRES_PASSWORD` (strong alphanumeric)
- [ ] `DATABASE_URL` (from managed PostgreSQL)
- [ ] `REDIS_URL` (from managed Redis)
- [ ] `API_KEYS` (comma-separated UUIDs for clients)
- [ ] `ARWEAVE_KEY` (from Arweave or client-provided)
- [ ] `SOLANA_PAYER` (from Solana or client-provided)

### Infrastructure (Cloud Platform)
- [ ] **AWS Example:**
  ```bash
  # VPC + Security groups
  aws ec2 create-security-group --group-name truth-layer-staging
  
  # RDS PostgreSQL
  aws rds create-db-instance --db-instance-identifier truth-layer-db
  
  # ElastiCache Redis
  aws elasticache create-cache-cluster --cache-cluster-id truth-layer-redis
  
  # ECR repository
  aws ecr create-repository --repository-name truth-layer-api
  ```

- [ ] **GCP Example:**
  ```bash
  # Cloud SQL PostgreSQL
  gcloud sql instances create truth-layer-db
  
  # Memorystore Redis
  gcloud redis instances create truth-layer-redis
  
  # Artifact Registry
  gcloud artifacts repositories create truth-layer-api
  ```

- [ ] **Azure Example:**
  ```bash
  # Database for PostgreSQL
  az postgres flexible-server create --name truth-layer-db
  
  # Azure Cache for Redis
  az redis create --name truth-layer-redis
  
  # Container Registry
  az acr create --resource-group rg --name truthlayerapi
  ```

### Docker Image Build
- [ ] Build image: `docker build -t truth-layer-api:v1.0.0 .`
- [ ] Tag for registry:
  ```bash
  # AWS
  docker tag truth-layer-api:v1.0.0 <account-id>.dkr.ecr.us-east-1.amazonaws.com/truth-layer-api:v1.0.0
  
  # GCP
  docker tag truth-layer-api:v1.0.0 us-central1-docker.pkg.dev/<project>/truth-layer-api/api:v1.0.0
  
  # Azure
  docker tag truth-layer-api:v1.0.0 truthlayerapi.azurecr.io/api:v1.0.0
  ```
- [ ] Scan image for vulnerabilities: `trivy image truth-layer-api:v1.0.0`
- [ ] Push to registry:
  ```bash
  # AWS: aws ecr get-login-password | docker login --username AWS
  docker push <registry>/truth-layer-api:v1.0.0
  ```

### Kubernetes Deployment
- [ ] Create `k8s/` directory with:
  - [ ] `deployment.yaml` (replicas: 2, requests/limits)
  - [ ] `service.yaml` (LoadBalancer or Ingress)
  - [ ] `configmap.yaml` (non-secret env vars)
  - [ ] `secret.yaml` (cloud secret reference)
  - [ ] `pdb.yaml` (pod disruption budget)
  - [ ] `hpa.yaml` (horizontal pod autoscaler)

- [ ] Create namespace: `kubectl create namespace staging`
- [ ] Create secrets: `kubectl -n staging apply -f secret.yaml`
- [ ] Deploy: `kubectl -n staging apply -f k8s/`
- [ ] Verify rollout: `kubectl -n staging rollout status deployment/truth-layer-api`
- [ ] Check pods: `kubectl -n staging get pods`
- [ ] Check logs: `kubectl -n staging logs -f deployment/truth-layer-api`

### Database Migration
- [ ] Connect to staging PostgreSQL
- [ ] Run Prisma migrations: `npx prisma migrate deploy`
- [ ] Verify schema: `npx prisma studio` (or SQL client)
- [ ] Check indexes created: `SELECT * FROM pg_indexes WHERE schemaname = 'public'`

### Health & Smoke Tests
- [ ] Health endpoint responds: `curl https://staging-api.yourdomain.com/health`
- [ ] Swagger docs accessible: Open in browser
- [ ] Can register device: POST `/api/v1/auth/register` with valid payload
- [ ] Can authenticate: POST `/api/v1/auth/login`
- [ ] Can upload media: POST `/api/v1/media/upload` with test file
- [ ] Can verify file: POST `/api/v1/media/{id}/verify`
- [ ] Database is reachable: Query device count
- [ ] Redis is reachable: Cache key set/get
- [ ] External services reachable:
  - [ ] Arweave API (https://arweave.net)
  - [ ] Solana RPC (https://api.devnet.solana.com)
  - [ ] IPFS API (http://localhost:5001 or pinata)

### Monitoring & Logging
- [ ] Enable CloudWatch / Stackdriver / Azure Monitor
- [ ] Configure log group retention (30 days minimum)
- [ ] Set up Prometheus scrape targets
- [ ] Enable Grafana dashboards
- [ ] Create alerts for:
  - [ ] Pod CPU > 80%
  - [ ] Pod memory > 80%
  - [ ] Database connections > 90%
  - [ ] Error rate > 1%
  - [ ] API latency p99 > 2 seconds

### Load Testing (Staging Only)
- [ ] Use K6, JMeter, or Gatling to load test
- [ ] Target 100 requests/second for 5 minutes
- [ ] Capture metrics: latency, throughput, error rate
- [ ] Verify no memory leaks: `kubectl top pods` before/after
- [ ] Verify database performance: check slow query log

---

## PRODUCTION DEPLOYMENT CHECKLIST (Go Live)

### Pre-Flight Review
- [ ] All staging tests passed ✅
- [ ] Security penetration test completed ✅
- [ ] Load test results acceptable ✅
- [ ] All high-severity npm vulnerabilities fixed ✅
- [ ] Test coverage ≥60% ✅
- [ ] Code review: All changes approved by 2+ reviewers ✅
- [ ] Changelog updated with new features
- [ ] Documentation updated (README, API docs, deployment guide)
- [ ] Client approval obtained ✅

### Production Secrets (Real Values)
- [ ] `JWT_SECRET` generated and stored securely
- [ ] `POSTGRES_PASSWORD` is strong (16+ chars, mixed case + symbols)
- [ ] `DATABASE_URL` points to production RDS/Cloud SQL
- [ ] `REDIS_URL` points to production ElastiCache/Memorystore
- [ ] `API_KEYS` provided to all client applications
- [ ] `ARWEAVE_KEY` is valid (tested with small transaction)
- [ ] `SOLANA_PAYER` has minimum SOL balance for gas
- [ ] `CORS_ORIGINS` set to actual domain (not localhost)
- [ ] All secrets stored in cloud secret manager (AWS Secrets / GCP Secrets / Azure Key Vault)

### Production Infrastructure
- [ ] Database: Multi-AZ PostgreSQL (≥2 replicas)
- [ ] Redis: Cluster mode or multi-node (HA)
- [ ] Load Balancer: Configured with SSL/TLS
- [ ] CDN: Optional (for IPFS gateway or static assets)
- [ ] WAF: Optional (CloudFront or AWS WAF)
- [ ] Backup: Automated daily backups, retention ≥30 days
- [ ] Disaster Recovery: RTO < 4 hours, RPO < 1 hour

### Kubernetes Production Config
- [ ] Replicas: ≥3 for high availability
- [ ] Resource requests set (CPU: 500m, Memory: 512Mi)
- [ ] Resource limits set (CPU: 2000m, Memory: 2Gi)
- [ ] Pod disruption budget: minAvailable: 2
- [ ] Horizontal pod autoscaler: min: 3, max: 10
- [ ] Node affinity: Spread across multiple zones
- [ ] Network policies: Restrict traffic between pods

### Production Deployment
- [ ] Tag image: `docker tag ... :v1.0.0-prod`
- [ ] Scan image: `trivy image <registry>/api:v1.0.0-prod`
- [ ] Push image: `docker push <registry>/api:v1.0.0-prod`
- [ ] Create namespace: `kubectl create namespace production`
- [ ] Deploy to production: `kubectl -n production apply -f k8s/`
- [ ] Monitor rollout: `kubectl -n production rollout status deployment/truth-layer-api`
- [ ] Wait for all pods to be running: `kubectl -n production get pods -w`

### Post-Deployment Validation
- [ ] All pods running: `kubectl -n production get pods`
- [ ] All replicas ready: Desired = Current = Ready
- [ ] Health check passes: `curl https://api.yourdomain.com/health | jq .`
- [ ] Swagger docs accessible
- [ ] Database connectivity: Test query succeeds
- [ ] Authentication works: Can register and login
- [ ] File operations work: Upload, verify, retrieve
- [ ] Blockchain operations work: Can anchor proof
- [ ] No error spam in logs: `kubectl -n production logs -f deployment/truth-layer-api`

### Production Monitoring Setup
- [ ] Prometheus scraping prod metrics
- [ ] Grafana dashboards displaying real data
- [ ] PagerDuty/Opsgenie integrated for alerts
- [ ] CloudWatch/Stackdriver logs configured (retention ≥90 days)
- [ ] Distributed tracing enabled (optional but recommended)
- [ ] APM (DataDog/New Relic/Dynatrace) configured

### Post-Launch Runbook
- [ ] Document incident response procedures
- [ ] Document how to scale up/down pods
- [ ] Document how to rollback deployment
- [ ] Document how to access logs and metrics
- [ ] Setup on-call rotation
- [ ] Schedule post-launch retrospective (1 week)

---

## ROLLBACK PROCEDURE (If Issues Occur)

### Kubernetes Rollback
```bash
# See rollout history
kubectl -n production rollout history deployment/truth-layer-api

# Rollback to previous version
kubectl -n production rollout undo deployment/truth-layer-api

# Rollback to specific revision
kubectl -n production rollout undo deployment/truth-layer-api --to-revision=2

# Monitor rollback
kubectl -n production rollout status deployment/truth-layer-api
```

### Database Rollback
```bash
# If migration failed, rollback to previous state
npx prisma migrate resolve --rolled-back <migration_name>

# Restore from backup (AWS example)
aws rds create-db-instance-from-db-snapshot \
  --db-instance-identifier truth-layer-db-restored \
  --db-snapshot-identifier truth-layer-db-snapshot-2026-04-20
```

### Incident Response
1. **Detect:** Monitoring alerts trigger
2. **Assess:** Check logs and metrics for root cause
3. **Mitigate:** Scale down problematic pods or rollback deployment
4. **Communicate:** Notify stakeholders of incident and ETA
5. **Fix:** Apply hotfix if needed, test in staging
6. **Deploy:** Redeploy fixed version with zero-downtime
7. **Verify:** Run smoke tests and monitor for 1 hour
8. **Postmortem:** Document what happened and how to prevent

---

## ONGOING MAINTENANCE

### Weekly Tasks
- [ ] Review error logs for anomalies
- [ ] Check database performance (slow queries)
- [ ] Verify backup completion
- [ ] Check disk usage (should be <80%)

### Monthly Tasks
- [ ] Review and update monitoring thresholds
- [ ] Run load test to ensure performance is maintained
- [ ] Review security logs for suspicious activity
- [ ] Check for new npm vulnerabilities: `npm audit`
- [ ] Review database indexes for optimization opportunities

### Quarterly Tasks
- [ ] Disaster recovery drill (restore from backup)
- [ ] Capacity planning review (do we need more resources?)
- [ ] Security audit of access controls and permissions
- [ ] Performance profiling and optimization

### Annual Tasks
- [ ] Full security penetration test
- [ ] Load testing at 2x current peak traffic
- [ ] Architecture review and tech debt assessment
- [ ] License compliance check (npm packages)

---

## SUPPORT CONTACTS

| Role | Name | Email | On-Call |
|------|------|-------|---------|
| Tech Lead | [Name] | [email] | Yes/No |
| DevOps | [Name] | [email] | Yes/No |
| Security | [Name] | [email] | Yes/No |
| DBA | [Name] | [email] | Yes/No |

---

## QUICK REFERENCE

### Essential Commands
```bash
# Build
npm run build

# Test
npm run test
npm run test:cov

# Docker
docker compose up -d
docker compose down

# Kubernetes
kubectl -n production get pods
kubectl -n production logs -f deployment/truth-layer-api
kubectl -n production port-forward svc/truth-layer-api 3000:3000

# Database
npx prisma studio
npx prisma migrate dev
npx prisma db push

# Health Check
curl http://localhost:3000/health
curl -H "Authorization: Bearer <token>" http://localhost:3000/api/v1/devices
```

---

**Checklist Version:** 1.0  
**Last Updated:** April 20, 2026  
**Next Review:** Before staging deployment
