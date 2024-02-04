// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CryptoStamp is ERC721 {
    
    uint256 private _nextTokenId;
    mapping(uint256 tokenId => string) private _registry;
    
    constructor() ERC721("CryptoStamp", "STMP") {}

    function _setContent(uint256 tokenId, string calldata content)
        internal
    {
        _registry[tokenId] = content;
    }
    
    function depositContent(string calldata content)
        public returns (uint256)
    {
        address author = msg.sender;
        uint256 newId = _nextTokenId++;
        _mint(author, newId);
        _setContent(newId, content);
        return newId;
    }

    function getContent(uint256 tokenId)
        public view returns(string memory)
    {
        return _registry[tokenId];
    }
}
