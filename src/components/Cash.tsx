import { FunctionComponent } from "react";

export type CashType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const Cash: FunctionComponent<CashType> = ({
  className = "",
  style = "Line",
}) => {
  return (
    <div className={`w-6 relative h-6 ${className}`} data-style={style}>
      <img
        className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-61.svg"
      />
    </div>
  );
};

export default Cash;
