import { FunctionComponent } from "react";

export type Tooltip11Type = {
  className?: string;
  tail?: boolean;
  editText?: string;

  /** Variant props */
  darkMode?: string;
  size?: string;
  type?: string;
};

const Tooltip11: FunctionComponent<Tooltip11Type> = ({
  className = "",
  darkMode = "Off",
  size = "2X-Small (24)",
  type = "↖️ Top Left",
  tail = true,
  editText = "$300",
}) => {
  return (
    <div
      className={`absolute top-[-28px] left-[calc(50%_-_22px)] flex flex-col items-center justify-start text-left text-font-size-paragraph text-bg-white-0 font-Web-title-1-normal ${className}`}
      data-darkMode={darkMode}
      data-size={size}
      data-type={type}
    >
      <div className="shadow-[0px_12px_24px_rgba(14,_18,_27,_0.06),_0px_1px_2px_rgba(14,_18,_27,_0.03)] rounded-radius-4 bg-text-strong-950 flex flex-row items-center justify-center py-0.5 px-1.5">
        <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
          {editText}
        </div>
      </div>
      {!!tail && (
        <img
          className="self-stretch max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/tail.svg"
        />
      )}
    </div>
  );
};

export default Tooltip11;
