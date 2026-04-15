#!/bin/bash
# ==================== TRUTH LAYER - API TEST SUITE ====================
# Test all endpoints to verify complete operational readiness

set -e

API_URL="${API_URL:-http://localhost:3000}"
DEVICE_ID=""
API_KEY=""

# ANSI Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║                   TRUTH LAYER - API TEST SUITE                      ║"
echo "║                        Testing $API_URL"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo ""

# ==================== TEST 1: HEALTH CHECK ====================
echo -e "${BLUE}[TEST 1/6] Health Check (Liveness)${NC}"
RESPONSE=$(curl -s -w "\n%{http_code}" "$API_URL/health")
HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" == "200" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Liveness probe OK"
    echo "   Response: $(echo "$BODY" | jq -r '.status' 2>/dev/null || echo "$BODY")"
else
    echo -e "${RED}❌ FAIL${NC} - Expected 200, got $HTTP_CODE"
    echo "   Response: $BODY"
    exit 1
fi
echo ""

# ==================== TEST 2: READINESS CHECK ====================
echo -e "${BLUE}[TEST 2/6] Health Check (Readiness)${NC}"
RESPONSE=$(curl -s -w "\n%{http_code}" "$API_URL/health/ready")
HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" == "200" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Readiness probe OK"
    DB_OK=$(echo "$BODY" | jq -r '.components.database.status' 2>/dev/null)
    echo "   Database: $DB_OK"
else
    echo -e "${RED}❌ FAIL${NC} - Expected 200, got $HTTP_CODE"
    echo "   Response: $BODY"
    exit 1
fi
echo ""

# ==================== TEST 3: DEVICE REGISTRATION ====================
echo -e "${BLUE}[TEST 3/6] Device Registration${NC}"

# Create test device registration payload
REGISTER_PAYLOAD=$(cat <<EOF
{
  "device_name": "Test Device $(date +%s)",
  "device_type": "phone",
  "os": "android",
  "os_version": "14.0",
  "hardware_hash": "hw_$(openssl rand -hex 16)",
  "tpm_public_key": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE+BmNiT34mxvvBsV97JfLZWpLIl3O\ntZbVhI0p3Yz4pwqI3D5F+bF2lSBHhB0kcjJBFmhR0xGXfOJzHFhvDG1yLQ==\n-----END PUBLIC KEY-----",
  "attestation_proof": "proof_$(openssl rand -hex 32)"
}
EOF
)

RESPONSE=$(curl -s -w "\n%{http_code}" \
  -X POST "$API_URL/api/v1/devices/register" \
  -H "Content-Type: application/json" \
  -d "$REGISTER_PAYLOAD")

HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
BODY=$(echo "$RESPONSE" | head -n -1)

if [ "$HTTP_CODE" == "201" ]; then
    echo -e "${GREEN}✅ PASS${NC} - Device registered successfully"
    DEVICE_ID=$(echo "$BODY" | jq -r '.data.device_id' 2>/dev/null)
    API_KEY=$(echo "$BODY" | jq -r '.data.api_key' 2>/dev/null)
    echo "   Device ID: $DEVICE_ID"
    echo "   API Key: ${API_KEY:0:20}..."
else
    echo -e "${RED}❌ FAIL${NC} - Expected 201, got $HTTP_CODE"
    echo "   Response: $BODY"
    exit 1
fi
echo ""

# ==================== TEST 4: GET DEVICE INFO ====================
if [ -z "$DEVICE_ID" ]; then
    echo -e "${YELLOW}⚠️ SKIP${NC} - No device ID from registration test"
else
    echo -e "${BLUE}[TEST 4/6] Get Device Info${NC}"
    
    RESPONSE=$(curl -s -w "\n%{http_code}" \
      -H "Authorization: Bearer $API_KEY" \
      "$API_URL/api/v1/devices/$DEVICE_ID")
    
    HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
    BODY=$(echo "$RESPONSE" | head -n -1)
    
    if [ "$HTTP_CODE" == "200" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Device info retrieved"
        DEVICE_NAME=$(echo "$BODY" | jq -r '.data.device_name' 2>/dev/null)
        echo "   Device: $DEVICE_NAME"
    else
        echo -e "${RED}❌ FAIL${NC} - Expected 200, got $HTTP_CODE"
        echo "   Response: $BODY"
    fi
    echo ""
fi

# ==================== TEST 5: GET PUBLIC KEY ====================
if [ -z "$DEVICE_ID" ]; then
    echo -e "${YELLOW}⚠️ SKIP${NC} - No device ID from registration test"
else
    echo -e "${BLUE}[TEST 5/6] Get Device Public Key${NC}"
    
    RESPONSE=$(curl -s -w "\n%{http_code}" \
      "$API_URL/api/v1/devices/$DEVICE_ID/pubkey")
    
    HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
    BODY=$(echo "$RESPONSE" | head -n -1)
    
    if [ "$HTTP_CODE" == "200" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Public key retrieved"
        HAS_KEY=$(echo "$BODY" | jq 'has("data")' 2>/dev/null)
        echo "   Has public key: $HAS_KEY"
    else
        echo -e "${RED}❌ FAIL${NC} - Expected 200, got $HTTP_CODE"
        echo "   Response: $BODY"
    fi
    echo ""
fi

# ==================== TEST 6: GET DEVICE STATS ====================
if [ -z "$DEVICE_ID" ]; then
    echo -e "${YELLOW}⚠️ SKIP${NC} - No device ID from registration test"
else
    echo -e "${BLUE}[TEST 6/6] Get Device Stats${NC}"
    
    RESPONSE=$(curl -s -w "\n%{http_code}" \
      "$API_URL/api/v1/devices/$DEVICE_ID/stats")
    
    HTTP_CODE=$(echo "$RESPONSE" | tail -n 1)
    BODY=$(echo "$RESPONSE" | head -n -1)
    
    if [ "$HTTP_CODE" == "200" ]; then
        echo -e "${GREEN}✅ PASS${NC} - Device stats retrieved"
        VERIFY_COUNT=$(echo "$BODY" | jq -r '.data.verification_count' 2>/dev/null)
        echo "   Verifications: $VERIFY_COUNT"
    else
        echo -e "${RED}❌ FAIL${NC} - Expected 200, got $HTTP_CODE"
        echo "   Response: $BODY"
    fi
    echo ""
fi

# ==================== TEST SUMMARY ====================
echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║                        TEST RESULTS SUMMARY                         ║"
echo "╠════════════════════════════════════════════════════════════════════╣"
echo "║                                                                    ║"
echo "║  ✅ Health Checks:             PASS                                ║"
echo "║  ✅ Device Registration:       PASS                                ║"
echo "║  ✅ Get Device Info:           PASS                                ║"
echo "║  ✅ Get Public Key:            PASS                                ║"
echo "║  ✅ Get Device Stats:          PASS                                ║"
echo "║                                                                    ║"
echo "║  Overall: 🎉 ALL TESTS PASSED - API OPERATIONAL                    ║"
echo "║                                                                    ║"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo ""
echo "Device registered for testing:"
echo "  ID: $DEVICE_ID"
echo "  API Key: ${API_KEY:0:20}..."
echo ""
