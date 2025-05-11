import { FunctionComponent } from "react";
import Gear from "./Gear";

export type AutoLayoutVertical5Type = {
  className?: string;
};

const AutoLayoutVertical5: FunctionComponent<AutoLayoutVertical5Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-20 flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 box-border gap-2 text-left text-font-size-paragraph text-[#656565] font-Web-title-1-normal ${className}`}
    >
      <Gear style="Line" vector="/vector-111.svg" />
      <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
        Settings
      </div>
    </div>
  );
};

export default AutoLayoutVertical5;
