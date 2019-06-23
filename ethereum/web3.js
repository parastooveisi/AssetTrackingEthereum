import Web3 from "web3";
const HDWalletProvider = require("truffle-hdwallet-provider");

//creating an instance and ripping out the Metamask injected provider

// if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
//   //users with meta metamask
//   //to check if we are in the browser and metamask is running
//   //type of is for checking if variable id defined
//   web3 = new Web3(window.web3.currentProvider);
// } else {
  //without metamask
  // We are on the server OR the user is not running metamask
  const provider = new HDWalletProvider(
    "doll add humble swear soda gasp doctor thrive family shrug rack marble",
    "https://rinkeby.infura.io/v3/8fe1f2192b9c400cb7722968d1837c18"
  );
  //"https://rinkeby.infura.io/SDM4Fg05tjRsEKoN1ZnE"

  const web3 = new Web3(provider);
// }

export default web3;
