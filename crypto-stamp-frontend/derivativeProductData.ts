const derivativeProductData = {
  abi: [
    {
      type: 'constructor',
      inputs: [
        { name: 'tokenId_', type: 'uint256', internalType: 'uint256' },
        {
          name: 'owner_',
          type: 'address',
          internalType: 'address payable'
        },
        {
          name: 'recipient_',
          type: 'address',
          internalType: 'address payable'
        }
      ],
      stateMutability: 'nonpayable'
    },
    {
      type: 'function',
      name: 'accept',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable'
    },
    {
      type: 'function',
      name: 'bid',
      inputs: [],
      outputs: [],
      stateMutability: 'payable'
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address payable' }
      ],
      stateMutability: 'view'
    },
    {
      type: 'function',
      name: 'recipient',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address payable' }
      ],
      stateMutability: 'view'
    },
    {
      type: 'function',
      name: 'refuse',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable'
    },
    {
      type: 'function',
      name: 'status',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint8',
          internalType: 'enum ContractStatus'
        }
      ],
      stateMutability: 'view'
    },
    {
      type: 'function',
      name: 'tokenId',
      inputs: [],
      outputs: [ { name: '', type: 'uint256', internalType: 'uint256' } ],
      stateMutability: 'view'
    },
    {
      type: 'function',
      name: 'totalBalance',
      inputs: [],
      outputs: [ { name: '', type: 'uint256', internalType: 'uint256' } ],
      stateMutability: 'view'
    },
    {
      type: 'function',
      name: 'withdraw',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable'
    }
  ],
  bytecode: {
    object: '0x608060405234801561001057600080fd5b5060405161062c38038061062c83398101604081905261002f91610084565b6000928355600180546001600160a01b039384166001600160a01b031991821617909155600280549290931691161790556003556100c0565b80516001600160a01b038116811461007f57600080fd5b919050565b60008060006060848603121561009957600080fd5b835192506100a960208501610068565b91506100b760408501610068565b90509250925092565b61055d806100cf6000396000f3fe6080604052600436106100865760003560e01c80633ccfd60b116100595780633ccfd60b146100fa57806362c69b801461010f57806366d003ac146101245780638da5cb5b1461015c578063ad7a672f1461017c57600080fd5b806317d70f7c1461008b5780631998aeef146100b4578063200d2ed2146100be5780632852b71c146100e5575b600080fd5b34801561009757600080fd5b506100a160005481565b6040519081526020015b60405180910390f35b6100bc610192565b005b3480156100ca57600080fd5b506005546100d89060ff1681565b6040516100ab9190610494565b3480156100f157600080fd5b506100bc610213565b34801561010657600080fd5b506100bc6102ec565b34801561011b57600080fd5b506100bc6103ef565b34801561013057600080fd5b50600254610144906001600160a01b031681565b6040516001600160a01b0390911681526020016100ab565b34801561016857600080fd5b50600154610144906001600160a01b031681565b34801561018857600080fd5b506100a160035481565b600060055460ff1660028111156101ab576101ab61047e565b146101d15760405162461bcd60e51b81526004016101c8906104bc565b60405180910390fd5b336000908152600460205260408120805434928392916101f29084906104fb565b92505081905550806003600082825461020b91906104fb565b909155505050565b6001546001600160a01b0316331461025d5760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b60448201526064016101c8565b600060055460ff1660028111156102765761027661047e565b146102935760405162461bcd60e51b81526004016101c8906104bc565b6005805460ff19166001179055600354156102ea57600060038190556001546040516001600160a01b03909116914780156108fc02929091818181858888f193505050501580156102e8573d6000803e3d6000fd5b505b565b600160055460ff1660028111156103055761030561047e565b0361030f57600080fd5b3360009081526004602052604090205461032857600080fd5b33600090815260046020526040812054600380549192839261034b908490610514565b9091555050336000818152600460205260408082208290555190919083908381818185875af1925050503d80600081146103a1576040519150601f19603f3d011682016040523d82523d6000602084013e6103a6565b606091505b50509050806103eb5760405162461bcd60e51b81526020600482015260116024820152701d1c985b9cd9995c9d0819985a5b1b1959607a1b60448201526064016101c8565b5050565b6001546001600160a01b031633146104395760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b60448201526064016101c8565b600060055460ff1660028111156104525761045261047e565b1461046f5760405162461bcd60e51b81526004016101c8906104bc565b6005805460ff19166002179055565b634e487b7160e01b600052602160045260246000fd5b60208101600383106104b657634e487b7160e01b600052602160045260246000fd5b91905290565b6020808252600f908201526e3134b23234b7339034b99037bb32b960891b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561050e5761050e6104e5565b92915050565b8181038181111561050e5761050e6104e556fea26469706673582212200d8f36fb2e86694eb3f5a8e348c6420f73ac9b6199baad9bee87ebc2631062d364736f6c63430008170033',
    sourceMap: '3462:1542:38:-:0;;;3703:229;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3825:7;:18;;;3853:5;:14;;-1:-1:-1;;;;;3853:14:38;;;-1:-1:-1;;;;;;3853:14:38;;;;;;;3877:9;:22;;;;;;;;;;;3909:12;:16;3462:1542;;14:185:41;101:13;;-1:-1:-1;;;;;143:31:41;;133:42;;123:70;;189:1;186;179:12;123:70;14:185;;;:::o;204:386::-;308:6;316;324;377:2;365:9;356:7;352:23;348:32;345:52;;;393:1;390;383:12;345:52;422:9;416:16;406:26;;451:57;504:2;493:9;489:18;451:57;:::i;:::-;441:67;;527:57;580:2;569:9;565:18;527:57;:::i;:::-;517:67;;204:386;;;;;:::o;:::-;3462:1542:38;;;;;;',
    linkReferences: {}
  },
  deployedBytecode: {
    object: '0x6080604052600436106100865760003560e01c80633ccfd60b116100595780633ccfd60b146100fa57806362c69b801461010f57806366d003ac146101245780638da5cb5b1461015c578063ad7a672f1461017c57600080fd5b806317d70f7c1461008b5780631998aeef146100b4578063200d2ed2146100be5780632852b71c146100e5575b600080fd5b34801561009757600080fd5b506100a160005481565b6040519081526020015b60405180910390f35b6100bc610192565b005b3480156100ca57600080fd5b506005546100d89060ff1681565b6040516100ab9190610494565b3480156100f157600080fd5b506100bc610213565b34801561010657600080fd5b506100bc6102ec565b34801561011b57600080fd5b506100bc6103ef565b34801561013057600080fd5b50600254610144906001600160a01b031681565b6040516001600160a01b0390911681526020016100ab565b34801561016857600080fd5b50600154610144906001600160a01b031681565b34801561018857600080fd5b506100a160035481565b600060055460ff1660028111156101ab576101ab61047e565b146101d15760405162461bcd60e51b81526004016101c8906104bc565b60405180910390fd5b336000908152600460205260408120805434928392916101f29084906104fb565b92505081905550806003600082825461020b91906104fb565b909155505050565b6001546001600160a01b0316331461025d5760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b60448201526064016101c8565b600060055460ff1660028111156102765761027661047e565b146102935760405162461bcd60e51b81526004016101c8906104bc565b6005805460ff19166001179055600354156102ea57600060038190556001546040516001600160a01b03909116914780156108fc02929091818181858888f193505050501580156102e8573d6000803e3d6000fd5b505b565b600160055460ff1660028111156103055761030561047e565b0361030f57600080fd5b3360009081526004602052604090205461032857600080fd5b33600090815260046020526040812054600380549192839261034b908490610514565b9091555050336000818152600460205260408082208290555190919083908381818185875af1925050503d80600081146103a1576040519150601f19603f3d011682016040523d82523d6000602084013e6103a6565b606091505b50509050806103eb5760405162461bcd60e51b81526020600482015260116024820152701d1c985b9cd9995c9d0819985a5b1b1959607a1b60448201526064016101c8565b5050565b6001546001600160a01b031633146104395760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b60448201526064016101c8565b600060055460ff1660028111156104525761045261047e565b1461046f5760405162461bcd60e51b81526004016101c8906104bc565b6005805460ff19166002179055565b634e487b7160e01b600052602160045260246000fd5b60208101600383106104b657634e487b7160e01b600052602160045260246000fd5b91905290565b6020808252600f908201526e3134b23234b7339034b99037bb32b960891b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561050e5761050e6104e5565b92915050565b8181038181111561050e5761050e6104e556fea26469706673582212200d8f36fb2e86694eb3f5a8e348c6420f73ac9b6199baad9bee87ebc2631062d364736f6c63430008170033',
    sourceMap: '3462:1542:38:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3496:22;;;;;;;;;;;;;;;;;;;160:25:41;;;148:2;133:18;3496:22:38;;;;;;;;4161:159;;;:::i;:::-;;3668:28;;;;;;;;;;-1:-1:-1;3668:28:38;;;;;;;;;;;;;;;:::i;4675:222::-;;;;;;;;;;;;;:::i;4326:343::-;;;;;;;;;;;;;:::i;4903:98::-;;;;;;;;;;;;;:::i;3558:32::-;;;;;;;;;;-1:-1:-1;3558:32:38;;;;-1:-1:-1;;;;;3558:32:38;;;;;;-1:-1:-1;;;;;861:32:41;;;843:51;;831:2;816:18;3558:32:38;681:219:41;3524:28:38;;;;;;;;;;-1:-1:-1;3524:28:38;;;;-1:-1:-1;;;;;3524:28:38;;;3596:27;;;;;;;;;;;;;;;;4161:159;3985:25;3975:6;;;;:35;;;;;;;;:::i;:::-;;3972:65;;4012:25;;-1:-1:-1;;;4012:25:38;;;;;;;:::i;:::-;;;;;;;;3972:65;4258:10:::1;4216:15;4253:16:::0;;;:4:::1;:16;::::0;;;;:27;;4234:9:::1;::::0;;;4253:16;:27:::1;::::0;4234:9;;4253:27:::1;:::i;:::-;;;;;;;;4306:7;4290:12;;:23;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;;4161:159:38:o;4675:222::-;4107:5;;-1:-1:-1;;;;;4107:5:38;4093:10;:19;4090:47;;4114:23;;-1:-1:-1;;;4114:23:38;;1713:2:41;4114:23:38;;;1695:21:41;1752:2;1732:18;;;1725:30;-1:-1:-1;;;1771:18:41;;;1764:43;1824:18;;4114:23:38;1511:337:41;4090:47:38;3985:25:::1;3975:6;::::0;::::1;;:35;::::0;::::1;;;;;;:::i;:::-;;3972:65;;4012:25;;-1:-1:-1::0;;;4012:25:38::1;;;;;;;:::i;3972:65::-;4735:6:::2;:32:::0;;-1:-1:-1;;4735:32:38::2;4744:23;4735:32;::::0;;4781:12:::2;::::0;:16;4777:114:::2;;4828:1;4813:12;:16:::0;;;4843:5:::2;::::0;:37:::2;::::0;-1:-1:-1;;;;;4843:5:38;;::::2;::::0;4858:21:::2;4843:37:::0;::::2;;;::::0;4858:21;;4843:37;4828:1;4843:37;4858:21;4843:5;:37;::::2;;;;;;;;;;;;;::::0;::::2;;;;;;4777:114;4675:222::o:0;4326:343::-;4381:23;4371:6;;;;:33;;;;;;;;:::i;:::-;;4363:42;;;;;;4428:10;4442:1;4423:16;;;:4;:16;;;;;;4415:29;;;;;;4477:10;4454:15;4472:16;;;:4;:16;;;;;;4498:12;:23;;4472:16;;;;4498:23;;4472:16;;4498:23;:::i;:::-;;;;-1:-1:-1;;4536:10:38;4550:1;4531:16;;;:4;:16;;;;;;:20;;;4579:35;4550:1;;4536:10;4602:7;;4550:1;4579:35;4550:1;4579:35;4602:7;4536:10;4579:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4561:53;;;4633:7;4624:38;;;;-1:-1:-1;;;4624:38:38;;2398:2:41;4624:38:38;;;2380:21:41;2437:2;2417:18;;;2410:30;-1:-1:-1;;;2456:18:41;;;2449:47;2513:18;;4624:38:38;2196:341:41;4624:38:38;4353:316;;4326:343::o;4903:98::-;4107:5;;-1:-1:-1;;;;;4107:5:38;4093:10;:19;4090:47;;4114:23;;-1:-1:-1;;;4114:23:38;;1713:2:41;4114:23:38;;;1695:21:41;1752:2;1732:18;;;1725:30;-1:-1:-1;;;1771:18:41;;;1764:43;1824:18;;4114:23:38;1511:337:41;4090:47:38;3985:25:::1;3975:6;::::0;::::1;;:35;::::0;::::1;;;;;;:::i;:::-;;3972:65;;4012:25;;-1:-1:-1::0;;;4012:25:38::1;;;;;;;:::i;3972:65::-;4963:6:::2;:31:::0;;-1:-1:-1;;4963:31:38::2;4972:22;4963:31;::::0;;4903:98::o;196:127:41:-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:348;480:2;465:18;;513:1;502:13;;492:144;;558:10;553:3;549:20;546:1;539:31;593:4;590:1;583:15;621:4;618:1;611:15;492:144;645:25;;;328:348;:::o;905:339::-;1107:2;1089:21;;;1146:2;1126:18;;;1119:30;-1:-1:-1;;;1180:2:41;1165:18;;1158:45;1235:2;1220:18;;905:339::o;1249:127::-;1310:10;1305:3;1301:20;1298:1;1291:31;1341:4;1338:1;1331:15;1365:4;1362:1;1355:15;1381:125;1446:9;;;1467:10;;;1464:36;;;1480:18;;:::i;:::-;1381:125;;;;:::o;1853:128::-;1920:9;;;1941:11;;;1938:37;;;1955:18;;:::i',
    linkReferences: {}
  },
  methodIdentifiers: {
    'accept()': '2852b71c',
    'bid()': '1998aeef',
    'owner()': '8da5cb5b',
    'recipient()': '66d003ac',
    'refuse()': '62c69b80',
    'status()': '200d2ed2',
    'tokenId()': '17d70f7c',
    'totalBalance()': 'ad7a672f',
    'withdraw()': '3ccfd60b'
  },
  rawMetadata: '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address payable","name":"owner_","type":"address"},{"internalType":"address payable","name":"recipient_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"accept","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recipient","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refuse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"enum ContractStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"src/CryptoStamp.sol":"DerivativeProduct"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol":{"keccak256":"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724","license":"MIT","urls":["bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a","dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol":{"keccak256":"0xb31b86c03f4677dcffa4655285d62433509513be9bafa0e04984565052d34e44","license":"MIT","urls":["bzz-raw://a89c6fb0cd5fef4244500b633f63def9f2bb2134debb961e590bd5a2910662fd","dweb:/ipfs/QmNqWyCxyopvb99RbRomPpfTZGXRi5MnzgpFXE2BFLLgMc"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol":{"keccak256":"0xc4d7ebf63eb2f6bf3fee1b6c0ee775efa9f31b4843a5511d07eea147e212932d","license":"MIT","urls":["bzz-raw://01c66a2fad66bc710db7510419a7eee569b40b67cd9f01b70a3fc90d6f76c03b","dweb:/ipfs/QmT1CjJZq4eTNA4nu8E9ZrWfaZu6ReUsDbjcK8DbEFqwx5"]},"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol":{"keccak256":"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7","license":"MIT","urls":["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f","dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"]},"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol":{"keccak256":"0x13dd061770956c8489b80cfc89d9cdfc8ea2783d953691ea037a380731d52784","license":"MIT","urls":["bzz-raw://ed37f0f86e7fe31659e48c3a2a5920a92dd7f13c85cf8991fb79fe5f01e08efd","dweb:/ipfs/QmUtm9bQGvjr9hHGwkPWrbgFmVqzaJcxjkaYDex2oGsonS"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol":{"keccak256":"0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4","license":"MIT","urls":["bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7","dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol":{"keccak256":"0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49","license":"MIT","urls":["bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22","dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol":{"keccak256":"0xcc6f49e0c57072d6a18eef0d5fc22a4cc20462c18f0c365d2dd9a2c732fde670","license":"MIT","urls":["bzz-raw://24915e61c7896c336b60788408cd5792b97b782e98e392920a2c55eb1803fe96","dweb:/ipfs/QmVHhcmFnMYZBCjnVUk6f5quMCDsBR2j669a1nuMiGWY9Z"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol":{"keccak256":"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1","license":"MIT","urls":["bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02","dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792","license":"MIT","urls":["bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453","dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133","license":"MIT","urls":["bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8","dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b","license":"MIT","urls":["bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df","dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d","license":"MIT","urls":["bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875","dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72","license":"MIT","urls":["bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc","dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"]},"src/CryptoStamp.sol":{"keccak256":"0xb4ff2c97f17ff2d01bb434907f4127ef1d81b9fd366bbd9db37fd4cf51187a20","license":"MIT","urls":["bzz-raw://a66952aca856a761c081359a0d2285273303b12a60fc66ed180a28f316f30592","dweb:/ipfs/QmVd7VGBWLkCPjXELEo17sNKz44QQYuHRUs88R6jGeXPXm"]}},"version":1}',
  metadata: {
    compiler: { version: '0.8.23+commit.f704f362' },
    language: 'Solidity',
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'tokenId_',
              type: 'uint256'
            },
            {
              internalType: 'address payable',
              name: 'owner_',
              type: 'address'
            },
            {
              internalType: 'address payable',
              name: 'recipient_',
              type: 'address'
            }
          ],
          stateMutability: 'nonpayable',
          type: 'constructor'
        },
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'accept'
        },
        {
          inputs: [],
          stateMutability: 'payable',
          type: 'function',
          name: 'bid'
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'owner',
          outputs: [
            {
              internalType: 'address payable',
              name: '',
              type: 'address'
            }
          ]
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'recipient',
          outputs: [
            {
              internalType: 'address payable',
              name: '',
              type: 'address'
            }
          ]
        },
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'refuse'
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'status',
          outputs: [
            {
              internalType: 'enum ContractStatus',
              name: '',
              type: 'uint8'
            }
          ]
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'tokenId',
          outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ]
        },
        {
          inputs: [],
          stateMutability: 'view',
          type: 'function',
          name: 'totalBalance',
          outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ]
        },
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
          name: 'withdraw'
        }
      ],
      devdoc: { kind: 'dev', methods: {}, version: 1 },
      userdoc: { kind: 'user', methods: {}, version: 1 }
    },
    settings: {
      remappings: [
        '@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/',
        'ds-test/=lib/forge-std/lib/ds-test/src/',
        'erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/',
        'forge-std/=lib/forge-std/src/',
        'openzeppelin-contracts/=lib/openzeppelin-contracts/'
      ],
      optimizer: { enabled: true, runs: 200 },
      metadata: { bytecodeHash: 'ipfs' },
      compilationTarget: { 'src/CryptoStamp.sol': 'DerivativeProduct' },
      libraries: {}
    },
    sources: {
      'lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol': {
        keccak256: '0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724',
        urls: [
          'bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a',
          'dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol': {
        keccak256: '0xb31b86c03f4677dcffa4655285d62433509513be9bafa0e04984565052d34e44',
        urls: [
          'bzz-raw://a89c6fb0cd5fef4244500b633f63def9f2bb2134debb961e590bd5a2910662fd',
          'dweb:/ipfs/QmNqWyCxyopvb99RbRomPpfTZGXRi5MnzgpFXE2BFLLgMc'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol': {
        keccak256: '0xc4d7ebf63eb2f6bf3fee1b6c0ee775efa9f31b4843a5511d07eea147e212932d',
        urls: [
          'bzz-raw://01c66a2fad66bc710db7510419a7eee569b40b67cd9f01b70a3fc90d6f76c03b',
          'dweb:/ipfs/QmT1CjJZq4eTNA4nu8E9ZrWfaZu6ReUsDbjcK8DbEFqwx5'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol': {
        keccak256: '0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7',
        urls: [
          'bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f',
          'dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol': {
        keccak256: '0x13dd061770956c8489b80cfc89d9cdfc8ea2783d953691ea037a380731d52784',
        urls: [
          'bzz-raw://ed37f0f86e7fe31659e48c3a2a5920a92dd7f13c85cf8991fb79fe5f01e08efd',
          'dweb:/ipfs/QmUtm9bQGvjr9hHGwkPWrbgFmVqzaJcxjkaYDex2oGsonS'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol': {
        keccak256: '0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4',
        urls: [
          'bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7',
          'dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol': {
        keccak256: '0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49',
        urls: [
          'bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22',
          'dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol': {
        keccak256: '0xcc6f49e0c57072d6a18eef0d5fc22a4cc20462c18f0c365d2dd9a2c732fde670',
        urls: [
          'bzz-raw://24915e61c7896c336b60788408cd5792b97b782e98e392920a2c55eb1803fe96',
          'dweb:/ipfs/QmVHhcmFnMYZBCjnVUk6f5quMCDsBR2j669a1nuMiGWY9Z'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol': {
        keccak256: '0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1',
        urls: [
          'bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02',
          'dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/utils/Context.sol': {
        keccak256: '0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2',
        urls: [
          'bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12',
          'dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/utils/Strings.sol': {
        keccak256: '0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792',
        urls: [
          'bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453',
          'dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol': {
        keccak256: '0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133',
        urls: [
          'bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8',
          'dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol': {
        keccak256: '0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b',
        urls: [
          'bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df',
          'dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/utils/math/Math.sol': {
        keccak256: '0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d',
        urls: [
          'bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875',
          'dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L'
        ],
        license: 'MIT'
      },
      'lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol': {
        keccak256: '0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72',
        urls: [
          'bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc',
          'dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT'
        ],
        license: 'MIT'
      },
      'src/CryptoStamp.sol': {
        keccak256: '0xb4ff2c97f17ff2d01bb434907f4127ef1d81b9fd366bbd9db37fd4cf51187a20',
        urls: [
          'bzz-raw://a66952aca856a761c081359a0d2285273303b12a60fc66ed180a28f316f30592',
          'dweb:/ipfs/QmVd7VGBWLkCPjXELEo17sNKz44QQYuHRUs88R6jGeXPXm'
        ],
        license: 'MIT'
      }
    },
    version: 1
  },
  ast: {
    absolutePath: 'src/CryptoStamp.sol',
    id: 48520,
    exportedSymbols: {
      Content: [ 47997 ],
      ContentType: [ 47991 ],
      Context: [ 46513 ],
      ContractStatus: [ 48331 ],
      Cosigners: [ 48004 ],
      CryptoStamp: [ 48327 ],
      DerivativeProduct: [ 48519 ],
      ERC165: [ 46792 ],
      ERC721: [ 46194 ],
      ERC721URIStorage: [ 46455 ],
      IERC165: [ 46804 ],
      IERC4906: [ 44966 ],
      IERC721: [ 46311 ],
      IERC721Errors: [ 45060 ],
      IERC721Metadata: [ 46483 ],
      IERC721Receiver: [ 46329 ],
      Strings: [ 46768 ]
    },
    nodeType: 'SourceUnit',
    src: '32:4973:38',
    nodes: [
      {
        id: 47986,
        nodeType: 'PragmaDirective',
        src: '32:24:38',
        nodes: [],
        literals: [ 'solidity', '^', '0.8', '.20' ]
      },
      {
        id: 47987,
        nodeType: 'ImportDirective',
        src: '58:57:38',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol',
        file: '@openzeppelin/contracts/token/ERC721/ERC721.sol',
        nameLocation: '-1:-1:-1',
        scope: 48520,
        sourceUnit: 46195,
        symbolAliases: [],
        unitAlias: ''
      },
      {
        id: 47988,
        nodeType: 'ImportDirective',
        src: '116:78:38',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol',
        file: '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol',
        nameLocation: '-1:-1:-1',
        scope: 48520,
        sourceUnit: 46456,
        symbolAliases: [],
        unitAlias: ''
      },
      {
        id: 47991,
        nodeType: 'EnumDefinition',
        src: '197:38:38',
        nodes: [],
        canonicalName: 'ContentType',
        members: [
          {
            id: 47989,
            name: 'Text',
            nameLocation: '220:4:38',
            nodeType: 'EnumValue',
            src: '220:4:38'
          },
          {
            id: 47990,
            name: 'URI',
            nameLocation: '230:3:38',
            nodeType: 'EnumValue',
            src: '230:3:38'
          }
        ],
        name: 'ContentType',
        nameLocation: '202:11:38'
      },
      {
        id: 47997,
        nodeType: 'StructDefinition',
        src: '238:65:38',
        nodes: [],
        canonicalName: 'Content',
        members: [
          {
            constant: false,
            id: 47994,
            mutability: 'mutable',
            name: 'contentType',
            nameLocation: '271:11:38',
            nodeType: 'VariableDeclaration',
            scope: 47997,
            src: '259:23:38',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_enum$_ContentType_$47991',
              typeString: 'enum ContentType'
            },
            typeName: {
              id: 47993,
              nodeType: 'UserDefinedTypeName',
              pathNode: {
                id: 47992,
                name: 'ContentType',
                nameLocations: [ '259:11:38' ],
                nodeType: 'IdentifierPath',
                referencedDeclaration: 47991,
                src: '259:11:38'
              },
              referencedDeclaration: 47991,
              src: '259:11:38',
              typeDescriptions: {
                typeIdentifier: 't_enum$_ContentType_$47991',
                typeString: 'enum ContentType'
              }
            },
            visibility: 'internal'
          },
          {
            constant: false,
            id: 47996,
            mutability: 'mutable',
            name: 'value',
            nameLocation: '295:5:38',
            nodeType: 'VariableDeclaration',
            scope: 47997,
            src: '288:12:38',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage_ptr',
              typeString: 'string'
            },
            typeName: {
              id: 47995,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '288:6:38',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            visibility: 'internal'
          }
        ],
        name: 'Content',
        nameLocation: '245:7:38',
        scope: 48520,
        visibility: 'public'
      },
      {
        id: 48004,
        nodeType: 'StructDefinition',
        src: '305:78:38',
        nodes: [],
        canonicalName: 'Cosigners',
        members: [
          {
            constant: false,
            id: 47999,
            mutability: 'mutable',
            name: 'total',
            nameLocation: '336:5:38',
            nodeType: 'VariableDeclaration',
            scope: 48004,
            src: '328:13:38',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 47998,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '328:7:38',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'internal'
          },
          {
            constant: false,
            id: 48003,
            mutability: 'mutable',
            name: 'signers',
            nameLocation: '373:7:38',
            nodeType: 'VariableDeclaration',
            scope: 48004,
            src: '347:33:38',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
              typeString: 'mapping(address => bool)'
            },
            typeName: {
              id: 48002,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 48000,
                name: 'address',
                nodeType: 'ElementaryTypeName',
                src: '356:7:38',
                typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
              },
              nodeType: 'Mapping',
              src: '347:25:38',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                typeString: 'mapping(address => bool)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 48001,
                name: 'bool',
                nodeType: 'ElementaryTypeName',
                src: '367:4:38',
                typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
              }
            },
            visibility: 'internal'
          }
        ],
        name: 'Cosigners',
        nameLocation: '312:9:38',
        scope: 48520,
        visibility: 'public'
      },
      {
        id: 48327,
        nodeType: 'ContractDefinition',
        src: '386:3005:38',
        nodes: [
          {
            id: 48010,
            nodeType: 'VariableDeclaration',
            src: '446:31:38',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: '_currentTokenId',
            nameLocation: '462:15:38',
            scope: 48327,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 48009,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '446:7:38',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'private'
          },
          {
            id: 48014,
            nodeType: 'VariableDeclaration',
            src: '488:44:38',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: '_registry',
            nameLocation: '523:9:38',
            scope: 48327,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
              typeString: 'mapping(uint256 => string)'
            },
            typeName: {
              id: 48013,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 48011,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '496:7:38',
                typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
              },
              nodeType: 'Mapping',
              src: '488:26:38',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
                typeString: 'mapping(uint256 => string)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 48012,
                name: 'string',
                nodeType: 'ElementaryTypeName',
                src: '507:6:38',
                typeDescriptions: {
                  typeIdentifier: 't_string_storage_ptr',
                  typeString: 'string'
                }
              }
            },
            visibility: 'private'
          },
          {
            id: 48019,
            nodeType: 'VariableDeclaration',
            src: '538:47:38',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: 'cosigners',
            nameLocation: '576:9:38',
            scope: 48327,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
              typeString: 'mapping(uint256 => struct Cosigners)'
            },
            typeName: {
              id: 48018,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 48015,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '546:7:38',
                typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
              },
              nodeType: 'Mapping',
              src: '538:29:38',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
                typeString: 'mapping(uint256 => struct Cosigners)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 48017,
                nodeType: 'UserDefinedTypeName',
                pathNode: {
                  id: 48016,
                  name: 'Cosigners',
                  nameLocations: [ '557:9:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48004,
                  src: '557:9:38'
                },
                referencedDeclaration: 48004,
                src: '557:9:38',
                typeDescriptions: {
                  typeIdentifier: 't_struct$_Cosigners_$48004_storage_ptr',
                  typeString: 'struct Cosigners'
                }
              }
            },
            visibility: 'private'
          },
          {
            id: 48027,
            nodeType: 'FunctionDefinition',
            src: '596:46:38',
            nodes: [],
            body: {
              id: 48026,
              nodeType: 'Block',
              src: '640:2:38',
              nodes: [],
              statements: []
            },
            implemented: true,
            kind: 'constructor',
            modifiers: [
              {
                arguments: [
                  {
                    hexValue: '43727970746f5374616d70',
                    id: 48022,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '617:13:38',
                    typeDescriptions: {
                      typeIdentifier: 't_stringliteral_5eefe880a6dfe4f5c05982b7a9297f07da44a1538c38d91efe013575cca35a99',
                      typeString: 'literal_string "CryptoStamp"'
                    },
                    value: 'CryptoStamp'
                  },
                  {
                    hexValue: '53544d50',
                    id: 48023,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '632:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_stringliteral_0ddeade3cc15fad5811661bc0417cb5b7330efe4fd88718108233c786c8abc4b',
                      typeString: 'literal_string "STMP"'
                    },
                    value: 'STMP'
                  }
                ],
                id: 48024,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 48021,
                  name: 'ERC721',
                  nameLocations: [ '610:6:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46194,
                  src: '610:6:38'
                },
                nodeType: 'ModifierInvocation',
                src: '610:29:38'
              }
            ],
            name: '',
            nameLocation: '-1:-1:-1',
            parameters: {
              id: 48020,
              nodeType: 'ParameterList',
              parameters: [],
              src: '607:2:38'
            },
            returnParameters: {
              id: 48025,
              nodeType: 'ParameterList',
              parameters: [],
              src: '640:0:38'
            },
            scope: 48327,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48041,
            nodeType: 'FunctionDefinition',
            src: '648:128:38',
            nodes: [],
            body: {
              id: 48040,
              nodeType: 'Block',
              src: '730:46:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 48038,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 48034,
                        name: '_registry',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48014,
                        src: '740:9:38',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
                          typeString: 'mapping(uint256 => string storage ref)'
                        }
                      },
                      id: 48036,
                      indexExpression: {
                        id: 48035,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48029,
                        src: '750:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '740:18:38',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48037,
                      name: '_content',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48031,
                      src: '761:8:38',
                      typeDescriptions: {
                        typeIdentifier: 't_string_calldata_ptr',
                        typeString: 'string calldata'
                      }
                    },
                    src: '740:29:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 48039,
                  nodeType: 'ExpressionStatement',
                  src: '740:29:38'
                }
              ]
            },
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: '_setText',
            nameLocation: '657:8:38',
            parameters: {
              id: 48032,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48029,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '674:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48041,
                  src: '666:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48028,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '666:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48031,
                  mutability: 'mutable',
                  name: '_content',
                  nameLocation: '699:8:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48041,
                  src: '683:24:38',
                  stateVariable: false,
                  storageLocation: 'calldata',
                  typeDescriptions: {
                    typeIdentifier: 't_string_calldata_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48030,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '683:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '665:43:38'
            },
            returnParameters: {
              id: 48033,
              nodeType: 'ParameterList',
              parameters: [],
              src: '730:0:38'
            },
            scope: 48327,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'internal'
          },
          {
            id: 48083,
            nodeType: 'FunctionDefinition',
            src: '786:345:38',
            nodes: [],
            body: {
              id: 48082,
              nodeType: 'Block',
              src: '875:256:38',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 48054,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        arguments: [
                          {
                            id: 48050,
                            name: '_content',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48043,
                            src: '895:8:38',
                            typeDescriptions: {
                              typeIdentifier: 't_string_calldata_ptr',
                              typeString: 'string calldata'
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_string_calldata_ptr',
                              typeString: 'string calldata'
                            }
                          ],
                          id: 48049,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '889:5:38',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_bytes_storage_ptr_$',
                            typeString: 'type(bytes storage pointer)'
                          },
                          typeName: {
                            id: 48048,
                            name: 'bytes',
                            nodeType: 'ElementaryTypeName',
                            src: '889:5:38',
                            typeDescriptions: {}
                          }
                        },
                        id: 48051,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '889:15:38',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_bytes_calldata_ptr',
                          typeString: 'bytes calldata'
                        }
                      },
                      id: 48052,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '905:6:38',
                      memberName: 'length',
                      nodeType: 'MemberAccess',
                      src: '889:22:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '>',
                    rightExpression: {
                      hexValue: '323536',
                      id: 48053,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '914:3:38',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_256_by_1',
                        typeString: 'int_const 256'
                      },
                      value: '256'
                    },
                    src: '889:28:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48059,
                  nodeType: 'IfStatement',
                  src: '885:72:38',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '746f6f206c6f6e6720636f6e74656e74',
                          id: 48056,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '938:18:38',
                          typeDescriptions: {
                            typeIdentifier: 't_stringliteral_100cf86bf440a501aeda68581d13f983d2f2b2a1a5023f6d1c3c6f4ba4efb142',
                            typeString: 'literal_string "too long content"'
                          },
                          value: 'too long content'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_100cf86bf440a501aeda68581d13f983d2f2b2a1a5023f6d1c3c6f4ba4efb142',
                            typeString: 'literal_string "too long content"'
                          }
                        ],
                        id: 48055,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '931:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48057,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '931:26:38',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48058,
                    nodeType: 'ExpressionStatement',
                    src: '931:26:38'
                  }
                },
                {
                  assignments: [ 48061 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48061,
                      mutability: 'mutable',
                      name: 'author',
                      nameLocation: '975:6:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48082,
                      src: '967:14:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48060,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '967:7:38',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48064,
                  initialValue: {
                    expression: {
                      id: 48062,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '984:3:38',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48063,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '988:6:38',
                    memberName: 'sender',
                    nodeType: 'MemberAccess',
                    src: '984:10:38',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '967:27:38'
                },
                {
                  assignments: [ 48066 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48066,
                      mutability: 'mutable',
                      name: 'newId',
                      nameLocation: '1012:5:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48082,
                      src: '1004:13:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48065,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '1004:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48069,
                  initialValue: {
                    id: 48068,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'UnaryOperation',
                    operator: '++',
                    prefix: true,
                    src: '1020:17:38',
                    subExpression: {
                      id: 48067,
                      name: '_currentTokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48010,
                      src: '1022:15:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1004:33:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48071,
                        name: 'author',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48061,
                        src: '1053:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        id: 48072,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48066,
                        src: '1061:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 48070,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 45801,
                      src: '1047:5:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 48073,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1047:20:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48074,
                  nodeType: 'ExpressionStatement',
                  src: '1047:20:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48076,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48066,
                        src: '1086:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      {
                        id: 48077,
                        name: '_content',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48043,
                        src: '1093:8:38',
                        typeDescriptions: {
                          typeIdentifier: 't_string_calldata_ptr',
                          typeString: 'string calldata'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        {
                          typeIdentifier: 't_string_calldata_ptr',
                          typeString: 'string calldata'
                        }
                      ],
                      id: 48075,
                      name: '_setText',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48041,
                      src: '1077:8:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_uint256_$_t_string_calldata_ptr_$returns$__$',
                        typeString: 'function (uint256,string calldata)'
                      }
                    },
                    id: 48078,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1077:25:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48079,
                  nodeType: 'ExpressionStatement',
                  src: '1077:25:38'
                },
                {
                  expression: {
                    id: 48080,
                    name: 'newId',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 48066,
                    src: '1119:5:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  functionReturnParameters: 48047,
                  id: 48081,
                  nodeType: 'Return',
                  src: '1112:12:38'
                }
              ]
            },
            functionSelector: '57a656c9',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'stampTextContent',
            nameLocation: '795:16:38',
            parameters: {
              id: 48044,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48043,
                  mutability: 'mutable',
                  name: '_content',
                  nameLocation: '828:8:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48083,
                  src: '812:24:38',
                  stateVariable: false,
                  storageLocation: 'calldata',
                  typeDescriptions: {
                    typeIdentifier: 't_string_calldata_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48042,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '812:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '811:26:38'
            },
            returnParameters: {
              id: 48047,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48046,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48083,
                  src: '862:7:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48045,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '862:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '861:9:38'
            },
            scope: 48327,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48099,
            nodeType: 'FunctionDefinition',
            src: '1137:157:38',
            nodes: [],
            body: {
              id: 48098,
              nodeType: 'Block',
              src: '1220:74:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 48091,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48085,
                        src: '1244:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 48090,
                      name: '_requireOwned',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 46129,
                      src: '1230:13:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_address_$',
                        typeString: 'function (uint256) view returns (address)'
                      }
                    },
                    id: 48092,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1230:22:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  id: 48093,
                  nodeType: 'ExpressionStatement',
                  src: '1230:22:38'
                },
                {
                  expression: {
                    baseExpression: {
                      id: 48094,
                      name: '_registry',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48014,
                      src: '1269:9:38',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
                        typeString: 'mapping(uint256 => string storage ref)'
                      }
                    },
                    id: 48096,
                    indexExpression: {
                      id: 48095,
                      name: 'tokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48085,
                      src: '1279:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '1269:18:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  functionReturnParameters: 48089,
                  id: 48097,
                  nodeType: 'Return',
                  src: '1262:25:38'
                }
              ]
            },
            functionSelector: 'b6e521d5',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'tokenText',
            nameLocation: '1146:9:38',
            parameters: {
              id: 48086,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48085,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '1164:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48099,
                  src: '1156:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48084,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1156:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1155:17:38'
            },
            returnParameters: {
              id: 48089,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48088,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48099,
                  src: '1201:13:38',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48087,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1201:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1200:15:38'
            },
            scope: 48327,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48115,
            nodeType: 'FunctionDefinition',
            src: '1300:189:38',
            nodes: [],
            body: {
              id: 48114,
              nodeType: 'Block',
              src: '1442:47:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 48111,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48101,
                        src: '1474:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      expression: {
                        id: 48109,
                        name: 'super',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: '1459:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_super$_CryptoStamp_$48327_$',
                          typeString: 'type(contract super CryptoStamp)'
                        }
                      },
                      id: 48110,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '1465:8:38',
                      memberName: 'tokenURI',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 46435,
                      src: '1459:14:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$',
                        typeString: 'function (uint256) view returns (string memory)'
                      }
                    },
                    id: 48112,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1459:23:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory'
                    }
                  },
                  functionReturnParameters: 48108,
                  id: 48113,
                  nodeType: 'Return',
                  src: '1452:30:38'
                }
              ]
            },
            baseFunctions: [ 45381, 46435 ],
            functionSelector: 'c87b56dd',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'tokenURI',
            nameLocation: '1309:8:38',
            overrides: {
              id: 48105,
              nodeType: 'OverrideSpecifier',
              overrides: [
                {
                  id: 48103,
                  name: 'ERC721',
                  nameLocations: [ '1380:6:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46194,
                  src: '1380:6:38'
                },
                {
                  id: 48104,
                  name: 'ERC721URIStorage',
                  nameLocations: [ '1388:16:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46455,
                  src: '1388:16:38'
                }
              ],
              src: '1371:34:38'
            },
            parameters: {
              id: 48102,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48101,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '1326:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48115,
                  src: '1318:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48100,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1318:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1317:17:38'
            },
            returnParameters: {
              id: 48108,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48107,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48115,
                  src: '1423:13:38',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48106,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1423:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1422:15:38'
            },
            scope: 48327,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48131,
            nodeType: 'FunctionDefinition',
            src: '1495:205:38',
            nodes: [],
            body: {
              id: 48130,
              nodeType: 'Block',
              src: '1640:60:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 48127,
                        name: 'interfaceId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48117,
                        src: '1681:11:38',
                        typeDescriptions: {
                          typeIdentifier: 't_bytes4',
                          typeString: 'bytes4'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bytes4',
                          typeString: 'bytes4'
                        }
                      ],
                      expression: {
                        id: 48125,
                        name: 'super',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: '1657:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_super$_CryptoStamp_$48327_$',
                          typeString: 'type(contract super CryptoStamp)'
                        }
                      },
                      id: 48126,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '1663:17:38',
                      memberName: 'supportsInterface',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 46378,
                      src: '1657:23:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_bytes4_$returns$_t_bool_$',
                        typeString: 'function (bytes4) view returns (bool)'
                      }
                    },
                    id: 48128,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1657:36:38',
                    tryCall: false,
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  functionReturnParameters: 48124,
                  id: 48129,
                  nodeType: 'Return',
                  src: '1650:43:38'
                }
              ]
            },
            baseFunctions: [ 45286, 46378 ],
            functionSelector: '01ffc9a7',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'supportsInterface',
            nameLocation: '1504:17:38',
            overrides: {
              id: 48121,
              nodeType: 'OverrideSpecifier',
              overrides: [
                {
                  id: 48119,
                  name: 'ERC721',
                  nameLocations: [ '1587:6:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46194,
                  src: '1587:6:38'
                },
                {
                  id: 48120,
                  name: 'ERC721URIStorage',
                  nameLocations: [ '1595:16:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46455,
                  src: '1595:16:38'
                }
              ],
              src: '1578:34:38'
            },
            parameters: {
              id: 48118,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48117,
                  mutability: 'mutable',
                  name: 'interfaceId',
                  nameLocation: '1529:11:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48131,
                  src: '1522:18:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: { typeIdentifier: 't_bytes4', typeString: 'bytes4' },
                  typeName: {
                    id: 48116,
                    name: 'bytes4',
                    nodeType: 'ElementaryTypeName',
                    src: '1522:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes4',
                      typeString: 'bytes4'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1521:20:38'
            },
            returnParameters: {
              id: 48124,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48123,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48131,
                  src: '1630:4:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                  typeName: {
                    id: 48122,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '1630:4:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1629:6:38'
            },
            scope: 48327,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48161,
            nodeType: 'FunctionDefinition',
            src: '1706:259:38',
            nodes: [],
            body: {
              id: 48160,
              nodeType: 'Block',
              src: '1786:179:38',
              nodes: [],
              statements: [
                {
                  assignments: [ 48139 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48139,
                      mutability: 'mutable',
                      name: 'author',
                      nameLocation: '1804:6:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48160,
                      src: '1796:14:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48138,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '1796:7:38',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48142,
                  initialValue: {
                    expression: {
                      id: 48140,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '1813:3:38',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48141,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '1817:6:38',
                    memberName: 'sender',
                    nodeType: 'MemberAccess',
                    src: '1813:10:38',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1796:27:38'
                },
                {
                  assignments: [ 48144 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48144,
                      mutability: 'mutable',
                      name: 'newId',
                      nameLocation: '1841:5:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48160,
                      src: '1833:13:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48143,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '1833:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48147,
                  initialValue: {
                    id: 48146,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'UnaryOperation',
                    operator: '++',
                    prefix: true,
                    src: '1849:17:38',
                    subExpression: {
                      id: 48145,
                      name: '_currentTokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48010,
                      src: '1851:15:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1833:33:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48149,
                        name: 'author',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48139,
                        src: '1882:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        id: 48150,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48144,
                        src: '1890:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 48148,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 45801,
                      src: '1876:5:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 48151,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1876:20:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48152,
                  nodeType: 'ExpressionStatement',
                  src: '1876:20:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48154,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48144,
                        src: '1919:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      {
                        id: 48155,
                        name: '_tokenURI',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48133,
                        src: '1926:9:38',
                        typeDescriptions: {
                          typeIdentifier: 't_string_memory_ptr',
                          typeString: 'string memory'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        {
                          typeIdentifier: 't_string_memory_ptr',
                          typeString: 'string memory'
                        }
                      ],
                      id: 48153,
                      name: '_setTokenURI',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 46454,
                      src: '1906:12:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (uint256,string memory)'
                      }
                    },
                    id: 48156,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1906:30:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48157,
                  nodeType: 'ExpressionStatement',
                  src: '1906:30:38'
                },
                {
                  expression: {
                    id: 48158,
                    name: 'newId',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 48144,
                    src: '1953:5:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  functionReturnParameters: 48137,
                  id: 48159,
                  nodeType: 'Return',
                  src: '1946:12:38'
                }
              ]
            },
            functionSelector: '486f5fd5',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'stampURI',
            nameLocation: '1715:8:38',
            parameters: {
              id: 48134,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48133,
                  mutability: 'mutable',
                  name: '_tokenURI',
                  nameLocation: '1738:9:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48161,
                  src: '1724:23:38',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48132,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1724:6:38',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1723:25:38'
            },
            returnParameters: {
              id: 48137,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48136,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48161,
                  src: '1773:7:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48135,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1773:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1772:9:38'
            },
            scope: 48327,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48210,
            nodeType: 'FunctionDefinition',
            src: '1971:429:38',
            nodes: [],
            body: {
              id: 48209,
              nodeType: 'Block',
              src: '2053:347:38',
              nodes: [],
              statements: [
                {
                  assignments: [ 48170 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48170,
                      mutability: 'mutable',
                      name: 'value',
                      nameLocation: '2077:5:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48209,
                      src: '2063:19:38',
                      stateVariable: false,
                      storageLocation: 'memory',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string'
                      },
                      typeName: {
                        id: 48169,
                        name: 'string',
                        nodeType: 'ElementaryTypeName',
                        src: '2063:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_string_storage_ptr',
                          typeString: 'string'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48174,
                  initialValue: {
                    arguments: [
                      {
                        id: 48172,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48163,
                        src: '2094:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 48171,
                      name: 'tokenURI',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ 48115 ],
                      referencedDeclaration: 48115,
                      src: '2085:8:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$',
                        typeString: 'function (uint256) view returns (string memory)'
                      }
                    },
                    id: 48173,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2085:17:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '2063:39:38'
                },
                {
                  assignments: [ 48177 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48177,
                      mutability: 'mutable',
                      name: 'contentType',
                      nameLocation: '2124:11:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48209,
                      src: '2112:23:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContentType_$47991',
                        typeString: 'enum ContentType'
                      },
                      typeName: {
                        id: 48176,
                        nodeType: 'UserDefinedTypeName',
                        pathNode: {
                          id: 48175,
                          name: 'ContentType',
                          nameLocations: [ '2112:11:38' ],
                          nodeType: 'IdentifierPath',
                          referencedDeclaration: 47991,
                          src: '2112:11:38'
                        },
                        referencedDeclaration: 47991,
                        src: '2112:11:38',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47991',
                          typeString: 'enum ContentType'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48178,
                  nodeType: 'VariableDeclarationStatement',
                  src: '2112:23:38'
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 48185,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        arguments: [
                          {
                            id: 48181,
                            name: 'value',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48170,
                            src: '2155:5:38',
                            typeDescriptions: {
                              typeIdentifier: 't_string_memory_ptr',
                              typeString: 'string memory'
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_string_memory_ptr',
                              typeString: 'string memory'
                            }
                          ],
                          id: 48180,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '2149:5:38',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_bytes_storage_ptr_$',
                            typeString: 'type(bytes storage pointer)'
                          },
                          typeName: {
                            id: 48179,
                            name: 'bytes',
                            nodeType: 'ElementaryTypeName',
                            src: '2149:5:38',
                            typeDescriptions: {}
                          }
                        },
                        id: 48182,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '2149:12:38',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_bytes_memory_ptr',
                          typeString: 'bytes memory'
                        }
                      },
                      id: 48183,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '2162:6:38',
                      memberName: 'length',
                      nodeType: 'MemberAccess',
                      src: '2149:19:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '!=',
                    rightExpression: {
                      hexValue: '30',
                      id: 48184,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '2172:1:38',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '2149:24:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  falseBody: {
                    id: 48202,
                    nodeType: 'Block',
                    src: '2231:95:38',
                    statements: [
                      {
                        expression: {
                          id: 48195,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 48191,
                            name: 'value',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48170,
                            src: '2245:5:38',
                            typeDescriptions: {
                              typeIdentifier: 't_string_memory_ptr',
                              typeString: 'string memory'
                            }
                          },
                          nodeType: 'Assignment',
                          operator: '=',
                          rightHandSide: {
                            arguments: [
                              {
                                id: 48193,
                                name: 'tokenId',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 48163,
                                src: '2263:7:38',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              }
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256'
                                }
                              ],
                              id: 48192,
                              name: 'tokenText',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 48099,
                              src: '2253:9:38',
                              typeDescriptions: {
                                typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$',
                                typeString: 'function (uint256) view returns (string memory)'
                              }
                            },
                            id: 48194,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '2253:18:38',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_string_memory_ptr',
                              typeString: 'string memory'
                            }
                          },
                          src: '2245:26:38',
                          typeDescriptions: {
                            typeIdentifier: 't_string_memory_ptr',
                            typeString: 'string memory'
                          }
                        },
                        id: 48196,
                        nodeType: 'ExpressionStatement',
                        src: '2245:26:38'
                      },
                      {
                        expression: {
                          id: 48200,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 48197,
                            name: 'contentType',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48177,
                            src: '2285:11:38',
                            typeDescriptions: {
                              typeIdentifier: 't_enum$_ContentType_$47991',
                              typeString: 'enum ContentType'
                            }
                          },
                          nodeType: 'Assignment',
                          operator: '=',
                          rightHandSide: {
                            expression: {
                              id: 48198,
                              name: 'ContentType',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 47991,
                              src: '2299:11:38',
                              typeDescriptions: {
                                typeIdentifier: 't_type$_t_enum$_ContentType_$47991_$',
                                typeString: 'type(enum ContentType)'
                              }
                            },
                            id: 48199,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            memberLocation: '2311:4:38',
                            memberName: 'Text',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: 47989,
                            src: '2299:16:38',
                            typeDescriptions: {
                              typeIdentifier: 't_enum$_ContentType_$47991',
                              typeString: 'enum ContentType'
                            }
                          },
                          src: '2285:30:38',
                          typeDescriptions: {
                            typeIdentifier: 't_enum$_ContentType_$47991',
                            typeString: 'enum ContentType'
                          }
                        },
                        id: 48201,
                        nodeType: 'ExpressionStatement',
                        src: '2285:30:38'
                      }
                    ]
                  },
                  id: 48203,
                  nodeType: 'IfStatement',
                  src: '2145:181:38',
                  trueBody: {
                    expression: {
                      id: 48189,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 48186,
                        name: 'contentType',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48177,
                        src: '2187:11:38',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47991',
                          typeString: 'enum ContentType'
                        }
                      },
                      nodeType: 'Assignment',
                      operator: '=',
                      rightHandSide: {
                        expression: {
                          id: 48187,
                          name: 'ContentType',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 47991,
                          src: '2201:11:38',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_enum$_ContentType_$47991_$',
                            typeString: 'type(enum ContentType)'
                          }
                        },
                        id: 48188,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        memberLocation: '2213:3:38',
                        memberName: 'URI',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: 47990,
                        src: '2201:15:38',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47991',
                          typeString: 'enum ContentType'
                        }
                      },
                      src: '2187:29:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContentType_$47991',
                        typeString: 'enum ContentType'
                      }
                    },
                    id: 48190,
                    nodeType: 'ExpressionStatement',
                    src: '2187:29:38'
                  }
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48205,
                        name: 'contentType',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48177,
                        src: '2365:11:38',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47991',
                          typeString: 'enum ContentType'
                        }
                      },
                      {
                        id: 48206,
                        name: 'value',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48170,
                        src: '2385:5:38',
                        typeDescriptions: {
                          typeIdentifier: 't_string_memory_ptr',
                          typeString: 'string memory'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_enum$_ContentType_$47991',
                          typeString: 'enum ContentType'
                        },
                        {
                          typeIdentifier: 't_string_memory_ptr',
                          typeString: 'string memory'
                        }
                      ],
                      id: 48204,
                      name: 'Content',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47997,
                      src: '2342:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_type$_t_struct$_Content_$47997_storage_ptr_$',
                        typeString: 'type(struct Content storage pointer)'
                      }
                    },
                    id: 48207,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'structConstructorCall',
                    lValueRequested: false,
                    nameLocations: [ '2352:11:38', '2378:5:38' ],
                    names: [ 'contentType', 'value' ],
                    nodeType: 'FunctionCall',
                    src: '2342:51:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_struct$_Content_$47997_memory_ptr',
                      typeString: 'struct Content memory'
                    }
                  },
                  functionReturnParameters: 48168,
                  id: 48208,
                  nodeType: 'Return',
                  src: '2335:58:38'
                }
              ]
            },
            functionSelector: 'baa0b806',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'content',
            nameLocation: '1980:7:38',
            parameters: {
              id: 48164,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48163,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '1996:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48210,
                  src: '1988:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48162,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1988:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1987:17:38'
            },
            returnParameters: {
              id: 48168,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48167,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48210,
                  src: '2033:14:38',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_struct$_Content_$47997_memory_ptr',
                    typeString: 'struct Content'
                  },
                  typeName: {
                    id: 48166,
                    nodeType: 'UserDefinedTypeName',
                    pathNode: {
                      id: 48165,
                      name: 'Content',
                      nameLocations: [ '2033:7:38' ],
                      nodeType: 'IdentifierPath',
                      referencedDeclaration: 47997,
                      src: '2033:7:38'
                    },
                    referencedDeclaration: 47997,
                    src: '2033:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_struct$_Content_$47997_storage_ptr',
                      typeString: 'struct Content'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2032:16:38'
            },
            scope: 48327,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48251,
            nodeType: 'FunctionDefinition',
            src: '2406:348:38',
            nodes: [],
            body: {
              id: 48250,
              nodeType: 'Block',
              src: '2480:274:38',
              nodes: [],
              statements: [
                {
                  assignments: [ 48218 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48218,
                      mutability: 'mutable',
                      name: 'recipient',
                      nameLocation: '2498:9:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48250,
                      src: '2490:17:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48217,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '2490:7:38',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48221,
                  initialValue: {
                    expression: {
                      id: 48219,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '2510:3:38',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48220,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '2514:6:38',
                    memberName: 'sender',
                    nodeType: 'MemberAccess',
                    src: '2510:10:38',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '2490:30:38'
                },
                {
                  assignments: [ 48223 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48223,
                      mutability: 'mutable',
                      name: 'owner',
                      nameLocation: '2538:5:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48250,
                      src: '2530:13:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48222,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '2530:7:38',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48227,
                  initialValue: {
                    arguments: [
                      {
                        id: 48225,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48212,
                        src: '2554:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      ],
                      id: 48224,
                      name: 'ownerOf',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 45327,
                      src: '2546:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_address_$',
                        typeString: 'function (uint256) view returns (address)'
                      }
                    },
                    id: 48226,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2546:16:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '2530:32:38'
                },
                {
                  assignments: [ 48230 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48230,
                      mutability: 'mutable',
                      name: 'newDeriv',
                      nameLocation: '2590:8:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48250,
                      src: '2572:26:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                        typeString: 'contract DerivativeProduct'
                      },
                      typeName: {
                        id: 48229,
                        nodeType: 'UserDefinedTypeName',
                        pathNode: {
                          id: 48228,
                          name: 'DerivativeProduct',
                          nameLocations: [ '2572:17:38' ],
                          nodeType: 'IdentifierPath',
                          referencedDeclaration: 48519,
                          src: '2572:17:38'
                        },
                        referencedDeclaration: 48519,
                        src: '2572:17:38',
                        typeDescriptions: {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                          typeString: 'contract DerivativeProduct'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48244,
                  initialValue: {
                    arguments: [
                      {
                        id: 48234,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48212,
                        src: '2636:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      {
                        arguments: [
                          {
                            id: 48237,
                            name: 'owner',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48223,
                            src: '2665:5:38',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          ],
                          id: 48236,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '2657:8:38',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_payable_$',
                            typeString: 'type(address payable)'
                          },
                          typeName: {
                            id: 48235,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '2657:8:38',
                            stateMutability: 'payable',
                            typeDescriptions: {}
                          }
                        },
                        id: 48238,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '2657:14:38',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        arguments: [
                          {
                            id: 48241,
                            name: 'recipient',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48218,
                            src: '2693:9:38',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          ],
                          id: 48240,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '2685:8:38',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_payable_$',
                            typeString: 'type(address payable)'
                          },
                          typeName: {
                            id: 48239,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '2685:8:38',
                            stateMutability: 'payable',
                            typeDescriptions: {}
                          }
                        },
                        id: 48242,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '2685:18:38',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      ],
                      id: 48233,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: 'NewExpression',
                      src: '2601:21:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_creation_nonpayable$_t_uint256_$_t_address_payable_$_t_address_payable_$returns$_t_contract$_DerivativeProduct_$48519_$',
                        typeString: 'function (uint256,address payable,address payable) returns (contract DerivativeProduct)'
                      },
                      typeName: {
                        id: 48232,
                        nodeType: 'UserDefinedTypeName',
                        pathNode: {
                          id: 48231,
                          name: 'DerivativeProduct',
                          nameLocations: [ '2605:17:38' ],
                          nodeType: 'IdentifierPath',
                          referencedDeclaration: 48519,
                          src: '2605:17:38'
                        },
                        referencedDeclaration: 48519,
                        src: '2605:17:38',
                        typeDescriptions: {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                          typeString: 'contract DerivativeProduct'
                        }
                      }
                    },
                    id: 48243,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2601:112:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                      typeString: 'contract DerivativeProduct'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '2572:141:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48247,
                        name: 'newDeriv',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48230,
                        src: '2738:8:38',
                        typeDescriptions: {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                          typeString: 'contract DerivativeProduct'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                          typeString: 'contract DerivativeProduct'
                        }
                      ],
                      id: 48246,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: 'ElementaryTypeNameExpression',
                      src: '2730:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_type$_t_address_$',
                        typeString: 'type(address)'
                      },
                      typeName: {
                        id: 48245,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '2730:7:38',
                        typeDescriptions: {}
                      }
                    },
                    id: 48248,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'typeConversion',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2730:17:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  functionReturnParameters: 48216,
                  id: 48249,
                  nodeType: 'Return',
                  src: '2723:24:38'
                }
              ]
            },
            functionSelector: 'f453c1d2',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'deriveToken',
            nameLocation: '2415:11:38',
            parameters: {
              id: 48213,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48212,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '2435:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48251,
                  src: '2427:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48211,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '2427:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2426:17:38'
            },
            returnParameters: {
              id: 48216,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48215,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48251,
                  src: '2467:7:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 48214,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '2467:7:38',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2466:9:38'
            },
            scope: 48327,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48296,
            nodeType: 'FunctionDefinition',
            src: '2760:334:38',
            nodes: [],
            body: {
              id: 48295,
              nodeType: 'Block',
              src: '2810:284:38',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    },
                    id: 48261,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      arguments: [
                        {
                          id: 48257,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48253,
                          src: '2831:7:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        ],
                        id: 48256,
                        name: 'ownerOf',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 45327,
                        src: '2823:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_address_$',
                          typeString: 'function (uint256) view returns (address)'
                        }
                      },
                      id: 48258,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '2823:16:38',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '==',
                    rightExpression: {
                      expression: {
                        id: 48259,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '2843:3:38',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48260,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '2847:6:38',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '2843:10:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    src: '2823:30:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48266,
                  nodeType: 'IfStatement',
                  src: '2820:76:38',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '6f776e65722063616e6e6f7420636f7369676e',
                          id: 48263,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '2874:21:38',
                          typeDescriptions: {
                            typeIdentifier: 't_stringliteral_62400903ea6ccd07809a8e00bfcd2fdd1254b6c16c2977323cedd8703374b427',
                            typeString: 'literal_string "owner cannot cosign"'
                          },
                          value: 'owner cannot cosign'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_62400903ea6ccd07809a8e00bfcd2fdd1254b6c16c2977323cedd8703374b427',
                            typeString: 'literal_string "owner cannot cosign"'
                          }
                        ],
                        id: 48262,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '2867:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48264,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '2867:29:38',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48265,
                    nodeType: 'ExpressionStatement',
                    src: '2867:29:38'
                  }
                },
                {
                  condition: {
                    baseExpression: {
                      expression: {
                        baseExpression: {
                          id: 48267,
                          name: 'cosigners',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48019,
                          src: '2909:9:38',
                          typeDescriptions: {
                            typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
                            typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                          }
                        },
                        id: 48269,
                        indexExpression: {
                          id: 48268,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48253,
                          src: '2919:7:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: 'IndexAccess',
                        src: '2909:18:38',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_Cosigners_$48004_storage',
                          typeString: 'struct Cosigners storage ref'
                        }
                      },
                      id: 48270,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '2928:7:38',
                      memberName: 'signers',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48003,
                      src: '2909:26:38',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                        typeString: 'mapping(address => bool)'
                      }
                    },
                    id: 48273,
                    indexExpression: {
                      expression: {
                        id: 48271,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '2936:3:38',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48272,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '2940:6:38',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '2936:10:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '2909:38:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48278,
                  nodeType: 'IfStatement',
                  src: '2906:90:38',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '63616e6e6f74207369676e207365766572616c2074696d6573',
                          id: 48275,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '2968:27:38',
                          typeDescriptions: {
                            typeIdentifier: 't_stringliteral_93b8073a38fee7fc77df0e643a7f9584c8d9bfc8c7f9bb91b87057aec4754062',
                            typeString: 'literal_string "cannot sign several times"'
                          },
                          value: 'cannot sign several times'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_93b8073a38fee7fc77df0e643a7f9584c8d9bfc8c7f9bb91b87057aec4754062',
                            typeString: 'literal_string "cannot sign several times"'
                          }
                        ],
                        id: 48274,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '2961:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48276,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '2961:35:38',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48277,
                    nodeType: 'ExpressionStatement',
                    src: '2961:35:38'
                  }
                },
                {
                  expression: {
                    id: 48283,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'UnaryOperation',
                    operator: '++',
                    prefix: false,
                    src: '3006:26:38',
                    subExpression: {
                      expression: {
                        baseExpression: {
                          id: 48279,
                          name: 'cosigners',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48019,
                          src: '3006:9:38',
                          typeDescriptions: {
                            typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
                            typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                          }
                        },
                        id: 48281,
                        indexExpression: {
                          id: 48280,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48253,
                          src: '3016:7:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: 'IndexAccess',
                        src: '3006:18:38',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_Cosigners_$48004_storage',
                          typeString: 'struct Cosigners storage ref'
                        }
                      },
                      id: 48282,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: '3025:5:38',
                      memberName: 'total',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 47999,
                      src: '3006:24:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48284,
                  nodeType: 'ExpressionStatement',
                  src: '3006:26:38'
                },
                {
                  expression: {
                    id: 48293,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        expression: {
                          baseExpression: {
                            id: 48285,
                            name: 'cosigners',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48019,
                            src: '3042:9:38',
                            typeDescriptions: {
                              typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
                              typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                            }
                          },
                          id: 48287,
                          indexExpression: {
                            id: 48286,
                            name: 'tokenId',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48253,
                            src: '3052:7:38',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: 'IndexAccess',
                          src: '3042:18:38',
                          typeDescriptions: {
                            typeIdentifier: 't_struct$_Cosigners_$48004_storage',
                            typeString: 'struct Cosigners storage ref'
                          }
                        },
                        id: 48288,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '3061:7:38',
                        memberName: 'signers',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: 48003,
                        src: '3042:26:38',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                          typeString: 'mapping(address => bool)'
                        }
                      },
                      id: 48291,
                      indexExpression: {
                        expression: {
                          id: 48289,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '3069:3:38',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 48290,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '3073:6:38',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '3069:10:38',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '3042:38:38',
                      typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '74727565',
                      id: 48292,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'bool',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '3083:4:38',
                      typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                      value: 'true'
                    },
                    src: '3042:45:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48294,
                  nodeType: 'ExpressionStatement',
                  src: '3042:45:38'
                }
              ]
            },
            functionSelector: '2fb1b25f',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'sign',
            nameLocation: '2769:4:38',
            parameters: {
              id: 48254,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48253,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '2782:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48296,
                  src: '2774:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48252,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '2774:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2773:17:38'
            },
            returnParameters: {
              id: 48255,
              nodeType: 'ParameterList',
              parameters: [],
              src: '2810:0:38'
            },
            scope: 48327,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48313,
            nodeType: 'FunctionDefinition',
            src: '3100:153:38',
            nodes: [],
            body: {
              id: 48312,
              nodeType: 'Block',
              src: '3192:61:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    baseExpression: {
                      expression: {
                        baseExpression: {
                          id: 48305,
                          name: 'cosigners',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48019,
                          src: '3209:9:38',
                          typeDescriptions: {
                            typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
                            typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                          }
                        },
                        id: 48307,
                        indexExpression: {
                          id: 48306,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48298,
                          src: '3219:7:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        nodeType: 'IndexAccess',
                        src: '3209:18:38',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_Cosigners_$48004_storage',
                          typeString: 'struct Cosigners storage ref'
                        }
                      },
                      id: 48308,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '3228:7:38',
                      memberName: 'signers',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48003,
                      src: '3209:26:38',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                        typeString: 'mapping(address => bool)'
                      }
                    },
                    id: 48310,
                    indexExpression: {
                      id: 48309,
                      name: 'candidate',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48300,
                      src: '3236:9:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '3209:37:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  functionReturnParameters: 48304,
                  id: 48311,
                  nodeType: 'Return',
                  src: '3202:44:38'
                }
              ]
            },
            functionSelector: '48bcbd2d',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'isSigner',
            nameLocation: '3109:8:38',
            parameters: {
              id: 48301,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48298,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '3126:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48313,
                  src: '3118:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48297,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3118:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48300,
                  mutability: 'mutable',
                  name: 'candidate',
                  nameLocation: '3143:9:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48313,
                  src: '3135:17:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 48299,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '3135:7:38',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3117:36:38'
            },
            returnParameters: {
              id: 48304,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48303,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48313,
                  src: '3182:4:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                  typeName: {
                    id: 48302,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '3182:4:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3181:6:38'
            },
            scope: 48327,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48326,
            nodeType: 'FunctionDefinition',
            src: '3259:130:38',
            nodes: [],
            body: {
              id: 48325,
              nodeType: 'Block',
              src: '3341:48:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    expression: {
                      baseExpression: {
                        id: 48320,
                        name: 'cosigners',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48019,
                        src: '3358:9:38',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$48004_storage_$',
                          typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                        }
                      },
                      id: 48322,
                      indexExpression: {
                        id: 48321,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48315,
                        src: '3368:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: 'IndexAccess',
                      src: '3358:18:38',
                      typeDescriptions: {
                        typeIdentifier: 't_struct$_Cosigners_$48004_storage',
                        typeString: 'struct Cosigners storage ref'
                      }
                    },
                    id: 48323,
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '3377:5:38',
                    memberName: 'total',
                    nodeType: 'MemberAccess',
                    referencedDeclaration: 47999,
                    src: '3358:24:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  functionReturnParameters: 48319,
                  id: 48324,
                  nodeType: 'Return',
                  src: '3351:31:38'
                }
              ]
            },
            functionSelector: '14257ff5',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'countCosigners',
            nameLocation: '3268:14:38',
            parameters: {
              id: 48316,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48315,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '3291:7:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48326,
                  src: '3283:15:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48314,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3283:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3282:17:38'
            },
            returnParameters: {
              id: 48319,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48318,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48326,
                  src: '3328:7:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48317,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3328:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3327:9:38'
            },
            scope: 48327,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          }
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 48005,
              name: 'ERC721',
              nameLocations: [ '410:6:38' ],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 46194,
              src: '410:6:38'
            },
            id: 48006,
            nodeType: 'InheritanceSpecifier',
            src: '410:6:38'
          },
          {
            baseName: {
              id: 48007,
              name: 'ERC721URIStorage',
              nameLocations: [ '418:16:38' ],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 46455,
              src: '418:16:38'
            },
            id: 48008,
            nodeType: 'InheritanceSpecifier',
            src: '418:16:38'
          }
        ],
        canonicalName: 'CryptoStamp',
        contractDependencies: [ 48519 ],
        contractKind: 'contract',
        fullyImplemented: true,
        linearizedBaseContracts: [
          48327, 46455, 46194,
          45060, 46483, 44966,
          46311, 46792, 46804,
          46513
        ],
        name: 'CryptoStamp',
        nameLocation: '395:11:38',
        scope: 48520,
        usedErrors: [
          45018, 45023,
          45032, 45037,
          45042, 45049,
          45054, 45059
        ],
        usedEvents: [ 44958, 44965, 46210, 46219, 46228 ]
      },
      {
        id: 48331,
        nodeType: 'EnumDefinition',
        src: '3394:65:38',
        nodes: [],
        canonicalName: 'ContractStatus',
        members: [
          {
            id: 48328,
            name: 'InProgress',
            nameLocation: '3420:10:38',
            nodeType: 'EnumValue',
            src: '3420:10:38'
          },
          {
            id: 48329,
            name: 'Accepted',
            nameLocation: '3436:8:38',
            nodeType: 'EnumValue',
            src: '3436:8:38'
          },
          {
            id: 48330,
            name: 'Refused',
            nameLocation: '3450:7:38',
            nodeType: 'EnumValue',
            src: '3450:7:38'
          }
        ],
        name: 'ContractStatus',
        nameLocation: '3399:14:38'
      },
      {
        id: 48519,
        nodeType: 'ContractDefinition',
        src: '3462:1542:38',
        nodes: [
          {
            id: 48333,
            nodeType: 'VariableDeclaration',
            src: '3496:22:38',
            nodes: [],
            constant: false,
            functionSelector: '17d70f7c',
            mutability: 'mutable',
            name: 'tokenId',
            nameLocation: '3511:7:38',
            scope: 48519,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 48332,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '3496:7:38',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'public'
          },
          {
            id: 48335,
            nodeType: 'VariableDeclaration',
            src: '3524:28:38',
            nodes: [],
            constant: false,
            functionSelector: '8da5cb5b',
            mutability: 'mutable',
            name: 'owner',
            nameLocation: '3547:5:38',
            scope: 48519,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address_payable',
              typeString: 'address payable'
            },
            typeName: {
              id: 48334,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '3524:15:38',
              stateMutability: 'payable',
              typeDescriptions: {
                typeIdentifier: 't_address_payable',
                typeString: 'address payable'
              }
            },
            visibility: 'public'
          },
          {
            id: 48337,
            nodeType: 'VariableDeclaration',
            src: '3558:32:38',
            nodes: [],
            constant: false,
            functionSelector: '66d003ac',
            mutability: 'mutable',
            name: 'recipient',
            nameLocation: '3581:9:38',
            scope: 48519,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address_payable',
              typeString: 'address payable'
            },
            typeName: {
              id: 48336,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '3558:15:38',
              stateMutability: 'payable',
              typeDescriptions: {
                typeIdentifier: 't_address_payable',
                typeString: 'address payable'
              }
            },
            visibility: 'public'
          },
          {
            id: 48339,
            nodeType: 'VariableDeclaration',
            src: '3596:27:38',
            nodes: [],
            constant: false,
            functionSelector: 'ad7a672f',
            mutability: 'mutable',
            name: 'totalBalance',
            nameLocation: '3611:12:38',
            scope: 48519,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 48338,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '3596:7:38',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'public'
          },
          {
            id: 48343,
            nodeType: 'VariableDeclaration',
            src: '3629:32:38',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: 'bids',
            nameLocation: '3657:4:38',
            scope: 48519,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
              typeString: 'mapping(address => uint256)'
            },
            typeName: {
              id: 48342,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 48340,
                name: 'address',
                nodeType: 'ElementaryTypeName',
                src: '3637:7:38',
                typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
              },
              nodeType: 'Mapping',
              src: '3629:27:38',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                typeString: 'mapping(address => uint256)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 48341,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '3648:7:38',
                typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
              }
            },
            visibility: 'internal'
          },
          {
            id: 48346,
            nodeType: 'VariableDeclaration',
            src: '3668:28:38',
            nodes: [],
            constant: false,
            functionSelector: '200d2ed2',
            mutability: 'mutable',
            name: 'status',
            nameLocation: '3690:6:38',
            scope: 48519,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_enum$_ContractStatus_$48331',
              typeString: 'enum ContractStatus'
            },
            typeName: {
              id: 48345,
              nodeType: 'UserDefinedTypeName',
              pathNode: {
                id: 48344,
                name: 'ContractStatus',
                nameLocations: [ '3668:14:38' ],
                nodeType: 'IdentifierPath',
                referencedDeclaration: 48331,
                src: '3668:14:38'
              },
              referencedDeclaration: 48331,
              src: '3668:14:38',
              typeDescriptions: {
                typeIdentifier: 't_enum$_ContractStatus_$48331',
                typeString: 'enum ContractStatus'
              }
            },
            visibility: 'public'
          },
          {
            id: 48372,
            nodeType: 'FunctionDefinition',
            src: '3703:229:38',
            nodes: [],
            body: {
              id: 48371,
              nodeType: 'Block',
              src: '3815:117:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 48357,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48355,
                      name: 'tokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48333,
                      src: '3825:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48356,
                      name: 'tokenId_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48348,
                      src: '3835:8:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '3825:18:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48358,
                  nodeType: 'ExpressionStatement',
                  src: '3825:18:38'
                },
                {
                  expression: {
                    id: 48361,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48359,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48335,
                      src: '3853:5:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48360,
                      name: 'owner_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48350,
                      src: '3861:6:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '3853:14:38',
                    typeDescriptions: {
                      typeIdentifier: 't_address_payable',
                      typeString: 'address payable'
                    }
                  },
                  id: 48362,
                  nodeType: 'ExpressionStatement',
                  src: '3853:14:38'
                },
                {
                  expression: {
                    id: 48365,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48363,
                      name: 'recipient',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48337,
                      src: '3877:9:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48364,
                      name: 'recipient_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48352,
                      src: '3889:10:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '3877:22:38',
                    typeDescriptions: {
                      typeIdentifier: 't_address_payable',
                      typeString: 'address payable'
                    }
                  },
                  id: 48366,
                  nodeType: 'ExpressionStatement',
                  src: '3877:22:38'
                },
                {
                  expression: {
                    id: 48369,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48367,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48339,
                      src: '3909:12:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '30',
                      id: 48368,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '3924:1:38',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '3909:16:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48370,
                  nodeType: 'ExpressionStatement',
                  src: '3909:16:38'
                }
              ]
            },
            implemented: true,
            kind: 'constructor',
            modifiers: [],
            name: '',
            nameLocation: '-1:-1:-1',
            parameters: {
              id: 48353,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48348,
                  mutability: 'mutable',
                  name: 'tokenId_',
                  nameLocation: '3732:8:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48372,
                  src: '3724:16:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48347,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3724:7:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48350,
                  mutability: 'mutable',
                  name: 'owner_',
                  nameLocation: '3766:6:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48372,
                  src: '3750:22:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address_payable',
                    typeString: 'address payable'
                  },
                  typeName: {
                    id: 48349,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '3750:15:38',
                    stateMutability: 'payable',
                    typeDescriptions: {
                      typeIdentifier: 't_address_payable',
                      typeString: 'address payable'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48352,
                  mutability: 'mutable',
                  name: 'recipient_',
                  nameLocation: '3798:10:38',
                  nodeType: 'VariableDeclaration',
                  scope: 48372,
                  src: '3782:26:38',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address_payable',
                    typeString: 'address payable'
                  },
                  typeName: {
                    id: 48351,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '3782:15:38',
                    stateMutability: 'payable',
                    typeDescriptions: {
                      typeIdentifier: 't_address_payable',
                      typeString: 'address payable'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3714:100:38'
            },
            returnParameters: {
              id: 48354,
              nodeType: 'ParameterList',
              parameters: [],
              src: '3815:0:38'
            },
            scope: 48519,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48385,
            nodeType: 'ModifierDefinition',
            src: '3938:117:38',
            nodes: [],
            body: {
              id: 48384,
              nodeType: 'Block',
              src: '3962:93:38',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_enum$_ContractStatus_$48331',
                      typeString: 'enum ContractStatus'
                    },
                    id: 48377,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 48374,
                      name: 'status',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48346,
                      src: '3975:6:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48331',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '!=',
                    rightExpression: {
                      expression: {
                        id: 48375,
                        name: 'ContractStatus',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48331,
                        src: '3985:14:38',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_enum$_ContractStatus_$48331_$',
                          typeString: 'type(enum ContractStatus)'
                        }
                      },
                      id: 48376,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '4000:10:38',
                      memberName: 'InProgress',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48328,
                      src: '3985:25:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48331',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    src: '3975:35:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48382,
                  nodeType: 'IfStatement',
                  src: '3972:65:38',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '62696464696e67206973206f766572',
                          id: 48379,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '4019:17:38',
                          typeDescriptions: {
                            typeIdentifier: 't_stringliteral_752e957de5dab4b7af5053dd0fd931cd8735fc122e86837c070d735c57cb7ee1',
                            typeString: 'literal_string "bidding is over"'
                          },
                          value: 'bidding is over'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_752e957de5dab4b7af5053dd0fd931cd8735fc122e86837c070d735c57cb7ee1',
                            typeString: 'literal_string "bidding is over"'
                          }
                        ],
                        id: 48378,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '4012:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48380,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '4012:25:38',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48381,
                    nodeType: 'ExpressionStatement',
                    src: '4012:25:38'
                  }
                },
                {
                  id: 48383,
                  nodeType: 'PlaceholderStatement',
                  src: '4047:1:38'
                }
              ]
            },
            name: 'whenInProgress',
            nameLocation: '3947:14:38',
            parameters: {
              id: 48373,
              nodeType: 'ParameterList',
              parameters: [],
              src: '3962:0:38'
            },
            virtual: false,
            visibility: 'internal'
          },
          {
            id: 48398,
            nodeType: 'ModifierDefinition',
            src: '4061:94:38',
            nodes: [],
            body: {
              id: 48397,
              nodeType: 'Block',
              src: '4080:75:38',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    },
                    id: 48390,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        id: 48387,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '4093:3:38',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48388,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '4097:6:38',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '4093:10:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '!=',
                    rightExpression: {
                      id: 48389,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48335,
                      src: '4107:5:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '4093:19:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48395,
                  nodeType: 'IfStatement',
                  src: '4090:47:38',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '6e6f7420746865206f776e6572',
                          id: 48392,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '4121:15:38',
                          typeDescriptions: {
                            typeIdentifier: 't_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219',
                            typeString: 'literal_string "not the owner"'
                          },
                          value: 'not the owner'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_09ee694bb6d0f66081e15dd53293c7f941705ae2fd8f9732918eb9f8e2ff3219',
                            typeString: 'literal_string "not the owner"'
                          }
                        ],
                        id: 48391,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '4114:6:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48393,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '4114:23:38',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48394,
                    nodeType: 'ExpressionStatement',
                    src: '4114:23:38'
                  }
                },
                {
                  id: 48396,
                  nodeType: 'PlaceholderStatement',
                  src: '4147:1:38'
                }
              ]
            },
            name: 'onlyOwner',
            nameLocation: '4070:9:38',
            parameters: {
              id: 48386,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4080:0:38'
            },
            virtual: false,
            visibility: 'internal'
          },
          {
            id: 48420,
            nodeType: 'FunctionDefinition',
            src: '4161:159:38',
            nodes: [],
            body: {
              id: 48419,
              nodeType: 'Block',
              src: '4206:114:38',
              nodes: [],
              statements: [
                {
                  assignments: [ 48404 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48404,
                      mutability: 'mutable',
                      name: 'ammount',
                      nameLocation: '4224:7:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48419,
                      src: '4216:15:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48403,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '4216:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48407,
                  initialValue: {
                    expression: {
                      id: 48405,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '4234:3:38',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48406,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '4238:5:38',
                    memberName: 'value',
                    nodeType: 'MemberAccess',
                    src: '4234:9:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '4216:27:38'
                },
                {
                  expression: {
                    id: 48413,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 48408,
                        name: 'bids',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48343,
                        src: '4253:4:38',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 48411,
                      indexExpression: {
                        expression: {
                          id: 48409,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '4258:3:38',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 48410,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '4262:6:38',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '4258:10:38',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '4253:16:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '+=',
                    rightHandSide: {
                      id: 48412,
                      name: 'ammount',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48404,
                      src: '4273:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '4253:27:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48414,
                  nodeType: 'ExpressionStatement',
                  src: '4253:27:38'
                },
                {
                  expression: {
                    id: 48417,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48415,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48339,
                      src: '4290:12:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '+=',
                    rightHandSide: {
                      id: 48416,
                      name: 'ammount',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48404,
                      src: '4306:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '4290:23:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48418,
                  nodeType: 'ExpressionStatement',
                  src: '4290:23:38'
                }
              ]
            },
            functionSelector: '1998aeef',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 48401,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48400,
                  name: 'whenInProgress',
                  nameLocations: [ '4191:14:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48385,
                  src: '4191:14:38'
                },
                nodeType: 'ModifierInvocation',
                src: '4191:14:38'
              }
            ],
            name: 'bid',
            nameLocation: '4170:3:38',
            parameters: {
              id: 48399,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4173:2:38'
            },
            returnParameters: {
              id: 48402,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4206:0:38'
            },
            scope: 48519,
            stateMutability: 'payable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48473,
            nodeType: 'FunctionDefinition',
            src: '4326:343:38',
            nodes: [],
            body: {
              id: 48472,
              nodeType: 'Block',
              src: '4353:316:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_enum$_ContractStatus_$48331',
                          typeString: 'enum ContractStatus'
                        },
                        id: 48427,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 48424,
                          name: 'status',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48346,
                          src: '4371:6:38',
                          typeDescriptions: {
                            typeIdentifier: 't_enum$_ContractStatus_$48331',
                            typeString: 'enum ContractStatus'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '!=',
                        rightExpression: {
                          expression: {
                            id: 48425,
                            name: 'ContractStatus',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48331,
                            src: '4381:14:38',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_enum$_ContractStatus_$48331_$',
                              typeString: 'type(enum ContractStatus)'
                            }
                          },
                          id: 48426,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberLocation: '4396:8:38',
                          memberName: 'Accepted',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: 48329,
                          src: '4381:23:38',
                          typeDescriptions: {
                            typeIdentifier: 't_enum$_ContractStatus_$48331',
                            typeString: 'enum ContractStatus'
                          }
                        },
                        src: '4371:33:38',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 48423,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '4363:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 48428,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4363:42:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48429,
                  nodeType: 'ExpressionStatement',
                  src: '4363:42:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        id: 48436,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          baseExpression: {
                            id: 48431,
                            name: 'bids',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48343,
                            src: '4423:4:38',
                            typeDescriptions: {
                              typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 48434,
                          indexExpression: {
                            expression: {
                              id: 48432,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: -15,
                              src: '4428:3:38',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg'
                              }
                            },
                            id: 48433,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: '4432:6:38',
                            memberName: 'sender',
                            nodeType: 'MemberAccess',
                            src: '4428:10:38',
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address'
                            }
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: 'IndexAccess',
                          src: '4423:16:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>',
                        rightExpression: {
                          hexValue: '30',
                          id: 48435,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'number',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '4442:1:38',
                          typeDescriptions: {
                            typeIdentifier: 't_rational_0_by_1',
                            typeString: 'int_const 0'
                          },
                          value: '0'
                        },
                        src: '4423:20:38',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      ],
                      id: 48430,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '4415:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 48437,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4415:29:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48438,
                  nodeType: 'ExpressionStatement',
                  src: '4415:29:38'
                },
                {
                  assignments: [ 48440 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48440,
                      mutability: 'mutable',
                      name: 'ammount',
                      nameLocation: '4462:7:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48472,
                      src: '4454:15:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48439,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '4454:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48445,
                  initialValue: {
                    baseExpression: {
                      id: 48441,
                      name: 'bids',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48343,
                      src: '4472:4:38',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 48444,
                    indexExpression: {
                      expression: {
                        id: 48442,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '4477:3:38',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48443,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '4481:6:38',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '4477:10:38',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'IndexAccess',
                    src: '4472:16:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '4454:34:38'
                },
                {
                  expression: {
                    id: 48448,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48446,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48339,
                      src: '4498:12:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '-=',
                    rightHandSide: {
                      id: 48447,
                      name: 'ammount',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48440,
                      src: '4514:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '4498:23:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48449,
                  nodeType: 'ExpressionStatement',
                  src: '4498:23:38'
                },
                {
                  expression: {
                    id: 48455,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 48450,
                        name: 'bids',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48343,
                        src: '4531:4:38',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 48453,
                      indexExpression: {
                        expression: {
                          id: 48451,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '4536:3:38',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 48452,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '4540:6:38',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '4536:10:38',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: 'IndexAccess',
                      src: '4531:16:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '30',
                      id: 48454,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '4550:1:38',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '4531:20:38',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48456,
                  nodeType: 'ExpressionStatement',
                  src: '4531:20:38'
                },
                {
                  assignments: [ 48458, null ],
                  declarations: [
                    {
                      constant: false,
                      id: 48458,
                      mutability: 'mutable',
                      name: 'success',
                      nameLocation: '4567:7:38',
                      nodeType: 'VariableDeclaration',
                      scope: 48472,
                      src: '4562:12:38',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                      typeName: {
                        id: 48457,
                        name: 'bool',
                        nodeType: 'ElementaryTypeName',
                        src: '4562:4:38',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      },
                      visibility: 'internal'
                    },
                    null
                  ],
                  id: 48466,
                  initialValue: {
                    arguments: [
                      {
                        hexValue: '',
                        id: 48464,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '4611:2:38',
                        typeDescriptions: {
                          typeIdentifier: 't_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
                          typeString: 'literal_string ""'
                        },
                        value: ''
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
                          typeString: 'literal_string ""'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
                            typeString: 'literal_string ""'
                          }
                        ],
                        expression: {
                          expression: {
                            id: 48459,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: -15,
                            src: '4579:3:38',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg'
                            }
                          },
                          id: 48460,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: '4583:6:38',
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '4579:10:38',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        id: 48461,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '4590:4:38',
                        memberName: 'call',
                        nodeType: 'MemberAccess',
                        src: '4579:15:38',
                        typeDescriptions: {
                          typeIdentifier: 't_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$',
                          typeString: 'function (bytes memory) payable returns (bool,bytes memory)'
                        }
                      },
                      id: 48463,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      names: [ 'value' ],
                      nodeType: 'FunctionCallOptions',
                      options: [
                        {
                          id: 48462,
                          name: 'ammount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48440,
                          src: '4602:7:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        }
                      ],
                      src: '4579:31:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value',
                        typeString: 'function (bytes memory) payable returns (bool,bytes memory)'
                      }
                    },
                    id: 48465,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4579:35:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$_t_bool_$_t_bytes_memory_ptr_$',
                      typeString: 'tuple(bool,bytes memory)'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '4561:53:38'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48468,
                        name: 'success',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48458,
                        src: '4633:7:38',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      },
                      {
                        hexValue: '7472616e7366657274206661696c6c6564',
                        id: 48469,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '4642:19:38',
                        typeDescriptions: {
                          typeIdentifier: 't_stringliteral_6bedb9c3fc3fdcced62973d6893c883fff5a77f9c6e832051d9fe4f71c7a65e9',
                          typeString: 'literal_string "transfert failled"'
                        },
                        value: 'transfert failled'
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        },
                        {
                          typeIdentifier: 't_stringliteral_6bedb9c3fc3fdcced62973d6893c883fff5a77f9c6e832051d9fe4f71c7a65e9',
                          typeString: 'literal_string "transfert failled"'
                        }
                      ],
                      id: 48467,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '4624:7:38',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (bool,string memory) pure'
                      }
                    },
                    id: 48470,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4624:38:38',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48471,
                  nodeType: 'ExpressionStatement',
                  src: '4624:38:38'
                }
              ]
            },
            functionSelector: '3ccfd60b',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'withdraw',
            nameLocation: '4335:8:38',
            parameters: {
              id: 48421,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4343:2:38'
            },
            returnParameters: {
              id: 48422,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4353:0:38'
            },
            scope: 48519,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48505,
            nodeType: 'FunctionDefinition',
            src: '4675:222:38',
            nodes: [],
            body: {
              id: 48504,
              nodeType: 'Block',
              src: '4725:172:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 48483,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48480,
                      name: 'status',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48346,
                      src: '4735:6:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48331',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      expression: {
                        id: 48481,
                        name: 'ContractStatus',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48331,
                        src: '4744:14:38',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_enum$_ContractStatus_$48331_$',
                          typeString: 'type(enum ContractStatus)'
                        }
                      },
                      id: 48482,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '4759:8:38',
                      memberName: 'Accepted',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48329,
                      src: '4744:23:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48331',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    src: '4735:32:38',
                    typeDescriptions: {
                      typeIdentifier: 't_enum$_ContractStatus_$48331',
                      typeString: 'enum ContractStatus'
                    }
                  },
                  id: 48484,
                  nodeType: 'ExpressionStatement',
                  src: '4735:32:38'
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 48487,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 48485,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48339,
                      src: '4781:12:38',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '>',
                    rightExpression: {
                      hexValue: '30',
                      id: 48486,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '4796:1:38',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '4781:16:38',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48503,
                  nodeType: 'IfStatement',
                  src: '4777:114:38',
                  trueBody: {
                    id: 48502,
                    nodeType: 'Block',
                    src: '4799:92:38',
                    statements: [
                      {
                        expression: {
                          id: 48490,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 48488,
                            name: 'totalBalance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48339,
                            src: '4813:12:38',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          nodeType: 'Assignment',
                          operator: '=',
                          rightHandSide: {
                            hexValue: '30',
                            id: 48489,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'number',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '4828:1:38',
                            typeDescriptions: {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0'
                            },
                            value: '0'
                          },
                          src: '4813:16:38',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        id: 48491,
                        nodeType: 'ExpressionStatement',
                        src: '4813:16:38'
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    id: 48497,
                                    name: 'this',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: -28,
                                    src: '4866:4:38',
                                    typeDescriptions: {
                                      typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                                      typeString: 'contract DerivativeProduct'
                                    }
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: 't_contract$_DerivativeProduct_$48519',
                                      typeString: 'contract DerivativeProduct'
                                    }
                                  ],
                                  id: 48496,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: 'ElementaryTypeNameExpression',
                                  src: '4858:7:38',
                                  typeDescriptions: {
                                    typeIdentifier: 't_type$_t_address_$',
                                    typeString: 'type(address)'
                                  },
                                  typeName: {
                                    id: 48495,
                                    name: 'address',
                                    nodeType: 'ElementaryTypeName',
                                    src: '4858:7:38',
                                    typeDescriptions: {}
                                  }
                                },
                                id: 48498,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: 'typeConversion',
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: 'FunctionCall',
                                src: '4858:13:38',
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: 't_address',
                                  typeString: 'address'
                                }
                              },
                              id: 48499,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberLocation: '4872:7:38',
                              memberName: 'balance',
                              nodeType: 'MemberAccess',
                              src: '4858:21:38',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256'
                              }
                            ],
                            expression: {
                              id: 48492,
                              name: 'owner',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 48335,
                              src: '4843:5:38',
                              typeDescriptions: {
                                typeIdentifier: 't_address_payable',
                                typeString: 'address payable'
                              }
                            },
                            id: 48494,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: '4849:8:38',
                            memberName: 'transfer',
                            nodeType: 'MemberAccess',
                            src: '4843:14:38',
                            typeDescriptions: {
                              typeIdentifier: 't_function_transfer_nonpayable$_t_uint256_$returns$__$',
                              typeString: 'function (uint256)'
                            }
                          },
                          id: 48500,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: 'functionCall',
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '4843:37:38',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_tuple$__$',
                            typeString: 'tuple()'
                          }
                        },
                        id: 48501,
                        nodeType: 'ExpressionStatement',
                        src: '4843:37:38'
                      }
                    ]
                  }
                }
              ]
            },
            functionSelector: '2852b71c',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 48476,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48475,
                  name: 'onlyOwner',
                  nameLocations: [ '4700:9:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48398,
                  src: '4700:9:38'
                },
                nodeType: 'ModifierInvocation',
                src: '4700:9:38'
              },
              {
                id: 48478,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48477,
                  name: 'whenInProgress',
                  nameLocations: [ '4710:14:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48385,
                  src: '4710:14:38'
                },
                nodeType: 'ModifierInvocation',
                src: '4710:14:38'
              }
            ],
            name: 'accept',
            nameLocation: '4684:6:38',
            parameters: {
              id: 48474,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4690:2:38'
            },
            returnParameters: {
              id: 48479,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4725:0:38'
            },
            scope: 48519,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48518,
            nodeType: 'FunctionDefinition',
            src: '4903:98:38',
            nodes: [],
            body: {
              id: 48517,
              nodeType: 'Block',
              src: '4953:48:38',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 48515,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48512,
                      name: 'status',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48346,
                      src: '4963:6:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48331',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      expression: {
                        id: 48513,
                        name: 'ContractStatus',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48331,
                        src: '4972:14:38',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_enum$_ContractStatus_$48331_$',
                          typeString: 'type(enum ContractStatus)'
                        }
                      },
                      id: 48514,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '4987:7:38',
                      memberName: 'Refused',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48330,
                      src: '4972:22:38',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48331',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    src: '4963:31:38',
                    typeDescriptions: {
                      typeIdentifier: 't_enum$_ContractStatus_$48331',
                      typeString: 'enum ContractStatus'
                    }
                  },
                  id: 48516,
                  nodeType: 'ExpressionStatement',
                  src: '4963:31:38'
                }
              ]
            },
            functionSelector: '62c69b80',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 48508,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48507,
                  name: 'onlyOwner',
                  nameLocations: [ '4928:9:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48398,
                  src: '4928:9:38'
                },
                nodeType: 'ModifierInvocation',
                src: '4928:9:38'
              },
              {
                id: 48510,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48509,
                  name: 'whenInProgress',
                  nameLocations: [ '4938:14:38' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48385,
                  src: '4938:14:38'
                },
                nodeType: 'ModifierInvocation',
                src: '4938:14:38'
              }
            ],
            name: 'refuse',
            nameLocation: '4912:6:38',
            parameters: {
              id: 48506,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4918:2:38'
            },
            returnParameters: {
              id: 48511,
              nodeType: 'ParameterList',
              parameters: [],
              src: '4953:0:38'
            },
            scope: 48519,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          }
        ],
        abstract: false,
        baseContracts: [],
        canonicalName: 'DerivativeProduct',
        contractDependencies: [],
        contractKind: 'contract',
        fullyImplemented: true,
        linearizedBaseContracts: [ 48519 ],
        name: 'DerivativeProduct',
        nameLocation: '3471:17:38',
        scope: 48520,
        usedErrors: [],
        usedEvents: []
      }
    ],
    license: 'MIT'
  },
  id: 38
}

export default derivativeProductData;