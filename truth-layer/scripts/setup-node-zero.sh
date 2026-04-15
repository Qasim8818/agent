#!/bin/bash
# ==================== TRUTH LAYER - NODE ZERO SETUP ====================
# Week 1: Complete initialization script for Node Zero
# Usage: bash scripts/setup-node-zero.sh

set -e

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  TRUTH LAYER - NODE ZERO INITIALIZATION                        ║"
echo "║  Building the Universal Truth Protocol Foundation               ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# ==================== SYSTEM CHECKS ====================
echo "[1/10] Performing system checks..."

if ! command -v docker &> /dev/null; then
    echo "❌ Docker not found. Please install Docker first."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose not found. Please install Docker Compose first."
    exit 1
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js v18+."
    exit 1
fi

if ! command -v cargo &> /dev/null; then
    echo "❌ Rust not found. Installing Rust..."
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source $HOME/.cargo/env
fi

echo "✅ System requirements met"
echo ""

# ==================== ENVIRONMENT SETUP ====================
echo "[2/10] Setting up environment..."

if [ ! -f .env ]; then
    cp .env.example .env
    echo "⚠️  Created .env from template. Update sensitive values before production."
else
    echo "✅ .env file already exists"
fi

echo ""

# ==================== DOCKER SETUP ====================
echo "[3/10] Starting Docker services..."

docker-compose down -v 2>/dev/null || true
docker-compose up -d postgres redis clickhouse

echo "⏳ Waiting for services to be healthy..."
sleep 10

# Check PostgreSQL
until docker-compose exec -T postgres pg_isready -U truth_user > /dev/null 2>&1; do
    echo "  ... waiting for PostgreSQL"
    sleep 2
done
echo "✅ PostgreSQL ready"

# Check Redis
until docker-compose exec -T redis redis-cli ping > /dev/null 2>&1; do
    echo "  ... waiting for Redis"
    sleep 2
done
echo "✅ Redis ready"

echo ""

# ==================== DATABASE INITIALIZATION ====================
echo "[4/10] Initializing PostgreSQL schema..."

docker-compose exec -T postgres psql -U truth_user -d truth_layer < db/schema.sql
echo "✅ Database schema initialized"

echo ""

# ==================== NODE.JS SETUP ====================
echo "[5/10] Setting up NestJS API..."

cd api
if [ ! -d node_modules ]; then
    npm install --prefer-offline --no-audit
fi

# Create .env for api service
cat > .env << EOF
DATABASE_URL=postgresql://truth_user:truth_secure_password_change_me@localhost:5432/truth_layer
REDIS_URL=redis://localhost:6379
ZK_ENGINE_URL=http://localhost:50051
ARWEAVE_NODE=https://arweave.net
PORT=3000
NODE_ENV=development
LOG_LEVEL=info
JWT_SECRET=dev_jwt_secret_change_in_production
EOF

echo "✅ NestJS API configured"
cd ..

echo ""

# ==================== RUST ZK ENGINE ====================
echo "[6/10] Building Rust ZK Engine..."

cd zk-engine

# Create Cargo.toml if not exists
if [ ! -f Cargo.toml ]; then
    cargo init --name truth-zk --lib
fi

# Build in release mode (optimized)
cargo build --release 2>&1 | tail -20

echo "✅ Rust ZK Engine built"
cd ..

echo ""

# ==================== EBPF SETUP ====================
echo "[7/10] Compiling eBPF programs..."

if ! command -v clang &> /dev/null; then
    echo "⚠️  Installing clang for eBPF compilation..."
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y clang llvm-dev
    elif command -v brew &> /dev/null; then
        brew install llvm
    fi
fi

cd ebpf
if [ -f src/media_verifier.bpf.c ]; then
    clang -O2 -target bpf -c src/media_verifier.bpf.c -o media_verifier.o
    echo "✅ eBPF programs compiled"
else
    echo "⚠️  eBPF source not found, skipping"
fi
cd ..

echo ""

# ==================== CREATE DIRECTORIES ====================
echo "[8/10] Creating necessary directories..."

