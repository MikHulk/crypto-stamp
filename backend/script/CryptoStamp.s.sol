// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/CryptoStamp.sol";
import {console2} from "forge-std/Test.sol";


contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("DEPLOY_PRIVATE_KEY");
        
        vm.startBroadcast(deployerPrivateKey);
        CryptoStamp cryptoStamp = new CryptoStamp();
        console2.log("deployed to %s", address(cryptoStamp));
        vm.stopBroadcast();
        
    }

    function test() public {}
}
