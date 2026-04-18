# Stub Features — What Is NOT Production-Ready

## TPM Attestation Validation
File: `device.service.ts` → `validateTPMAttestation()`  
Current: Accepts any base64 string > 100 chars  
Needed: Integrate a real TPM library (e.g. `tpm2-tss` via FFI, or hardware attestation service)

## ZK Proof Generation  
File: `verification.service.ts` → `generateProofByType()`  
Current: setTimeout + crypto.randomBytes — fake proof  
Needed: gRPC call to zk-engine container (`ZK_ENGINE_URL`)

## File Signature Verification  
File: `media.service.ts` → `verifyFileSignature()`  
Current: Returns true for any string ≥ 32 chars  
Needed: `crypto.verify()` with device's actual TPM public key

## Blockchain Anchoring  
File: `blockchain.service.ts` → `anchorToArweave()` / `anchorToSolana()`  
Current: Fake transaction IDs, status auto-set to 'confirmed'  
Needed: Arweave JS SDK + @solana/web3.js integration

