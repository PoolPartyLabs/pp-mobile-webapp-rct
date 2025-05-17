# Pool-Party Mobile Web Application

## Overview

Pool-Party is a mobile-first web application designed to simplify DeFi investments on Solana for everyday users. It provides an intuitive interface for connecting wallets, managing investments, and participating in various DeFi strategies with different risk profiles.

## Features

- **Simplified DeFi Onboarding**: Guided flows for new users to understand DeFi concepts
- **Risk-Based Investment Strategies**: Options for different risk appetites (low, medium, high)
- **Wallet Integration**: Seamless connection with multiple wallet providers
- **Investment Dashboard**: Track performance and manage positions
- **Embedded Wallet Support**: Social login options for easier access

## Installation and Setup

```bash
# Clone the repository
git clone
```

```bash
# Install dependencies
yarn install
```

```bash
# Start the development server
yarn start
```

## Architecture

The application is built using:

- React with TypeScript for type safety
- TailwindCSS for styling
- AppKit for wallet integration
- Solana web3.js for blockchain interactions

## Solana Integration

### Connection to Solana Network

The application connects to the Solana network using the Solana web3.js library. It supports both mainnet-beta and devnet environments for testing and production.

### Wallet Integration

We leverage AppKit for wallet connections, supporting:

- Google OAuth embedded wallets
- Native Solana wallets
- Hardware wallet connections

Usage example:

```typescript
// From DeFiInvestments.tsx
const { address, isConnected, caipAddress, status, embeddedWalletInfo } = useAppKitAccount()
const { connect } = useAppKitWallet()

// Connect with social login
<SocialButtons11
  brand="Google"
  onlyIcon="Off"
  state="Default"
  style="Filled"
  editText="Sign in with Google"
  onClick={() => connect('google')}
/>
```

### Transaction Handling

All transactions are handled with proper error management, confirmation tracking, and user notifications:

1. Transaction preparation with proper account validation
2. Fee estimation and display to users
3. Signature verification and blockchain confirmation monitoring
4. Transaction history tracking

## DeFi Investment Strategies

### Low Risk - Stablecoin Yield

- Primarily focuses on stablecoin yields
- ~8.7% APY with minimal risk
- Suitable for risk-averse users

### Medium Risk - Balanced Approach

- Mix of stablecoin and token strategies
- ~22% APY with moderate risk
- Balanced risk/reward profile

### Investment Interface

The application provides intuitive slider controls for:

- Selecting investment amount
- Adjusting risk parameters
- Managing positions

## Web3 Best Practices

The application implements several web3 best practices:

### Security

- No private keys stored on frontend
- Wallet connection session management
- Transaction signing confirmation screens
- Risk warnings and consent flows

### User Experience

- Progressive permission requests
- Clear transaction previews
- Gas fee explanations
- Simplified crypto jargon

### Performance

- Optimized RPC requests to minimize network load
- Cached blockchain data where appropriate
- Transaction batching where possible

## User Flow

1. **Onboarding**: Multi-step introduction to DeFi concepts
2. **Wallet Connection**: Connect existing wallet or create embedded wallet
3. **Risk Profile Selection**: Choose investment strategy based on risk tolerance
4. **Investment**: Select amount and confirm transactions
5. **Portfolio Management**: Monitor and adjust positions

## Development Guidelines

### Component Structure

The application follows a modular component approach. Key component types:

- **UI Elements**: Buttons, sliders, cards
- **Financial Modules**: Investment components, portfolio views
- **Layout Components**: Page structures and navigation

### State Management

- Local component state for UI elements
- Context API for wallet and user data
- Contract state for on-chain data

### Styling

All styling is done through TailwindCSS with consistent tokens for:

- Colors (defined in tailwind.config.js)
- Spacing
- Typography
- Rounded corners

## Contributing

1. Branch naming: `feature/name`, `bugfix/issue-number`
2. Commit conventions: Clear, descriptive messages
3. PR process: Description, linked issues, testing steps

## License

MIT License

Copyright (c) 2023 Pool-Party

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Support

[Support information]
