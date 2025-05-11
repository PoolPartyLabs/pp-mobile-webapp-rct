import { FunctionComponent } from "react";
import Tooltip11 from "./Tooltip11";

export type Slider11Type = {
  className?: string;
  label?: boolean;
  tooltip?: boolean;
  editLabel?: string;
  sublabel?: boolean;
  editSublabel?: string;
  editAmount?: string;

  /** Variant props */
  percentage?: string;
};

const Slider11: FunctionComponent<Slider11Type> = ({
  className = "",
  percentage = "0%",
  label = true,
  tooltip = true,
  editLabel = "Investment",
  sublabel = false,
  editSublabel = "(Optional)",
  editAmount = "$300",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 text-left text-font-size-paragraph text-text-sub-600 font-Web-title-1-normal ${className}`}
      data-percentage={percentage}
    >
      {!!label && (
        <div className="self-stretch flex flex-row items-start justify-start gap-0.5">
          <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
            {editLabel}
          </div>
          {!!sublabel && (
            <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal text-text-soft-400">
              {editSublabel}
            </div>
          )}
          <div className="flex-1 relative leading-[16px] font-[500] text-right">
            {editAmount}
          </div>
        </div>
      )}
      <div className="self-stretch h-4 relative text-bg-white-0">
        <div className="absolute w-full top-[5px] right-[0px] left-[0px] rounded-radius-full bg-bg-soft-200 h-1.5" />
        <div className="absolute w-6/12 top-[0px] right-[50%] left-[0%] h-4">
          <div className="absolute w-full top-[calc(50%_-_3px)] right-[0px] left-[0px] rounded-radius-full bg-[#c5139f] h-1.5" />
          <div className="absolute top-[calc(50%_-_8px)] right-[-8px] shadow-[0px_6px_10px_rgba(14,_18,_27,_0.06),_0px_2px_4px_rgba(14,_18,_27,_0.03)] w-4 h-4">
            <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] rounded-[50%] bg-text-strong-950 w-4 h-4" />
            <div className="absolute top-[calc(50%_-_3px)] left-[calc(50%_-_3px)] rounded-[50%] bg-[#c5139f] w-1.5 h-1.5" />
            {!!tooltip && (
              <Tooltip11
                darkMode="On"
                size="2X-Small 24"
                type="🔽 Bottom Center"
                tail
                editText="$300"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider11;
