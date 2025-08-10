// 'use client'

// import React from 'react'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { createAppKit } from '@reown/appkit/react'
// import { WagmiProvider } from 'wagmi'

// // Config bạn để chỗ này, giữ nguyên hoặc chỉnh sửa cho phù hợp
// export const wagmiConfig = {
//   /* ... */
// }
// export const wagmiAdapter = {
//   /* ... */
// }

// // Tạo QueryClient cho react-query
// const queryClient = new QueryClient()

// // Tạo AppKit instance từ createAppKit
// const appKit = createAppKit({
//   adapters: [wagmiAdapter],
//   networks: wagmiAdapter.networks,
//   projectId: wagmiAdapter.projectId,
//   metadata: {
//     name: 'Monad DApp',
//     description: 'Demo connect Monad wallet',
//     url: typeof window !== 'undefined' ? window.location.origin : '',
//     icons: ['https://yourdomain.com/icon.png'], // Thay bằng URL icon thật
//   },
//   features: {
//     analytics: true,
//   },
// })

// // Bây giờ lấy AppKit.Provider ra để wrap component (theo docs của @reown/appkit)
// const { Provider: AppKitProviderInner } = appKit

// // Component Provider chính
// export function AppKitProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <WagmiProvider config={wagmiConfig}>
//       <QueryClientProvider client={queryClient}>
//         <AppKitProviderInner>{children}</AppKitProviderInner>
//       </QueryClientProvider>
//     </WagmiProvider>
//   )
// }