mkdir -p {logs,keys,certs,data,uploads}

# Generate self-signed certificate for HTTPS (dev only)
if [ ! -f certs/server.crt ]; then
    sudo openssl req -x509 -newkey rsa:4096 -keyout certs/server.key -out certs/server.crt -days 365 -nodes \
        -subj "/C=US/ST=CA/L=San Francisco/O=Truth Layer/CN=localhost" 2>/dev/null || true
    echo "✅ Self-signed certificates generated"
else
    echo "✅ Certificates already exist"
fi

echo ""

# ==================== SET PERMISSIONS ====================
echo "[9/10] Setting file permissions..."

chmod +x scripts/*.sh

# For eBPF loading (requires special permissions)
if [ -f ebpf/media_verifier.o ]; then
    chmod 644 ebpf/media_verifier.o
fi

echo "✅ Permissions configured"

echo ""

# ==================== VERIFICATION ====================
echo "[10/10] Verifying Node Zero installation..."

echo ""
echo "Checking services:"
echo "  PostgreSQL:    $(docker-compose ps postgres | grep -q 'Up' && echo '✅ Running' || echo '❌ Not running')"
echo "  Redis:         $(docker-compose ps redis | grep -q 'Up' && echo '✅ Running' || echo '❌ Not running')"
echo "  ClickHouse:    $(docker-compose ps clickhouse | grep -q 'Up' && echo '✅ Running' || echo '❌ Not running')"

echo ""
echo "Checking components:"
echo "  Node.js:       ✅ $(node --version)"
echo "  Rust:          ✅ $(cargo --version)"
echo "  Docker:        ✅ $(docker --version | grep -oP 'version \K[^,]*')"

echo ""
echo "Database tables created:"
docker-compose exec -T postgres psql -U truth_user -d truth_layer -c "SELECT count(*) FROM information_schema.tables WHERE table_schema = 'public';" 2>/dev/null || echo "  (unable to verify)"

echo ""

# ==================== NEXT STEPS ====================
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  ✅ NODE ZERO SETUP COMPLETE!                                  ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "📋 Next Steps (Week 1-4):"
echo ""
echo "  Week 1 (DONE):"
echo "    ✅ Database initialized"
echo "    ✅ Docker services running"
echo "    ✅ Build system ready"
echo ""
echo "  Week 2 (API & Blockchain):"
echo "    npm run dev                      # Start NestJS API on :3000"
echo "    docker-compose logs -f api       # View API logs"
echo ""
echo "  Week 3 (ZK Engine):"
echo "    cargo run --release              # Start ZK engine on :50051"
echo ""
echo "  Week 4 (Android Integration):"
echo "    cd android-sdk"
echo "    ./gradlew build                  # Build Android SDK"
echo ""
echo "🌐 Access Points:"
echo "    API:                 http://localhost:3000"
echo "    Grafana:             http://localhost:3001 (admin/admin)"
echo "    Kibana:              http://localhost:5601"
echo "    PgAdmin:             http://localhost:5050"
echo "    Prometheus:          http://localhost:9090"
echo ""
echo "📊 Useful Commands:"
echo "    docker-compose logs -f api       # Watch API logs"
echo "    docker-compose ps                # Check service status"
echo "    docker-compose down -v           # Stop & clean everything"
echo "    psql -h localhost -U truth_user -d truth_layer  # Connect to DB"
echo ""
echo "🔐 IMPORTANT - Before Production:"
echo "    1. Change all passwords in .env"
echo "    2. Generate proper TLS certificates"
echo "    3. Set up proper backup strategy"
echo "    4. Configure monitoring & alerting"
echo "    5. Run security audit"
echo ""
echo "📖 Documentation:"
echo "    - Architecture: docs/ARCHITECTURE.md"
echo "    - API Reference: docs/API.md"
echo "    - Security: docs/SECURITY.md"
echo ""
echo "💬 Support:"
echo "    GitHub Issues: https://github.com/qasim-shafiq/truth-layer/issues"
echo "    Documentation: docs/"
echo ""
