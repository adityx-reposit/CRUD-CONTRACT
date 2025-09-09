import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Keypair } from '@solana/web3.js'
import { crud_app } from '../target/types/counter'
import { describe, it } from 'node:test'

describe('counter', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env()
  anchor.setProvider(provider)
  const payer = provider.wallet as anchor.Wallet

  const program = anchor.workspace.Counter as Program<crud_app>

  const counterKeypair = Keypair.generate()
   it("create the jouney app")


 
  })
