// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract CryptoStamp is ERC721, ERC721URIStorage {
    
    uint256 private _nextTokenId;
    
    mapping(uint256 tokenId => string) private _registry;
    
    constructor() ERC721("CryptoStamp", "STMP") {}

    function _setContent(uint256 tokenId, string calldata _content)
        internal
    {
        _registry[tokenId] = _content;
    }
    
    function stampContent(string calldata _content)
        public returns (uint256)
    {
        address author = msg.sender;
        uint256 newId = _nextTokenId++;
        _mint(author, newId);
        _setContent(newId, _content);
        return newId;
    }

    function content(uint256 tokenId)
        public view returns(string memory)
    {
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
        uint256 newId = _nextTokenId++;
        _mint(author, newId);
        _setTokenURI(newId, _tokenURI);
        return newId;
    }
    
}
