import { FunctionComponent } from 'react'
import Content from './Content'

export type StartEarningType = {
  className?: string
}

const StartEarning: FunctionComponent<StartEarningType> = ({
  className = '',
}) => {
  return (
    <section
      className={`w-[full] self-stretch overflow-hidden flex flex-col items-start justify-start py-8 px-spacing-spacing-16 text-left text-font-size-title-1 text-text-strong-950 font-Web-title-1-normal ${className}`}
    >
      <Content />
    </section>
  )
}

export default StartEarning
