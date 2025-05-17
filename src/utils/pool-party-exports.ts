// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import PoolPartyIDL from '../target/idl/pool_party.json'
import type { PoolParty } from '../target/types/pool_party'

// Re-export the generated IDL and type
export { PoolParty, PoolPartyIDL }

// The programId is imported from the program IDL.
export const POOL_PARTY_PROGRAM_ID = new PublicKey(PoolPartyIDL.address)

// This is a helper function to get the PoolParty Anchor program.
export function getPoolPartyProgram(provider: AnchorProvider, address?: PublicKey): Program<PoolParty> {
  return new Program({ ...PoolPartyIDL, address: address ? address.toBase58() : PoolPartyIDL.address } as PoolParty, provider)
}

// This is a helper function to get the program ID for the PoolParty program depending on the cluster.
export function getPoolPartyProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the PoolParty program on devnet and testnet.
      return new PublicKey('3inmw7qcywQirQoNSL54MhqoG7CJ58ZYwVCYSmC1TTB4')
    case 'mainnet-beta':
    default:
      return new PublicKey('3inmw7qcywQirQoNSL54MhqoG7CJ58ZYwVCYSmC1TTB4')

    // return POOL_PARTY_PROGRAM_ID
  }
}
