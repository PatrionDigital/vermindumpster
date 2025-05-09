import { FC, useCallback, useEffect, useState } from 'react';
import { 
  Avatar,
  Button, 
  Text,
  Cell,
  List,
  Title
} from '@telegram-apps/telegram-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';
import './SolanaConnectModal.css';

// Use placeholders instead of actual images for now
const PLACEHOLDER_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'/%3E%3C/svg%3E";

// Defining wallet IDs with the correct type
const WALLET_NAMES = {
  PHANTOM: 'Phantom' as WalletName,
  SOLFLARE: 'Solflare' as WalletName,
  BACKPACK: 'Backpack' as WalletName,
  TORUS: 'Torus Wallet' as WalletName,
};

const wallets = [
  { id: WALLET_NAMES.PHANTOM, name: 'Phantom', icon: PLACEHOLDER_ICON },
  { id: WALLET_NAMES.SOLFLARE, name: 'Solflare', icon: PLACEHOLDER_ICON },
  { id: WALLET_NAMES.BACKPACK, name: 'Backpack', icon: PLACEHOLDER_ICON },
  { id: WALLET_NAMES.TORUS, name: 'Torus', icon: PLACEHOLDER_ICON },
];

interface SolanaConnectModalProps {
  open: boolean;
  onClose: () => void;
}

export const SolanaConnectModal: FC<SolanaConnectModalProps> = ({ open, onClose }) => {
  const { connected, select, connect } = useWallet();
  const [selectedWallet, setSelectedWallet] = useState<WalletName | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Close modal if connection is established
  useEffect(() => {
    if (connected && open) {
      onClose();
    }
  }, [connected, open, onClose]);

  // Effect to handle connection after wallet selection
  useEffect(() => {
    let timeoutId: number;

    if (selectedWallet && isConnecting) {
      timeoutId = window.setTimeout(async () => {
        try {
          await connect();
          onClose();
        } catch (error) {
          console.error('Failed to connect after selecting wallet:', error);
        } finally {
          setIsConnecting(false);
        }
      }, 200);
    }

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [selectedWallet, isConnecting, connect, onClose]);

  const handleWalletSelect = useCallback((walletId: WalletName) => {
    setSelectedWallet(walletId);
    setIsConnecting(true);
    
    try {
      // Just select the wallet here
      select(walletId);
    } catch (error) {
      console.error('Failed to select wallet:', error);
      setIsConnecting(false);
    }
  }, [select]);

  // Since we don't have a proper modal component, let's conditionally render instead
  if (!open) {
    return null;
  }

  return (
    <div className="solana-connect-modal">
      <div className="solana-connect-modal-content">
        <div className="solana-connect-modal-header">
          <Title level="3">Connect Wallet</Title>
        </div>
        
        <Text color="secondary" style={{ marginBottom: '16px' }}>
          Connect your Solana wallet to access $VERMIN token features.
        </Text>
        
        <List>
          {wallets.map((wallet) => (
            <Cell
              key={wallet.id}
              onClick={() => handleWalletSelect(wallet.id)}
              before={<Avatar src={wallet.icon} alt={wallet.name} />}
              after={selectedWallet === wallet.id && isConnecting ? 'Connecting...' : undefined}
              disabled={isConnecting}
            >
              {wallet.name}
            </Cell>
          ))}
        </List>
        
        <div style={{ padding: 16 }}>
          <Button onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};