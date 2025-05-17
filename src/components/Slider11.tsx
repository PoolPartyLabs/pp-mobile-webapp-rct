import { FunctionComponent, useState, useEffect, useRef } from 'react'
import Tooltip11 from './Tooltip11'

export type Slider11Type = {
  className?: string
  label?: boolean
  tooltip?: boolean
  editLabel?: string
  sublabel?: boolean
  editSublabel?: string
  editAmount?: string
  value: number
  min?: number
  max?: number
  onChange: (value: number) => void
}

const Slider11: FunctionComponent<Slider11Type> = ({
  className = '',
  value = 0,
  min = 0,
  max = 300,
  label = true,
  tooltip = true,
  editLabel = 'Investment',
  sublabel = false,
  editSublabel = '(Optional)',
  editAmount = '$300',
  onChange,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const sliderTrackRef = useRef<HTMLDivElement>(null)

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true)
    updateValueFromPosition(clientX)
  }

  const handleInteractionEnd = () => {
    setIsDragging(false)
  }

  const updateValueFromPosition = (clientX: number) => {
    if (!sliderTrackRef.current) return

    const rect = sliderTrackRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    const newValue = Math.round((percentage / 100) * (max - min)) + min
    onChange(newValue)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    updateValueFromPosition(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return
    updateValueFromPosition(e.touches[0].clientX)
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleInteractionEnd)
    document.addEventListener('touchmove', handleTouchMove)
    document.addEventListener('touchend', handleInteractionEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleInteractionEnd)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleInteractionEnd)
    }
  }, [isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleInteractionStart(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleInteractionStart(e.touches[0].clientX)
    }
  }

  const percentage = `${((value - min) / (max - min)) * 100}%`

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-1 text-left text-font-size-paragraph text-text-sub-600 font-Web-title-1-normal ${className}`}
      data-value={value}
    >
      {!!label && (
        <div className="self-stretch flex flex-row items-start justify-start gap-0.5">
          <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal">
            {editLabel}
          </div>
          {!!sublabel && (
            <div className="relative leading-font-line-height-paragraph font-font-weight-default-normal text-text-soft-400">
              {editSublabel}
            </div>
          )}
          <div className="flex-1 relative leading-[16px] font-[500] text-right">
            ${max}
          </div>
        </div>
      )}
      <div className="self-stretch h-4 relative text-bg-white-0">
        <div
          ref={sliderTrackRef}
          className="slider-track absolute w-full top-[5px] right-[0px] left-[0px] rounded-radius-full bg-bg-soft-200 h-1.5"
          onClick={handleMouseDown}
        />
        <div
          className="absolute"
          style={{ width: percentage, top: 0, left: '0%', height: '16px' }}
        >
          <div className="absolute w-full top-[calc(50%_-_3px)] right-[0px] left-[0px] rounded-radius-full bg-[#c5139f] h-1.5" />
          <div
            className="absolute top-[calc(50%_-_8px)] right-[-8px] shadow-[0px_6px_10px_rgba(14,_18,_27,_0.06),_0px_2px_4px_rgba(14,_18,_27,_0.03)] w-4 h-4"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: 'pointer' }}
          >
            <div className="absolute top-[calc(50%_-_8px)] left-[calc(50%_-_8px)] rounded-[50%] bg-text-strong-950 w-4 h-4" />
            <div className="absolute top-[calc(50%_-_3px)] left-[calc(50%_-_3px)] rounded-[50%] bg-[#c5139f] w-1.5 h-1.5" />
            {!!tooltip && (
              <Tooltip11
                darkMode="On"
                size="2X-Small 24"
                type="🔽 Bottom Center"
                tail
                editText={`$${value}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider11
