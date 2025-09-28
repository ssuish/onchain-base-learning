# Base Learning Projects

This repository contains a collection of projects for learning and experimenting with Base blockchain development, smart contracts, and decentralized applications (dApps).

## Repository Structure

```
base-learning/
├── README.md
└── 01-base-intro/
    ├── banking-system/     # Smart contract banking system with Hardhat
    ├── lock-tutorial/      # Time-locked contract tutorial
    └── nftbasemint/       # NFT minting dApp with OnchainKit
```

## Projects Overview

### 1. Banking System (`01-base-intro/banking-system/`)

A basic smart contract banking system built with Hardhat framework.

**Features:**

- Simple balance management system
- Deposit and withdrawal functionality
- Balance tracking per address
- Console logging for debugging

**Key Files:**

- `contracts/SimpleBank.sol` - Main banking contract
- `test/SimpleBank.ts` - Test suite
- `deploy/Deploy.ts` - Deployment script

**Smart Contract Functions:**

- `setBalances(address, uint)` - Set balance for an address
- `getBalances(address)` - Get balance of an address
- `increaseBalance(uint)` - Add to caller's balance
- `decreaseBalance(uint)` - Subtract from caller's balance (with safety checks)

**Getting Started:**

```bash
cd 01-base-intro/banking-system
yarn install
npx hardhat test
npx hardhat node
```

### 2. Lock Tutorial (`01-base-intro/lock-tutorial/`)

A time-locked smart contract that demonstrates basic Ethereum contract patterns.

**Features:**

- Time-based access control
- Owner-only operations
- Deposit and withdrawal functionality
- Event emission for transparency

**Key Files:**

- `contracts/Lock.sol` - Time-locked contract
- `test/Lock.ts` - Test suite
- `deploy/001_deploy_lock.ts` - Deployment script

**Smart Contract Functions:**

- `withdraw()` - Withdraw funds after unlock time
- `deposit()` - Deposit funds before unlock time
- Events: `Withdrawal`, `Deposit`

**Getting Started:**

```bash
cd 01-base-intro/lock-tutorial
yarn install
npx hardhat test
npx hardhat node
```

### 3. NFT Base Mint (`01-base-intro/nftbasemint/`)

A Next.js dApp for minting NFTs using Coinbase's OnchainKit on the Base network.

**Features:**

- NFT minting interface
- Coinbase OnchainKit integration
- React + TypeScript frontend
- Tailwind CSS styling
- Wagmi for wallet connectivity

**Key Technologies:**

- **Frontend**: Next.js 14, React 18, TypeScript
- **Blockchain**: OnchainKit, Wagmi, Viem
- **Styling**: Tailwind CSS
- **State Management**: TanStack React Query

**Contract Address:** `0x5E460559B2d57373a5D03CC096FaFFd021CE39F7`

**Getting Started:**

```bash
cd 01-base-intro/nftbasemint
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the NFT minting interface.

## Development Setup

### Prerequisites

- Node.js (v18+)
- Yarn package manager
- Git

### Environment Variables

Each project may require environment variables. Check for `.env` files in individual project directories.

### Common Commands

**For Hardhat Projects (banking-system, lock-tutorial):**

```bash
# Install dependencies
yarn install

# Run tests
npx hardhat test

# Start local node
npx hardhat node

# Deploy contracts
npx hardhat ignition deploy ./ignition/modules/[CONTRACT].ts

# Verify contracts
npx hardhat verify
```

**For Next.js Project (nftbasemint):**

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

## Learning Path

1. **Start with Lock Tutorial** - Learn basic smart contract concepts
2. **Explore Banking System** - Understand state management and mappings
3. **Build NFT Mint dApp** - Connect frontend to blockchain

## Networks

The projects are configured to work with:

- **Base Sepolia Testnet** (for testing)
- **Local Hardhat Network** (for development)

## Resources

- [Base Documentation](https://docs.base.org/)
- [Hardhat Documentation](https://hardhat.org/docs)
- [OnchainKit Documentation](https://onchainkit.xyz/getting-started)
- [Wagmi Documentation](https://wagmi.sh/)

## Contributing

Feel free to experiment with these projects and add your own learning examples!
