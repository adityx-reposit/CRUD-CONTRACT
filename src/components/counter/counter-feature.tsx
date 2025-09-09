'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletButton } from '../solana/solana-provider'
import { ExplorerLink } from '../cluster/cluster-ui'
import { usecrud_appProgram } from './crud_app-data-access'
import { crud_appCreate, crud_appList } from './crud_app-ui'
import { AppHero } from '../app-hero'
import { ellipsify } from '@/lib/utils'

export default function crud_appFeature() {
  const { publicKey } = useWallet()
  const { programId } = usecrud_appProgram()

  return publicKey ? (
    <div>
      <AppHero
        title="crud_app"
        subtitle={
          'Create a new account by clicking the "Create" button. The state of a account is stored on-chain and can be manipulated by calling the program\'s methods (increment, decrement, set, and close).'
        }
      >
        <p className="mb-6">
          <ExplorerLink path={`account/${programId}`} label={ellipsify(programId.toString())} />
        </p>
        <crud_appCreate />
      </AppHero>
      <crud_appList />
    </div>
  ) : (
    <div className="max-w-4xl mx-auto">
      <div className="hero py-[64px]">
        <div className="hero-content text-center">
          <WalletButton />
        </div>
      </div>
    </div>
  )
}
