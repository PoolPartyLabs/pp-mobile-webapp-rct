import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AutoLayoutVertical3 from "./AutoLayoutVertical3";
import AutoLayoutVertical4 from "./AutoLayoutVertical4";
import AutoLayoutVertical5 from "./AutoLayoutVertical5";

export type Navbar1Type = {
  className?: string;
};

const Navbar1: FunctionComponent<Navbar1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer
      className={`w-[376px] !!m-[0 important] absolute bottom-[0px] left-[0px] bg-bg-white-0 border-stroke-soft-200 border-solid border-t-[0.5px] box-border flex flex-row items-center justify-start py-0 px-spacing-spacing-16 gap-spacing-spacing-8 z-[1] text-left text-font-size-paragraph text-[#656565] font-Web-title-1-normal ${className}`}
    >
      <AutoLayoutVertical3 />
      <AutoLayoutVertical4 earn="Earn" />
      <AutoLayoutVertical4
        onAutoLayoutVerticalClick1={onAutoLayoutVerticalClick}
        earn="Portfólio"
        earnColor="#656565"
      />
      <AutoLayoutVertical5 />
    </footer>
  );
};

export default Navbar1;
