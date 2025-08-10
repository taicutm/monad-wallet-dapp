// 'use client'
// import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
// import { configureChains, createConfig, Connector } from 'wagmi'
// import { InjectedConnector } from '@wagmi/core/connectors/injected'
// import { monadTestnet } from '@reown/appkit/networks'
// import { publicClient } from '@wagmi/core' // Import publicClient từ @wagmi/core

// const { chains } = configureChains(
//   [monadTestnet],
//   [publicClient({ chainId: monadTestnet.id })]
// )
// const config = createConfig({
//   autoConnect: false, // Tắt autoConnect để kiểm soát thủ công
//   connectors: [new InjectedConnector({ chains })],
// })

// export default function WalletConnect() {
//   const { address, isConnected } = useAccount()
//   const { connect } = useConnect()
//   const { disconnect } = useDisconnect()
//   const { data: balance } = useBalance({
//     address,
//     chainId: monadTestnet.id,
//   })

//   if (!isConnected)
//     return <button onClick={() => connect()}>Connect Wallet</button>

//   return (
//     <div>
//       <p>Địa chỉ ví: {address}</p>
//       <p>Số dư MON: {balance ? balance.formatted : 'Đang tải...'}</p>
//       <button onClick={() => disconnect()}>Ngắt kết nối</button>
//     </div>
//   )
// }
