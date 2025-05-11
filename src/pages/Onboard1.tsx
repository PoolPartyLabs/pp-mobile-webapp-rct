import { FunctionComponent } from "react";
import DeFiInvestments from "../components/DeFiInvestments";

const Onboard1: FunctionComponent = () => {
  return (
    <div className="w-full h-[812px] relative overflow-hidden bg-[url('/public/onboard@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <img
        className="absolute top-[12px] left-[19px] w-[329px] h-[329px] overflow-hidden"
        alt=""
        src="/showingpridestreamlinebarcelona1.svg"
      />
      <DeFiInvestments />
    </div>
  );
};

export default Onboard1;
