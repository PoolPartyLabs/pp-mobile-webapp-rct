import { useEffect, useState, createContext, ReactNode, useMemo } from 'react';
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Onboard1 from './pages/Onboard1';
import Invest from './pages/Invest';
import Home from './pages/Home';
import OnboardHome from './pages/OnboardHome';
import Onboard2 from './pages/Onboard2';
import Onboard3 from './pages/Onboard3';

// App.tsx
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { Core } from '@walletconnect/core';
import { WalletKit, WalletKitTypes } from '@reown/walletkit';

import { WalletConnectWalletAdapter } from "@walletconnect/solana-adapter";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

export const SolanaContext = ({ children }: { children: ReactNode; }) => {
  const endpoint = useMemo(
    () => clusterApiUrl(WalletAdapterNetwork.Devnet),
    []
  );

  const wallets = useMemo(
    () => [
      new WalletConnectWalletAdapter({
        network: WalletAdapterNetwork.Devnet,
        options: {
          projectId: "ac54c42f0ce90040930e2c562bd6107a",
        },
      }),

    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    wallets[0].connect();
  }, [wallets]);


  return (
    <ConnectionProvider endpoint={"http://127.0.0.1:8899"}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

// Create context for WalletKit
export const WalletKitContext = createContext<{
  walletKit: any;
  isWalletKitLoading: boolean;
}>({ walletKit: null, isWalletKitLoading: true });
// 0. Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

// 1. Get projectId from https://cloud.reown.com
const projectId = 'ac54c42f0ce90040930e2c562bd6107a';

// 2. Create a metadata object - optional
const metadata = {
  name: 'pp-social-login-test',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
};

// 3. Create modal
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    email: false,
    analytics: false, // Optional - defaults to your Cloud configuration
    socials: ['google'],
  },
});

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [walletKit, setWalletKit] = useState<any>(null);
  const [isWalletKitLoading, setIsWalletKitLoading] = useState(true);

  // Initialize WalletKit
  useEffect(() => {
    const initWalletKit = async () => {
      try {
        // Initialize WalletConnect Core
        const core = new Core({
          projectId: projectId, // Using the same project ID as AppKit
        });

        // Initialize WalletKit
        const walletKitInstance = await WalletKit.init({
          core,
          metadata: {
            name: 'Pool-Party Mobile App',
            description: 'Pool-Party Mobile Web Application',
            url: 'https://reown.com/walletkit',
            icons: ['https://assets.reown.com/reown-profile-pic.png'],
          },
        });

        // Set up event listeners after initializing
        walletKitInstance.on(
          'session_proposal',
          async (proposal: WalletKitTypes.SessionProposal) => {
            console.log('Session proposal received:', proposal);
            // You'll need to implement your session handling logic here
            // For now, just logging the event
          }
        );

        setWalletKit(walletKitInstance);
        setIsWalletKitLoading(false);
        console.log('WalletKit initialized successfully');
      } catch (error) {
        console.error('Failed to initialize WalletKit:', error);
        setIsWalletKitLoading(false);
      }
    };

    initWalletKit();
  }, []);

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/onboard':
        title = '';
        metaDescription = '';
        break;
      case '/invest':
        title = '';
        metaDescription = '';
        break;
      case '/home-empty':
        title = '';
        metaDescription = '';
        break;
      case '/onboard1':
        title = '';
        metaDescription = '';
        break;
      case '/OnboardHome':
        title = '';
        metaDescription = '';
        break;
      case '/onboard3':
        title = '';
        metaDescription = '';
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Show loading state while WalletKit initializes
  if (isWalletKitLoading) {
    return <div className="bg-black" ></div>;
  }

  return (
    <SolanaContext>
      <WalletKitContext.Provider value={{ walletKit, isWalletKitLoading }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboard-home" element={<OnboardHome />} />
          <Route path="/onboard-2" element={<Onboard2 />} />
          <Route path="/onboard-3" element={<Onboard3 />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/login" element={<Onboard1 />} />
        </Routes>
      </WalletKitContext.Provider>
    </SolanaContext>
  );
}
export default App;
