import { useContext } from 'react'
import { WalletKitContext } from '../App'

export const useWalletKit = () => {
  return useContext(WalletKitContext)
}
