

# aloecollectv

> A self hosted web3 nft collectibles market  

<p align="center" ><img src="https://res.cloudinary.com/tutcan/image/upload/v1640894929/aloe/aloecollectv.png" width="100%" height="100%"></p>

## Usage

Create a .env file, create and update parameters as seen below

| Environemt Key        | Description                                       | Example                                                                                |
| :-------------------- | :------------------------------------------------ | :------------------------------------------------------------------------------------- |
| NODE_ENV              | Node environment                                  | development                                                                            |
| PORT                  | Node server port                                  | 5000                                                                                   |
| PRIVATE_KEYS          | Ethereum wallet private keys                      | 8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f                       |
| INFURA_ID             | Infura account id                                 | 7e40f09ch714db5s9061bcc95e58c72 |


## Stack
- [ERC721](https://docs.openzeppelin.com/contracts/3.x/erc721) - ERC721 token standard (Non Fungible Tokens)
- [Metamask Wallet](https://metamask.io/) - Metamask wallet
- [Truffle](https://www.trufflesuite.com/) - Development framework
- [NextJS](https://nextjs.org/) - Frontend framework
- [Redux](https://redux.js.org/) - State management
- [Solidiy](https://docs.soliditylang.org/en/v0.7.4/) - Smart contract language
- [Ganache](https://www.trufflesuite.com/ganache) - Local blockchain network
- [Web3](https://web3js.readthedocs.io/en/v1.3.0/) - Library to interact with ethereum nodes
- [JavaScript](https://www.javascript.com/) - Logic for minting testing smart contracts
- [Typescript](https://www.typescriptlang.org/) - Language used with frontend framework
- [Infura](https://infura.io/) - Connection to ethereum networks

## Installation

* Install truffle globally
```
npm i -g truffle
```

* If you opt to use ganache cli rather than the ganache gui, install the cli globally
```
npm i -g ganache-cli
```

* Run ganache-cli in different terminal and keep running
```
ganache-cli
```

* Install ipfs
```
npm i -g ipfs
```

* Run ipfs
```
jsipfs daemon
```

* Change directory into the project and install dependencies
```
npm i
```

## Migrating contracts and testing locally
* Compile the contract
```
npm run compile
```

* Test the contract
```
npm run test
```

* Migrate contract
```
npm run migrate:dev
```

* Mint tokens
```
npm run mint:dev
```

* Start application locally
```
npm run start
```


