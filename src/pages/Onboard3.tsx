import { FunctionComponent } from 'react'
import Onboard3Content from '../components/Onboard3Content'

const Onboard3: FunctionComponent = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col items-start justify-start pt-[142px] px-0 pb-0 box-border gap-[131.4px] bg-black bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal] text-left text-font-size-title-1 text-black font-Web-title-1-normal">
      <div className="w-full h-[100%] absolute !!m-[0 important] right-[0px] bottom-[-160px] left-[0px]">
        <img
          className="absolute top-[122px] left-[-253px] w-[919px] h-[773px]"
          alt=""
          src="/group-4.svg"
        />
        <img
          className="absolute top-[1px] left-[53px] w-[268px] h-[auto]"
          alt=""
          src="/emergency-savings-1--finance-emergency-savings.svg"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center z-10 h-[396px]">
        <Onboard3Content />
      </div>
    </div>
  )
}

export default Onboard3
