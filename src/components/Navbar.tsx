import { FunctionComponent } from "react";
import AutoLayoutVertical from "./AutoLayoutVertical";
import Cash from "./Cash";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[376px] h-[100px] flex flex-row items-center justify-start py-0 px-spacing-spacing-4 box-border gap-spacing-spacing-8 text-left text-font-size-paragraph text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <AutoLayoutVertical deposit="Deposit" />
      <AutoLayoutVertical deposit="Withdraw" />
      <div className="flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 gap-spacing-spacing-12">
        <div className="w-14 h-14 rounded-radius-full bg-alpha-gray-alpha-10 overflow-hidden shrink-0 flex flex-row items-center justify-center">
          <Cash style="Line" />
        </div>
        <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
          Cash Out
        </div>
      </div>
      <AutoLayoutVertical deposit="Portfólio" />
    </div>
  );
};

export default Navbar;
