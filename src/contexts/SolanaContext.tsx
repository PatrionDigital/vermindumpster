import { 
  createContext, 
  FC, 
  ReactNode, 
  useContext, 
  useMemo 
} from 'react';
import { PublicKey, clusterApiUrl } from '@solana/web3.js';
import { 
  ConnectionProvider, 
  WalletProvider, 
  useWallet as useSolanaWallet 
} from '@solana/wallet-adapter-react';
import { 
  PhantomWalletAdapter, 
  SolflareWalletAdapter, 
  TorusWalletAdapter 
} from '@solana/wallet-adapter-wallets';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

export interface SolanaContextState {
  connected: boolean;
  publicKey: PublicKey | null;
  connecting: boolean;
  disconnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const SolanaContext = createContext<SolanaContextState>({
  connected: false,
  publicKey: null,
  connecting: false,
  disconnecting: false,
  connect: async () => {},
  disconnect: async () => {}
});

export const useSolanaContext = () => useContext(SolanaContext);

export interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: FC<SolanaProviderProps> = ({ children }) => {
  // You can specify the network (mainnet, testnet, devnet)
  const network = WalletAdapterNetwork.Mainnet;
  
  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking
  // and lazy loading - only the wallets you configure here will be compiled into your app
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter()
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <SolanaContextContent>
          {children}
        </SolanaContextContent>
      </WalletProvider>
    </ConnectionProvider>
  );
};

interface SolanaContextContentProps {
  children: ReactNode;
}

const SolanaContextContent: FC<SolanaContextContentProps> = ({ children }) => {
  const { 
    connected, 
    publicKey, 
    connecting, 
    disconnecting, 
    connect, 
    disconnect 
  } = useSolanaWallet();

  const contextValue = useMemo(
    () => ({
      connected,
      publicKey,
      connecting,
      disconnecting,
      connect,
      disconnect
    }),
    [connected, publicKey, connecting, disconnecting, connect, disconnect]
  );

  return (
    <SolanaContext.Provider value={contextValue}>
      {children}
    </SolanaContext.Provider>
  );
};