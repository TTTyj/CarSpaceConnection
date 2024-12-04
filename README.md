
## Quick start

The first things you need to do are cloning this repository and installing its
dependencies:

```sh
gh repo clone TTTyj/hardhat-boilercscCarsharingprojectplate
cd hardhat-boilerplate
npm install
```

Once installed, let's run Hardhat's testing network:
```sh
npx hardhat node
```

Then, on a new terminal, go to the repository's root folder and run this to
deploy your contract:

```sh
npx hardhat run scripts/deploy.js --network localhost
npx hardhat --network localhost run scripts/deploy.js
```

Finally, we can run the frontend with:

```sh
cd frontend
npm install
npm start
```

Open [http://localhost:3000/](http://localhost:3000/) to see your Dapp. You will
need to have [Coinbase Wallet](https://www.coinbase.com/wallet) or [Metamask](https://metamask.io) installed and listening to
`localhost 8545`.
127.0.0.1:8545
```get token
npx hardhat --network localhost faucet 0xda77006a55e3f5c7a905b0058df6f0652bf2fe89
```

