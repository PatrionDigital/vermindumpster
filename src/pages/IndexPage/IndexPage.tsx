import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';

import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';

// Placeholder for Solana logo
const PLACEHOLDER_SOLANA_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 397.7 311.7'%3E%3Cstyle%3E.st0%7Bfill:url(%23SVGID_1_);%7D%3C/style%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='360.879' y1='351.455' x2='141.213' y2='-69.294' gradientTransform='matrix(1 0 0 -1 0 314)'%3E%3Cstop offset='0' style='stop-color:%239945FF'/%3E%3Cstop offset='1' style='stop-color:%2314F195'/%3E%3C/linearGradient%3E%3Cpath class='st0' d='M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zM333.1 120.9c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z'/%3E%3C/svg%3E";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <List>
        <Section
          header="Dumpster Vermin"
          footer="Connect your Solana wallet to access $VERMIN token features"
        >
          <Link to="/wallet">
            <Cell
              before={<Image src={PLACEHOLDER_SOLANA_ICON} style={{ backgroundColor: '#9945FF' }}/>}
              subtitle="Connect your Solana wallet"
            >
              Solana Wallet
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};