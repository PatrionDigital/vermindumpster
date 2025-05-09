import { FC, useCallback, useMemo } from 'react';
import { Button } from '@telegram-apps/telegram-ui';
import { useSolanaContext } from '@/contexts/SolanaContext';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

interface SolanaConnectButtonProps {
  onClick?: () => void;
  className?: string;
}

export const SolanaConnectButton: FC<SolanaConnectButtonProps> = ({ 
  onClick,
  className
}) => {
  const { connected, connecting, disconnecting, disconnect } = useSolanaContext();
  const { setVisible } = useWalletModal();

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
      return;
    }

    if (connected) {
      disconnect();
    } else {
      // Open the wallet selection modal instead of directly connecting
      setVisible(true);
    }
  }, [connected, disconnect, onClick, setVisible]);

  const buttonText = useMemo(() => {
    if (connecting) return 'Connecting...';
    if (disconnecting) return 'Disconnecting...';
    if (connected) return 'Disconnect Wallet';
    return 'Connect Wallet';
  }, [connected, connecting, disconnecting]);

  const isDisabled = useMemo(() => {
    return connecting || disconnecting;
  }, [connecting, disconnecting]);

  return (
    <Button
      className={className}
      onClick={handleClick}
      disabled={isDisabled}
      loading={connecting || disconnecting}
    >
      {buttonText}
    </Button>
  );
};