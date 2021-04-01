import web3 from "./web3";

import AssetTracker from "./build/AssetTracker.json";

const instance = new web3.eth.Contract(
  JSON.parse(AssetTracker.interface), //contract ABI
  "0x8Ad05e5947a0F6F55fD4910db846E0Df9e7Eb687" //the address that we deployed our contract on
);

export default instance;
