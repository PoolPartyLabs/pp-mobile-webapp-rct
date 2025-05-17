import { FunctionComponent, useEffect } from 'react'
import DeFiInvestments from '../components/DeFiInvestments'
import { useAppKitAccount, useAppKitNetwork } from '@reown/appkit/react'
import { useNavigate } from 'react-router-dom'

//solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K
const LoginScreen: FunctionComponent = () => {
  const { isConnected } = useAppKitAccount()
  const { caipNetwork, caipNetworkId, chainId, switchNetwork } =
    useAppKitNetwork()
  const navigate = useNavigate()

  useEffect(() => {
    if (isConnected) {
      // switchNetwork('solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K')
      navigate('/')
    }
  }, [isConnected, navigate])
  console.log(' { caipNetwork, caipNetworkId, chainId, switchNetwork } :>> ', {
    caipNetwork,
    caipNetworkId,
    chainId,
    switchNetwork,
  })
  return (
    <div className="w-full h-screen flex-grow relative overflow-hidden bg-black bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-10 h-[796px]">
        <img
          className="absolute top-[112px] w-[329px] h-[329px] overflow-hidden"
          alt=""
          src="/showingpridestreamlinebarcelona1.svg"
        />
        <DeFiInvestments />
      </div>
    </div>
  )
}

export default LoginScreen
