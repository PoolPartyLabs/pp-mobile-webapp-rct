import { FunctionComponent } from "react";
import Tag11 from "./Tag11";

export type AutoLayoutVertical9Type = {
  className?: string;
};

const AutoLayoutVertical9: FunctionComponent<AutoLayoutVertical9Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start py-spacing-spacing-32 px-spacing-spacing-16 text-left text-font-size-title-1 text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-16">
        <div className="self-stretch flex flex-row items-center justify-between gap-0">
          <h3 className="m-0 relative text-[length:inherit] tracking-[-0.2px] leading-[24px] font-[500] font-[inherit]">
            Portfolio Allocation
          </h3>
          <div className="h-7 rounded-radius-8 overflow-hidden flex flex-row items-center justify-center py-0 px-1.5 box-border gap-0.5 min-h-[28px] max-h-[28px] text-font-size-body-2 text-text-sub-600">
            <img
              className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium">
                View all
              </div>
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/arrowrightsline.svg"
            />
          </div>
        </div>
        <div className="w-[503px] flex flex-row items-start justify-start gap-2 text-font-size-body-2">
          <div className="flex-1 shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-2xl bg-bg-white-0 border-stroke-soft-200 border-solid border-[0.5px] overflow-hidden flex flex-col items-start justify-start p-mini gap-4">
            <div className="relative tracking-[-0.2px] leading-[24px] font-[600]">
              Low Risk
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-8 text-font-size-paragraph text-text-sub-600">
              <div className="self-stretch flex flex-row items-center justify-between gap-0">
                <div className="relative leading-[16px] font-[500]">
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
                <div className="relative leading-[16px] font-[500]">
                  All time
                </div>
                <Tag11
                  dismissIcon="Off"
                  state="Default"
                  style="Gray"
                  type="📂 Basic"
                  editText="13.7% APY"
                  sublabel={false}
                  editSublabel="(4)"
                />
              </div>
            </div>
          </div>
          <div className="w-[248px] shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-2xl bg-bg-white-0 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-mini gap-4">
            <div className="relative tracking-[-0.2px] leading-[24px] font-[600]">
              Stablecoin
            </div>
            <div className="w-[216px] flex flex-col items-start justify-start gap-spacing-spacing-8 text-font-size-paragraph text-text-sub-600">
              <div className="w-[216px] flex flex-row items-center justify-between gap-0">
                <div className="relative leading-[16px] font-[500]">
                  Total claimed
                </div>
                <Tag11
                  dismissIcon="Off"
                  state="Default"
                  style="Gray"
                  type="📂 Basic"
                  editText="$234.10"
                  sublabel={false}
                  editSublabel="(4)"
                />
              </div>
              <div className="w-[216px] flex flex-row items-center justify-between gap-0">
                <div className="relative leading-[16px] font-[500]">
                  All time
                </div>
                <Tag11
                  dismissIcon="Off"
                  state="Default"
                  style="Gray"
                  type="📂 Basic"
                  editText="2% APY"
                  sublabel={false}
                  editSublabel="(4)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoLayoutVertical9;
