import { FunctionComponent } from "react";
import MajorBrandLogos11 from "./MajorBrandLogos11";

export type SocialButtons11Type = {
  className?: string;
  editText?: string;

  /** Variant props */
  brand?: string;
  onlyIcon?: string;
  state?: string;
  style?: string;
};

const SocialButtons11: FunctionComponent<SocialButtons11Type> = ({
  className = "",
  brand = "Apple",
  onlyIcon = "Off",
  state = "Default",
  style = "Filled",
  editText = "Sign in with Google",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2.5 pl-2.5 pr-4 bg-[#c5139f] w-[300px] rounded-radius-10 overflow-hidden flex flex-row items-center justify-center box-border gap-2 ${className}`}
      data-brand={brand}
      data-onlyIcon={onlyIcon}
      data-state={state}
      data-style={style}
    >
      <MajorBrandLogos11 company="Google" style="White" />
      <div className="relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium font-Web-title-1-normal text-text-strong-950 text-left">
        {editText}
      </div>
    </button>
  );
};

export default SocialButtons11;
