// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/// @title ContentType
/// @notice represents the content type stamped in CryptoStamp contract
enum ContentType {
    Text,
    URI
}
    
/// @title Content
/// @notice Represent a content stamped in CryptoStamp contract
struct Content {
    ContentType contentType;
    string value;
}

/// @title Cosigners
/// @notice Cosigner is an address which cosign a document
/// stamped by a third party.
struct Cosigners {
    uint256 total;
    mapping (address => bool) signers;
}

/// @title CryptoStamp smart contract.
/// @notice An ERC-721 contract aimed at protecting writting with a
/// NFT on blockchain.
/// @author Mickaël Viey
contract CryptoStamp is ERC721, ERC721URIStorage {
    
    uint256 private _currentTokenId;
    
    mapping(uint256 => string) private _registry;
    mapping(uint256 => Cosigners) private cosigners;
    
    constructor() ERC721("CryptoStamp", "STMP") {}

    function _setText(uint256 tokenId, string calldata _content)
        internal
    {
        _registry[tokenId] = _content;
    }

    /// @notice stamps a short text (<256 char.) minting a token and
    /// saving it on this contract
    /// @param _content the content to stamp.
    /// @return the new minted tokenID
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

    /// @notice get the text corresponding to this token
    /// @param tokenId The tokenID to which the content is bound
    /// @return the text bound to the token.
    function tokenText(uint256 tokenId)
        public view returns(string memory)
    {
        _requireOwned(tokenId);
        return _registry[tokenId];
    }

    /// @notice Get the CID corresponding to this token
    /// @param tokenId The tokenID to which the CID is bound
    /// @return the CID bound to the token.
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /// @notice Query if a contract implements an interface
    /// @param interfaceId The interface identifier, as specified in ERC-165
    /// @dev Interface identification is specified in ERC-165. This function
    ///  uses less than 30,000 gas.
    /// @return `true` if the contract implements `interfaceID` and
    ///  `interfaceID` is not 0xffffffff, `false` otherwise 
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    
    /// @notice stamps a CID on IPFS storage, minting a token and
    /// saving it on this contract
    /// @param _tokenURI the CID to stamp.
    /// @return the new minted tokenID
    function stampURI(string memory _tokenURI) 
        public returns(uint256)
    {
        address author = msg.sender;
        uint256 newId = ++_currentTokenId;
        _mint(author, newId);
        _setTokenURI(newId, _tokenURI);
        return newId;
    }

    /// @notice get content bound to a specific tokenID
    /// @param tokenId The tokenID to which the Content is bound
    /// @return the Content(CID or Text) bound to the token.
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

    /// @notice Creates a DerivativeProduct contract representing
    // a request for the authorization to use content protected
    // by a specific token.
    /// @param tokenId The tokenID to which the Content is bound
    /// @param terms explain how the content will be used
    /// @return the adress of the new contract.
    /// @dev see the `DerivativeProduct` contract.
    function deriveToken(uint256 tokenId, string calldata terms)
        public returns(address)
    {
        if (bytes(terms).length > 2048)
            revert("too long terms");
        address recipient = msg.sender;
        address owner = ownerOf(tokenId);
        DerivativeProduct newDeriv = new DerivativeProduct(
            tokenId,
            payable(owner),
            payable(recipient),
            terms
        );
        return address(newDeriv);
    }

    /// @notice authorizes a third party to sign the token,
    /// increasing the authenticity of the content.
    /// This also makes it possible to draw up a written contract
    /// between two or more parties, enabling, for example, an
    /// agreement to pay debts.
    /// @param tokenId The tokenID to sign.
    function sign(uint256 tokenId)
        public
    {
        if(ownerOf(tokenId) == msg.sender)
            revert("owner cannot cosign");
        if(cosigners[tokenId].signers[msg.sender])
            revert("cannot sign several times");
        cosigners[tokenId].total++;
        cosigners[tokenId].signers[msg.sender] = true;
    }

    /// @notice Query if an address is cosigner of the content
    /// bound to a specific token
    /// @param tokenId The tokenID to which the Content is bound
    /// @param candidate The address to be checked
    /// @return true if the address is cosigner
    function isSigner(uint256 tokenId, address candidate)
        public view returns(bool)
    {
        return cosigners[tokenId].signers[candidate];
    }

    /// @notice Query the number of cosigner of a specific token
    /// @param tokenId The tokenID to which the Content is bound
    /// @return the number of cosigner for this token
    function countCosigners(uint256 tokenId)
        public view returns(uint256)
    {
        return cosigners[tokenId].total;
    }
}


/// @notice represents the status of a DerivativeProduct contract
enum ContractStatus {
    InProgress, /// @notice the authorization is under discussion
    Accepted, /// @notice the authorization was accepted
    Refused /// @notice the authorization was refused
}


contract DerivativeProduct {

    /// @notice the tokenId the contract is bound to.
    uint256 public immutable tokenId;
    /// @notice the owner of the token.
    address payable public immutable owner;
    /// @notice the address of the claimant to the right of use
    address payable public immutable recipient;
    /// @notice terms of usage
    string public terms;
    /// @notice The amount paid to the owner if he accepts
    uint256 public totalBalance;
    mapping(address => uint256) bids;

    ContractStatus public status;

    constructor(
        uint256 tokenId_,
        address payable owner_,
        address payable recipient_,
        string memory terms_
    ) {
        require(owner_ != address(0), "invalid owner address");
        require(recipient_ != address(0), "invalid recipient address");
        terms = terms_;
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

    /// @notice allows supporters of the project to pay for usage.
    function bid() public payable whenInProgress {
        uint256 ammount = msg.value;
        bids[msg.sender] += ammount;
        totalBalance += ammount;
    }

    /// @notice allows supporters to withdraw his contribution.
    /// bidders can withdraw only when the contract is
    /// in progress or refused.
    function withdraw() public {
        require(status != ContractStatus.Accepted);
        require(bids[msg.sender] > 0);
        uint256 ammount = bids[msg.sender];
        totalBalance -= ammount;
        bids[msg.sender] = 0;
        (bool success, )= msg.sender.call{value: ammount}("");
        require (success, "transfert failled");
    }

    /// @notice call by the owner to accept the usage.
    /// if contribution was sent on the contract the ammount
    /// is transfered to the owner.
    function accept() public onlyOwner whenInProgress {
        status = ContractStatus.Accepted;
        if (totalBalance > 0) {
            totalBalance = 0;
            owner.transfer(address(this).balance);
        }
    }

    /// @notice call by the owner to refuse the usage.
    function refuse() public onlyOwner whenInProgress {
        status = ContractStatus.Refused;
    }

}
