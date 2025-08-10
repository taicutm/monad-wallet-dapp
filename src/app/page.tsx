'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { useEffect, useState } from 'react'
import { createPublicClient, http, formatEther } from 'viem'
import { MONAD_NETWORK } from '../../monadconfig'

export default function HomePage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [balance, setBalance] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchBalance = async () => {
      if (!address) return setBalance(null)
      setLoading(true)
      try {
        const client = createPublicClient({
          chain: MONAD_NETWORK,
          transport: http(),
        })
        const bal = await client.getBalance({
          address: address as `0x${string}`,
        })
        // kết quả bal đang quá dài 13.306864468264323709 MON chỉ lấy 2 chữ số sau dấu .
        setBalance(formatEther(bal).slice(0, 6))
      } catch (e) {
        setBalance('0')
      }
      setLoading(false)
    }
    if (isConnected && address) fetchBalance()
    else setBalance(null)
  }, [isConnected, address])

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0c3fc 100%)',
      }}
    >
      <div
        className="card shadow-lg p-4 border-0"
        style={{
          minWidth: 350,
          maxWidth: 400,
          borderRadius: 24,
          background: 'rgba(255,255,255,0.95)',
        }}
      >
        <h2
          className="text-center fw-bold mb-4"
          style={{
            background: 'linear-gradient(90deg, #7f53ac, #657ced, #43cea2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: 32,
            letterSpacing: 1,
          }}
        >
          Monad Wallet Demo
        </h2>
        {!isConnected ? (
          <button
            className="btn btn-lg w-100 mb-2 fw-semibold text-white"
            style={{
              background: 'linear-gradient(90deg, #7f53ac, #43cea2)',
              boxShadow: '0 4px 24px 0 #7f53ac33',
              fontSize: 20,
              borderRadius: 16,
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => connect({ connector: connectors[0] })}
          >
            <span style={{ fontWeight: 600, letterSpacing: 1 }}>
              Kết nối ví
            </span>
          </button>
        ) : (
          <>
            <div
              className="alert alert-success d-flex flex-column align-items-center justify-content-center mb-3"
              style={{ borderRadius: 12 }}
            >
              <div>
                <span className="fw-bold me-2">Đã kết nối:</span>
                <span className="font-monospace">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
              </div>
              <div className="mt-2">
                <span className="fw-bold me-2">Số dư MON:</span>
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                  />
                ) : (
                  <span className="font-monospace text-primary">
                    {balance ?? '--'} MON
                  </span>
                )}
              </div>
            </div>
            <button
              className="btn btn-lg w-100 fw-semibold text-white"
              style={{
                background: 'linear-gradient(90deg, #ff5858, #f09819)',
                boxShadow: '0 4px 24px 0 #ff585833',
                fontSize: 20,
                borderRadius: 16,
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onClick={() => disconnect()}
            >
              <span style={{ fontWeight: 600, letterSpacing: 1 }}>
                Ngắt kết nối
              </span>
            </button>
          </>
        )}
        <div
          className="text-center text-secondary mt-4"
          style={{ fontSize: 14 }}
        >
          © {new Date().getFullYear()} Monad Wallet Demo
        </div>
      </div>
    </div>
  )
}
