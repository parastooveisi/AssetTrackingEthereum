const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const compiledTracker = require("./build/AssetTracker.json");

const provider = new HDWalletProvider(
  "doll add humble swear soda gasp doctor thrive family shrug rack marble",
  "https://rinkeby.infura.io/SDM4Fg05tjRsEKoN1ZnE"
);

const web3 = new Web3(provider);

//it's two asyncronous calls. one to get list of accounts and second to create and deploy the contract so we use asyn awaait syntax
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledTracker.interface)
  )
    .deploy({ data: compiledTracker.bytecode })
    .send({ gas: "2000000", from: accounts[0] }); //send transaction to the network
  console.log("Contract deployed to", result.options.address); //console log out the address that our contract was deeployed on
};
deploy();
