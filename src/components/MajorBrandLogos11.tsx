import { FunctionComponent } from "react";

export type MajorBrandLogos11Type = {
  className?: string;

  /** Variant props */
  company?: string;
  style?: string;
};

const MajorBrandLogos11: FunctionComponent<MajorBrandLogos11Type> = ({
  className = "",
  company = "Adobe",
  style = "Original",
}) => {
  return (
    <div
      className={`w-5 relative h-5 overflow-hidden shrink-0 ${className}`}
      data-company={company}
      data-style={style}
    >
      <img
        className="absolute h-[35.5%] w-[36.5%] top-[43%] right-[12.5%] bottom-[21.5%] left-[51%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute h-[33.5%] w-[17%] top-[33%] right-[70.5%] bottom-[33.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-11.svg"
      />
      <img
        className="absolute h-[30.5%] w-3/5 top-[12.5%] right-[23.5%] bottom-[57%] left-[16.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-21.svg"
      />
      <img
        className="absolute h-[30.5%] w-[59.5%] top-[57%] right-[24%] bottom-[12.5%] left-[16.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-31.svg"
      />
    </div>
  );
};

export default MajorBrandLogos11;
