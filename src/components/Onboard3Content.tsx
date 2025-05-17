import { FunctionComponent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import StepperDot11 from './StepperDot11'

export type OnboardHomeContentType = {
  className?: string
}

const OnboardHomeContent: FunctionComponent<OnboardHomeContentType> = ({
  className = '',
}) => {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    document.cookie = 'hasSeenOnboarding=true;max-age=31536000;path=/' // Expires in 1 year (31536000 seconds)
    navigate('/')
  }, [navigate])
  return (
    <div
      className={`rounded-t-[28px] bg-[#171717] overflow-hidden flex flex-col items-center justify-start p-spacing-spacing-32 gap-spacing-spacing-40 z-[1] relative text-left text-[26px] text-[#fff] font-Web-title-1-normal ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start gap-3.5">
        <h2 className="m-0 w-full relative text-[length:inherit] tracking-[-0.2px] leading-[32px] font-semibold font-[inherit]">
          <span>{`Your Money, `}</span>
          <br />
          <span className="text-[#fff142]">your terms ;)</span>
        </h2>
        <div className="w-full relative text-font-size-title-2 tracking-[-0.2px] leading-font-line-height-title-2 font-medium text-[#bdbdbd]">
          Earn real returns on your assets, simply, transparently, and securely,
          all in your own time.{' '}
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-spacing-spacing-14 text-[14px] text-[#656565]">
        <button
          className="cursor-pointer [border:none] py-0 px-2.5 bg-[#f7ce02] w-full h-10 rounded-radius-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-1 min-h-[40px] max-h-[40px]"
          onClick={handleClick}
        >
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="flex flex-row items-center justify-center py-0 px-1">
            <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-semibold font-Web-title-1-normal text-[#171717] text-left">
              Get Started
            </div>
          </div>
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
          />
        </button>
      </div>
      <StepperDot11 size="Small" state={2} />
    </div>
  )
}

export default OnboardHomeContent
