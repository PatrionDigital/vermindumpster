import { FC, ReactNode } from 'react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { SolanaProvider } from '@/contexts/SolanaContext';

// Import wallet adapter stylesheet
import '@solana/wallet-adapter-react-ui/styles.css';

export interface SolanaWalletProviderProps {
  children: ReactNode;
}

export const SolanaWalletProvider: FC<SolanaWalletProviderProps> = ({ children }) => {
  return (
    <SolanaProvider>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </SolanaProvider>
  );
};