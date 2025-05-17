import { FunctionComponent, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import HomeIcon from './HomeIcon'
import NavbarIcon from './NavbarIcon'
// import AutoLayoutVertical5 from './AutoLayoutVertical5'

export type Navbar1Type = {
  className?: string
}

const Navbar1: FunctionComponent<Navbar1Type> = ({ className = '' }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const onPortfolioClick = useCallback(() => {
    navigate('/portfolio')
  }, [navigate])

  const isHome = location.pathname === '/'

  return (
    <footer
      className={`w-full !!m-[0 important] absolute bottom-[0px] left-[0px] bg-bg-white-0 border-stroke-soft-200 border-solid border-t-[0.5px] box-border flex flex-row items-center justify-between py-0 px-spacing-spacing-16 gap-spacing-spacing-8 z-[1] text-left text-font-size-paragraph text-[#656565] font-Web-title-1-normal ${className}`}
    >
      <HomeIcon
        homeColor={isHome ? '#FF70E5' : '#656565'}
        bottomDividerIcon={
          isHome ? '/home-icon-pink.svg' : '/home-icon-gray.svg'
        }
      />
      {/* <NavbarIcon earn="Earn" /> */}
      <NavbarIcon
        onIconClick={onPortfolioClick}
        textContent="Portfólio"
        textColor={isHome ? '#656565' : '#FF70E5'}
        imageVector={isHome ? '/wallet-icon-gray.svg' : '/wallet-icon-pink.svg'}
      />
      {/* <AutoLayoutVertical5 /> */}
    </footer>
  )
}

export default Navbar1
