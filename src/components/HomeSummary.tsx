import { FunctionComponent, useEffect, useState } from 'react'
import Wallet from './Wallet'
import ProcentCircle from './ProcentCircle'
import Tag11 from './Tag11'
import Navbar from './Navbar'
import { useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import { useAppKitBalance } from '@reown/appkit/react'
import { useAppKitState } from '@reown/appkit/react'
import { useWalletInfo } from '@reown/appkit/react'

export type HomeSummaryType = {
  className?: string
}
type BalanceResult = {
  data?: {
    formatted: string
    symbol: string
  }
  error: string | null
  isSuccess: boolean
  isError: boolean
}
const HomeSummary: FunctionComponent<HomeSummaryType> = ({
  className = '',
}) => {
  const { disconnect } = useDisconnect()
  const { fetchBalance } = useAppKitBalance()
  const [balance, setBalance] = useState<BalanceResult | undefined>(undefined)
  const { isConnected } = useAppKitAccount()
  const { open, selectedNetworkId } = useAppKitState()
  const { walletInfo } = useWalletInfo()

  // console.log('walletInfo :>> ', walletInfo.name)
  // console.log('{ open, selectedNetworkId } :>> ', { open, selectedNetworkId })
  useEffect(() => {
    if (isConnected) {
      fetchBalance()
        .then(setBalance)
        .catch((error) => {
          console.error('Error fetching balance:', error)
          // You might want to set an error state here or show a notification
          // For example:
          // setError('Failed to fetch balance')
          // or
          // toast.error('Unable to retrieve your balance')
        })
    }
  }, [isConnected, fetchBalance])

  return (
    <section
      className={`w-[93%] max-w-md mx-auto shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] flex flex-col items-center justify-center my-auto text-left text-font-size-paragraph text-text-sub-600 font-Web-title-1-normal ${className}`}
    >
      <div className="self-stretch rounded-radius-24 bg-bg-white-0 border-gray border-solid border-[1px] flex flex-col items-center justify-center pt-0 px-0 pb-3.5 gap-spacing-spacing-16 mt-[19px] ml-[6px]">
        <div className="w-full overflow-hidden flex flex-col items-center justify-center pt-spacing-spacing-32 px-spacing-spacing-16 pb-0 box-border gap-spacing-spacing-32">
          <div className="self-stretch flex flex-row items-start justify-between gap-0">
            <div className="flex flex-row items-center justify-start gap-spacing-spacing-16">
              <img
                className="w-10 relative rounded-81xl max-h-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/rumi1.svg"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-font-line-height-paragraph font-font-weight-default-normal">
                  Hi.
                </div>
                <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-normal text-text-strong-950">
                  Rafael Zochling
                </div>
              </div>
            </div>
            <button
              onClick={() => disconnect()}
              className="h-10 rounded-radius-10 bg-alpha-gray-alpha-10 overflow-hidden flex flex-row items-center justify-center py-0 px-2.5 box-border gap-1 min-h-[40px] max-h-[40px] text-font-size-body-2 text-green-500"
            >
              {/* <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/frame.svg"
              /> */}
              <div className="flex flex-row items-center justify-center py-0 px-1">
                <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium">
                  Disconnect
                </div>
              </div>
            </button>
          </div>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-spacing-spacing-8">
            <div className="h-[150px] w-full sm:w-[48%] shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-radius-16 bg-bg-white-0 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden flex flex-col items-start justify-between p-spacing-spacing-16 gap-0">
              <Wallet style="Line" vector="/vector-13.svg" />
              <div className="flex flex-col items-start justify-start gap-spacing-spacing-4">
                <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
                  Wallet Balance
                </div>
                <div className="relative text-font-size-heading-5 tracking-[-0.2px] leading-[32px] font-[500] text-text-strong-950 text-center">
                  {(balance && balance.data?.formatted) || 0}{' '}
                  {balance && balance.data?.symbol}
                </div>
              </div>
            </div>
            {/* <div className="h-[150px] w-full sm:w-[48%] shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-radius-16 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden flex flex-col items-start justify-between p-spacing-spacing-16 relative gap-0">
              <ProcentCircle style="Line" vector="/vector-22.svg" />
              <Tag11
                dismissIcon="Off"
                state="Default"
                style="Gray"
                type="📂 Basic"
                editText="Start Earn"
                sublabel={false}
                editSublabel="(4)"
              />
              <img
                className="w-40 h-[865px] absolute !!m-[0 important] top-[-473px] left-[-3px] object-contain z-[2]"
                alt=""
                src="/vector-32.svg"
              />
            </div> */}
          </div>
        </div>
        <Navbar />
      </div>
    </section>
  )
}

export default HomeSummary
