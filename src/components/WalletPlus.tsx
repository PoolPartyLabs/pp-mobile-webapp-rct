import { FunctionComponent } from "react";

export type WalletPlusType = {
  className?: string;

  /** Variant props */
  style?: string;
};

const WalletPlus: FunctionComponent<WalletPlusType> = ({
  className = "",
  style = "Line",
}) => {
  return (
    <div className={`w-5 relative h-5 ${className}`} data-style={style}>
      <img
        className="absolute h-[83.5%] w-[83.5%] top-[8.5%] right-[8%] bottom-[8%] left-[8.5%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/vector-7.svg"
      />
    </div>
  );
};

export default WalletPlus;
