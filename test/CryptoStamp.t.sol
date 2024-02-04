// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {CryptoStamp} from "../src/CryptoStamp.sol";

contract CryptoStampTest is Test {

    CryptoStamp contract_;
    address author0 = makeAddr("author0");
    address author1 = makeAddr("author1");

    string shortContent = "Hello";
    string mediumContent =
        unicode"Un vieil étang\n"
        unicode"Une grenouille qui plonge,\n"
        unicode"Le bruit de l'eau.\n";
    string longContent;

    function setUp() public {
        contract_ = new CryptoStamp();
        longContent = vm.readFile("./test/public-opinion.txt");
    }

    function test_token() public {
        assertEq(contract_.name(), "CryptoStamp");
        assertEq(contract_.symbol(), "STMP");
    }

    function test_deposit_short_content() public {
        string memory content = shortContent;
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(content);
        assertEq(tokenId, 0);
    }

    function test_get_short_content() public {
        string memory content = shortContent;
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(content);
        string memory contentFromRepo = contract_.getContent(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_deposit_medium_content() public {
        string memory content = mediumContent;
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(content);
        assertEq(tokenId, 0);
    }

    function test_get_medium_content() public {
        string memory content = mediumContent;
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(content);
        string memory contentFromRepo = contract_.getContent(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_deposit_long_content() public {
        string memory content = longContent;
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(content);
        assertEq(tokenId, 0);
    }

    function test_get_long_content() public {
        string memory content = longContent;
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(content);
        string memory contentFromRepo = contract_.getContent(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_content_owner() public {
        vm.prank(author0);
        uint256 tokenId = contract_.depositContent(mediumContent);
        address owner = contract_.ownerOf(tokenId);
        assertEq(owner, author0);
        assertNotEq(owner, author1);
    }

}
