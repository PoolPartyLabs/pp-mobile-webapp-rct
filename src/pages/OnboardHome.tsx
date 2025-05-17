import { FunctionComponent } from 'react'
import OnboardHomeContent from '../components/OnboardHomeContent'

const Onboard: FunctionComponent = () => {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col items-center justify-start pt-[140px] px-0 pb-0 box-border bg-black bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <div className="flex-grow flex items-center justify-center">
        <img
          className="h-full w-full max-w-full mx-auto h-auto mt-30"
          alt=""
          src="/group-41.svg"
        />
        <img
          className="absolute w-[auto] h-[270px] z-[1] mb-109"
          loading="lazy"
          alt=""
          src="/emergencyfunds3financeemergencyfunds.svg"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-10 h-[396px]">
        <OnboardHomeContent />
      </div>
    </div>
  )
}

export default Onboard
