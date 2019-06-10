import web3 from "./web3";

import AssetTracker from "./build/AssetTracker.json";

const instance = new web3.eth.Contract(
  JSON.parse(AssetTracker.interface), //contract ABI
  "0x5a702bcb64Fe7c6Eba7B7ae0cFF3FacC422c3E82" //the address that we deployed our contract on
);

export default instance;
