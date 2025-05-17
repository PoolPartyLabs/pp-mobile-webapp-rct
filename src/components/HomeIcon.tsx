import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from 'react'
import { useNavigate } from 'react-router-dom'
import Home from './Home'

export type HomeIconType = {
  className?: string

  /** Style props */
  homeColor?: CSSProperties['color']
  bottomDividerIcon: string
}

const HomeIcon: FunctionComponent<HomeIconType> = ({
  className = '',
  homeColor,
  bottomDividerIcon,
}) => {
  const homeStyle: CSSProperties = useMemo(() => {
    return {
      color: homeColor,
    }
  }, [homeColor])

  const navigate = useNavigate()

  const onAutoLayoutVerticalClick = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <div
      className={`h-20 flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 box-border gap-2 cursor-pointer text-left text-font-size-paragraph text--Branding-400 font-Web-title-1-normal ${className}`}
      style={homeStyle}
      onClick={onAutoLayoutVerticalClick}
    >
      <Home
        style="Line"
        bottomDividerIcon={bottomDividerIcon}
        color={homeColor}
      />
      <div
        className="relative leading-font-line-height-paragraph font-font-weight-default-normal"
        style={homeStyle}
      >
        Home
      </div>
    </div>
  )
}

export default HomeIcon
