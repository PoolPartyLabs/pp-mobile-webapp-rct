import { FunctionComponent, useState, useEffect } from 'react'
import PortfolioSummarySection from '../components/PortfolioSummarySection'
import PortfolioAllocation from '../components/PortfolioAllocation'
// import AutoLayoutVertical10 from '../components/AutoLayoutVertical10'
import StartEarning from '../components/StartEarning'
import { useAppKitAccount } from '@reown/appkit/react'
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useWalletKit } from '../hooks/useWalletKit'

import Navbar1 from '../components/Navbar1'

const Portfolio: FunctionComponent = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [feeAmount, setFeeAmount] = useState('5.45')
  const [withdrawalLocation, setWithdrawalLocation] = useState(
    'your main wallet Cew******MfZ'
  )
  const [balance, setBalance] = useState<number | null>(null)
  const [formattedAddress, setFormattedAddress] = useState('')

  const solanaAccount = useAppKitAccount({ namespace: 'solana' })
  const { walletKit } = useWalletKit() // Get WalletKit from context

  console.log('solanaAccount :>> ', solanaAccount)

  useEffect(() => {
    const fetchBalance = async () => {
      if (solanaAccount && solanaAccount.address) {
        try {
          // Create a Solana connection to devnet
          const connection = new Connection(
            'https://api.devnet.solana.com',
            'confirmed'
          )

          // Convert address string to PublicKey
          const publicKey = new PublicKey(solanaAccount.address)

          // Format the address for display (first 4 chars + ... + last 4 chars)
          const shortAddress = `${solanaAccount.address.substring(
            0,
            4
          )}...${solanaAccount.address.substring(
            solanaAccount.address.length - 4
          )}`
          setFormattedAddress(shortAddress)

          // Fetch balance
          const balanceInLamports = await connection.getBalance(publicKey)
          const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL
          setBalance(balanceInSOL)

          console.log('Balance fetched:', balanceInSOL, 'SOL')
        } catch (error) {
          console.error('Error fetching balance:', error)
          setBalance(null)
        }
      }
    }

    fetchBalance()
  }, [solanaAccount])

  const handleCollect = () => {
    setIsLoading(true)
    // Add collection logic here
    setTimeout(() => {
      setIsLoading(false)
      setIsComplete(true)
      setFeeAmount('0.00')
    }, 2000)
  }

  return (
    <div className="w-full h-[100vh] relative bg-bg-white-0 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="w-full max-w-md px-4 flex flex-col items-center justify-center gap-spacing-spacing-8 z-[0]">
        {solanaAccount && solanaAccount.address ? (
          <div className="w-full mt-4 p-4 rounded-radius-10 bg-alpha-gray-alpha-10">
            <h2 className="text-text-strong-950 text-lg font-semibold">
              Wallet Details
            </h2>
            <p className="text-text-soft-400">Address: {formattedAddress}</p>
            <p className="text-text-strong-950">
              Balance:{' '}
              {balance !== null ? `${balance.toFixed(4)} SOL` : 'Loading...'}
            </p>
          </div>
        ) : (
          <div className="w-full mt-4 p-4 rounded-radius-10 bg-alpha-gray-alpha-10">
            <p className="text-text-soft-400">
              Connect your wallet to view balance
            </p>
          </div>
        )}
        <PortfolioSummarySection />
        <div className="flex flex-row gap-2">
          <div className="mt-6 h-10 rounded-radius-10 bg-alpha-gray-alpha-10 overflow-hidden flex flex-row items-center justify-center py-0 px-2.5 box-border gap-1 min-h-[40px] max-h-[40px] text-font-size-body-2 text-green-500">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame.svg"
            />
            <div
              onClick={() => {
                setModalOpen(true)
                setWithdrawalLocation('your main wallet Cew******MfZ')
              }}
              className="flex flex-row items-center justify-center py-0 px-1 cursor-pointer"
            >
              <div className="relative tracking-[-0.2px] leading-[24px] font-[600]">
                Collect Fees: ${feeAmount}
              </div>
            </div>
          </div>
          <div className="mt-6 h-10 rounded-radius-10 bg-alpha-gray-alpha-10 overflow-hidden flex flex-row items-center justify-center py-0 px-2.5 box-border gap-1 min-h-[40px] max-h-[40px] text-font-size-body-2 text-blue-500">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/1inch-logo.svg"
            />
            <div
              onClick={() => {
                setModalOpen(true)
                setWithdrawalLocation('your 1Inch Card')
              }}
              className="flex flex-row items-center justify-center py-0 px-1 cursor-pointer"
            >
              <div className="relative tracking-[-0.2px] leading-[24px] font-[600]">
                Party Now: ${feeAmount}
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[90vw] bg-gray-300 p-6 rounded-lg shadow-lg text-black">
              {!isLoading && !isComplete && (
                <>
                  <h3 className="text-lg font-semibold mb-4">
                    Confirm Collection
                  </h3>
                  <p className="mb-4">
                    Are you sure you want to collect ${feeAmount} to{' '}
                    {withdrawalLocation}?
                  </p>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="px-4 py-2 text-gray-600 border rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCollect}
                      className="px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Confirm
                    </button>
                  </div>
                </>
              )}
              {isLoading && (
                <div className="flex flex-col items-center p-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
                  <p className="mt-2">Processing...</p>
                </div>
              )}
              {isComplete && (
                <div className="flex flex-col items-center p-4">
                  <div className="text-green-500 text-4xl">✓</div>
                  <p className="mt-2">Collection successful!</p>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}{' '}
        <PortfolioAllocation />
        {/* <StartEarning /> */}
      </main>
      <Navbar1 />
    </div>
  )
}
export default Portfolio
