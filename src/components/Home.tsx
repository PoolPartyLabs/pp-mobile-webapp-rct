import { FunctionComponent } from "react";

export type HomeType = {
  className?: string;
  bottomDividerIcon?: string;

  /** Variant props */
  style?: string;
};

const Home: FunctionComponent<HomeType> = ({
  className = "",
  style = "Line",
  bottomDividerIcon,
}) => {
  return (
    <div
      className={`w-5 relative h-5 overflow-hidden shrink-0 ${className}`}
      data-style={style}
    >
      <img
        className="absolute h-[91.5%] w-[83.5%] top-[0%] right-[8%] bottom-[8.5%] left-[8.5%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={bottomDividerIcon}
      />
    </div>
  );
};

export default Home;
