import { FunctionComponent } from "react";

export type ContentDivider11Type = {
  className?: string;

  /** Variant props */
  type?: string;
};

const ContentDivider11: FunctionComponent<ContentDivider11Type> = ({
  className = "",
  type = "Line",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center ${className}`}
      data-type={type}
    >
      <div className="flex-1 relative border-stroke-soft-200 border-solid border-t-[0.5px] box-border h-[0.5px]" />
    </div>
  );
};

export default ContentDivider11;
