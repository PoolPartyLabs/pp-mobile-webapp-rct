import { FunctionComponent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export type SkipButtonProps = {
  className?: string
  navigateTo?: string
}

const SkipButton: FunctionComponent<SkipButtonProps> = ({
  className = '',
  navigateTo = '/',
}) => {
  const navigate = useNavigate()

  const handleSkipClick = useCallback(() => {
    // Set cookie to mark onboarding as seen
    document.cookie = 'hasSeenOnboarding=true;max-age=31536000;path=/' // Expires in 1 year (31536000 seconds)
    navigate(navigateTo)
  }, [navigate, navigateTo])

  return (
    <div
      className={`w-full h-10 rounded-radius-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-2.5 box-border gap-1 min-h-[40px] max-h-[40px] cursor-pointer ${className}`}
      onClick={handleSkipClick}
    >
      <img
        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
        alt=""
      />
      <div className="flex flex-row items-center justify-center py-0 px-1">
        <div className="relative tracking-[-0.2px] leading-font-line-height-body-2 font-semibold">
          Skip
        </div>
      </div>
      <img
        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
        alt=""
      />
    </div>
  )
}

export default SkipButton
