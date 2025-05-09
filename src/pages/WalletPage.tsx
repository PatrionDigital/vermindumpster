import { FC, useState } from 'react';
import { Title, Text, Button, List, Cell } from '@telegram-apps/telegram-ui';
import { useSolanaContext } from '@/contexts/SolanaContext';
import { SolanaConnectButton } from '@/components/SolanaConnectButton';
import { SolanaConnectModal } from '@/components/SolanaConnectModal';
import { Page } from '@/components/Page';
import {initDataState, useSignal} from '@telegram-apps/sdk-react';

export const WalletPage: FC = () => {
  const { connected, publicKey } = useSolanaContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get Telegram user data
  const userData = useSignal(initDataState);
  const userName = userData?.user ? 
    `${userData.user.first_name}${userData.user.last_name ? ' ' + userData.user.last_name : ''}` : 
    'User';

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Page>
      <div style={{ padding: '16px' }}>
        <Title level="2" style={{ marginBottom: '16px' }}>
          Welcome, {userName}!
        </Title>
        
        <Text style={{ marginBottom: '24px' }}>
          Connect your Solana wallet to check for $VERMIN tokens and access special features.
        </Text>
        
        {connected ? (
          <List>
            <Cell subhead="Wallet Address" multiline>
              {publicKey?.toString()}
            </Cell>
            <Cell>
              <SolanaConnectButton />
            </Cell>
          </List>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SolanaConnectButton />
            <Button onClick={openModal}>Connect with Modal</Button>
          </div>
        )}
        
        <SolanaConnectModal open={isModalOpen} onClose={closeModal} />
      </div>
    </Page>
  );
};