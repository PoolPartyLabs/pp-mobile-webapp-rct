import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

export type Buttons11Type = {
  className?: string

  /** Variant props */
  onlyIcon?: string
  size?: string
  state?: string
  style?: string
  type?: string
}

const Buttons11: FunctionComponent<Buttons11Type> = ({
  className = '',
  onlyIcon = 'Off',
  size = 'Medium (40)',
  state = 'Default',
  style = 'Filled',
  type = 'Primary',
}) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <button
      onClick={handleGoBack}
      className={`h-9 rounded-radius-8 bg-stroke-soft-200 overflow-hidden shrink-0 flex flex-row items-center justify-center py-0 px-2 box-border min-h-[36px] max-h-[36px] cursor-pointer ${className}`}
      data-onlyIcon={onlyIcon}
      data-size={size}
      data-state={state}
      data-style={style}
      data-type={type}
    >
      <img
        className="h-5 w-5 relative overflow-hidden shrink-0"
        loading="lazy"
        alt="Go back"
        src="/arrowleftline.svg"
      />
    </button>
  )
}

export default Buttons11
