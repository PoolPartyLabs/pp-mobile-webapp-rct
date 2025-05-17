import { Connection, PublicKey, Transaction } from '@solana/web3.js'
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token'

/**
 * Creates an associated token account for a given wallet and token mint
 *
 * @param connection Solana connection
 * @param payer Wallet address that will pay for the transaction
 * @param mint Token mint address
 * @param owner Wallet address that will own the token account (usually same as payer)
 * @param signTransaction Function to sign the transaction
 * @returns The associated token account address
 */
export async function createAssociatedTokenAccountHelper(
  connection: Connection,
  payer: PublicKey,
  mint: PublicKey,
  owner: PublicKey,
  signTransaction: (transaction: Transaction) => Promise<Transaction>
): Promise<PublicKey> {
  // Get the associated token account address
  const associatedTokenAddress = await getAssociatedTokenAddress(mint, owner)

  // Check if the account already exists
  const accountInfo = await connection.getAccountInfo(associatedTokenAddress)

  // If account doesn't exist, create it
  if (!accountInfo) {
    console.log(
      `Creating associated token account: ${associatedTokenAddress.toString()}`
    )

    // Create instruction to create associated token account
    const instruction = createAssociatedTokenAccountInstruction(
      payer, // Payer
      associatedTokenAddress, // Associated token account address
      owner, // Owner
      mint // Token mint
    )

    // Create and sign transaction
    const transaction = new Transaction().add(instruction)
    transaction.feePayer = payer
    transaction.recentBlockhash = (
      await connection.getLatestBlockhash()
    ).blockhash

    // Sign the transaction
    const signedTransaction = await signTransaction(transaction)

    // Send and confirm transaction
    const txSignature = await connection.sendRawTransaction(
      signedTransaction.serialize()
    )
    await connection.confirmTransaction(txSignature)

    console.log(
      `Associated token account created: ${associatedTokenAddress.toString()}`
    )
  } else {
    console.log(
      `Associated token account already exists: ${associatedTokenAddress.toString()}`
    )
  }

  return associatedTokenAddress
}
