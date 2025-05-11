import { FunctionComponent } from "react";

export type GearType = {
  className?: string;
  vector?: string;

  /** Variant props */
  style?: string;
};

const Gear: FunctionComponent<GearType> = ({
  className = "",
  style = "Line",
  vector,
}) => {
  return (
    <div className={`w-5 relative h-5 ${className}`} data-style={style}>
      <img
        className="absolute h-[90%] w-[91.5%] top-[5%] right-[4.5%] bottom-[5%] left-[4%] rounded-sm max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={vector}
      />
    </div>
  );
};

export default Gear;
