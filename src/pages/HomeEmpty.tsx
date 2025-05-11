import { FunctionComponent } from "react";
import AutoLayoutVertical6 from "../components/AutoLayoutVertical6";
import AutoLayoutVertical7 from "../components/AutoLayoutVertical7";
import Navbar1 from "../components/Navbar1";

const HomeEmpty: FunctionComponent = () => {
  return (
    <div className="w-full h-[824px] relative bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex flex-col items-start justify-start gap-spacing-spacing-8 z-[0]">
        <AutoLayoutVertical6 />
        <AutoLayoutVertical7 />
      </main>
      <Navbar1 />
    </div>
  );
};

export default HomeEmpty;
