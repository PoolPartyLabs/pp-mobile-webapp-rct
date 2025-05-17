import { FunctionComponent, useMemo, type CSSProperties } from 'react'
import ProcentCircle from './ProcentCircle'

export type NavbarIconType = {
  className?: string
  textContent?: string

  /** Style props */
  textColor?: CSSProperties['color']

  /** Action props */
  onIconClick?: () => void
  imageVector: string
}

const NavbarIcon: FunctionComponent<NavbarIconType> = ({
  className = '',
  onIconClick,
  textContent,
  textColor,
  imageVector,
}) => {
  const textContentStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    }
  }, [textColor])

  return (
    <div
      className={`h-20 flex-1 rounded-radius-16 overflow-hidden flex flex-col items-center justify-center py-2 px-4 box-border gap-2 text-left text-font-size-paragraph text-[#656565] font-Web-title-1-normal ${className}`}
      onClick={onIconClick}
    >
      <ProcentCircle style="Line" vector={imageVector} />
      <div
        className="relative leading-font-line-height-paragraph font-font-weight-default-normal"
        style={textContentStyle}
      >
        {textContent}
      </div>
    </div>
  )
}

export default NavbarIcon
