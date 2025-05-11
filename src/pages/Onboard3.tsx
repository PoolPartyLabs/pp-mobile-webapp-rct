import { FunctionComponent } from "react";
import StepperDot11 from "../components/StepperDot11";

const Onboard3: FunctionComponent = () => {
  return (
    <div className="w-full h-[812px] relative overflow-hidden bg-[url('/public/onboard2@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <img
        className="absolute w-[calc(100%_-_26px)] top-[109px] right-[12px] left-[14px] max-w-full overflow-hidden h-[349px]"
        alt=""
        src="/getajobpromotionstreamlinebruxelles.svg"
      />
      <section className="absolute top-[440px] left-[0px] rounded-t-radius-28 rounded-b-none bg-[#171717] w-full overflow-hidden flex flex-col items-center justify-start p-spacing-spacing-32 box-border gap-spacing-spacing-40 text-left text-[26px] text-[#fff] font-Web-title-1-normal">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-3.5">
          <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.2px] leading-[32px] font-semibold font-[inherit]">
            <span>{`Join communities that `}</span>
            <span className="text-[#fff142]">invest together</span>
          </h2>
          <div className="self-stretch relative text-font-size-title-2 tracking-[-0.2px] leading-font-line-height-title-2 font-medium text-[#bdbdbd]">
            Follow trusted creators, share strategies, and grow with the power
            of the collective.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-14 text-[14px] text-[#656565]">
          <button className="cursor-pointer [border:none] py-0 px-2.5 bg-[#f7ce02] self-stretch h-10 rounded-radius-10 overflow-hidden shrink-0 flex flex-row items-center justify-center box-border gap-1 min-h-[40px] max-h-[40px]">
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-semibold font-Web-title-1-normal text-[#171717] text-left">
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
              <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-semibold">
                Skip
              </div>
            </div>
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
        </div>
        <StepperDot11 size="Small" state="2nd Active" />
      </section>
    </div>
  );
};

export default Onboard3;
