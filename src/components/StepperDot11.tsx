import { FunctionComponent } from 'react'

export type StepperDot11Type = {
  className?: string

  /** Variant props */
  size?: string
  state?: number
}

const StepperDot11: FunctionComponent<StepperDot11Type> = ({
  className = '',
  size = 'Small',
  state = 0,
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-2.5 ${className}`}
      data-size={size}
      data-state={state}
    >
      <div
        className={`w-2 relative rounded-77xl ${
          state === 0 ? 'bg-[#c5139f]' : 'bg-stroke-soft-200'
        } h-2`}
      />
      <div
        className={`w-2 relative rounded-77xl ${
          state === 1 ? 'bg-[#c5139f]' : 'bg-stroke-soft-200'
        } h-2`}
      />
      <div
        className={`w-2 relative rounded-77xl ${
          state === 2 ? 'bg-[#c5139f]' : 'bg-stroke-soft-200'
        } h-2`}
      />
    </div>
  )
}

export default StepperDot11
