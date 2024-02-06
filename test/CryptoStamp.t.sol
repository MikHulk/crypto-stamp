// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;


import {IERC721Errors} from "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";
import {IERC165} from "@openzeppelin/contracts/interfaces/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";


import {Test, console2} from "forge-std/Test.sol";
import {CryptoStamp} from "../src/CryptoStamp.sol";


contract CryptoStampTest is Test {

    CryptoStamp contract_;
    address author0 = makeAddr("author0");
    address author1 = makeAddr("author1");
    address lawyer = makeAddr("lawyer");
    address user1 = makeAddr("user1");
    address user2 = makeAddr("user2");

    string shortContent = "Hello";
    string mediumContent =
        unicode"Un vieil étang\n"
        unicode"Une grenouille qui plonge,\n"
        unicode"Le bruit de l'eau.\n";
    string longContent;

    modifier withShortContent() {
        string memory content = mediumContent;
        vm.prank(author0);
        contract_.stampContent(content);
        _;
    }

    modifier withMediumContent() {
        string memory content = mediumContent;
        vm.prank(author0);
        contract_.stampContent(content);
        _;
    }

    modifier withTokenURI() {
        vm.prank(author0);
        contract_.stampURI("https://test.example/item-id-8u5h2m.png");
        _;
    }

    function setUp() public {
        contract_ = new CryptoStamp();
        longContent = vm.readFile("./test/public-opinion.txt");
    }

    function test_interface() public {
        assertTrue(contract_.supportsInterface(type(IERC721).interfaceId));
        assertTrue(contract_.supportsInterface(type(IERC721Metadata).interfaceId));
        assertTrue(contract_.supportsInterface(type(IERC165).interfaceId));
        assertFalse(contract_.supportsInterface(type(IERC20).interfaceId));
    }

    function test_metadata() public {
        assertEq(contract_.name(), "CryptoStamp");
        assertEq(contract_.symbol(), "STMP");
    }

    function test_deposit_short_content() public {
        string memory content = shortContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(content);
        assertEq(tokenId, 0);
    }

    function test_get_short_content() public {
        string memory content = shortContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(content);
        string memory contentFromRepo = contract_.content(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_deposit_medium_content() public {
        string memory content = mediumContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(content);
        assertEq(tokenId, 0);
    }

    function test_get_medium_content() public {
        string memory content = mediumContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(content);
        string memory contentFromRepo = contract_.content(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_deposit_long_content() public {
        string memory content = longContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(content);
        assertEq(tokenId, 0);
    }

    function test_get_long_content() public {
        string memory content = longContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(content);
        string memory contentFromRepo = contract_.content(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_content_owner() public {
        vm.prank(author0);
        uint256 tokenId = contract_.stampContent(mediumContent);
        address owner = contract_.ownerOf(tokenId);
        assertEq(owner, author0);
        assertNotEq(owner, author1);
    }

    function test_approve_content() public withMediumContent {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721InsufficientApproval.selector,
            0x34085BABD5F182510A383913Ad2B99115AE09fB7,
            0
        );
        vm.expectRevert(expectedError);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 0);
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.Approval(author0, lawyer, 0);
        contract_.approve(lawyer, 0);
        assertEq(contract_.getApproved(0), lawyer);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 0);
        address owner = contract_.ownerOf(0);
        assertEq(owner, author1);
        assertEq(contract_.getApproved(0), address(0));
    }

    function test_tokenURI_owner() public {
        vm.prank(author0);
        uint256 tokenId = contract_.stampURI("https://test.example/item-id-8u5h2m.png");
        address owner = contract_.ownerOf(tokenId);
        assertEq(owner, author0);
        assertNotEq(owner, author1);
    }

    function test_get_tokenURI() public {
        string memory uri = "https://test.example/item-id-8u5h2m.png";
        vm.prank(author0);
        uint256 tokenId = contract_.stampURI(uri);
        string memory tokenURI = contract_.tokenURI(tokenId);
        assertEq(uri, tokenURI);
    }

    function test_balanceOf() public {
        assertEq(contract_.balanceOf(author0), 0);
        assertEq(contract_.balanceOf(author1), 0);
        string memory uri = "https://test.example/item-id-8u5h2m.png";
        vm.prank(author0);
        uint256 tokenId = contract_.stampURI(uri);
        assertEq(contract_.balanceOf(author0), 1);
        string memory content = shortContent;
        vm.prank(author0);
        tokenId = contract_.stampContent(content);
        assertEq(contract_.balanceOf(author0), 2);
        string memory anotherContent = mediumContent;
        vm.prank(author1);
        tokenId = contract_.stampContent(anotherContent);
        assertEq(contract_.balanceOf(author0), 2);
        assertEq(contract_.balanceOf(author1), 1);
    }

    function test_approve_tokenURI() public withTokenURI {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721InsufficientApproval.selector,
            0x34085BABD5F182510A383913Ad2B99115AE09fB7,
            0
        );
        vm.expectRevert(expectedError);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 0);
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.Approval(author0, lawyer, 0);
        contract_.approve(lawyer, 0);
        assertEq(contract_.getApproved(0), lawyer);
        assertEq(contract_.balanceOf(author0), 1);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 0);
        address owner = contract_.ownerOf(0);
        assertEq(owner, author1);
        assertEq(contract_.getApproved(0), address(0));
        assertEq(contract_.balanceOf(author0), 0);
        assertEq(contract_.balanceOf(author1), 1);
    }

    function test_approve_for_all()
        public
        withShortContent
        withMediumContent
        withTokenURI
    {
        assertEq(contract_.balanceOf(author0), 3);
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721InsufficientApproval.selector,
            0x34085BABD5F182510A383913Ad2B99115AE09fB7,
            0
        );
        vm.expectRevert(expectedError);
        vm.prank(lawyer);
        contract_.safeTransferFrom(author0, author1, 0);
        vm.expectEmit();
        emit IERC721.ApprovalForAll(author0, lawyer, true);
        vm.prank(author0);
        contract_.setApprovalForAll(lawyer, true);
        assertTrue(contract_.isApprovedForAll(author0, lawyer));
        assertEq(contract_.ownerOf(0), author0);
        vm.prank(lawyer);
        vm.expectEmit();
        emit IERC721.Transfer(author0, author1, 0);
        contract_.safeTransferFrom(author0, author1, 0);
        address owner = contract_.ownerOf(0);
        assertEq(owner, author1);
        assertEq(contract_.getApproved(0), address(0));
        assertEq(contract_.balanceOf(author0), 2);
        assertEq(contract_.balanceOf(author1), 1);
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.ApprovalForAll(author0, user2, true);
        contract_.setApprovalForAll(user2, true);
        assertTrue(contract_.isApprovedForAll(author0, lawyer));
        assertTrue(contract_.isApprovedForAll(author0, user2));
        vm.prank(user2);
        vm.expectEmit();
        emit IERC721.Transfer(author0, author1, 1);
        contract_.safeTransferFrom(author0, author1, 1);
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.ApprovalForAll(author0, lawyer, false);
        contract_.setApprovalForAll(lawyer, false);
        assertFalse(contract_.isApprovedForAll(author0, lawyer));
        vm.expectRevert();
        vm.prank(lawyer);
        contract_.safeTransferFrom(author0, user2, 1);
        assertTrue(contract_.isApprovedForAll(author0, user2));
    }
}
