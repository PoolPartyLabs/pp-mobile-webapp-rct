'use client';

import { WalletError } from '@solana/wallet-adapter-base';
import {
  AnchorWallet,
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ReactNode, useCallback, useMemo } from 'react';
import '@solana/wallet-adapter-react-ui/styles.css';
import { AnchorProvider } from '@coral-xyz/anchor';
import { Connection } from '@solana/web3.js';


export function SolanaProvider({ children }: { children: ReactNode; }) {
  const endpoint = useMemo(() => "http://127.0.0.1:8899", []);
  const onError = useCallback((error: WalletError) => {
    console.error(error);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} onError={onError} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export function useAnchorProvider() {
  // const { connection } = useConnection();
  const wallet = useWallet();

  return new AnchorProvider(new Connection("http://0.0.0.0:8899"), wallet as AnchorWallet, { commitment: 'confirmed' });
}
