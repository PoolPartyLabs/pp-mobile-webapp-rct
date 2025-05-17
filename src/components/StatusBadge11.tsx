import { FunctionComponent } from 'react'

export type StatusBadge11Type = {
  className?: string
  editBadge?: string
  type?: 'warn' | 'ok'

  /** Variant props */
  status1?: string
  style?: string
  withDot?: string
}

const StatusBadge11: FunctionComponent<StatusBadge11Type> = ({
  className = '',
  status1 = '❇️ Completed',
  style = 'Stroke',
  withDot = 'On',
  editBadge = 'Matches your profile',
  type = 'ok',
}) => {
  const getBadgeStyles = () => {
    if (type === 'warn') {
      return 'bg-yellow-100/50 text-yellow-800'
    }
    return 'bg-state-feature-lighter text-state-feature-dark'
  }

  const getIcon = () => {
    if (type === 'warn') {
      return '/exclamation-circle.svg'
    }
    return '/selectboxcirclefill.svg'
  }

  return (
    <div
      className={`rounded-radius-6 overflow-hidden flex flex-row items-center justify-start py-1 pl-1 pr-2 gap-1 text-left text-font-size-paragraph font-Web-title-1-normal ${getBadgeStyles()} ${className}`}
    >
      <img
        className={`h-4 w-4 relative overflow-hidden shrink-0 ${
          type === 'warn' ? 'text-yellow-800' : 'text-state-feature-dark'
        }`}
        loading="lazy"
        alt=""
        src={getIcon()}
      />
      <div className="relative leading-font-line-height-paragraph font-font-weight-default-medium">
        {editBadge}
      </div>
    </div>
  )
}

export default StatusBadge11
