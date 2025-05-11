import { FunctionComponent } from "react";

export type ProcentCircleType = {
  className?: string;
  vector?: string;

  /** Variant props */
  style?: string;
};

const ProcentCircle: FunctionComponent<ProcentCircleType> = ({
  className = "",
  style = "Line",
  vector,
}) => {
  return (
    <div className={`w-5 relative h-5 z-[0] ${className}`} data-style={style}>
      <img
        className="absolute h-[83.5%] w-[83.5%] top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={vector}
      />
    </div>
  );
};

export default ProcentCircle;
