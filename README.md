# 🚀 NFT Minter Bootcamp

Welcome to the **Blockchain & Web3 Bootcamp NFT Project**!

This repo contains the **starter template** for the *NFT Attendance Proof Minter dApp* that you'll build during the 2-day BootCamp. You'll write smart contracts, integrate frontend, and finally mint your own NFT on the **Polygon**.

---

## 📚 Bootcamp Agenda (Recap)

**🗓️ Day 1 – Blockchain & Smart Contracts (Rohit Gupta)**
- What is Blockchain & Web3
- Smart Contracts in Solidity
- Deploy your NFT contract to Polygon 
- Tools: MetaMask, Remix, PolygonScan, OpenSea 

**🗓️ Day 2 – Frontend + Integration (Shubhankar Banerjee)**
- HTML, CSS, JS refresher
- Interacting with blockchain via frontend
- Build & run NFT minter dApp
- Host with Node.js + Express.js

---

## 🎯 Project Goal

> Mint a personalized NFT as proof of your BootCamp attendance, using your own image and metadata!

---

## 🛠️ Tech Stack

- Solidity + Hardhat
- Node.js + Express.js
- HTML, CSS, JavaScript
- Ethers.js
- IPFS (via Pinata or NFT.Storage)
- Polygon 

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/ShubhankarBanerjee87/BlockchainBootcamp2025.git
cd BlockchainBootcamp2025
```

### 2. Install Dependencies

```bash
npm install 
```

### 3. Configure Environment

```bash
PRIVATE_KEY=your_wallet_private_key
RPC_URL=https://polygon-mainnet.g.alchemy.com/v2/API-KEY
```

🔐 Important: Do not share your .env file publicly or commit it to version control.

### 4. Compile the Contract

```bash
npx hardhat compile
```

### 5. Deploy

```bash
npx hardhat run scripts/deploy.js --network [network-name]
```

---

## 🧠 Your Tasks

### 📄 Smart Contract (Solidity)

- [ ] Complete the `mintNFT()` function in `contracts/NFTAttendance.sol`
- [ ] Deploy the contract to **Polygon**

### 🌐 Frontend (HTML/JS)

- [ ] Connect MetaMask to the frontend
- [ ] Upload your NFT image to IPFS
- [ ] Generate metadata and upload it to IPFS
- [ ] Call `mintNFT()` using **Ethers.js** from the frontend

---

## 🌐 Tools & Links

- 🔧 [Remix IDE](https://remix.ethereum.org/)
- 🦊 [MetaMask](https://metamask.io/)
- 🔎 [PolygonScan](https://polygonscan.com/)
- 🖼️ [OpenSea ](https://opensea.io/)
- 📤 [Pinata](https://www.pinata.cloud/)
- 📦 [NFT.Storage](https://nft.storage/)

---

## 📸 Sample Output

> Once minted successfully, your NFT will appear on OpenSea  like this:
> `https://opensea.io/assets//<your_contract_address>/<token_id>`

---

## 👨‍🎓 Completion Badge

Each NFT you mint is proof of:

✅ Your participation in this BootCamp  
✅ Your ability to write smart contracts  
✅ Your confidence with full-stack Web3 development 🚀

---

## ✨ Credits

**Organized by:** 🎯 SHARP Innovation Foundation

**BootCamp Trainers:**

- 👨‍🏫 **Rohit Gupta** – Smart Contracts  
- 👨‍💻 **Shubhankar Banerjee** – Frontend + Integration

---

> 🚀 Happy Building, and welcome to Web3!
