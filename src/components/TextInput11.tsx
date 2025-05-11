import { FunctionComponent } from "react";

export type TextInput11Type = {
  className?: string;
  leftIcon?: boolean;
  label?: boolean;
  rightIcon?: boolean;
  hintText?: boolean;

  /** Variant props */
  size?: string;
  state?: string;
  type?: string;
};

const TextInput11: FunctionComponent<TextInput11Type> = ({
  className = "",
  size = "Medium (40)",
  state = "Placeholder",
  type = "📂 Basic",
  leftIcon = true,
  label = false,
  rightIcon = false,
  hintText = false,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 text-left text-font-size-body-2 text-text-sub-600 font-Web-title-1-normal ${className}`}
      data-size={size}
      data-state={state}
      data-type={type}
    >
      {!!label && (
        <div className="w-[300px] flex flex-row items-center justify-start gap-px">
          <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium text-text-strong-950">
            Email Address
          </div>
          <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium text-[#c5139f]">
            *
          </div>
          <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-normal">
            (Optional)
          </div>
          <img className="w-5 relative h-5 overflow-hidden shrink-0" alt="" />
          <div className="w-[108px] hidden flex-row items-center justify-end gap-1 text-font-size-paragraph">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="relative leading-font-line-height-paragraph font-font-weight-default-medium">
              Help?
            </div>
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
        </div>
      )}
      <div className="self-stretch h-10 shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-radius-10 bg-bg-white-0 border-stroke-soft-200 border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 pl-3 pr-2.5 gap-2">
        {!!leftIcon && (
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/mailline.svg"
          />
        )}
        <input
          className="w-[calc(100%_-_42px)] [border:none] [outline:none] font-[500] font-Web-title-1-normal text-font-size-body-2 bg-[transparent] flex-1 relative tracking-[-0.2px] leading-[24px] text-text-soft-400 text-left inline-block"
          placeholder="hello@exemplo.com"
          type="text"
        />
        {!!rightIcon && (
          <img className="w-5 relative h-5 overflow-hidden shrink-0" alt="" />
        )}
      </div>
      {!!hintText && (
        <div className="w-[300px] flex flex-row items-start justify-start gap-1 text-font-size-paragraph">
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 hidden"
            alt=""
          />
          <div className="flex-1 relative leading-font-line-height-paragraph font-font-weight-default-normal">
            This is a hint text to help user.
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput11;
