import { FunctionComponent } from 'react'

export type Tag11Type = {
  className?: string
  editText?: string
  sublabel?: boolean
  editSublabel?: string

  /** Variant props */
  dismissIcon?: string
  state?: string
  style?: 'Stroke' | 'Gray'
  type?: string
}

const Tag11: FunctionComponent<Tag11Type> = ({
  className = '',
  dismissIcon = 'Off',
  state = 'Default',
  style = 'Stroke',
  type = '📂 Basic',
  editText = 'Low Risk',
  sublabel = false,
  editSublabel = '(4)',
}) => {
  return (
    <button
      className={`w-[25vw] cursor-pointer [border:none] py-1 px-2 bg-alpha-gray-alpha-10 rounded-md overflow-hidden flex flex-row items-center justify-center data-[type='📂:[&_Basic']:data-[state='Default']:data-[style='Gray']:data-[dismissIcon='Off']]:[border:unset] data-[type='📂:[&_Basic']:data-[state='Default']:data-[style='Gray']:data-[dismissIcon='Off']]:text-text-sub-600 ${className}`}
      data-dismissIcon={dismissIcon}
      data-state={state}
      data-style={style}
      data-type={type}
    >
      <div className="flex flex-row items-center justify-center gap-0.5">
        <div className="tag relative text-font-size-paragraph leading-font-line-height-paragraph font-font-weight-default-medium font-Web-title-1-normal text-text-strong-950 text-left">
          {editText}
        </div>
        {!!sublabel && (
          <div className="relative text-font-size-paragraph leading-font-line-height-paragraph font-font-weight-default-normal font-Web-title-1-normal text-text-soft-400 text-left">
            {editSublabel}
          </div>
        )}
      </div>
    </button>
  )
}

export default Tag11
