pragma solidity ^0.4.18;

contract AssetTracker {
    uint256 public id;
    uint256 nonce;
    uint256 public value;

    mapping(uint256 => address) public sellerById;
    mapping(uint256 => address) public buyerById;

    address[] public producers;
    address[] public buyers;
    uint256 public assetsCount;
    uint256 public zipCounts;

    struct Asset {
        string name;
        string description;
        string manufacture;
        uint256 price;
        uint256 id;
        address owner;
        bool initialized;
    }
    Asset[] public assets;
    mapping(address => mapping(uint256 => bool)) public walletStore;
    mapping(uint256 => Asset) public assetStore;
    mapping(address => bool) public producers_;
    mapping(uint256 => address[]) public owners;
    mapping(uint256 => string[]) public zipcodes;
    mapping(address => uint256) public arrayIndexes;

    function createAsset(
        string name,
        string description,
        string manufacture,
        uint256 price,
        string zipcode
    ) public payable {
        id = uint256(keccak256(now, msg.sender, nonce)) % 1000;
        nonce++;

        sellerById[id] = msg.sender;
        if (!producers_[msg.sender]) {
            producers.push(msg.sender);
            producers_[msg.sender] = true;
        }

        value = msg.value / 2;
        Asset memory newAsset =
            Asset(name, description, manufacture, price, id, msg.sender, true);
        assetStore[id] = Asset(
            name,
            description,
            manufacture,
            price,
            id,
            msg.sender,
            true
        );
        assets.push(newAsset);
        assetsCount++;
        owners[id].push(msg.sender);
        zipcodes[id].push(zipcode);
        zipCounts++;
        walletStore[msg.sender][id] = true;
        uint256 index = assets.length;
        arrayIndexes[msg.sender] = index;
    }

    function transferProduct(uint256 id, string zipcode) public payable {
        require(assetStore[id].initialized);
        uint256 idx = (arrayIndexes[msg.sender]);
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

    function confirmReceived(uint256 id) public {
        buyerById[id].transfer(value);
        sellerById[id].transfer(address(this).balance);
    }

    modifier onlyProducerCanCall() {
        require(producers_[msg.sender]);
        _;
    }

    function getproducers() public view returns (address[]) {
        return producers;
    }

    function getbuyers() public view returns (address[]) {
        return buyers;
    }

    function lengthOwners(uint256 id) public view returns (uint256) {
        return owners[id].length;
    }

    function getid() public view returns (uint256) {
        return id;
    }

    function random() private returns (uint256) {
        uint256 random = uint256(keccak256(now, msg.sender, nonce)) % 1000;
        nonce++;
        return random;
    }

    function getRandom() public view returns (uint256) {
        return random();
    }

    function getOwners(uint256 id) public view returns (address[]) {
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
