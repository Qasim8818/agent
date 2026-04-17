FROM rust:1.80-slim as builder

WORKDIR /app

# Copy Cargo files
COPY Cargo.toml Cargo.lock* ./

# Create dummy src to satisfy cargo build
RUN mkdir src && echo 'fn main() { println!(\"stub\"); }' > src/main.rs

# Download deps
RUN cargo build --release
RUN rm target/release/deps/zk_engine* || true

# Copy source (volume mounted at runtime)
COPY src ./src

# Build
RUN cargo build --release

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY --from=builder /app/target/release/zk-engine /app/zk-engine

EXPOSE 50051 8001

VOLUME ["/app/src", "/app/keys"]

CMD ["/app/zk-engine"]
