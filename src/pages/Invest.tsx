import { FunctionComponent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Buttons11 from '../components/Buttons11'
import Tag11 from '../components/Tag11'
import StatusBadge11 from '../components/StatusBadge11'
import ContentDivider11 from '../components/ContentDivider11'
import Slider11 from '../components/Slider11'
import CompactAvatarGroup11 from '../components/CompactAvatarGroup11'

const Invest: FunctionComponent = () => {
  const [searchParams] = useSearchParams()
  const strategy = searchParams.get('strategy')
  const riskLevel = strategy === 'high' ? 'High Risk' : 'Low Risk'
  const apy = strategy === 'high' ? 163.96 : 23.37
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <div className="w-full h-[1135px] relative bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex flex-col items-start justify-start z-[0]">
        <section className="self-stretch flex flex-col items-start justify-start text-left text-font-size-title-1 text-text-strong-950 font-Web-title-1-normal">
          <div className="w-[376px] bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start py-spacing-spacing-32 px-spacing-spacing-16 box-border gap-spacing-spacing-32">
            <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-16">
              <Buttons11
                onlyIcon="On"
                size="Small 36"
                state="Default"
                style="Lighter"
                type="Neutral"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-8">
                <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.2px] leading-[24px] font-[500] font-[inherit]">
                  Start Earning
                </h3>
                <div className="self-stretch relative text-font-size-body-2 tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-normal text-text-sub-600">
                  Invest simply and start earning with low-risk strategies
                  aligned with your profile.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-32">
              <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-8">
                <h3 className="m-0 relative text-[length:inherit] tracking-[-0.2px] leading-[24px] font-[500] font-[inherit]">
                  Estimated Value
                </h3>
                <div className="flex flex-row items-start justify-start gap-2">
                  <Tag11
                    dismissIcon="Off"
                    state="Default"
                    style="Stroke"
                    type="📂 Basic"
                    editText={riskLevel}
                    sublabel={false}
                    editSublabel="(4)"
                  />
                  <StatusBadge11
                    type={strategy === 'high' ? 'warn' : 'ok'}
                    status1="❇️ Completed"
                    style="Light"
                    withDot="Off"
                    editBadge={
                      strategy === 'high'
                        ? 'Not Matching Profile'
                        : 'Matches your profile'
                    }
                  />
                  <Tag11
                    dismissIcon="Off"
                    state="Default"
                    style="Gray"
                    type="📂 Basic"
                    editText={`${apy}% APY`}
                    sublabel={false}
                    editSublabel="(4)"
                  />
                </div>
              </div>
              <ContentDivider11 type="Line" />
              <Slider11
                value={sliderValue}
                onChange={setSliderValue}
                editLabel="Investment Amount"
                editAmount="$300"
                tooltip={true}
              />
              <div className="self-stretch flex flex-row items-center justify-start text-font-size-body-1">
                <div className="flex-1 flex flex-col items-start justify-start gap-spacing-spacing-8">
                  <div className="w-2 h-2 relative bg-green-500 overflow-hidden shrink-0" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-8">
                    <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-4">
                      <div className="relative tracking-[-0.2px] leading-font-line-height-body-1 font-font-weight-default-normal">
                        Yield
                      </div>
                      <div className="self-stretch relative text-font-size-paragraph leading-font-line-height-paragraph font-font-weight-default-normal text-text-sub-600">
                        Think of yield as a type of dividend you earn,
                        separately from asset performance.
                      </div>
                    </div>
                    <div className="relative text-font-size-heading-5 tracking-[-0.2px] leading-[32px] font-[500] text-green-500">
                      ${((sliderValue * apy) / 100).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-16">
                <h3 className="m-0 relative text-[length:inherit] tracking-[-0.2px] leading-[24px] font-[500] font-[inherit]">
                  Analyst Rating
                </h3>
                <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-spacing-spacing-16 text-font-size-paragraph text-text-sub-600">
                  <div className="h-[150px] flex-1 shadow-[0px_1px_1px_-0.5px_rgba(23,_23,_23,_0.1)] rounded-radius-16 bg-bg-white-0 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden flex flex-col items-start justify-between py-spacing-spacing-16 px-[15px] gap-0 min-w-[107px]">
                    <div className="self-stretch relative leading-font-line-height-paragraph font-font-weight-default-normal">
                      Total distributed in 24h
                    </div>
                    <div className="relative text-font-size-body-1 tracking-[-0.2px] leading-[24px] font-[500] text-text-strong-950">
                      {strategy === 'high' ? '$12,334.95' : '$1,396.11'}
                    </div>
                  </div>
                  <div className="h-[150px] flex-1 shadow-[0px_1px_1px_-0.5px_rgba(23,_23,_23,_0.1)] rounded-radius-16 bg-bg-white-0 border-stroke-soft-200 border-solid border-[0.5px] box-border overflow-hidden flex flex-col items-start justify-between py-spacing-spacing-16 px-[15px] gap-0 min-w-[107px]">
                    <div className="self-stretch relative leading-font-line-height-paragraph font-font-weight-default-normal">
                      Recommended by {strategy === 'high' ? 37 : 196} analysts
                    </div>
                    <div className="flex flex-col items-start justify-start gap-spacing-spacing-8 text-center text-text-strong-950">
                      <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
                        People earning
                      </div>
                      <CompactAvatarGroup11
                        size={24}
                        style="Default"
                        editNumber={strategy === 'high' ? '+345' : '+933'}
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch shadow-[0px_1px_1px_-0.5px_rgba(23,_23,_23,_0.1)] rounded-radius-16 bg-bg-white-0 border-stroke-soft-200 border-solid border-[0.5px] overflow-hidden flex flex-col items-start justify-start py-[19px] pl-5 pr-[15px] gap-4 text-font-size-heading-5 text-green-500">
                  <div className="self-stretch flex flex-col items-start justify-start gap-spacing-spacing-8">
                    <div className="self-stretch flex flex-row items-center justify-between gap-0">
                      <div className="relative tracking-[-0.2px] leading-[32px] font-[500]">
                        {(apy / 12).toFixed(2)}%
                      </div>
                      <Tag11
                        dismissIcon="Off"
                        state="Default"
                        style="Gray"
                        type="📂 Basic"
                        editText="30d APY"
                        sublabel={false}
                        editSublabel="(4)"
                      />
                    </div>
                    <div className="w-[308px] relative text-font-size-paragraph leading-font-line-height-paragraph font-font-weight-default-normal text-text-sub-600 inline-block">
                      Think of the yield as a type of dividend you earn,
                      separate from the asset's performance.
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-1 text-font-size-body-2">
                    <div
                      className={`${
                        strategy === 'high' ? 'text-red-500' : 'text-green-500'
                      } relative tracking-[-0.2px] leading-font-line-height-body-2 font-font-weight-default-medium`}
                    >
                      {riskLevel}
                    </div>
                    <img
                      className="h-3 w-3 relative"
                      loading="lazy"
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-1">
                    <div
                      className={`h-2 w-[58px] rounded-sm ${
                        strategy === 'high'
                          ? 'bg-alpha-gray-alpha-10'
                          : 'bg-green-500'
                      }`}
                    />
                    <div className="h-2 w-[58px] rounded-sm bg-alpha-gray-alpha-10" />
                    <div className="h-2 w-[57px] rounded-sm bg-alpha-gray-alpha-10" />
                    <div className="h-2 w-[58px] rounded-sm bg-alpha-gray-alpha-10" />
                    <div
                      className={`h-2 w-[58px] rounded-sm ${
                        strategy === 'high'
                          ? 'bg-red-500'
                          : 'bg-alpha-gray-alpha-10'
                      }`}
                    />
                  </div>
                  <div className="w-[308px] relative text-font-size-paragraph leading-font-line-height-paragraph font-font-weight-default-normal text-text-sub-600 inline-block">
                    {riskLevel} of losing your investment with good security or
                    risk management practices in place.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Invest
