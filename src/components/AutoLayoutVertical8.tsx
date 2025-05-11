import { FunctionComponent } from "react";
import ProcentCircle from "./ProcentCircle";
import Export2 from "./Export2";
import Tag11 from "./Tag11";

export type AutoLayoutVertical8Type = {
  className?: string;
};

const AutoLayoutVertical8: FunctionComponent<AutoLayoutVertical8Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch [filter:drop-shadow(0px_1px_2px_rgba(10,_13,_20,_0.03))] flex flex-col items-start justify-start text-left text-font-size-paragraph text-text-sub-600 font-Web-title-1-normal ${className}`}
    >
      <div className="w-[375px] h-[442px] shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] flex flex-col items-start justify-start">
        <header className="w-[375px] h-14 [backdrop-filter:blur(48px)] bg-bg-white-0 flex flex-row items-end justify-between p-spacing-spacing-16 box-border gap-0 top-[0] z-[99] sticky text-left text-font-size-body-2 text-text-strong-950 font-Web-title-1-normal">
          <div className="relative tracking-[-0.2px] leading-[24px] font-[500]">
            12.27
          </div>
          <div className="flex flex-row items-center justify-start py-1.5 px-0 gap-2">
            <div className="h-3 w-[18px] relative">
              <div className="absolute top-[0px] left-[15px] rounded-radius-border-radius-xxs bg-text-strong-950 w-[3px] h-3" />
              <div className="absolute top-[3px] left-[10px] rounded-radius-border-radius-xxs bg-text-strong-950 w-[3px] h-[9px]" />
              <div className="absolute top-[6px] left-[5px] rounded-radius-border-radius-xxs bg-text-strong-950 w-[3px] h-1.5" />
              <div className="absolute top-[8px] left-[0px] rounded-radius-border-radius-xxs bg-text-strong-950 w-[3px] h-1" />
            </div>
            <img
              className="h-3 w-[17px] relative"
              loading="lazy"
              alt=""
              src="/exclude.svg"
            />
            <div className="h-3 w-[26px] relative">
              <img
                className="absolute top-[calc(50%_-_2px)] right-[0px] w-px h-1"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="absolute top-[calc(50%_-_6px)] right-[12px] rounded-tl-radius-border-radius-xxs rounded-tr-none rounded-br-none rounded-bl-radius-border-radius-xxs bg-text-strong-950 w-3.5 h-3" />
              <div className="absolute top-[calc(50%_-_6px)] right-[2px] rounded-tl-none rounded-tr-radius-border-radius-xxs rounded-br-radius-border-radius-xxs rounded-bl-none bg-alpha-gray-alpha-10 w-2.5 h-3" />
            </div>
          </div>
        </header>
        <div className="self-stretch rounded-t-none rounded-b-radius-24 border-gray border-solid border-r-[1px] border-b-[1px] border-l-[1px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5">
          <div className="w-[376px] overflow-hidden flex flex-col items-start justify-start pt-spacing-spacing-32 px-spacing-spacing-16 pb-0 box-border gap-spacing-spacing-32">
            <div className="self-stretch flex flex-row items-start justify-between gap-0">
              <div className="flex flex-row items-center justify-start gap-spacing-spacing-16">
                <img
                  className="w-10 relative rounded-81xl max-h-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/rumi.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-font-line-height-paragraph font-font-weight-default-normal">
                    Hi.
                  </div>
                  <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-normal text-text-strong-950">
                    Willian Costa
                  </div>
                </div>
              </div>
              <div className="h-10 rounded-radius-10 bg-alpha-gray-alpha-10 overflow-hidden flex flex-row items-center justify-center py-0 px-2.5 box-border gap-1 min-h-[40px] max-h-[40px] text-font-size-body-2 text-green-500">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-1">
                  <div className="relative tracking-[-0.2px] leading-[24px] font-[600]">
                    $5.45
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-16">
              <div className="w-[344px] h-[164px] rounded-radius-16 bg-alpha-gray-alpha-10 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-between py-spacing-spacing-16 px-[15px] relative gap-0">
                <img
                  className="w-[195px] h-[195px] absolute !!m-[0 important] top-[-2px] left-[133px] overflow-hidden shrink-0 z-[0]"
                  alt=""
                  src="/showingpridestreamlinebarcelona.svg"
                />
                <ProcentCircle style="Line" vector="/vector-1.svg" />
                <div className="self-stretch flex flex-col items-start justify-start z-[2]">
                  <div className="flex flex-col items-start justify-start gap-spacing-spacing-4">
                    <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
                      Total asset value
                    </div>
                    <div className="relative text-font-size-heading-5 tracking-[-0.2px] leading-[32px] font-[500] text-text-strong-950 text-center">
                      $13,345.67
                    </div>
                  </div>
                </div>
                <div className="h-10 !!m-[0 important] absolute top-[16px] left-[288px] rounded-radius-10 bg-stroke-soft-200 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-2.5 box-border min-h-[40px] max-h-[40px] z-[3]">
                  <Export2 style="Line" vector="/vector-2.svg" />
                </div>
              </div>
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-spacing-spacing-16">
                <div className="self-stretch flex flex-row items-center justify-between gap-0">
                  <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
                    Total claimed
                  </div>
                  <Tag11
                    dismissIcon="Off"
                    state="Default"
                    style="Gray"
                    type="📂 Basic"
                    editText="$2,456.32"
                    sublabel={false}
                    editSublabel="(4)"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-between gap-0">
                  <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
                    All time
                  </div>
                  <Tag11
                    dismissIcon="Off"
                    state="Default"
                    style="Gray"
                    type="📂 Basic"
                    editText="8.7% APY"
                    sublabel={false}
                    editSublabel="(4)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoLayoutVertical8;
