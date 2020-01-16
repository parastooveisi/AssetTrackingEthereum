pragma solidity ^0.4.18;
contract AssetTracker {
    uint public id;
    uint nonce;
    uint public value;
    /* address public seller;
    address public buyer; */
    mapping(uint => address) public sellerById;
    mapping(uint => address) public buyerById;

    address[] public producers;
    address[] public buyers;
    uint public assetsCount;
    uint public zipCounts;

    struct Asset {
        string name;
        string description;
        string manufacture;
        uint price;
        uint id;
        address owner;
        bool initialized;
    }
    Asset[] public assets;
   // mapping(uint  => Asset) public assetById;
    mapping(address => mapping(uint => bool)) public walletStore;
    mapping(uint  => Asset) public assetStore;
    mapping(address => bool) public producers_;
    mapping(uint => address[]) public owners;
    mapping(uint => string[]) public zipcodes;
    mapping (address => uint) public arrayIndexes;


    /* event AssetCreate(address account, uint id, string manufacture);
    event Transfer(address account, uint id) */

    function createAsset(string name, string description, string manufacture, uint price, string zipcode) public payable{

        id = uint(keccak256(now, msg.sender, nonce)) % 1000;
        nonce++;

        /* sellerById[id] = msg.sender; */
        sellerById[id] = msg.sender;
        if(!producers_[msg.sender]){
            producers.push(msg.sender);
            producers_[msg.sender] = true;
        }

        value = msg.value / 2;
        /* require((2 * value) == msg.value);  */
        Asset memory newAsset = Asset(name, description, manufacture, price, id, msg.sender, true);
        assetStore[id] = Asset(name, description, manufacture, price, id, msg.sender, true);
        assets.push(newAsset);
        assetsCount++;
        owners[id].push(msg.sender);
        zipcodes[id].push(zipcode);
        zipCounts++;
        walletStore[msg.sender][id] = true;
        uint index = assets.length;
        arrayIndexes[msg.sender] = index;
        //assetById[id] = newAsset;
    }
//fix owners array --> id all previous owners

    function transferProduct(uint id, string zipcode) public payable{

      // require(assets[id].price == msg.value);

        require(assetStore[id].initialized);
        uint idx = (arrayIndexes[msg.sender]);
        buyerById[id] = msg.sender;
        walletStore[assetStore[id].owner][id] = false;
        walletStore[msg.sender][id] = true;
        buyers.push(msg.sender);
        zipcodes[id].push(zipcode);
        zipCounts++;
        assetStore[id].owner = msg.sender;
        assets[idx].owner = msg.sender;
        owners[id].push(msg.sender);

    }

    function confirmReceived(uint id) public
    {
        buyerById[id].transfer(value);
        sellerById[id].transfer(address(this).balance);
    }

    /* function abort() public onlySeller
    {
        seller.transfer(address(this).balance);
    } */

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

    function lengthOwners(uint id) public view returns(uint) {
        return owners[id].length;
    }

    /* function lengthZipcodes(uint id) public view returns(uint) {
        return zipcodes[id].length;
    } */

    function getid() public view returns(uint){
      return id;
    }
    function random() private returns (uint) {
      uint random = uint(keccak256(now, msg.sender, nonce)) % 1000;
      nonce++;
      return random;
    }

    function getRandom() public view returns (uint) {
        return random();
    }

    function getOwners(uint id) public view returns (address[]) {
        return owners[id];
    }
    /* modifier onlyBuyer() {
        require(msg.sender == buyer);
        _;
    }

    modifier onlySeller() {
        require(msg.sender == seller);
        _;
    } */




}
