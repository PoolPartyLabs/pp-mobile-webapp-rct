import { FunctionComponent } from "react";
import Import2 from "./Import2";

export type AutoLayoutVerticalType = {
  className?: string;
  deposit?: string;
};

const AutoLayoutVertical: FunctionComponent<AutoLayoutVerticalType> = ({
  className = "",
  deposit,
}) => {
  return (
    <div
      className={`flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 gap-spacing-spacing-12 text-left text-font-size-paragraph text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <div className="w-14 h-14 rounded-radius-full bg-alpha-gray-alpha-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
        <Import2 style="Line" />
      </div>
      <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
        {deposit}
      </div>
    </div>
  );
};

export default AutoLayoutVertical;
