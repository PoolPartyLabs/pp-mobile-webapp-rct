import { FunctionComponent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeSummary from '../components/HomeSummary'
import StartEarning from '../components/StartEarning'
import Navbar1 from '../components/Navbar1'
import { useAppKitAccount } from '@reown/appkit/react'

const Home: FunctionComponent = () => {
  const { isConnected } = useAppKitAccount()
  const navigate = useNavigate()

  useEffect(() => {
    const hasSeenOnboarding = document.cookie.includes('hasSeenOnboarding=true')

    if (!hasSeenOnboarding) {
      navigate('/onboard-home')
      return
    }

    if (!isConnected) {
      navigate('/login')
    }
  }, [navigate, isConnected])

  return (
    <div className="w-full min-h-screen relative bg-bg-white-0 overflow-hidden flex flex-col items-center justify-start leading-[normal] tracking-[normal]">
      <main className="w-full max-w-md px-4 flex flex-col items-center justify-center gap-spacing-spacing-8 z-[0]">
        <HomeSummary />
        <StartEarning />
      </main>
      <Navbar1 />
    </div>
  )
}

export default Home
