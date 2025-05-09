# Dumpster Vermin 🦝

A Telegram Mini-App game where players care for their very own dumpster
raccoon pet, powered by $VERMIN.

## 📝 Description

Dumpster Vermin is a Tamagotchi-inspired game where players care for a raccoon
pet living in a dumpster.The game integrates with Solana blockchain using
Honeycomb Protocol, allowing players to interact with their pets using the
$VERMIN memecoin.

### Key Features

- **Wallet Integration**: Connect your Solana wallet seamlessly within Telegram
- **NFT Hatching**: Mint an NFT to hatch your raccoon pet
- **Pet Interaction**: Feed your raccoon with $VERMIN to coax it out of the dumpster
- **Daily Rewards**: Spin a roulette wheel twice daily to win $VERMIN and other
  meme tokens
- **Holding Incentives**: Your $VERMIN holdings act as a multiplier for rewards
  (up to a cap)

## 🚀 Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **Blockchain**: Solana (via Honeycomb Protocol)
- **Database**: Turso
- **Deployment**: Vercel
- **Environment**: Telegram Mini-App

## 🛠️ Prerequisites

- Node.js (v16+)
- npm or yarn
- Telegram account
- Solana wallet (Phantom, Solflare, etc.)

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dumpster-vermin.git
cd dumpster-vermin
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Set up environment variables:

Create a `.env` file in the root directory with the following variables:

```env
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_HONEYCOMB_API_KEY=your_honeycomb_api_key
VITE_TURSO_CONNECTION_URL=your_turso_connection_url
VITE_TURSO_AUTH_TOKEN=your_turso_auth_token
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 📱 Telegram Bot Setup

1. Create a new bot via [@BotFather](https://t.me/BotFather) on Telegram.
2. Set up your bot with BotFather and configure the mini-app:
   - Use `/newbot` to create a new bot
   - Use `/mybots` to select your bot
   - Go to "Bot Settings" > "Menu Button" to add your mini-app URL

## 🔗 Honeycomb Protocol Integration

The application uses Honeycomb Protocol to interact with the Solana blockchain:

1. Set up a Honeycomb account at [honeycomb.protocol](https://honeycomb.protocol)
2. Create a new project and obtain API keys
3. Configure NFT minting parameters in the dashboard
4. Configure $VERMIN token integration

## 💾 Turso Database Setup

1. Create a Turso account at [turso.tech](https://turso.tech)
2. Create a new database
3. Get connection URL and authentication token
4. Run the migrations provided in the `migrations` folder:

```bash
npm run migrate
# or
yarn migrate
```

## 📊 Database Schema

The application uses the following core tables:

- `users`: Stores user information and wallet connections
- `pets`: Stores pet information, including NFT details and status
- `feedings`: Records of pet feeding events
- `spins`: Records of roulette spins and rewards

## 🎮 Game Mechanics

### Pet Lifecycle

1. **Connection**: User connects their wallet and authorizes the app
2. **Hatching**: User mints an NFT to hatch their raccoon pet
3. **Maintenance**: User must feed their pet regularly with $VERMIN

### Roulette System

- Players can spin twice per day
- Rewards include $VERMIN and other meme tokens
- Holding more $VERMIN increases potential rewards (capped at a maximum value)
- The multiplier formula: `min(userBalance * multiplierFactor, maxMultiplier)`

## 🚢 Deployment

The app is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy with the following settings:
   - Framework: Vite
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `dist`

## 🧪 Testing

Run tests with:

```bash
npm run test
# or
yarn test
```

## 📈 Future Roadmap

- Social features: compare and interact with friends' pets
- Customization: dumpster decorations and pet accessories as NFTs
- Breeding: combine pets to create new unique raccoons
- Leaderboards: competition for best-kept pets
- Additional mini-games to earn more $VERMIN

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

If you have any questions or feedback, please reach out through:

- Telegram: [@YourTelegramUsername]
- Twitter: [@YourTwitterHandle]
- Discord: [Your Discord Server]

## 🙏 Acknowledgements

- Telegram Mini Apps Platform
- Honeycomb Protocol
- Solana Foundation
- $VERMIN community

## Telegram Mini Apps React Template

This template demonstrates how developers can implement a single-page
application on the Telegram Mini Apps platform using the following technologies
and libraries:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI)
- [Vite](https://vitejs.dev/)

> The template was created using [npm](https://www.npmjs.com/). Therefore, it is
> required to use it for this project as well. Using other package managers, you
> will receive a corresponding error.

## Install Dependencies

If you have just cloned this template, you should install the project
dependencies using the command:

```Bash
npm install
```

## Scripts

This project contains the following scripts:

- `dev`. Runs the application in development mode.
- `dev:https`. Runs the application in development mode using locally created valid SSL-certificates.
- `build`. Builds the application for production.
- `lint`. Runs [eslint](https://eslint.org/) to ensure the code quality meets
  the required standards.
- `deploy`. Deploys the application to GitHub Pages.

To run a script, use the `npm run` command:

```Bash
npm run {script}
# Example: npm run build
```

## Create Bot and Mini App

Before you start, make sure you have already created a Telegram Bot. Here is
a [comprehensive guide](https://docs.telegram-mini-apps.com/platform/creating-new-app)
on how to do it.

## Run

Although Mini Apps are designed to be opened
within [Telegram applications](https://docs.telegram-mini-apps.com/platform/about#supported-applications),
you can still develop and test them outside of Telegram during the development
process.

To run the application in the development mode, use the `dev` script:

```bash
npm run dev:https
```

> [!NOTE]
> As long as we use [vite-plugin-mkcert](https://www.npmjs.com/package/vite-plugin-mkcert),
> launching the dev mode for the first time, you may see sudo password request.
> The plugin requires it to properly configure SSL-certificates. To disable the plugin, use the `npm run dev` command.

After this, you will see a similar message in your terminal:

```bash
VITE v5.2.12  ready in 237 ms

