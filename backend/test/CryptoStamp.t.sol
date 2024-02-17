// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";
import "@openzeppelin/contracts/interfaces/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";


import {Test, console2} from "forge-std/Test.sol";
import {
    CryptoStamp,
    Content,
    ContentType,
    ContractStatus,
    DerivativeProduct
} from "../src/CryptoStamp.sol";


contract BadContract {
    receive() external payable {
        revert("error");
    }
    fallback() external payable {
        revert("error");
    }
    function test() public {}
}


contract CryptoStampTest is Test {

    CryptoStamp contract_;
    DerivativeProduct derived;
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

    string testURI = "https://test.example/item-id-8u5h2m.png";

    modifier withDerived() {
        vm.prank(author1);
        derived = DerivativeProduct(contract_.deriveToken(1, "test derivation"));
        _;
    }

    modifier withShortContent() {
        string memory content = shortContent;
        vm.prank(author0);
        contract_.stampTextContent(content);
        _;
    }

    modifier withMediumContent() {
        string memory content = mediumContent;
        vm.prank(author0);
        contract_.stampTextContent(content);
        _;
    }

    modifier withTokenURI() {
        vm.prank(author0);
        contract_.stampURI(testURI);
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
        uint256 tokenId = contract_.stampTextContent(content);
        assertEq(tokenId, 1);
    }

    function test_get_short_content() public {
        string memory content = shortContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampTextContent(content);
        string memory contentFromRepo = contract_.tokenText(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_deposit_medium_content() public {
        string memory content = mediumContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampTextContent(content);
        assertEq(tokenId, 1);
    }

    function test_get_medium_content() public {
        string memory content = mediumContent;
        vm.prank(author0);
        uint256 tokenId = contract_.stampTextContent(content);
        string memory contentFromRepo = contract_.tokenText(tokenId);
        assertEq(content, contentFromRepo);
    }

    function test_deposit_long_content() public {
        string memory content = longContent;
        vm.expectRevert("too long content");
        vm.prank(author0);
        contract_.stampTextContent(content);
    }

    function test_no_TokenText() public {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721NonexistentToken.selector,
            1
        );
        vm.expectRevert(expectedError);
        contract_.tokenText(1);
    }

    function test_textContent_owner() public {
        vm.prank(author0);
        uint256 tokenId = contract_.stampTextContent(mediumContent);
        address owner = contract_.ownerOf(tokenId);
        assertEq(owner, author0);
        assertNotEq(owner, author1);
    }

    function test_not_approved_cannot_transfer_textContent()
        public withMediumContent
    {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721InsufficientApproval.selector,
            0x34085BABD5F182510A383913Ad2B99115AE09fB7,
            1
        );
        vm.expectRevert(expectedError);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 1);
    }

    function test_approved_can_transfer_textContent()
        public withMediumContent
    {
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.Approval(author0, lawyer, 1);
        contract_.approve(lawyer, 1);
        assertEq(contract_.getApproved(1), lawyer);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 1);
        address owner = contract_.ownerOf(1);
        assertEq(owner, author1);
        assertEq(contract_.getApproved(1), address(0));
    }

    function test_tokenURI_owner() public {
        vm.prank(author0);
        uint256 tokenId = contract_.stampURI(testURI);
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

    function test_no_tokenURI() public {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721NonexistentToken.selector,
            1
        );
        vm.expectRevert(expectedError);
        contract_.tokenURI(1);
    }

    function test_balanceOf() public {
        assertEq(contract_.balanceOf(author0), 0);
        assertEq(contract_.balanceOf(author1), 0);
        string memory uri = testURI;
        vm.prank(author0);
        uint256 tokenId = contract_.stampURI(uri);
        assertEq(contract_.balanceOf(author0), 1);
        string memory content = shortContent;
        vm.prank(author0);
        tokenId = contract_.stampTextContent(content);
        assertEq(contract_.balanceOf(author0), 2);
        string memory anotherContent = mediumContent;
        vm.prank(author1);
        tokenId = contract_.stampTextContent(anotherContent);
        assertEq(contract_.balanceOf(author0), 2);
        assertEq(contract_.balanceOf(author1), 1);
    }

    function test_not_approved_cannot_transfer_tokenURI() public withTokenURI {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721InsufficientApproval.selector,
            0x34085BABD5F182510A383913Ad2B99115AE09fB7,
            1
        );
        vm.expectRevert(expectedError);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 1);
    }

    function test_approved_can_transfer_tokenURI() public withTokenURI {
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.Approval(author0, lawyer, 1);
        contract_.approve(lawyer, 1);
        assertEq(contract_.getApproved(1), lawyer);
        assertEq(contract_.balanceOf(author0), 1);
        vm.prank(lawyer);
        contract_.transferFrom(author0, author1, 1);
        address owner = contract_.ownerOf(1);
        assertEq(owner, author1);
        assertEq(contract_.getApproved(1), address(0));
        assertEq(contract_.balanceOf(author0), 0);
        assertEq(contract_.balanceOf(author1), 1);
    }

    function test_approve_for_all()
        public
        withShortContent
        withMediumContent
        withTokenURI
    {
        // author0 approve lawyer for all
        vm.expectEmit();
        emit IERC721.ApprovalForAll(author0, lawyer, true);
        vm.prank(author0);
        contract_.setApprovalForAll(lawyer, true);
        assertTrue(contract_.isApprovedForAll(author0, lawyer));
        assertEq(contract_.ownerOf(1), author0);

        // lawyer can transfer for author0
        vm.prank(lawyer);
        vm.expectEmit();
        emit IERC721.Transfer(author0, author1, 1);
        contract_.safeTransferFrom(author0, author1, 1);
        address owner = contract_.ownerOf(1);
        assertEq(owner, author1);
        assertEq(contract_.getApproved(1), address(0));
        assertEq(contract_.balanceOf(author0), 2);
        assertEq(contract_.balanceOf(author1), 1);

        // author0 approve user2
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.ApprovalForAll(author0, user2, true);
        contract_.setApprovalForAll(user2, true);
        assertTrue(contract_.isApprovedForAll(author0, lawyer));
        assertTrue(contract_.isApprovedForAll(author0, user2));

        // lawyer can transfer for author0
        vm.prank(user2);
        vm.expectEmit();
        emit IERC721.Transfer(author0, author1, 2);
        contract_.safeTransferFrom(author0, author1, 2);

        // author0 remove lawyer approval
        vm.prank(author0);
        vm.expectEmit();
        emit IERC721.ApprovalForAll(author0, lawyer, false);
        contract_.setApprovalForAll(lawyer, false);
        assertFalse(contract_.isApprovedForAll(author0, lawyer));

        // lawyer cannot transfer anymore
        vm.expectRevert();
        vm.prank(lawyer);
        contract_.safeTransferFrom(author0, user2, 2);
        assertTrue(contract_.isApprovedForAll(author0, user2));
    }

    function test_get_content()
        public
        withTokenURI
        withShortContent
    {
        Content memory content;
        
        content = contract_.content(1);
        assertEq(uint(content.contentType), uint(ContentType.URI));
        assertEq(content.value, testURI);

        content = contract_.content(2);
        assertEq(uint(content.contentType), uint(ContentType.Text));
        assertEq(content.value, shortContent);

        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721NonexistentToken.selector,
            3
        );
        vm.expectRevert(expectedError);
        contract_.content(3);
    }

    function test_derive_tokenURI_from_uri()
        public
        withTokenURI
    {
        vm.prank(author1);
        DerivativeProduct newContract =
            DerivativeProduct(contract_.deriveToken(1, "test derivation"));
        assertEq(author0, newContract.owner());
        assertEq(author1, newContract.recipient());
        assertTrue(ContractStatus.InProgress == newContract.status());
        assertEq(1, newContract.tokenId());
        assertEq(0, newContract.totalBalance());
        assertEq(address(newContract).balance, newContract.totalBalance());
    }

    function test_derive_tokenText_from_uri()
        public
        withTokenURI
    {
        vm.prank(author1);
        DerivativeProduct newContract =
            DerivativeProduct(contract_.deriveToken(1, "test derivation"));
        assertEq(author0, newContract.owner());
        assertEq(author1, newContract.recipient());
        assertTrue(ContractStatus.InProgress == newContract.status());
        assertEq(1, newContract.tokenId());
        assertEq(0, newContract.totalBalance());
        assertEq(address(newContract).balance, newContract.totalBalance());
    }

    function test_derive_tokenURI_from_text()
        public
        withMediumContent
    {
        vm.prank(author1);
        DerivativeProduct newContract =
            DerivativeProduct(contract_.deriveToken(1, "test derivation"));
        assertEq(author0, newContract.owner());
        assertEq(author1, newContract.recipient());
        assertTrue(ContractStatus.InProgress == newContract.status());
        assertEq(1, newContract.tokenId());
        assertEq(0, newContract.totalBalance());
        assertEq(address(newContract).balance, newContract.totalBalance());
    }

    function test_derive_tokenText_from_text()
        public
        withMediumContent
    {
        vm.prank(author1);
        DerivativeProduct newContract =
            DerivativeProduct(contract_.deriveToken(1, "test derivation"));
        assertEq(author0, newContract.owner());
        assertEq(author1, newContract.recipient());
        assertTrue(ContractStatus.InProgress == newContract.status());
        assertEq(1, newContract.tokenId());
        assertEq(0, newContract.totalBalance());
        assertEq(address(newContract).balance, newContract.totalBalance());
    }

    function test_derive_tokenText_too_long_terms()
        public
        withMediumContent
    {
        vm.expectRevert();
        vm.prank(author1);
        DerivativeProduct(contract_.deriveToken(1, longContent));
    }

    function test_derive_tokenText_no_token()
        public
    {
        bytes memory expectedError = abi.encodeWithSelector(
            IERC721Errors.ERC721NonexistentToken.selector,
            1
        );
        vm.expectRevert(expectedError);
        vm.prank(user1);
        contract_.deriveToken(1, "test derivation");
    }

    function test_derive_everyone_can_bid()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertEq(user1.balance, 6 ether);
        hoax(user2, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 8 ether);
        assertEq(address(derived).balance, 8 ether);
        assertEq(user2.balance, 6 ether);
    }

    function test_derive_bidder_can_withdraw_when_in_progress()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertEq(user1.balance, 6 ether);
        vm.prank(user1);
        derived.withdraw();
        assertEq(derived.totalBalance(), 0);
        assertEq(address(derived).balance, 0);
        assertEq(user1.balance, 10 ether);
    }

    function test_derive_bidder_can_withdraw_when_refused()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertEq(user1.balance, 6 ether);
        vm.prank(author0);
        derived.refuse();
        assertTrue(ContractStatus.Refused == derived.status());
        vm.prank(user1);
        derived.withdraw();
        assertEq(derived.totalBalance(), 0);
        assertEq(address(derived).balance, 0);
        assertEq(user1.balance, 10 ether);
    }

    function test_derive_bidder_canot_withdraw_when_accepted()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertEq(user1.balance, 6 ether);
        vm.prank(author0);
        derived.accept();
        assertTrue(ContractStatus.Accepted == derived.status());
        vm.prank(user1);
        vm.expectRevert();
        derived.withdraw();
        assertEq(derived.totalBalance(), 0);
        assertEq(address(derived).balance, 0);
        assertEq(user1.balance, 6 ether);
        assertEq(author0, derived.owner());
        assertEq(author1, derived.recipient());
        assertEq(author0.balance, 4 ether);
    }

    function test_derive_no_bidder_no_withdraw()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        vm.expectRevert();
        derived.withdraw();
        assertEq(derived.totalBalance(), 0);
        assertEq(address(derived).balance, 0);
        assertEq(user1.balance, 10 ether);
    }

    function test_derive_owner_can_accept_with_bal()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertTrue(ContractStatus.InProgress == derived.status());
        vm.prank(author0);
        derived.accept();
        assertTrue(ContractStatus.Accepted == derived.status());
        assertEq(author0.balance, 4 ether);
    }

    function test_derive_owner_can_accept_with_no_bal()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        assertEq(derived.totalBalance(), 0);
        assertEq(address(derived).balance, 0);
        vm.prank(author0);
        derived.accept();
        assertTrue(ContractStatus.Accepted == derived.status());
        assertEq(author0.balance, 0);
    }

    function test_derive_owner_can_refuse_with_no_bal()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        assertEq(derived.totalBalance(), 0);
        assertEq(address(derived).balance, 0);
        vm.prank(author0);
        derived.refuse();
        assertTrue(ContractStatus.Refused == derived.status());
    }

    function test_derive_bidder_cannot_accept()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertEq(user1.balance, 6 ether);
        vm.prank(user1);
        vm.expectRevert();
        derived.accept();
        assertTrue(ContractStatus.InProgress == derived.status());
    }

    function test_derive_bidder_cannot_refuse()
        public withMediumContent withDerived
    {
        assertEq(derived.totalBalance(), 0);
        hoax(user1, 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        assertEq(address(derived).balance, 4 ether);
        assertEq(user1.balance, 6 ether);
        vm.prank(user1);
        vm.expectRevert();
        derived.refuse();
        assertTrue(ContractStatus.InProgress == derived.status());
    }

    function test_derive_onlyowner_can_accept()
        public withMediumContent withDerived
    {
        vm.prank(user1);
        vm.expectRevert();
        derived.accept();
        assertTrue(ContractStatus.InProgress == derived.status());
    }

    function test_derive_onlyowner_can_refuse()
        public withMediumContent withDerived
    {
        vm.prank(user1);
        vm.expectRevert();
        derived.refuse();
        assertTrue(ContractStatus.InProgress == derived.status());
    }

    function test_withdraw_failling_transfert()
        public
    {
        string memory content = mediumContent;
        vm.prank(author0);
        contract_.stampTextContent(content);
        BadContract badaddr = new BadContract();
        vm.prank(address(badaddr));
        derived = DerivativeProduct(contract_.deriveToken(1, "test derivation"));
        hoax(address(badaddr), 10 ether);
        derived.bid{value: 4 ether}();
        assertEq(derived.totalBalance(), 4 ether);
        vm.expectRevert();
        vm.prank(address(badaddr));
        derived.withdraw();
        assertEq(derived.totalBalance(), 4 ether);
        assertTrue(ContractStatus.InProgress == derived.status());
    }

    function test_owner_cannot_sign()
        public
        withMediumContent
    {
        assertEq(contract_.countCosigners(1), 0);
        vm.expectRevert();
        vm.prank(author0);
        contract_.sign(1);
        assertEq(contract_.countCosigners(1), 0);
    }

    function test_everyone_can_sign()
        public
        withMediumContent
    {
        assertEq(contract_.countCosigners(1), 0);
        vm.prank(user1);
        contract_.sign(1);
        assertEq(contract_.countCosigners(1), 1);
        assertTrue(contract_.isSigner(1, user1));
        vm.prank(user2);
        contract_.sign(1);
        assertEq(contract_.countCosigners(1), 2);
        assertTrue(contract_.isSigner(1, user2));
    }

    function test_everyone_can_sign_but_not_twice()
        public
        withMediumContent
    {
        assertEq(contract_.countCosigners(1), 0);
        vm.prank(user1);
        contract_.sign(1);
        assertEq(contract_.countCosigners(1), 1);
        assertTrue(contract_.isSigner(1, user1));
        vm.expectRevert();
        vm.prank(user1);
        contract_.sign(1);
        assertEq(contract_.countCosigners(1), 1);
        assertTrue(contract_.isSigner(1, user1));
    }
}
