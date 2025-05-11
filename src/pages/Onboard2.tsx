import { FunctionComponent } from "react";
import AutoLayoutVertical12 from "../components/AutoLayoutVertical12";

const Onboard: FunctionComponent = () => {
  return (
    <div className="w-full h-[812px] relative overflow-hidden flex flex-col items-end justify-end pt-[140px] px-0 pb-0 box-border bg-[url('/public/onboard3@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <div className="w-[577px] h-[672px] relative max-w-[154%]">
        <img
          className="absolute top-[92px] left-[0px] w-[919px] h-[773px]"
          alt=""
          src="/group-41.svg"
        />
        <img
          className="absolute top-[0px] left-[236px] w-[315.4px] h-[239.3px] z-[1]"
          loading="lazy"
          alt=""
          src="/emergencyfunds3financeemergencyfunds.svg"
        />
      </div>
      <AutoLayoutVertical12 />
    </div>
  );
};

export default Onboard;
