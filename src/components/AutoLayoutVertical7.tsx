import { FunctionComponent } from "react";
import Content from "./Content";

export type AutoLayoutVertical7Type = {
  className?: string;
};

const AutoLayoutVertical7: FunctionComponent<AutoLayoutVertical7Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-8 px-spacing-spacing-16 text-left text-font-size-title-1 text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <Content />
    </section>
  );
};

export default AutoLayoutVertical7;
