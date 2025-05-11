import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ProcentCircle from "./ProcentCircle";

export type AutoLayoutVertical4Type = {
  className?: string;
  earn?: string;

  /** Style props */
  earnColor?: CSSProperties["color"];

  /** Action props */
  onAutoLayoutVerticalClick1?: () => void;
};

const AutoLayoutVertical4: FunctionComponent<AutoLayoutVertical4Type> = ({
  className = "",
  onAutoLayoutVerticalClick1,
  earn,
  earnColor,
}) => {
  const earnStyle: CSSProperties = useMemo(() => {
    return {
      color: earnColor,
    };
  }, [earnColor]);

  return (
    <div
      className={`h-20 flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 box-border gap-2 text-left text-font-size-paragraph text-[#656565] font-Web-title-1-normal ${className}`}
      onClick={onAutoLayoutVerticalClick1}
    >
      <ProcentCircle style="Line" vector="/vector-9.svg" />
      <div
        className="relative leading-font-line-height-paragraph font-font-weight-default-normal"
        style={earnStyle}
      >
        {earn}
      </div>
    </div>
  );
};

export default AutoLayoutVertical4;
