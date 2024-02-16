// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


enum ContentType {
    Text,
    URI
}


struct Content {
    ContentType contentType;
    string value;
}


contract CryptoStamp is ERC721, ERC721URIStorage {
    
    uint256 private _currentTokenId;
    
    mapping(uint256 => string) private _registry;
    
    constructor() ERC721("CryptoStamp", "STMP") {}

    function _setText(uint256 tokenId, string calldata _content)
        internal
    {
        _registry[tokenId] = _content;
    }
    
    function stampTextContent(string calldata _content)
        public returns (uint256)
    {
        if (bytes(_content).length > 256)
            revert("too long content");
        address author = msg.sender;
        uint256 newId = ++_currentTokenId;
        _mint(author, newId);
        _setText(newId, _content);
        return newId;
    }

    function tokenText(uint256 tokenId)
        public view returns(string memory)
    {
        _requireOwned(tokenId);
        return _registry[tokenId];
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function stampURI(string memory _tokenURI) 
        public returns(uint256)
    {
        address author = msg.sender;
        uint256 newId = ++_currentTokenId;
        _mint(author, newId);
        _setTokenURI(newId, _tokenURI);
        return newId;
    }

    function content(uint256 tokenId)
        public view returns(Content memory)
    {
        string memory value = tokenURI(tokenId);
        ContentType contentType;
        if (bytes(value).length != 0)
            contentType = ContentType.URI;
        else {
            value = tokenText(tokenId);
            contentType = ContentType.Text;
        }
        return Content({ contentType: contentType, value: value });
    }

    function deriveToken(uint256 tokenId)
        public returns(address)
    {
        address recipient = msg.sender;
        address owner = ownerOf(tokenId);
        DerivativeProduct newDeriv = new DerivativeProduct(
            tokenId,
            payable(owner),
            payable(recipient)
        );
        return address(newDeriv);
    }
}


enum ContractStatus {
    InProgress,
    Accepted,
    Refused
}


contract DerivativeProduct {

    uint256 public tokenId;
    address payable public owner;
    address payable public recipient;
    uint256 public totalBalance;
    mapping(address => uint256) bids;

    ContractStatus public status;

    constructor(
        uint256 tokenId_,
        address payable owner_,
        address payable recipient_
    ) {
        tokenId = tokenId_;
        owner = owner_;
        recipient = recipient_;
        totalBalance = 0;
    }

    modifier whenInProgress {
        if(status != ContractStatus.InProgress) revert("bidding is over");
        _;
    }

    modifier onlyOwner {
        if(msg.sender != owner) revert("not the owner");
        _;
    }

    function bid() public payable whenInProgress {
        uint256 ammount = msg.value;
        bids[msg.sender] += ammount;
        totalBalance += ammount;
    }

    function withdraw() public {
        require(status != ContractStatus.Accepted);
        require(bids[msg.sender] > 0);
        uint256 ammount = bids[msg.sender];
        totalBalance -= ammount;
        bids[msg.sender] = 0;
        (bool success, )= msg.sender.call{value: ammount}("");
        require (success, "transfert failled");
    }

    function accept() public onlyOwner whenInProgress {
        status = ContractStatus.Accepted;
        if (totalBalance > 0) {
            totalBalance = 0;
            owner.transfer(address(this).balance);
        }
    }

    function refuse() public onlyOwner whenInProgress {
        status = ContractStatus.Refused;
    }

}
