import { FunctionComponent } from "react";
import TextInput11 from "./TextInput11";
import SocialButtons11 from "./SocialButtons11";

export type DeFiInvestmentsType = {
  className?: string;
};

const DeFiInvestments: FunctionComponent<DeFiInvestmentsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[334px] left-[0px] rounded-t-radius-28 rounded-b-none bg-bg-white-0 w-full overflow-hidden flex flex-col items-start justify-start pt-[34px] pb-[22px] pl-[37px] pr-[27px] box-border gap-10 z-[1] text-left text-font-size-heading-5 text-text-strong-950 font-Web-title-1-normal ${className}`}
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
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-2.5 text-font-size-body-2 text-text-sub-600">
        <div className="flex-1 flex flex-col items-start justify-start gap-spacing-spacing-16">
          <TextInput11
            size="Medium 40"
            state="Placeholder"
            type="💌 Email"
            leftIcon
            label={false}
            rightIcon={false}
            hintText={false}
          />
          <button className="cursor-pointer [border:none] py-0 px-2.5 bg--Theme-primary-base self-stretch h-10 rounded-radius-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-1 min-h-[40px] max-h-[40px]">
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium font-Web-title-1-normal text-bg-white-0 text-left">
                Continue
              </div>
            </div>
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
              alt=""
            />
          </button>
          <div className="w-[300px] flex flex-row items-center justify-center gap-2.5 text-2xs text-text-soft-400 font-Web-overline-2X-Small">
            <div className="flex-1 relative border-stroke-soft-200 border-solid border-t-[0.5px] box-border h-[0.5px]" />
            <div className="relative tracking-[0.02em] leading-[12px] uppercase font-[500]">
              OR
            </div>
            <div className="flex-1 relative border-stroke-soft-200 border-solid border-t-[0.5px] box-border h-[0.5px]" />
          </div>
          <SocialButtons11
            brand="Google"
            onlyIcon="Off"
            state="Default"
            style="Filled"
            editText="Sign in with Google"
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
  );
};

export default DeFiInvestments;
