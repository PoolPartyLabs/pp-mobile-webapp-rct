import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AutoLayoutVertical1 from "./AutoLayoutVertical1";
import AutoLayoutVertical2 from "./AutoLayoutVertical2";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAutoLayoutHorizontalClick = useCallback(() => {
    navigate("/invest");
  }, [navigate]);

  return (
    <div
      className={`w-[200px] h-[214px] flex flex-col items-start justify-start gap-spacing-spacing-16 text-left text-font-size-title-1 text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <h3 className="m-0 relative text-[length:inherit] tracking-[-0.2px] leading-[24px] font-[500] font-[inherit]">
        Start Earning
      </h3>
      <div
        className="self-stretch overflow-x-auto flex flex-row items-center justify-start gap-spacing-spacing-16 cursor-pointer text-font-size-body-2"
        onClick={onAutoLayoutHorizontalClick}
      >
        <AutoLayoutVertical1
          stablecoin="Stablecoin"
          lowRiskOfLosingYourInvestment="Like a USD savings account simple and stable."
        />
        <AutoLayoutVertical1
          stablecoin="Low Risk"
          lowRiskOfLosingYourInvestment="Low risk of losing your investment with good security."
        />
        <AutoLayoutVertical2
          mediumRisk="Medium Risk"
          moderateRiskOfLosingYourInvest="Moderate risk of losing your investment due to potential security."
        />
        <AutoLayoutVertical2
          mediumRisk="High Risk"
          moderateRiskOfLosingYourInvest="Moderate to high chance of losing your investment."
        />
      </div>
    </div>
  );
};

export default Content;
