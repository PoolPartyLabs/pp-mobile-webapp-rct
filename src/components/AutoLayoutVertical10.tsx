import { FunctionComponent } from "react";
import Content from "./Content";

export type AutoLayoutVertical10Type = {
  className?: string;
};

const AutoLayoutVertical10: FunctionComponent<AutoLayoutVertical10Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start py-8 px-spacing-spacing-16 ${className}`}
    >
      <Content />
    </section>
  );
};

export default AutoLayoutVertical10;
