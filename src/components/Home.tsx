import { FunctionComponent } from 'react'

export type HomeType = {
  className?: string
  bottomDividerIcon?: string
  color?: string

  /** Variant props */
  style?: string
}

const Home: FunctionComponent<HomeType> = ({
  className = '',
  style = 'Line',
  bottomDividerIcon,
  color = 'inherit',
}) => {
  return (
    <div
      className={`w-5 relative h-5 overflow-hidden shrink-0 ${className}`}
      data-style={style}
    >
      <img
        className="absolute h-[91.5%] w-[83.5%] top-[0%] right-[8%] bottom-[8.5%] left-[8.5%] max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src={bottomDividerIcon}
        style={{
          filter: `invert(${color === 'white' ? 1 : 0})`,
        }}
      />
    </div>
  )
}

export default Home
