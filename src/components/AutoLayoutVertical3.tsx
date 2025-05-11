import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export type AutoLayoutVertical3Type = {
  className?: string;

  /** Style props */
  homeColor?: CSSProperties["color"];
};

const AutoLayoutVertical3: FunctionComponent<AutoLayoutVertical3Type> = ({
  className = "",
  homeColor,
}) => {
  const homeStyle: CSSProperties = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const navigate = useNavigate();

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate("/home-empty");
  }, [navigate]);

  return (
    <div
      className={`h-20 flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 box-border gap-2 cursor-pointer text-left text-font-size-paragraph text--Branding-400 font-Web-title-1-normal ${className}`}
      onClick={onAutoLayoutVerticalClick}
    >
      <Home style="Line" bottomDividerIcon="/vector-8.svg" />
      <div
        className="relative leading-font-line-height-paragraph font-font-weight-default-normal"
        style={homeStyle}
      >
        Home
      </div>
    </div>
  );
};

export default AutoLayoutVertical3;
