### Carlos Coin 

A standard, secure, and open-source ERC-20 token smart contract built with Solidity and managed using the Hardhat development environment. This project uses audited contract libraries from OpenZeppelin to ensure secure minting and token mechanics. 

### Project Structure

text

carlos-coin/
├── contracts/          
│   └── CarlosCoin.sol
├── scripts/           
│   └── deploy.js
├── .env.example       
├── hardhat.config.js  
└── package.json        

### Features

* **Standard ERC-20 Implementation:** Fully compliant with Ethereum and EVM-compatible networks (Polygon, BNB Chain, Avalanche, etc.).
* **Fixed Supply:** Mints a predetermined number of tokens directly to the deployer's wallet upon creation.
* **Production-Ready Security:** Inherits from OpenZeppelin's standard ERC-20 contract to eliminate common vulnerability vectors.

### Getting Started

### Prerequisites

Make sure you have the following installed on your machine: 

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [npm](https://www.npmjs.com/) (comes packaged with Node)

### Installation

1. Clone this repository to your local machine: 

bash

git clone https://github.com/davidelgado28/Carlos-Coin.git
cd carlos-coin

2. Install the required dependencies: 

bash

npm install

### Compilation

Compile the Solidity smart contracts to generate the necessary artifacts and ABI: 

bash

npm run compile
