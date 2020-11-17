import web3 from "./web3";

import AssetTracker from "./build/AssetTracker.json";

const instance = new web3.eth.Contract(
  JSON.parse(AssetTracker.interface), //contract ABI
  "0x23b401DaF1cd1Bff0CFbaD393B343F46DC6f0fbb" //the address that we deployed our contract on
);

export default instance;
