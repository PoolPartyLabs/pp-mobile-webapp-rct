import { FunctionComponent } from "react";
import AutoLayoutVertical8 from "../components/AutoLayoutVertical8";
import AutoLayoutVertical9 from "../components/AutoLayoutVertical9";
import AutoLayoutVertical10 from "../components/AutoLayoutVertical10";
import Navbar1 from "../components/Navbar1";

const HomeMyAssets: FunctionComponent = () => {
  return (
    <div className="w-full h-[1162px] relative bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex flex-col items-start justify-start gap-spacing-spacing-8 z-[0]">
        <AutoLayoutVertical8 />
        <AutoLayoutVertical9 />
        <AutoLayoutVertical10 />
      </main>
      <audio
        className="w-[343px] h-14 !!m-[0 important] absolute bottom-[100px] left-[16px] rounded-radius-16 bg--Branding-600 overflow-hidden shrink-0 flex flex-row items-center justify-between z-[1]"
        controls
      >
        <source />
      </audio>
      <Navbar1 />
    </div>
  );
};

export default HomeMyAssets;
