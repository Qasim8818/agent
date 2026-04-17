use tonic::{transport::Server, Request, Response, Status};
use tracing::*;

mod proto {
    tonic::include_proto!("zkengine");
}

use proto::{proof_service_server::{ProofService, ProofServiceServer}, VerifyProofRequest, VerifyProofResponse};

pub mod proto {
    tonic::include_proto!("zkengine");
}

#[derive(Debug, Default)]
pub struct ZkProofService {}

#[tonic::async_trait]
impl ProofService for ZkProofService {
    async fn verify_proof(
        &self,
        request: Request<VerifyProofRequest>,
    ) -> Result<Response<VerifyProofResponse>, Status> {
        info!("VerifyProof = {:?}", request);
        let reply = VerifyProofResponse {
            valid: true,
            error: \"\".to_string(),
        };
        Ok(Response::new(reply))
    }
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::fmt::init();

    let addr = \"[::1]:50051\".parse()?;
    let proof_service = ZkProofService::default();

    println!(\"ZK Engine stub listening on {:?}\", addr);

    Server::builder()
        .add_service(ProofServiceServer::new(proof_service))
        .serve(addr)
        .await?;

    Ok(())
}
