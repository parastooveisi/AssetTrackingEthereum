const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledContract = require("../ethereum/build/assetTracker.json");

let accounts;
let assetTracker;

beforeEach(async () => {
  //deploy contract and get list of all of our accounts
  accounts = await web3.eth.getAccounts(); //getting all accounts

  assetTracker = await new web3.eth.Contract(
    JSON.parse(compiledContract.interface)
  )
    .deploy({
      //deploy contract
      data: compiledContract.bytecode
    })
    .send({ from: accounts[0], gas: "2000000" });
});

describe("Asset Tracker Contract", () => {
  it("deploys the contract successfully", () => {
    assert.ok(assetTracker.options.address);
  });

  it("Creating an asset", async () => {
    await assetTracker.methods
      .createAsset("Battery", "For industrial use", "Walmart", "100", 1)
      .send({
        from: accounts[1],
        gas: "1000000"
      });
    const asset = await assetTracker.methods.assets(0).call();

    assert.equal("Battery", asset.name);
  });
  //console.log(assetTracker);
  it("Transfering an asset", async () => {
    await assetTracker.methods.transferProduct(accounts[3], 1).send({
      from: accounts[1],
      gas: "1000000"
    });
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDd");
    const isCorrectRecipient = await assetTracker.methods
      .walletStore(account[3], 1)
      .call();
    console.log(isCorrectRecipient);
    assert(isCorrectRecipient);
  });
});
