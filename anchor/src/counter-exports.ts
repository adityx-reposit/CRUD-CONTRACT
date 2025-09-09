// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import crud_appIDL from '../target/idl/crud_app.json'
import type { crud_app } from '../target/types/crud_app'

// Re-export the generated IDL and type
export { crud_app, crud_appIDL }

// The programId is imported from the program IDL.
export const crud_app_PROGRAM_ID = new PublicKey(crud_appIDL.address)

// This is a helper function to get the crud_app Anchor program.
export function getcrud_appProgram(provider: AnchorProvider, address?: PublicKey): Program<crud_app> {
  return new Program({ ...crud_appIDL, address: address ? address.toBase58() : crud_appIDL.address } as crud_app, provider)
}

// This is a helper function to get the program ID for the crud_app program depending on the cluster.
export function getcrud_appProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the crud_app program on devnet and testnet.
      return new PublicKey('coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF')
    case 'mainnet-beta':
    default:
      return crud_app_PROGRAM_ID
  }
}
