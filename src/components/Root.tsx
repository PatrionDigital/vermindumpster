import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SolanaWalletProvider } from '@/components/SolanaWalletProvider';

export function Root() {
  return (
    <ErrorBoundary>
      <SolanaWalletProvider>
        <App/>
      </SolanaWalletProvider>
    </ErrorBoundary>
  );
}

// Import the existing App component
import { App } from '@/components/App';