import { FunctionComponent } from "react";

export type Avatar11Type = {
  className?: string;
  bottomStatus?: boolean;
  topStatus?: boolean;
  text1?: string;
  stroke?: string;
  bG?: string;
  check?: string;
  stroke1?: string;
  ellipse?: string;

  /** Variant props */
  icon?: string;
  illustration?: string;
  image?: string;
  memoji?: string;
  persona?: "James Brown" | "Sophia Williams" | "Arthur Taylor";
  size?: 24;
  solidBG?: string;
  text?: string;
};

const Avatar11: FunctionComponent<Avatar11Type> = ({
  className = "",
  icon = "Off",
  illustration = "Off",
  image = "On",
  memoji = "Off",
  persona = "James Brown",
  size = 80,
  solidBG = "Off",
  text = "Off",
  bottomStatus = false,
  topStatus = false,
  text1,
  stroke,
  bG,
  check,
  stroke1,
  ellipse,
}) => {
  return (
    <div
      className={`w-7 relative rounded-radius-full bg-neutral-gray-200 border-bg-white-0 border-solid border-[2px] box-border h-7 text-center text-font-size-paragraph text-bg-white-0 font-Web-title-1-normal data-[icon='Off']:data-[size='24']:data-[text='On']:data-[persona='Sophia:[&_Williams']:data-[image='Off']:data-[solidBG='Off']:data-[memoji='Off']:data-[illustration='Off']]:bg-yellow-200 data-[icon='Off']:data-[size='24']:data-[text='On']:data-[persona='Sophia:[&_Williams']:data-[image='Off']:data-[solidBG='Off']:data-[memoji='Off']:data-[illustration='Off']]:ml-[-2px] data-[icon='Off']:data-[size='24']:data-[text='On']:data-[persona='Arthur:[&_Taylor']:data-[image='Off']:data-[solidBG='Off']:data-[memoji='Off']:data-[illustration='Off']]:bg-blue-200 data-[icon='Off']:data-[size='24']:data-[text='On']:data-[persona='Arthur:[&_Taylor']:data-[image='Off']:data-[solidBG='Off']:data-[memoji='Off']:data-[illustration='Off']]:ml-[-2px] data-[icon='Off']:data-[size='24']:data-[text='On']:data-[persona='Sophia:[&_Williams']:data-[image='Off']:data-[solidBG='Off']:data-[memoji='Off']:data-[illustration='Off']]:text-yellow-950 data-[icon='Off']:data-[size='24']:data-[text='On']:data-[persona='Arthur:[&_Taylor']:data-[image='Off']:data-[solidBG='Off']:data-[memoji='Off']:data-[illustration='Off']]:text-blue-950 ${className}`}
      data-icon={icon}
      data-illustration={illustration}
      data-image={image}
      data-memoji={memoji}
      data-persona={persona}
      data-size={size}
      data-solidBG={solidBG}
      data-text={text}
    >
      <div className="text absolute w-full top-[16.67%] left-[0%] leading-font-line-height-paragraph font-font-weight-default-medium inline-block">
        {text1}
      </div>
      {!!topStatus && (
        <div className="absolute h-3/6 w-6/12 top-[0%] right-[-16.67%] bottom-[50%] left-[66.67%] [filter:drop-shadow(0px_2px_4px_rgba(27,_28,_29,_0.04))]">
          <img
            className="absolute h-[85%] w-[85%] top-[7.5%] right-[7.5%] bottom-[7.5%] left-[7.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={stroke}
          />
          <img
            className="absolute h-[72.5%] w-[72.5%] top-[14.17%] right-[13.33%] bottom-[13.33%] left-[14.17%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={bG}
          />
          <img
            className="absolute h-1/4 w-[31.67%] top-[37.5%] right-[33.33%] bottom-[37.5%] left-[35%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={check}
          />
        </div>
      )}
      {!!bottomStatus && (
        <div className="absolute h-3/6 w-6/12 top-[50%] right-[-16.67%] bottom-[0%] left-[66.67%] [filter:drop-shadow(0px_2px_4px_rgba(27,_28,_29,_0.04))]">
          <img
            className="absolute h-[62.5%] w-[62.5%] top-[19.17%] right-[18.33%] bottom-[18.33%] left-[19.17%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={stroke1}
          />
          <img
            className="absolute h-[37.5%] w-[37.5%] top-[31.67%] right-[30.83%] bottom-[30.83%] left-[31.67%] max-w-full overflow-hidden max-h-full"
            alt=""
            src={ellipse}
          />
        </div>
      )}
    </div>
  );
};

export default Avatar11;
