import web3 from "./web3";

import AssetTracker from "./build/AssetTracker.json";

const instance = new web3.eth.Contract(
  JSON.parse(AssetTracker.interface), //contract ABI
  "0x47DeF69d8afa028e7a9EcFDfbD8E041821E9187d" //the address that we deployed our contract on
);

export default instance;
