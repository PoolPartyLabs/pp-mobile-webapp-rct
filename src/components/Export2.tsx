import { FunctionComponent } from "react";

export type Export2Type = {
  className?: string;
  vector?: string;

  /** Variant props */
  style?: string;
};

const Export2: FunctionComponent<Export2Type> = ({
  className = "",
  style = "Line",
  vector,
}) => {
  return (
    <div className={`w-5 relative h-5 ${className}`} data-style={style}>
      <img
        className="absolute h-[83.5%] w-[83.5%] top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] rounded max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={vector}
      />
    </div>
  );
};

export default Export2;
