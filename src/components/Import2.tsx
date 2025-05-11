import { FunctionComponent } from "react";

export type Import2Type = {
  className?: string;

  /** Variant props */
  style?: string;
};

const Import2: FunctionComponent<Import2Type> = ({
  className = "",
  style = "Line",
}) => {
  return (
    <div className={`w-5 relative h-5 ${className}`} data-style={style}>
      <img
        className="absolute h-[83.5%] w-[83.5%] top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] rounded max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-41.svg"
      />
    </div>
  );
};

export default Import2;
