# Build stage
FROM rust:1.75-alpine AS builder

RUN apk add --no-cache musl-dev protobuf-dev

WORKDIR /build

# Copy Cargo files
COPY Cargo.toml Cargo.lock ./

# Copy source code
COPY src ./src

# Build the Rust binary
RUN cargo build --release

# Runtime stage
FROM alpine:latest

RUN apk add --no-cache ca-certificates libc6-compat

WORKDIR /app

# Copy binary from builder
COPY --from=builder /build/target/release/pq_signer ./pq_signer

# Create keys directory
RUN mkdir -p /app/keys

# Expose ports
EXPOSE 50051 8001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8001/health || exit 1

# Run the application
CMD ["./pq_signer"]
