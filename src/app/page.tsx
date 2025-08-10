'use client'
import Image from 'next/image'
import { monadTestnet } from '@reown/appkit/networks'

export default function Home() {
  const handleConnect = () => {
    alert('Connecting to Monad Testnet wallet...')
  }

  return (
    <div className="container">
      <h1>Welcome to Monad Testnet</h1>
      <button className="button-connect" onClick={handleConnect}>
        Connect Wallet
      </button>
    </div>
  )
}
