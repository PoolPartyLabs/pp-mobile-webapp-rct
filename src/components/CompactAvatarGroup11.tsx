import { FunctionComponent } from "react";
import Avatar11 from "./Avatar11";

export type CompactAvatarGroup11Type = {
  className?: string;
  editNumber?: string;

  /** Variant props */
  size?: 24;
  style?: string;
};

const CompactAvatarGroup11: FunctionComponent<CompactAvatarGroup11Type> = ({
  className = "",
  size = 40,
  style = "Default",
  editNumber = "+345",
}) => {
  return (
    <div
      className={`shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-radius-full bg-bg-white-0 overflow-hidden flex flex-row items-center justify-start py-0.5 pl-0.5 pr-2 gap-1.5 text-center text-font-size-paragraph text-bg-white-0 font-Web-title-1-normal ${className}`}
      data-size={size}
      data-style={style}
    >
      <div className="flex flex-row items-start justify-start">
        <Avatar11
          icon="Off"
          illustration="Off"
          image="Off"
          memoji="Off"
          persona="James Brown"
          size={24}
          solidBG="Off"
          text="On"
          bottomStatus={false}
          topStatus={false}
          text1="J"
          stroke="pending_I21957:2407;2906:15103;247:5131;245:18699"
          bG="pending_I21957:2407;2906:15103;247:5131;245:18700"
          check="pending_I21957:2407;2906:15103;247:5131;245:18701"
          stroke1="pending_I21957:2407;2906:15103;247:5202;245:18723"
          ellipse="pending_I21957:2407;2906:15103;247:5202;245:18724"
        />
        <Avatar11
          icon="Off"
          illustration="Off"
          image="Off"
          memoji="Off"
          persona="Sophia Williams"
          size={24}
          solidBG="Off"
          text="On"
          bottomStatus={false}
          topStatus={false}
          text1="S"
          stroke="pending_I21957:2407;2906:15104;247:5142;245:18699"
          bG="pending_I21957:2407;2906:15104;247:5142;245:18700"
          check="pending_I21957:2407;2906:15104;247:5142;245:18701"
          stroke1="pending_I21957:2407;2906:15104;247:5213;245:18723"
          ellipse="pending_I21957:2407;2906:15104;247:5213;245:18724"
        />
        <Avatar11
          icon="Off"
          illustration="Off"
          image="Off"
          memoji="Off"
          persona="Arthur Taylor"
          size={24}
          solidBG="Off"
          text="On"
          bottomStatus={false}
          topStatus={false}
          text1="A"
          stroke="pending_I21957:2407;2906:15105;247:5141;245:18699"
          bG="pending_I21957:2407;2906:15105;247:5141;245:18700"
          check="pending_I21957:2407;2906:15105;247:5141;245:18701"
          stroke1="pending_I21957:2407;2906:15105;247:5212;245:18723"
          ellipse="pending_I21957:2407;2906:15105;247:5212;245:18724"
        />
      </div>
      <div className="relative leading-[16px] font-[500] text-text-sub-600">
        {editNumber}
      </div>
    </div>
  );
};

export default CompactAvatarGroup11;
