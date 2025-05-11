import { FunctionComponent } from "react";

export type StatusBadge11Type = {
  className?: string;
  editBadge?: string;

  /** Variant props */
  status1?: string;
  style?: string;
  withDot?: string;
};

const StatusBadge11: FunctionComponent<StatusBadge11Type> = ({
  className = "",
  status1 = "❇️ Completed",
  style = "Stroke",
  withDot = "Off",
  editBadge = "Matches your profile",
}) => {
  return (
    <div
      className={`rounded-radius-6 bg-state-feature-lighter overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1 text-left text-font-size-paragraph text-state-feature-dark font-Web-title-1-normal ${className}`}
      data-status={status1}
      data-style={style}
      data-withDot={withDot}
    >
      <img
        className="h-4 w-4 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/selectboxcirclefill.svg"
      />
      <div className="relative leading-font-line-height-paragraph font-font-weight-default-medium">
        {editBadge}
      </div>
    </div>
  );
};

export default StatusBadge11;