➜  Local:   https://localhost:5173/reactjs-template
➜  Network: https://172.18.16.1:5173/reactjs-template
➜  Network: https://172.19.32.1:5173/reactjs-template
➜  Network: https://192.168.0.171:5173/reactjs-template
➜  press h + enter to show help
```

Here, you can see the `Local` link, available locally, and `Network` links
accessible to all devices in the same network with the current device.

To view the application, you need to open the `Local`
link (`https://localhost:5173/reactjs-template` in this example) in your
browser:

![Application](assets/application.png)

It is important to note that some libraries in this template, such as
`@telegram-apps/sdk`, are not intended for use outside of Telegram.

Nevertheless, they appear to function properly. This is because the
`src/mockEnv.ts` file, which is imported in the application's entry point (
`src/index.ts`), employs the `mockTelegramEnv` function to simulate the Telegram
environment. This trick convinces the application that it is running in a
Telegram-based environment. Therefore, be cautious not to use this function in
production mode unless you fully understand its implications.

> [!WARNING]
> Because we are using self-signed SSL certificates, the Android and iOS
> Telegram applications will not be able to display the application. These
> operating systems enforce stricter security measures, preventing the Mini App
> from loading. To address this issue, refer to
> [this guide](https://docs.telegram-mini-apps.com/platform/getting-app-link#remote).

## Deploy

This boilerplate uses GitHub Pages as the way to host the application
externally. GitHub Pages provides a CDN which will let your users receive the
application rapidly. Alternatively, you could use such services
as [Heroku](https://www.heroku.com/) or [Vercel](https://vercel.com).

### Manual Deployment

This boilerplate uses the [gh-pages](https://www.npmjs.com/package/gh-pages)
tool, which allows deploying your application right from your PC.

#### Configuring

Before running the deployment process, ensure that you have done the following:

1. Replaced the `homepage` value in `package.json`. The GitHub Pages deploy tool
   uses this value to
   determine the related GitHub project.
2. Replaced the `base` value in `vite.config.ts` and have set it to the name of
   your GitHub
   repository. Vite will use this value when creating paths to static assets.

For instance, if your GitHub username is `telegram-mini-apps` and the repository
name is `is-awesome`, the value in the `homepage` field should be the following:

```json
{
  "homepage": "https://telegram-mini-apps.github.io/is-awesome"
}
```

And `vite.config.ts` should have this content:

```ts
export default defineConfig({
  base: '/is-awesome/',
  // ...
});
```

You can find more information on configuring the deployment in the `gh-pages`
[docs](https://github.com/tschaub/gh-pages?tab=readme-ov-file#github-pages-project-sites).

#### Before Deploying

Before deploying the application, make sure that you've built it and going to
deploy the fresh static files:

```bash
npm run build
```

Then, run the deployment process, using the `deploy` script:

```Bash
npm run deploy
```

After the deployment completed successfully, visit the page with data according
to your username and repository name. Here is the page link example using the
data mentioned above:
https://telegram-mini-apps.github.io/is-awesome

### GitHub Workflow

To simplify the deployment process, this template includes a
pre-configured [GitHub workflow](.github/workflows/github-pages-deploy.yml) that
automatically deploys the project when changes are pushed to the `master`
branch.

To enable this workflow, create a new environment (or edit the existing one) in
the GitHub repository settings and name it `github-pages`. Then, add the
`master` branch to the list of deployment branches.

You can find the environment settings using this
URL: `https://github.com/{username}/{repository}/settings/environments`.

![img.png](.github/deployment-branches.png)

In case, you don't want to do it automatically, or you don't use GitHub as the
project codebase, remove the `.github` directory.

### GitHub Web Interface

Alternatively, developers can configure automatic deployment using the GitHub
web interface. To do this, follow the link:
`https://github.com/{username}/{repository}/settings/pages`.

## TON Connect

This boilerplate utilizes
the [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
project to demonstrate how developers can integrate functionality related to TON
cryptocurrency.

The TON Connect manifest used in this boilerplate is stored in the `public`
folder, where all publicly accessible static files are located. Remember
to [configure](https://docs.ton.org/develop/dapps/ton-connect/manifest) this
file according to your project's information.

## Useful Links

- [Platform documentation](https://docs.telegram-mini-apps.com/)
- [@telegram-apps/sdk-react documentation](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk-react)
- [Telegram developers community chat](https://t.me/devs)
