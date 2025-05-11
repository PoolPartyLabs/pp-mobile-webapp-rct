import { FunctionComponent } from "react";
import StepperDot11 from "./StepperDot11";

export type AutoLayoutVertical11Type = {
  className?: string;
};

const AutoLayoutVertical11: FunctionComponent<AutoLayoutVertical11Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch rounded-t-radius-28 rounded-b-none bg-bg-white-0 overflow-hidden flex flex-col items-center justify-start p-spacing-spacing-32 gap-spacing-spacing-40 z-[1] text-left text-font-size-heading-5 text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-3.5">
        <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.2px] leading-[32px] font-[600] font-[inherit]">
          <p className="m-0">{`Your money, `}</p>
          <p className="m-0 text-gold">your terms :)</p>
        </h2>
        <div className="self-stretch relative text-font-size-title-2 tracking-[-0.2px] leading-font-line-height-title-2 font-font-weight-default-normal text-text-disabled-300">
          Earn real returns on your assets, simply, transparently, and securely,
          all in your own time.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-14 text-font-size-body-2 text-[#656565]">
        <button className="cursor-pointer [border:none] py-0 px-2.5 bg--Theme-primary-base self-stretch h-10 rounded-radius-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-1 min-h-[40px] max-h-[40px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="flex flex-row items-center justify-center py-0 px-1">
            <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium font-Web-title-1-normal text-bg-white-0 text-left">
              Next
            </div>
          </div>
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
          />
        </button>
        <div className="self-stretch h-10 rounded-radius-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-2.5 box-border gap-1 min-h-[40px] max-h-[40px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="flex flex-row items-center justify-center py-0 px-1">
            <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium">
              Skip
            </div>
          </div>
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
            alt=""
          />
        </div>
      </div>
      <StepperDot11 size="Small" state="3rd Active" />
    </div>
  );
};

export default AutoLayoutVertical11;
