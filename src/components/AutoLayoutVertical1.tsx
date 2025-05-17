import { FunctionComponent } from 'react'
import Tag11 from './Tag11'

export type AutoLayoutVertical1Type = {
  className?: string
  stablecoin?: string
  lowRiskOfLosingYourInvestment?: string
  onClick?: () => void
}

const AutoLayoutVertical1: FunctionComponent<AutoLayoutVertical1Type> = ({
  className = '',
  stablecoin,
  lowRiskOfLosingYourInvestment,
  onClick,
}) => {
  return (
    <div
      className={`h-[174px] w-[47%] shadow-[0px_1px_2px_rgba(10,_13,_20,_0.03)] rounded-2xl bg-alpha-gray-alpha-10 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-between p-spacing-spacing-16 gap-0 text-left text-font-size-body-2 text-text-strong-950 font-Web-title-1-normal ${className}`}
      onClick={onClick}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-8">
        <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium">
          {stablecoin}
        </div>
        <div className="self-stretch relative text-font-size-paragraph leading-font-line-height-paragraph font-font-weight-default-normal text-text-sub-600">
          {lowRiskOfLosingYourInvestment}
        </div>
      </div>
      <Tag11
        dismissIcon="Off"
        state="Default"
        style="Gray"
        type="📂 Basic"
        editText="8.7% APY"
        sublabel={false}
        editSublabel="(4)"
      />
    </div>
  )
}

export default AutoLayoutVertical1
