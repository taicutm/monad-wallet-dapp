import { createConfig, http } from 'wagmi'
import { monadTestnet } from '@reown/appkit/networks'
import { MONAD_NETWORK } from './monadconfig'

export const wagmiConfig = createConfig({
  chains: [MONAD_NETWORK], // hoặc [monadTestnet]
  transports: {
    [MONAD_NETWORK.id]: http(),
  },
})
