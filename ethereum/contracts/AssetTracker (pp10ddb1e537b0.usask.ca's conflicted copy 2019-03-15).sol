pragma solidity ^0.4.18;
contract AssetTracker {
    //uint public id;
    address[] public producers;
    address[] public buyers;
    uint public assetsCount;

    struct Asset {
        string name;
        string description;
        string manufacturer;
        uint price;
        uint id;
        address owner;
        bool initialized;
    }
    Asset[] public assets;
   // mapping(uint  => Asset) public assetById;
    mapping(address => mapping(uint => bool)) public walletStore;
    mapping(address => bool) public producers_;
    event AssetCreate(address account, string id, string manufacture);

    function createAsset(string name, string description, string manufacture, uint price, uint id) public{

        if(!producers_[msg.sender]){
            producers.push(msg.sender);
            producers_[msg.sender] = true;
        }
        Asset memory newAsset = Asset(name, description, manufacture, price, id, msg.sender, true);
        assets.push(newAsset);
        assetsCount++;

        //assetById[id] = newAsset;
        walletStore[msg.sender][id] = true;
        AssetCreate(msg.sender, id, manufacture);


    }

    function transferProduct(uint id) public payable {

        require(assets[id-1].initialized);
       // require(assets[id].price == msg.value);
        assets[id-1].owner.transfer(msg.value);
        walletStore[assets[id-1].owner][id] = false;
        walletStore[msg.sender][id] = true;
        buyers.push(msg.sender);
        assets[id-1].owner = msg.sender;
    }
    modifier onlyProducerCanCall(){
        require(producers_[msg.sender]);
        _;
    }

    function getproducers() public view returns(address[]){
      return producers;
    }
    function getbuyers() public view returns(address[]){
      return buyers;
    }



}
