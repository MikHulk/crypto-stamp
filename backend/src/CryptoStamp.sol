// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


enum ContentType {
    Text,
    URI
}


struct Content {
    uint256 parent;
    ContentType contentType;
    string value;
}


contract CryptoStamp is ERC721, ERC721URIStorage {
    
    uint256 private _currentTokenId;
    
    mapping(uint256 => string) private _registry;
    mapping(uint256 => uint256) private _ancestors;
    
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
        return Content({ parent: 0, contentType: contentType, value: value });
    }

    function deriveTokenText(uint256 parent, address recipient, string calldata _content)
        public returns (uint256)
    {
        if (bytes(_content).length > 256)
            revert("too long content");
        address author = msg.sender;
        _checkAuthorized(ownerOf(parent), author, parent);
        uint256 newId = ++_currentTokenId;
        _mint(recipient, newId);
        _setText(newId, _content);
        _ancestors[newId] = parent;
        return newId;
    }

    function deriveTokenURI(uint256 parent, address recipient, string memory uri)
        public returns (uint256)
    {
        address author = msg.sender;
        _checkAuthorized(ownerOf(parent), author, parent);
        uint256 newId = ++_currentTokenId;
        _mint(recipient, newId);
        _setTokenURI(newId, uri);
        _ancestors[newId] = parent;
        return newId;
    }
}
