// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {CryptoStampScript} from "../script/CryptoStamp.s.sol";

import {Test, console2} from "forge-std/Test.sol";


contract CryptoStampTest is Test {

    CryptoStampScript script;

    function setUp() public {
        script = new CryptoStampScript();
    }

    modifier withSetup() {
        script.setUp();
        _;
    }

    function test_run() public withSetup {
        script.run();
    }

    function test_setUp() public {
        script.setUp();
    }
}

