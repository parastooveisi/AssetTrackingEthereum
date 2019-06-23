import web3 from "./web3";

import AssetTracker from "./build/AssetTracker.json";

const instance = new web3.eth.Contract(
  JSON.parse(AssetTracker.interface), //contract ABI
  "0xCaE046684928155b87Ad3174415cD08e0C6967A9" //the address that we deployed our contract on
);

export default instance;
