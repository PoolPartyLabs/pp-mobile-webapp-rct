import { FunctionComponent } from 'react'
import TextInput11 from './TextInput11'
import SocialButtons11 from './SocialButtons11'
import '@reown/appkit-wallet-button/react'
import { useAppKitWallet } from '@reown/appkit-wallet-button/react'
import { useAppKitAccount } from '@reown/appkit/react'

export type DeFiInvestmentsType = {
  className?: string
}

const DeFiInvestments: FunctionComponent<DeFiInvestmentsType> = ({
  className = '',
}) => {
  const { address, isConnected, caipAddress, status, embeddedWalletInfo } =
    useAppKitAccount()

  console.log(
    '{ address, isConnected, caipAddress, status, embeddedWalletInfo } :>> ',
    { address, isConnected, caipAddress, status, embeddedWalletInfo }
  )
  const { connect } = useAppKitWallet()
  return (
    <section
      className={`absolute top-[434px] left-[0px] rounded-t-radius-28 rounded-b-none bg-bg-white-0 w-full h-full overflow-hidden flex flex-col items-start justify-start pt-[34px] pb-[22px] pl-[37px] pr-[27px] box-border gap-10 z-[1] text-left text-font-size-heading-5 text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-3.5">
        <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.2px] leading-[32px] font-[600] font-[inherit]">
          <p className="m-0">{`Simplified `}</p>
          <p className="m-0 text-gold">DeFi Investments</p>
        </h2>
        <div className="self-stretch relative text-font-size-title-2 tracking-[-0.2px] leading-[24px] font-[500]">
          Ideal for those looking to enter DeFi with security and intelligence.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 pl-px pr-2.5 text-font-size-body-2 text-text-sub-600">
        <div className="flex flex-col items-center justify-center gap-spacing-spacing-16">
          {/* <appkit-wallet-button wallet="google" /> */}
          <SocialButtons11
            brand="Google"
            onlyIcon="Off"
            state="Default"
            style="Filled"
            editText="Sign in with Google"
            onClick={() => connect('google')}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[19px] pr-7 text-center text-font-size-paragraph">
        <div className="flex-1 relative leading-[16px] font-[500]">
          <span>{`By continuing, you accept our `}</span>
          <span className="text--Theme-primary-base">{`Terms & Conditions `}</span>
          <span>and</span>
          <span className="text--Theme-primary-base"> Privacy Policy.</span>
        </div>
      </div>
    </section>
  )
}

export default DeFiInvestments
