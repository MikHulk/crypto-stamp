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
        },
        { name: 'terms_', type: 'string', internalType: 'string' }
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
      name: 'terms',
      inputs: [],
      outputs: [ { name: '', type: 'string', internalType: 'string' } ],
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
    object: '0x60e06040523480156200001157600080fd5b5060405162000b3338038062000b3383398101604081905262000034916200014e565b6001600160a01b038316620000905760405162461bcd60e51b815260206004820152601560248201527f696e76616c6964206f776e65722061646472657373000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b038216620000e85760405162461bcd60e51b815260206004820152601960248201527f696e76616c696420726563697069656e74206164647265737300000000000000604482015260640162000087565b6000620000f68282620002e3565b50506080929092526001600160a01b0390811660a0521660c0526000600155620003af565b80516001600160a01b03811681146200013357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156200016557600080fd5b845193506020620001788187016200011b565b935062000188604087016200011b565b60608701519093506001600160401b0380821115620001a657600080fd5b818801915088601f830112620001bb57600080fd5b815181811115620001d057620001d062000138565b604051601f8201601f19908116603f01168101908382118183101715620001fb57620001fb62000138565b816040528281528b868487010111156200021457600080fd5b600093505b8284101562000238578484018601518185018701529285019262000219565b600086848301015280965050505050505092959194509250565b600181811c908216806200026757607f821691505b6020821081036200028857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002de576000816000526020600020601f850160051c81016020861015620002b95750805b601f850160051c820191505b81811015620002da57828155600101620002c5565b5050505b505050565b81516001600160401b03811115620002ff57620002ff62000138565b620003178162000310845462000252565b846200028e565b602080601f8311600181146200034f5760008415620003365750858301515b600019600386901b1c1916600185901b178555620002da565b600085815260208120601f198616915b8281101562000380578886015182559484019460019091019084016200035f565b50858210156200039f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c051610740620003f3600039600061015f0152600081816101ab015281816102910152818161034e01526104a80152600060a801526107406000f3fe6080604052600436106100915760003560e01c806362c69b801161005957806362c69b801461013857806366d003ac1461014d5780638da5cb5b14610199578063ad7a672f146101cd578063d5025625146101e357600080fd5b806317d70f7c146100965780631998aeef146100dd578063200d2ed2146100e75780632852b71c1461010e5780633ccfd60b14610123575b600080fd5b3480156100a257600080fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100e5610205565b005b3480156100f357600080fd5b506003546101019060ff1681565b6040516100d491906105ee565b34801561011a57600080fd5b506100e5610286565b34801561012f57600080fd5b506100e561039a565b34801561014457600080fd5b506100e561049d565b34801561015957600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d4565b3480156101a557600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d957600080fd5b506100ca60015481565b3480156101ef57600080fd5b506101f861054a565b6040516100d49190610616565b600060035460ff16600281111561021e5761021e6105d8565b146102445760405162461bcd60e51b815260040161023b90610665565b60405180910390fd5b336000908152600260205260408120805434928392916102659084906106a4565b92505081905550806001600082825461027e91906106a4565b909155505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102ee5760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b604482015260640161023b565b600060035460ff166002811115610307576103076105d8565b146103245760405162461bcd60e51b815260040161023b90610665565b6003805460ff19166001908117909155541561039857600060018190556040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016914780156108fc02929091818181858888f19350505050158015610396573d6000803e3d6000fd5b505b565b600160035460ff1660028111156103b3576103b36105d8565b036103bd57600080fd5b336000908152600260205260409020546103d657600080fd5b3360009081526002602052604081205460018054919283926103f99084906106bd565b9091555050336000818152600260205260408082208290555190919083908381818185875af1925050503d806000811461044f576040519150601f19603f3d011682016040523d82523d6000602084013e610454565b606091505b50509050806104995760405162461bcd60e51b81526020600482015260116024820152701d1c985b9cd9995c9d0819985a5b1b1959607a1b604482015260640161023b565b5050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105055760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b604482015260640161023b565b600060035460ff16600281111561051e5761051e6105d8565b1461053b5760405162461bcd60e51b815260040161023b90610665565b6003805460ff19166002179055565b60008054610557906106d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610583906106d0565b80156105d05780601f106105a5576101008083540402835291602001916105d0565b820191906000526020600020905b8154815290600101906020018083116105b357829003601f168201915b505050505081565b634e487b7160e01b600052602160045260246000fd5b602081016003831061061057634e487b7160e01b600052602160045260246000fd5b91905290565b60006020808352835180602085015260005b8181101561064457858101830151858201604001528201610628565b506000604082860101526040601f19601f8301168501019250505092915050565b6020808252600f908201526e3134b23234b7339034b99037bb32b960891b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808201808211156106b7576106b761068e565b92915050565b818103818111156106b7576106b761068e565b600181811c908216806106e457607f821691505b60208210810361070457634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220f7fef0ca8eb0b061913c24e5affb3d7b3332f828590bf9900afcc80d218dfd8d64736f6c63430008170033',
    sourceMap: '6638:2460:36:-:0;;;7182:419;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;7342:20:36;;7334:54;;;;-1:-1:-1;;;7334:54:36;;1849:2:38;7334:54:36;;;1831:21:38;1888:2;1868:18;;;1861:30;1927:23;1907:18;;;1900:51;1968:18;;7334:54:36;;;;;;;;;-1:-1:-1;;;;;7406:24:36;;7398:62;;;;-1:-1:-1;;;7398:62:36;;2199:2:38;7398:62:36;;;2181:21:38;2238:2;2218:18;;;2211:30;2277:27;2257:18;;;2250:55;2322:18;;7398:62:36;1997:349:38;7398:62:36;7470:5;:14;7478:6;7470:5;:14;:::i;:::-;-1:-1:-1;;7494:18:36;;;;;-1:-1:-1;;;;;7522:14:36;;;;;7546:22;;;7593:1;7578:12;:16;6638:2460;;14:185:38;101:13;;-1:-1:-1;;;;;143:31:38;;133:42;;123:70;;189:1;186;179:12;123:70;14:185;;;:::o;204:127::-;265:10;260:3;256:20;253:1;246:31;296:4;293:1;286:15;320:4;317:1;310:15;336:1306;459:6;467;475;483;536:3;524:9;515:7;511:23;507:33;504:53;;;553:1;550;543:12;504:53;582:9;576:16;566:26;;611:2;632:57;685:2;674:9;670:18;632:57;:::i;:::-;622:67;;708:57;761:2;750:9;746:18;708:57;:::i;:::-;809:2;794:18;;788:25;698:67;;-1:-1:-1;;;;;;862:14:38;;;859:34;;;889:1;886;879:12;859:34;927:6;916:9;912:22;902:32;;972:7;965:4;961:2;957:13;953:27;943:55;;994:1;991;984:12;943:55;1023:2;1017:9;1045:2;1041;1038:10;1035:36;;;1051:18;;:::i;:::-;1126:2;1120:9;1094:2;1180:13;;-1:-1:-1;;1176:22:38;;;1200:2;1172:31;1168:40;1156:53;;;1224:18;;;1244:22;;;1221:46;1218:72;;;1270:18;;:::i;:::-;1310:10;1306:2;1299:22;1345:2;1337:6;1330:18;1385:7;1380:2;1375;1371;1367:11;1363:20;1360:33;1357:53;;;1406:1;1403;1396:12;1357:53;1428:1;1419:10;;1438:129;1452:2;1449:1;1446:9;1438:129;;;1540:10;;;1536:19;;1530:26;1509:14;;;1505:23;;1498:59;1463:10;;;;1438:129;;;1609:1;1604:2;1599;1591:6;1587:15;1583:24;1576:35;1630:6;1620:16;;;;;;;;336:1306;;;;;;;:::o;2351:380::-;2430:1;2426:12;;;;2473;;;2494:61;;2548:4;2540:6;2536:17;2526:27;;2494:61;2601:2;2593:6;2590:14;2570:18;2567:38;2564:161;;2647:10;2642:3;2638:20;2635:1;2628:31;2682:4;2679:1;2672:15;2710:4;2707:1;2700:15;2564:161;;2351:380;;;:::o;2862:543::-;2964:2;2959:3;2956:11;2953:446;;;3000:1;3024:5;3021:1;3014:16;3068:4;3065:1;3055:18;3138:2;3126:10;3122:19;3119:1;3115:27;3109:4;3105:38;3174:4;3162:10;3159:20;3156:47;;;-1:-1:-1;3197:4:38;3156:47;3252:2;3247:3;3243:12;3240:1;3236:20;3230:4;3226:31;3216:41;;3307:82;3325:2;3318:5;3315:13;3307:82;;;3370:17;;;3351:1;3340:13;3307:82;;;3311:3;;;2953:446;2862:543;;;:::o;3581:1345::-;3701:10;;-1:-1:-1;;;;;3723:30:38;;3720:56;;;3756:18;;:::i;:::-;3785:97;3875:6;3835:38;3867:4;3861:11;3835:38;:::i;:::-;3829:4;3785:97;:::i;:::-;3937:4;;3994:2;3983:14;;4011:1;4006:663;;;;4713:1;4730:6;4727:89;;;-1:-1:-1;4782:19:38;;;4776:26;4727:89;-1:-1:-1;;3538:1:38;3534:11;;;3530:24;3526:29;3516:40;3562:1;3558:11;;;3513:57;4829:81;;3976:944;;4006:663;2809:1;2802:14;;;2846:4;2833:18;;-1:-1:-1;;4042:20:38;;;4160:236;4174:7;4171:1;4168:14;4160:236;;;4263:19;;;4257:26;4242:42;;4355:27;;;;4323:1;4311:14;;;;4190:19;;4160:236;;;4164:3;4424:6;4415:7;4412:19;4409:201;;;4485:19;;;4479:26;-1:-1:-1;;4568:1:38;4564:14;;;4580:3;4560:24;4556:37;4552:42;4537:58;4522:74;;4409:201;-1:-1:-1;;;;;4656:1:38;4640:14;;;4636:22;4623:36;;-1:-1:-1;3581:1345:38:o;:::-;6638:2460:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;',
    linkReferences: {}
  },
  deployedBytecode: {
    object: '0x6080604052600436106100915760003560e01c806362c69b801161005957806362c69b801461013857806366d003ac1461014d5780638da5cb5b14610199578063ad7a672f146101cd578063d5025625146101e357600080fd5b806317d70f7c146100965780631998aeef146100dd578063200d2ed2146100e75780632852b71c1461010e5780633ccfd60b14610123575b600080fd5b3480156100a257600080fd5b506100ca7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100e5610205565b005b3480156100f357600080fd5b506003546101019060ff1681565b6040516100d491906105ee565b34801561011a57600080fd5b506100e5610286565b34801561012f57600080fd5b506100e561039a565b34801561014457600080fd5b506100e561049d565b34801561015957600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100d4565b3480156101a557600080fd5b506101817f000000000000000000000000000000000000000000000000000000000000000081565b3480156101d957600080fd5b506100ca60015481565b3480156101ef57600080fd5b506101f861054a565b6040516100d49190610616565b600060035460ff16600281111561021e5761021e6105d8565b146102445760405162461bcd60e51b815260040161023b90610665565b60405180910390fd5b336000908152600260205260408120805434928392916102659084906106a4565b92505081905550806001600082825461027e91906106a4565b909155505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102ee5760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b604482015260640161023b565b600060035460ff166002811115610307576103076105d8565b146103245760405162461bcd60e51b815260040161023b90610665565b6003805460ff19166001908117909155541561039857600060018190556040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016914780156108fc02929091818181858888f19350505050158015610396573d6000803e3d6000fd5b505b565b600160035460ff1660028111156103b3576103b36105d8565b036103bd57600080fd5b336000908152600260205260409020546103d657600080fd5b3360009081526002602052604081205460018054919283926103f99084906106bd565b9091555050336000818152600260205260408082208290555190919083908381818185875af1925050503d806000811461044f576040519150601f19603f3d011682016040523d82523d6000602084013e610454565b606091505b50509050806104995760405162461bcd60e51b81526020600482015260116024820152701d1c985b9cd9995c9d0819985a5b1b1959607a1b604482015260640161023b565b5050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105055760405162461bcd60e51b815260206004820152600d60248201526c3737ba103a34329037bbb732b960991b604482015260640161023b565b600060035460ff16600281111561051e5761051e6105d8565b1461053b5760405162461bcd60e51b815260040161023b90610665565b6003805460ff19166002179055565b60008054610557906106d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610583906106d0565b80156105d05780601f106105a5576101008083540402835291602001916105d0565b820191906000526020600020905b8154815290600101906020018083116105b357829003601f168201915b505050505081565b634e487b7160e01b600052602160045260246000fd5b602081016003831061061057634e487b7160e01b600052602160045260246000fd5b91905290565b60006020808352835180602085015260005b8181101561064457858101830151858201604001528201610628565b506000604082860101526040601f19601f8301168501019250505092915050565b6020808252600f908201526e3134b23234b7339034b99037bb32b960891b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808201808211156106b7576106b761068e565b92915050565b818103818111156106b7576106b761068e565b600181811c908216806106e457607f821691505b60208210810361070457634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220f7fef0ca8eb0b061913c24e5affb3d7b3332f828590bf9900afcc80d218dfd8d64736f6c63430008170033',
    sourceMap: '6638:2460:36:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6726:32;;;;;;;;;;;;;;;;;;160:25:38;;;148:2;133:18;6726:32:36;;;;;;;;7897:159;;;:::i;:::-;;7147:28;;;;;;;;;;-1:-1:-1;7147:28:36;;;;;;;;;;;;;;;:::i;8714:222::-;;;;;;;;;;;;;:::i;8213:343::-;;;;;;;;;;;;;:::i;8997:98::-;;;;;;;;;;;;;:::i;6912:42::-;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;861:32:38;;;843:51;;831:2;816:18;6912:42:36;681:219:38;6804:38:36;;;;;;;;;;;;;;;7075:27;;;;;;;;;;;;;;;;6991:19;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;7897:159::-;7654:25;7644:6;;;;:35;;;;;;;;:::i;:::-;;7641:65;;7681:25;;-1:-1:-1;;;7681:25:36;;;;;;;:::i;:::-;;;;;;;;7641:65;7994:10:::1;7952:15;7989:16:::0;;;:4:::1;:16;::::0;;;;:27;;7970:9:::1;::::0;;;7989:16;:27:::1;::::0;7970:9;;7989:27:::1;:::i;:::-;;;;;;;;8042:7;8026:12;;:23;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;;7897:159:36:o;8714:222::-;7762:10;-1:-1:-1;;;;;7776:5:36;7762:19;;7759:47;;7783:23;;-1:-1:-1;;;7783:23:36;;2266:2:38;7783:23:36;;;2248:21:38;2305:2;2285:18;;;2278:30;-1:-1:-1;;;2324:18:38;;;2317:43;2377:18;;7783:23:36;2064:337:38;7759:47:36;7654:25:::1;7644:6;::::0;::::1;;:35;::::0;::::1;;;;;;:::i;:::-;;7641:65;;7681:25;;-1:-1:-1::0;;;7681:25:36::1;;;;;;;:::i;7641:65::-;8774:6:::2;:32:::0;;-1:-1:-1;;8774:32:36::2;8783:23;8774:32:::0;;::::2;::::0;;;8820:12;:16;8816:114:::2;;8867:1;8852:12;:16:::0;;;8882:37:::2;::::0;-1:-1:-1;;;;;8882:5:36::2;:14;::::0;8897:21:::2;8882:37:::0;::::2;;;::::0;8897:21;;8882:37;8867:1;8882:37;8897:21;8882:14;:37;::::2;;;;;;;;;;;;;::::0;::::2;;;;;;8816:114;8714:222::o:0;8213:343::-;8268:23;8258:6;;;;:33;;;;;;;;:::i;:::-;;8250:42;;;;;;8315:10;8329:1;8310:16;;;:4;:16;;;;;;8302:29;;;;;;8364:10;8341:15;8359:16;;;:4;:16;;;;;;8385:12;:23;;8359:16;;;;8385:23;;8359:16;;8385:23;:::i;:::-;;;;-1:-1:-1;;8423:10:36;8437:1;8418:16;;;:4;:16;;;;;;:20;;;8466:35;8437:1;;8423:10;8489:7;;8437:1;8466:35;8437:1;8466:35;8489:7;8423:10;8466:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8448:53;;;8520:7;8511:38;;;;-1:-1:-1;;;8511:38:36;;2951:2:38;8511:38:36;;;2933:21:38;2990:2;2970:18;;;2963:30;-1:-1:-1;;;3009:18:38;;;3002:47;3066:18;;8511:38:36;2749:341:38;8511:38:36;8240:316;;8213:343::o;8997:98::-;7762:10;-1:-1:-1;;;;;7776:5:36;7762:19;;7759:47;;7783:23;;-1:-1:-1;;;7783:23:36;;2266:2:38;7783:23:36;;;2248:21:38;2305:2;2285:18;;;2278:30;-1:-1:-1;;;2324:18:38;;;2317:43;2377:18;;7783:23:36;2064:337:38;7759:47:36;7654:25:::1;7644:6;::::0;::::1;;:35;::::0;::::1;;;;;;:::i;:::-;;7641:65;;7681:25;;-1:-1:-1::0;;;7681:25:36::1;;;;;;;:::i;7641:65::-;9057:6:::2;:31:::0;;-1:-1:-1;;9057:31:36::2;9066:22;9057:31;::::0;;8997:98::o;6991:19::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;196:127:38:-;257:10;252:3;248:20;245:1;238:31;288:4;285:1;278:15;312:4;309:1;302:15;328:348;480:2;465:18;;513:1;502:13;;492:144;;558:10;553:3;549:20;546:1;539:31;593:4;590:1;583:15;621:4;618:1;611:15;492:144;645:25;;;328:348;:::o;905:548::-;1017:4;1046:2;1075;1064:9;1057:21;1107:6;1101:13;1150:6;1145:2;1134:9;1130:18;1123:34;1175:1;1185:140;1199:6;1196:1;1193:13;1185:140;;;1294:14;;;1290:23;;1284:30;1260:17;;;1279:2;1256:26;1249:66;1214:10;;1185:140;;;1189:3;1374:1;1369:2;1360:6;1349:9;1345:22;1341:31;1334:42;1444:2;1437;1433:7;1428:2;1420:6;1416:15;1412:29;1401:9;1397:45;1393:54;1385:62;;;;905:548;;;;:::o;1458:339::-;1660:2;1642:21;;;1699:2;1679:18;;;1672:30;-1:-1:-1;;;1733:2:38;1718:18;;1711:45;1788:2;1773:18;;1458:339::o;1802:127::-;1863:10;1858:3;1854:20;1851:1;1844:31;1894:4;1891:1;1884:15;1918:4;1915:1;1908:15;1934:125;1999:9;;;2020:10;;;2017:36;;;2033:18;;:::i;:::-;1934:125;;;;:::o;2406:128::-;2473:9;;;2494:11;;;2491:37;;;2508:18;;:::i;3095:380::-;3174:1;3170:12;;;;3217;;;3238:61;;3292:4;3284:6;3280:17;3270:27;;3238:61;3345:2;3337:6;3334:14;3314:18;3311:38;3308:161;;3391:10;3386:3;3382:20;3379:1;3372:31;3426:4;3423:1;3416:15;3454:4;3451:1;3444:15;3308:161;;3095:380;;;:::o',
    linkReferences: {},
    immutableReferences: {
      '48304': [ { start: 168, length: 32 } ],
      '48307': [
        { start: 427, length: 32 },
        { start: 657, length: 32 },
        { start: 846, length: 32 },
        { start: 1192, length: 32 }
      ],
      '48310': [ { start: 351, length: 32 } ]
    }
  },
  methodIdentifiers: {
    'accept()': '2852b71c',
    'bid()': '1998aeef',
    'owner()': '8da5cb5b',
    'recipient()': '66d003ac',
    'refuse()': '62c69b80',
    'status()': '200d2ed2',
    'terms()': 'd5025625',
    'tokenId()': '17d70f7c',
    'totalBalance()': 'ad7a672f',
    'withdraw()': '3ccfd60b'
  },
  rawMetadata: '{"compiler":{"version":"0.8.23+commit.f704f362"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"uint256","name":"tokenId_","type":"uint256"},{"internalType":"address payable","name":"owner_","type":"address"},{"internalType":"address payable","name":"recipient_","type":"address"},{"internalType":"string","name":"terms_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"accept","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recipient","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refuse","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"enum ContractStatus","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"terms","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{"accept()":{"notice":"call by the owner to accept the usage. if contribution was sent on the contract the ammount is transfered to the owner."},"bid()":{"notice":"allows supporters of the project to pay for usage."},"owner()":{"notice":"the owner of the token."},"recipient()":{"notice":"the address of the claimant to the right of use"},"refuse()":{"notice":"call by the owner to refuse the usage."},"terms()":{"notice":"terms of usage"},"tokenId()":{"notice":"the tokenId the contract is bound to."},"totalBalance()":{"notice":"The amount paid to the owner if he accepts"},"withdraw()":{"notice":"allows supporters to withdraw his contribution. bidders can withdraw only when the contract is in progress or refused."}},"version":1}},"settings":{"compilationTarget":{"src/CryptoStamp.sol":"DerivativeProduct"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/"]},"sources":{"lib/openzeppelin-contracts/contracts/interfaces/IERC165.sol":{"keccak256":"0xde7e9fd9aee8d4f40772f96bb3b58836cbc6dfc0227014a061947f8821ea9724","license":"MIT","urls":["bzz-raw://11fea9f8bc98949ac6709f0c1699db7430d2948137aa94d5a9e95a91f61a710a","dweb:/ipfs/QmQdfRXxQjwP6yn3DVo1GHPpriKNcFghSPi94Z1oKEFUNS"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC4906.sol":{"keccak256":"0xb31b86c03f4677dcffa4655285d62433509513be9bafa0e04984565052d34e44","license":"MIT","urls":["bzz-raw://a89c6fb0cd5fef4244500b633f63def9f2bb2134debb961e590bd5a2910662fd","dweb:/ipfs/QmNqWyCxyopvb99RbRomPpfTZGXRi5MnzgpFXE2BFLLgMc"]},"lib/openzeppelin-contracts/contracts/interfaces/IERC721.sol":{"keccak256":"0xc4d7ebf63eb2f6bf3fee1b6c0ee775efa9f31b4843a5511d07eea147e212932d","license":"MIT","urls":["bzz-raw://01c66a2fad66bc710db7510419a7eee569b40b67cd9f01b70a3fc90d6f76c03b","dweb:/ipfs/QmT1CjJZq4eTNA4nu8E9ZrWfaZu6ReUsDbjcK8DbEFqwx5"]},"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol":{"keccak256":"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7","license":"MIT","urls":["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f","dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"]},"lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol":{"keccak256":"0x13dd061770956c8489b80cfc89d9cdfc8ea2783d953691ea037a380731d52784","license":"MIT","urls":["bzz-raw://ed37f0f86e7fe31659e48c3a2a5920a92dd7f13c85cf8991fb79fe5f01e08efd","dweb:/ipfs/QmUtm9bQGvjr9hHGwkPWrbgFmVqzaJcxjkaYDex2oGsonS"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol":{"keccak256":"0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4","license":"MIT","urls":["bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7","dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n"]},"lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol":{"keccak256":"0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49","license":"MIT","urls":["bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22","dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol":{"keccak256":"0xcc6f49e0c57072d6a18eef0d5fc22a4cc20462c18f0c365d2dd9a2c732fde670","license":"MIT","urls":["bzz-raw://24915e61c7896c336b60788408cd5792b97b782e98e392920a2c55eb1803fe96","dweb:/ipfs/QmVHhcmFnMYZBCjnVUk6f5quMCDsBR2j669a1nuMiGWY9Z"]},"lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol":{"keccak256":"0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1","license":"MIT","urls":["bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02","dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2","license":"MIT","urls":["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12","dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792","license":"MIT","urls":["bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453","dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133","license":"MIT","urls":["bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8","dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b","license":"MIT","urls":["bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df","dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d","license":"MIT","urls":["bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875","dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72","license":"MIT","urls":["bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc","dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"]},"src/CryptoStamp.sol":{"keccak256":"0x0baf08d1c1042307f3d3b7af11d29f4d4466f82aa5db7ae8265b56249a185925","license":"MIT","urls":["bzz-raw://d8cee7bc78d2723869bed83479e67c88c6a46e91f53edd0470e556924c7d6f6c","dweb:/ipfs/QmfPoCvjGF24z3vpLdtQuarPXYLvDdpoFvAC7rMGmQbJPd"]}},"version":1}',
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
            },
            { internalType: 'string', name: 'terms_', type: 'string' }
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
          name: 'terms',
          outputs: [ { internalType: 'string', name: '', type: 'string' } ]
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
      userdoc: {
        kind: 'user',
        methods: {
          'accept()': {
            notice: 'call by the owner to accept the usage. if contribution was sent on the contract the ammount is transfered to the owner.'
          },
          'bid()': {
            notice: 'allows supporters of the project to pay for usage.'
          },
          'owner()': { notice: 'the owner of the token.' },
          'recipient()': { notice: 'the address of the claimant to the right of use' },
          'refuse()': { notice: 'call by the owner to refuse the usage.' },
          'terms()': { notice: 'terms of usage' },
          'tokenId()': { notice: 'the tokenId the contract is bound to.' },
          'totalBalance()': { notice: 'The amount paid to the owner if he accepts' },
          'withdraw()': {
            notice: 'allows supporters to withdraw his contribution. bidders can withdraw only when the contract is in progress or refused.'
          }
        },
        version: 1
      }
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
        keccak256: '0x0baf08d1c1042307f3d3b7af11d29f4d4466f82aa5db7ae8265b56249a185925',
        urls: [
          'bzz-raw://d8cee7bc78d2723869bed83479e67c88c6a46e91f53edd0470e556924c7d6f6c',
          'dweb:/ipfs/QmfPoCvjGF24z3vpLdtQuarPXYLvDdpoFvAC7rMGmQbJPd'
        ],
        license: 'MIT'
      }
    },
    version: 1
  },
  ast: {
    absolutePath: 'src/CryptoStamp.sol',
    id: 48527,
    exportedSymbols: {
      Content: [ 47939 ],
      ContentType: [ 47932 ],
      Context: [ 46474 ],
      ContractStatus: [ 48301 ],
      Cosigners: [ 47947 ],
      CryptoStamp: [ 48296 ],
      DerivativeProduct: [ 48526 ],
      ERC165: [ 46753 ],
      ERC721: [ 46155 ],
      ERC721URIStorage: [ 46416 ],
      IERC165: [ 46765 ],
      IERC4906: [ 44927 ],
      IERC721: [ 46272 ],
      IERC721Errors: [ 45021 ],
      IERC721Metadata: [ 46444 ],
      IERC721Receiver: [ 46290 ],
      Strings: [ 46729 ]
    },
    nodeType: 'SourceUnit',
    src: '32:9067:36',
    nodes: [
      {
        id: 47926,
        nodeType: 'PragmaDirective',
        src: '32:24:36',
        nodes: [],
        literals: [ 'solidity', '^', '0.8', '.20' ]
      },
      {
        id: 47927,
        nodeType: 'ImportDirective',
        src: '58:57:36',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol',
        file: '@openzeppelin/contracts/token/ERC721/ERC721.sol',
        nameLocation: '-1:-1:-1',
        scope: 48527,
        sourceUnit: 46156,
        symbolAliases: [],
        unitAlias: ''
      },
      {
        id: 47928,
        nodeType: 'ImportDirective',
        src: '116:78:36',
        nodes: [],
        absolutePath: 'lib/openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721URIStorage.sol',
        file: '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol',
        nameLocation: '-1:-1:-1',
        scope: 48527,
        sourceUnit: 46417,
        symbolAliases: [],
        unitAlias: ''
      },
      {
        id: 47932,
        nodeType: 'EnumDefinition',
        src: '291:38:36',
        nodes: [],
        canonicalName: 'ContentType',
        documentation: {
          id: 47929,
          nodeType: 'StructuredDocumentation',
          src: '196:95:36',
          text: '@title ContentType\n' +
            ' @notice represents the content type stamped in CryptoStamp contract'
        },
        members: [
          {
            id: 47930,
            name: 'Text',
            nameLocation: '314:4:36',
            nodeType: 'EnumValue',
            src: '314:4:36'
          },
          {
            id: 47931,
            name: 'URI',
            nameLocation: '324:3:36',
            nodeType: 'EnumValue',
            src: '324:3:36'
          }
        ],
        name: 'ContentType',
        nameLocation: '296:11:36'
      },
      {
        id: 47939,
        nodeType: 'StructDefinition',
        src: '418:65:36',
        nodes: [],
        canonicalName: 'Content',
        documentation: {
          id: 47933,
          nodeType: 'StructuredDocumentation',
          src: '335:83:36',
          text: '@title Content\n' +
            ' @notice Represent a content stamped in CryptoStamp contract'
        },
        members: [
          {
            constant: false,
            id: 47936,
            mutability: 'mutable',
            name: 'contentType',
            nameLocation: '451:11:36',
            nodeType: 'VariableDeclaration',
            scope: 47939,
            src: '439:23:36',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_enum$_ContentType_$47932',
              typeString: 'enum ContentType'
            },
            typeName: {
              id: 47935,
              nodeType: 'UserDefinedTypeName',
              pathNode: {
                id: 47934,
                name: 'ContentType',
                nameLocations: [ '439:11:36' ],
                nodeType: 'IdentifierPath',
                referencedDeclaration: 47932,
                src: '439:11:36'
              },
              referencedDeclaration: 47932,
              src: '439:11:36',
              typeDescriptions: {
                typeIdentifier: 't_enum$_ContentType_$47932',
                typeString: 'enum ContentType'
              }
            },
            visibility: 'internal'
          },
          {
            constant: false,
            id: 47938,
            mutability: 'mutable',
            name: 'value',
            nameLocation: '475:5:36',
            nodeType: 'VariableDeclaration',
            scope: 47939,
            src: '468:12:36',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage_ptr',
              typeString: 'string'
            },
            typeName: {
              id: 47937,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '468:6:36',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            visibility: 'internal'
          }
        ],
        name: 'Content',
        nameLocation: '425:7:36',
        scope: 48527,
        visibility: 'public'
      },
      {
        id: 47947,
        nodeType: 'StructDefinition',
        src: '596:78:36',
        nodes: [],
        canonicalName: 'Cosigners',
        documentation: {
          id: 47940,
          nodeType: 'StructuredDocumentation',
          src: '485:111:36',
          text: '@title Cosigners\n' +
            ' @notice Cosigners are addresses which cosign a document\n' +
            ' stamped by a third party.'
        },
        members: [
          {
            constant: false,
            id: 47942,
            mutability: 'mutable',
            name: 'total',
            nameLocation: '627:5:36',
            nodeType: 'VariableDeclaration',
            scope: 47947,
            src: '619:13:36',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 47941,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '619:7:36',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'internal'
          },
          {
            constant: false,
            id: 47946,
            mutability: 'mutable',
            name: 'signers',
            nameLocation: '664:7:36',
            nodeType: 'VariableDeclaration',
            scope: 47947,
            src: '638:33:36',
            stateVariable: false,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
              typeString: 'mapping(address => bool)'
            },
            typeName: {
              id: 47945,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 47943,
                name: 'address',
                nodeType: 'ElementaryTypeName',
                src: '647:7:36',
                typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
              },
              nodeType: 'Mapping',
              src: '638:25:36',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                typeString: 'mapping(address => bool)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 47944,
                name: 'bool',
                nodeType: 'ElementaryTypeName',
                src: '658:4:36',
                typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
              }
            },
            visibility: 'internal'
          }
        ],
        name: 'Cosigners',
        nameLocation: '603:9:36',
        scope: 48527,
        visibility: 'public'
      },
      {
        id: 48296,
        nodeType: 'ContractDefinition',
        src: '838:5528:36',
        nodes: [
          {
            id: 47954,
            nodeType: 'VariableDeclaration',
            src: '898:31:36',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: '_currentTokenId',
            nameLocation: '914:15:36',
            scope: 48296,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 47953,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '898:7:36',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'private'
          },
          {
            id: 47958,
            nodeType: 'VariableDeclaration',
            src: '940:44:36',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: '_registry',
            nameLocation: '975:9:36',
            scope: 48296,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
              typeString: 'mapping(uint256 => string)'
            },
            typeName: {
              id: 47957,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 47955,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '948:7:36',
                typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
              },
              nodeType: 'Mapping',
              src: '940:26:36',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
                typeString: 'mapping(uint256 => string)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 47956,
                name: 'string',
                nodeType: 'ElementaryTypeName',
                src: '959:6:36',
                typeDescriptions: {
                  typeIdentifier: 't_string_storage_ptr',
                  typeString: 'string'
                }
              }
            },
            visibility: 'private'
          },
          {
            id: 47963,
            nodeType: 'VariableDeclaration',
            src: '990:47:36',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: 'cosigners',
            nameLocation: '1028:9:36',
            scope: 48296,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
              typeString: 'mapping(uint256 => struct Cosigners)'
            },
            typeName: {
              id: 47962,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 47959,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '998:7:36',
                typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
              },
              nodeType: 'Mapping',
              src: '990:29:36',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
                typeString: 'mapping(uint256 => struct Cosigners)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 47961,
                nodeType: 'UserDefinedTypeName',
                pathNode: {
                  id: 47960,
                  name: 'Cosigners',
                  nameLocations: [ '1009:9:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 47947,
                  src: '1009:9:36'
                },
                referencedDeclaration: 47947,
                src: '1009:9:36',
                typeDescriptions: {
                  typeIdentifier: 't_struct$_Cosigners_$47947_storage_ptr',
                  typeString: 'struct Cosigners'
                }
              }
            },
            visibility: 'private'
          },
          {
            id: 47971,
            nodeType: 'FunctionDefinition',
            src: '1048:46:36',
            nodes: [],
            body: {
              id: 47970,
              nodeType: 'Block',
              src: '1092:2:36',
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
                    id: 47966,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '1069:13:36',
                    typeDescriptions: {
                      typeIdentifier: 't_stringliteral_5eefe880a6dfe4f5c05982b7a9297f07da44a1538c38d91efe013575cca35a99',
                      typeString: 'literal_string "CryptoStamp"'
                    },
                    value: 'CryptoStamp'
                  },
                  {
                    hexValue: '53544d50',
                    id: 47967,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: 'string',
                    lValueRequested: false,
                    nodeType: 'Literal',
                    src: '1084:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_stringliteral_0ddeade3cc15fad5811661bc0417cb5b7330efe4fd88718108233c786c8abc4b',
                      typeString: 'literal_string "STMP"'
                    },
                    value: 'STMP'
                  }
                ],
                id: 47968,
                kind: 'baseConstructorSpecifier',
                modifierName: {
                  id: 47965,
                  name: 'ERC721',
                  nameLocations: [ '1062:6:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46155,
                  src: '1062:6:36'
                },
                nodeType: 'ModifierInvocation',
                src: '1062:29:36'
              }
            ],
            name: '',
            nameLocation: '-1:-1:-1',
            parameters: {
              id: 47964,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1059:2:36'
            },
            returnParameters: {
              id: 47969,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1092:0:36'
            },
            scope: 48296,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 47985,
            nodeType: 'FunctionDefinition',
            src: '1100:128:36',
            nodes: [],
            body: {
              id: 47984,
              nodeType: 'Block',
              src: '1182:46:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 47982,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 47978,
                        name: '_registry',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 47958,
                        src: '1192:9:36',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
                          typeString: 'mapping(uint256 => string storage ref)'
                        }
                      },
                      id: 47980,
                      indexExpression: {
                        id: 47979,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 47973,
                        src: '1202:7:36',
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
                      src: '1192:18:36',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 47981,
                      name: '_content',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47975,
                      src: '1213:8:36',
                      typeDescriptions: {
                        typeIdentifier: 't_string_calldata_ptr',
                        typeString: 'string calldata'
                      }
                    },
                    src: '1192:29:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 47983,
                  nodeType: 'ExpressionStatement',
                  src: '1192:29:36'
                }
              ]
            },
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: '_setText',
            nameLocation: '1109:8:36',
            parameters: {
              id: 47976,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 47973,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '1126:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 47985,
                  src: '1118:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 47972,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1118:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 47975,
                  mutability: 'mutable',
                  name: '_content',
                  nameLocation: '1151:8:36',
                  nodeType: 'VariableDeclaration',
                  scope: 47985,
                  src: '1135:24:36',
                  stateVariable: false,
                  storageLocation: 'calldata',
                  typeDescriptions: {
                    typeIdentifier: 't_string_calldata_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 47974,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1135:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1117:43:36'
            },
            returnParameters: {
              id: 47977,
              nodeType: 'ParameterList',
              parameters: [],
              src: '1182:0:36'
            },
            scope: 48296,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'internal'
          },
          {
            id: 48028,
            nodeType: 'FunctionDefinition',
            src: '1423:345:36',
            nodes: [],
            body: {
              id: 48027,
              nodeType: 'Block',
              src: '1512:256:36',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 47999,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        arguments: [
                          {
                            id: 47995,
                            name: '_content',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 47988,
                            src: '1532:8:36',
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
                          id: 47994,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '1526:5:36',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_bytes_storage_ptr_$',
                            typeString: 'type(bytes storage pointer)'
                          },
                          typeName: {
                            id: 47993,
                            name: 'bytes',
                            nodeType: 'ElementaryTypeName',
                            src: '1526:5:36',
                            typeDescriptions: {}
                          }
                        },
                        id: 47996,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '1526:15:36',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_bytes_calldata_ptr',
                          typeString: 'bytes calldata'
                        }
                      },
                      id: 47997,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '1542:6:36',
                      memberName: 'length',
                      nodeType: 'MemberAccess',
                      src: '1526:22:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '>',
                    rightExpression: {
                      hexValue: '323536',
                      id: 47998,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '1551:3:36',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_256_by_1',
                        typeString: 'int_const 256'
                      },
                      value: '256'
                    },
                    src: '1526:28:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48004,
                  nodeType: 'IfStatement',
                  src: '1522:72:36',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '746f6f206c6f6e6720636f6e74656e74',
                          id: 48001,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '1575:18:36',
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
                        id: 48000,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '1568:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48002,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1568:26:36',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48003,
                    nodeType: 'ExpressionStatement',
                    src: '1568:26:36'
                  }
                },
                {
                  assignments: [ 48006 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48006,
                      mutability: 'mutable',
                      name: 'author',
                      nameLocation: '1612:6:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48027,
                      src: '1604:14:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48005,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '1604:7:36',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48009,
                  initialValue: {
                    expression: {
                      id: 48007,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '1621:3:36',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48008,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '1625:6:36',
                    memberName: 'sender',
                    nodeType: 'MemberAccess',
                    src: '1621:10:36',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '1604:27:36'
                },
                {
                  assignments: [ 48011 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48011,
                      mutability: 'mutable',
                      name: 'newId',
                      nameLocation: '1649:5:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48027,
                      src: '1641:13:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48010,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '1641:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48014,
                  initialValue: {
                    id: 48013,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'UnaryOperation',
                    operator: '++',
                    prefix: true,
                    src: '1657:17:36',
                    subExpression: {
                      id: 48012,
                      name: '_currentTokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47954,
                      src: '1659:15:36',
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
                  src: '1641:33:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48016,
                        name: 'author',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48006,
                        src: '1690:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        id: 48017,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48011,
                        src: '1698:5:36',
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
                      id: 48015,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 45762,
                      src: '1684:5:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 48018,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1684:20:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48019,
                  nodeType: 'ExpressionStatement',
                  src: '1684:20:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48021,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48011,
                        src: '1723:5:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      {
                        id: 48022,
                        name: '_content',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 47988,
                        src: '1730:8:36',
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
                      id: 48020,
                      name: '_setText',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47985,
                      src: '1714:8:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_uint256_$_t_string_calldata_ptr_$returns$__$',
                        typeString: 'function (uint256,string calldata)'
                      }
                    },
                    id: 48023,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '1714:25:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48024,
                  nodeType: 'ExpressionStatement',
                  src: '1714:25:36'
                },
                {
                  expression: {
                    id: 48025,
                    name: 'newId',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 48011,
                    src: '1756:5:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  functionReturnParameters: 47992,
                  id: 48026,
                  nodeType: 'Return',
                  src: '1749:12:36'
                }
              ]
            },
            documentation: {
              id: 47986,
              nodeType: 'StructuredDocumentation',
              src: '1234:184:36',
              text: '@notice stamps a short text (<256 char.) minting a token and\n' +
                ' saving it on this contract\n' +
                ' @param _content the content to stamp.\n' +
                ' @return the new minted tokenID'
            },
            functionSelector: '57a656c9',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'stampTextContent',
            nameLocation: '1432:16:36',
            parameters: {
              id: 47989,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 47988,
                  mutability: 'mutable',
                  name: '_content',
                  nameLocation: '1465:8:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48028,
                  src: '1449:24:36',
                  stateVariable: false,
                  storageLocation: 'calldata',
                  typeDescriptions: {
                    typeIdentifier: 't_string_calldata_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 47987,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '1449:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1448:26:36'
            },
            returnParameters: {
              id: 47992,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 47991,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48028,
                  src: '1499:7:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 47990,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1499:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1498:9:36'
            },
            scope: 48296,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48045,
            nodeType: 'FunctionDefinition',
            src: '1941:157:36',
            nodes: [],
            body: {
              id: 48044,
              nodeType: 'Block',
              src: '2024:74:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 48037,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48031,
                        src: '2048:7:36',
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
                      id: 48036,
                      name: '_requireOwned',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 46090,
                      src: '2034:13:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_address_$',
                        typeString: 'function (uint256) view returns (address)'
                      }
                    },
                    id: 48038,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2034:22:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  id: 48039,
                  nodeType: 'ExpressionStatement',
                  src: '2034:22:36'
                },
                {
                  expression: {
                    baseExpression: {
                      id: 48040,
                      name: '_registry',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47958,
                      src: '2073:9:36',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_uint256_$_t_string_storage_$',
                        typeString: 'mapping(uint256 => string storage ref)'
                      }
                    },
                    id: 48042,
                    indexExpression: {
                      id: 48041,
                      name: 'tokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48031,
                      src: '2083:7:36',
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
                    src: '2073:18:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  functionReturnParameters: 48035,
                  id: 48043,
                  nodeType: 'Return',
                  src: '2066:25:36'
                }
              ]
            },
            documentation: {
              id: 48029,
              nodeType: 'StructuredDocumentation',
              src: '1774:162:36',
              text: '@notice get the text corresponding to this token\n' +
                ' @param tokenId The tokenID to which the content is bound\n' +
                ' @return the text bound to the token.'
            },
            functionSelector: 'b6e521d5',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'tokenText',
            nameLocation: '1950:9:36',
            parameters: {
              id: 48032,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48031,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '1968:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48045,
                  src: '1960:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48030,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '1960:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '1959:17:36'
            },
            returnParameters: {
              id: 48035,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48034,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48045,
                  src: '2005:13:36',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48033,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '2005:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2004:15:36'
            },
            scope: 48296,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48062,
            nodeType: 'FunctionDefinition',
            src: '2265:189:36',
            nodes: [],
            body: {
              id: 48061,
              nodeType: 'Block',
              src: '2407:47:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 48058,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48048,
                        src: '2439:7:36',
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
                        id: 48056,
                        name: 'super',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: '2424:5:36',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_super$_CryptoStamp_$48296_$',
                          typeString: 'type(contract super CryptoStamp)'
                        }
                      },
                      id: 48057,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '2430:8:36',
                      memberName: 'tokenURI',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 46396,
                      src: '2424:14:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$',
                        typeString: 'function (uint256) view returns (string memory)'
                      }
                    },
                    id: 48059,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '2424:23:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory'
                    }
                  },
                  functionReturnParameters: 48055,
                  id: 48060,
                  nodeType: 'Return',
                  src: '2417:30:36'
                }
              ]
            },
            baseFunctions: [ 45342, 46396 ],
            documentation: {
              id: 48046,
              nodeType: 'StructuredDocumentation',
              src: '2104:156:36',
              text: '@notice Get the CID corresponding to this token\n' +
                ' @param tokenId The tokenID to which the CID is bound\n' +
                ' @return the CID bound to the token.'
            },
            functionSelector: 'c87b56dd',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'tokenURI',
            nameLocation: '2274:8:36',
            overrides: {
              id: 48052,
              nodeType: 'OverrideSpecifier',
              overrides: [
                {
                  id: 48050,
                  name: 'ERC721',
                  nameLocations: [ '2345:6:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46155,
                  src: '2345:6:36'
                },
                {
                  id: 48051,
                  name: 'ERC721URIStorage',
                  nameLocations: [ '2353:16:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46416,
                  src: '2353:16:36'
                }
              ],
              src: '2336:34:36'
            },
            parameters: {
              id: 48049,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48048,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '2291:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48062,
                  src: '2283:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48047,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '2283:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2282:17:36'
            },
            returnParameters: {
              id: 48055,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48054,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48062,
                  src: '2388:13:36',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48053,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '2388:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2387:15:36'
            },
            scope: 48296,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48079,
            nodeType: 'FunctionDefinition',
            src: '2839:205:36',
            nodes: [],
            body: {
              id: 48078,
              nodeType: 'Block',
              src: '2984:60:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 48075,
                        name: 'interfaceId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48065,
                        src: '3025:11:36',
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
                        id: 48073,
                        name: 'super',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -25,
                        src: '3001:5:36',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_super$_CryptoStamp_$48296_$',
                          typeString: 'type(contract super CryptoStamp)'
                        }
                      },
                      id: 48074,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '3007:17:36',
                      memberName: 'supportsInterface',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 46339,
                      src: '3001:23:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_bytes4_$returns$_t_bool_$',
                        typeString: 'function (bytes4) view returns (bool)'
                      }
                    },
                    id: 48076,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3001:36:36',
                    tryCall: false,
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  functionReturnParameters: 48072,
                  id: 48077,
                  nodeType: 'Return',
                  src: '2994:43:36'
                }
              ]
            },
            baseFunctions: [ 45247, 46339 ],
            documentation: {
              id: 48063,
              nodeType: 'StructuredDocumentation',
              src: '2460:374:36',
              text: '@notice Query if a contract implements an interface\n' +
                ' @param interfaceId The interface identifier, as specified in ERC-165\n' +
                ' @dev Interface identification is specified in ERC-165. This function\n' +
                '  uses less than 30,000 gas.\n' +
                ' @return `true` if the contract implements `interfaceID` and\n' +
                '  `interfaceID` is not 0xffffffff, `false` otherwise '
            },
            functionSelector: '01ffc9a7',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'supportsInterface',
            nameLocation: '2848:17:36',
            overrides: {
              id: 48069,
              nodeType: 'OverrideSpecifier',
              overrides: [
                {
                  id: 48067,
                  name: 'ERC721',
                  nameLocations: [ '2931:6:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46155,
                  src: '2931:6:36'
                },
                {
                  id: 48068,
                  name: 'ERC721URIStorage',
                  nameLocations: [ '2939:16:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 46416,
                  src: '2939:16:36'
                }
              ],
              src: '2922:34:36'
            },
            parameters: {
              id: 48066,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48065,
                  mutability: 'mutable',
                  name: 'interfaceId',
                  nameLocation: '2873:11:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48079,
                  src: '2866:18:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: { typeIdentifier: 't_bytes4', typeString: 'bytes4' },
                  typeName: {
                    id: 48064,
                    name: 'bytes4',
                    nodeType: 'ElementaryTypeName',
                    src: '2866:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_bytes4',
                      typeString: 'bytes4'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2865:20:36'
            },
            returnParameters: {
              id: 48072,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48071,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48079,
                  src: '2974:4:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                  typeName: {
                    id: 48070,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '2974:4:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  visibility: 'internal'
                }
              ],
              src: '2973:6:36'
            },
            scope: 48296,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48110,
            nodeType: 'FunctionDefinition',
            src: '3237:259:36',
            nodes: [],
            body: {
              id: 48109,
              nodeType: 'Block',
              src: '3317:179:36',
              nodes: [],
              statements: [
                {
                  assignments: [ 48088 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48088,
                      mutability: 'mutable',
                      name: 'author',
                      nameLocation: '3335:6:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48109,
                      src: '3327:14:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48087,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '3327:7:36',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48091,
                  initialValue: {
                    expression: {
                      id: 48089,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '3344:3:36',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48090,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '3348:6:36',
                    memberName: 'sender',
                    nodeType: 'MemberAccess',
                    src: '3344:10:36',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '3327:27:36'
                },
                {
                  assignments: [ 48093 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48093,
                      mutability: 'mutable',
                      name: 'newId',
                      nameLocation: '3372:5:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48109,
                      src: '3364:13:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48092,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '3364:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48096,
                  initialValue: {
                    id: 48095,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'UnaryOperation',
                    operator: '++',
                    prefix: true,
                    src: '3380:17:36',
                    subExpression: {
                      id: 48094,
                      name: '_currentTokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47954,
                      src: '3382:15:36',
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
                  src: '3364:33:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48098,
                        name: 'author',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48088,
                        src: '3413:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      {
                        id: 48099,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48093,
                        src: '3421:5:36',
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
                      id: 48097,
                      name: '_mint',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 45762,
                      src: '3407:5:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$',
                        typeString: 'function (address,uint256)'
                      }
                    },
                    id: 48100,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3407:20:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48101,
                  nodeType: 'ExpressionStatement',
                  src: '3407:20:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48103,
                        name: 'newId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48093,
                        src: '3450:5:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      {
                        id: 48104,
                        name: '_tokenURI',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48082,
                        src: '3457:9:36',
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
                      id: 48102,
                      name: '_setTokenURI',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 46415,
                      src: '3437:12:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (uint256,string memory)'
                      }
                    },
                    id: 48105,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3437:30:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48106,
                  nodeType: 'ExpressionStatement',
                  src: '3437:30:36'
                },
                {
                  expression: {
                    id: 48107,
                    name: 'newId',
                    nodeType: 'Identifier',
                    overloadedDeclarations: [],
                    referencedDeclaration: 48093,
                    src: '3484:5:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  functionReturnParameters: 48086,
                  id: 48108,
                  nodeType: 'Return',
                  src: '3477:12:36'
                }
              ]
            },
            documentation: {
              id: 48080,
              nodeType: 'StructuredDocumentation',
              src: '3054:178:36',
              text: '@notice stamps a CID on IPFS storage, minting a token and\n' +
                ' saving it on this contract\n' +
                ' @param _tokenURI the CID to stamp.\n' +
                ' @return the new minted tokenID'
            },
            functionSelector: '486f5fd5',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'stampURI',
            nameLocation: '3246:8:36',
            parameters: {
              id: 48083,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48082,
                  mutability: 'mutable',
                  name: '_tokenURI',
                  nameLocation: '3269:9:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48110,
                  src: '3255:23:36',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48081,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '3255:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3254:25:36'
            },
            returnParameters: {
              id: 48086,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48085,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48110,
                  src: '3304:7:36',
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
                    src: '3304:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3303:9:36'
            },
            scope: 48296,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48160,
            nodeType: 'FunctionDefinition',
            src: '3684:429:36',
            nodes: [],
            body: {
              id: 48159,
              nodeType: 'Block',
              src: '3766:347:36',
              nodes: [],
              statements: [
                {
                  assignments: [ 48120 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48120,
                      mutability: 'mutable',
                      name: 'value',
                      nameLocation: '3790:5:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48159,
                      src: '3776:19:36',
                      stateVariable: false,
                      storageLocation: 'memory',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string'
                      },
                      typeName: {
                        id: 48119,
                        name: 'string',
                        nodeType: 'ElementaryTypeName',
                        src: '3776:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_string_storage_ptr',
                          typeString: 'string'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48124,
                  initialValue: {
                    arguments: [
                      {
                        id: 48122,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48113,
                        src: '3807:7:36',
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
                      id: 48121,
                      name: 'tokenURI',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ 48062 ],
                      referencedDeclaration: 48062,
                      src: '3798:8:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$',
                        typeString: 'function (uint256) view returns (string memory)'
                      }
                    },
                    id: 48123,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '3798:17:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_string_memory_ptr',
                      typeString: 'string memory'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '3776:39:36'
                },
                {
                  assignments: [ 48127 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48127,
                      mutability: 'mutable',
                      name: 'contentType',
                      nameLocation: '3837:11:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48159,
                      src: '3825:23:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContentType_$47932',
                        typeString: 'enum ContentType'
                      },
                      typeName: {
                        id: 48126,
                        nodeType: 'UserDefinedTypeName',
                        pathNode: {
                          id: 48125,
                          name: 'ContentType',
                          nameLocations: [ '3825:11:36' ],
                          nodeType: 'IdentifierPath',
                          referencedDeclaration: 47932,
                          src: '3825:11:36'
                        },
                        referencedDeclaration: 47932,
                        src: '3825:11:36',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47932',
                          typeString: 'enum ContentType'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48128,
                  nodeType: 'VariableDeclarationStatement',
                  src: '3825:23:36'
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 48135,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        arguments: [
                          {
                            id: 48131,
                            name: 'value',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48120,
                            src: '3868:5:36',
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
                          id: 48130,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '3862:5:36',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_bytes_storage_ptr_$',
                            typeString: 'type(bytes storage pointer)'
                          },
                          typeName: {
                            id: 48129,
                            name: 'bytes',
                            nodeType: 'ElementaryTypeName',
                            src: '3862:5:36',
                            typeDescriptions: {}
                          }
                        },
                        id: 48132,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '3862:12:36',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_bytes_memory_ptr',
                          typeString: 'bytes memory'
                        }
                      },
                      id: 48133,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '3875:6:36',
                      memberName: 'length',
                      nodeType: 'MemberAccess',
                      src: '3862:19:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '!=',
                    rightExpression: {
                      hexValue: '30',
                      id: 48134,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '3885:1:36',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '3862:24:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  falseBody: {
                    id: 48152,
                    nodeType: 'Block',
                    src: '3944:95:36',
                    statements: [
                      {
                        expression: {
                          id: 48145,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 48141,
                            name: 'value',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48120,
                            src: '3958:5:36',
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
                                id: 48143,
                                name: 'tokenId',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 48113,
                                src: '3976:7:36',
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
                              id: 48142,
                              name: 'tokenText',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 48045,
                              src: '3966:9:36',
                              typeDescriptions: {
                                typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$',
                                typeString: 'function (uint256) view returns (string memory)'
                              }
                            },
                            id: 48144,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '3966:18:36',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_string_memory_ptr',
                              typeString: 'string memory'
                            }
                          },
                          src: '3958:26:36',
                          typeDescriptions: {
                            typeIdentifier: 't_string_memory_ptr',
                            typeString: 'string memory'
                          }
                        },
                        id: 48146,
                        nodeType: 'ExpressionStatement',
                        src: '3958:26:36'
                      },
                      {
                        expression: {
                          id: 48150,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 48147,
                            name: 'contentType',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48127,
                            src: '3998:11:36',
                            typeDescriptions: {
                              typeIdentifier: 't_enum$_ContentType_$47932',
                              typeString: 'enum ContentType'
                            }
                          },
                          nodeType: 'Assignment',
                          operator: '=',
                          rightHandSide: {
                            expression: {
                              id: 48148,
                              name: 'ContentType',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 47932,
                              src: '4012:11:36',
                              typeDescriptions: {
                                typeIdentifier: 't_type$_t_enum$_ContentType_$47932_$',
                                typeString: 'type(enum ContentType)'
                              }
                            },
                            id: 48149,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            memberLocation: '4024:4:36',
                            memberName: 'Text',
                            nodeType: 'MemberAccess',
                            referencedDeclaration: 47930,
                            src: '4012:16:36',
                            typeDescriptions: {
                              typeIdentifier: 't_enum$_ContentType_$47932',
                              typeString: 'enum ContentType'
                            }
                          },
                          src: '3998:30:36',
                          typeDescriptions: {
                            typeIdentifier: 't_enum$_ContentType_$47932',
                            typeString: 'enum ContentType'
                          }
                        },
                        id: 48151,
                        nodeType: 'ExpressionStatement',
                        src: '3998:30:36'
                      }
                    ]
                  },
                  id: 48153,
                  nodeType: 'IfStatement',
                  src: '3858:181:36',
                  trueBody: {
                    expression: {
                      id: 48139,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 48136,
                        name: 'contentType',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48127,
                        src: '3900:11:36',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47932',
                          typeString: 'enum ContentType'
                        }
                      },
                      nodeType: 'Assignment',
                      operator: '=',
                      rightHandSide: {
                        expression: {
                          id: 48137,
                          name: 'ContentType',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 47932,
                          src: '3914:11:36',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_enum$_ContentType_$47932_$',
                            typeString: 'type(enum ContentType)'
                          }
                        },
                        id: 48138,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        memberLocation: '3926:3:36',
                        memberName: 'URI',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: 47931,
                        src: '3914:15:36',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47932',
                          typeString: 'enum ContentType'
                        }
                      },
                      src: '3900:29:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContentType_$47932',
                        typeString: 'enum ContentType'
                      }
                    },
                    id: 48140,
                    nodeType: 'ExpressionStatement',
                    src: '3900:29:36'
                  }
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48155,
                        name: 'contentType',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48127,
                        src: '4078:11:36',
                        typeDescriptions: {
                          typeIdentifier: 't_enum$_ContentType_$47932',
                          typeString: 'enum ContentType'
                        }
                      },
                      {
                        id: 48156,
                        name: 'value',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48120,
                        src: '4098:5:36',
                        typeDescriptions: {
                          typeIdentifier: 't_string_memory_ptr',
                          typeString: 'string memory'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_enum$_ContentType_$47932',
                          typeString: 'enum ContentType'
                        },
                        {
                          typeIdentifier: 't_string_memory_ptr',
                          typeString: 'string memory'
                        }
                      ],
                      id: 48154,
                      name: 'Content',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 47939,
                      src: '4055:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_type$_t_struct$_Content_$47939_storage_ptr_$',
                        typeString: 'type(struct Content storage pointer)'
                      }
                    },
                    id: 48157,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'structConstructorCall',
                    lValueRequested: false,
                    nameLocations: [ '4065:11:36', '4091:5:36' ],
                    names: [ 'contentType', 'value' ],
                    nodeType: 'FunctionCall',
                    src: '4055:51:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_struct$_Content_$47939_memory_ptr',
                      typeString: 'struct Content memory'
                    }
                  },
                  functionReturnParameters: 48118,
                  id: 48158,
                  nodeType: 'Return',
                  src: '4048:58:36'
                }
              ]
            },
            documentation: {
              id: 48111,
              nodeType: 'StructuredDocumentation',
              src: '3502:177:36',
              text: '@notice get content bound to a specific tokenID\n' +
                ' @param tokenId The tokenID to which the Content is bound\n' +
                ' @return the Content(CID or Text) bound to the token.'
            },
            functionSelector: 'baa0b806',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'content',
            nameLocation: '3693:7:36',
            parameters: {
              id: 48114,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48113,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '3709:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48160,
                  src: '3701:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48112,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '3701:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3700:17:36'
            },
            returnParameters: {
              id: 48118,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48117,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48160,
                  src: '3746:14:36',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_struct$_Content_$47939_memory_ptr',
                    typeString: 'struct Content'
                  },
                  typeName: {
                    id: 48116,
                    nodeType: 'UserDefinedTypeName',
                    pathNode: {
                      id: 48115,
                      name: 'Content',
                      nameLocations: [ '3746:7:36' ],
                      nodeType: 'IdentifierPath',
                      referencedDeclaration: 47939,
                      src: '3746:7:36'
                    },
                    referencedDeclaration: 47939,
                    src: '3746:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_struct$_Content_$47939_storage_ptr',
                      typeString: 'struct Content'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '3745:16:36'
            },
            scope: 48296,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48217,
            nodeType: 'FunctionDefinition',
            src: '4499:468:36',
            nodes: [],
            body: {
              id: 48216,
              nodeType: 'Block',
              src: '4596:371:36',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 48176,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        arguments: [
                          {
                            id: 48172,
                            name: 'terms',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48165,
                            src: '4616:5:36',
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
                          id: 48171,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '4610:5:36',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_bytes_storage_ptr_$',
                            typeString: 'type(bytes storage pointer)'
                          },
                          typeName: {
                            id: 48170,
                            name: 'bytes',
                            nodeType: 'ElementaryTypeName',
                            src: '4610:5:36',
                            typeDescriptions: {}
                          }
                        },
                        id: 48173,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '4610:12:36',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_bytes_calldata_ptr',
                          typeString: 'bytes calldata'
                        }
                      },
                      id: 48174,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '4623:6:36',
                      memberName: 'length',
                      nodeType: 'MemberAccess',
                      src: '4610:19:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '>',
                    rightExpression: {
                      hexValue: '32303438',
                      id: 48175,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '4632:4:36',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_2048_by_1',
                        typeString: 'int_const 2048'
                      },
                      value: '2048'
                    },
                    src: '4610:26:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48181,
                  nodeType: 'IfStatement',
                  src: '4606:68:36',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '746f6f206c6f6e67207465726d73',
                          id: 48178,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '4657:16:36',
                          typeDescriptions: {
                            typeIdentifier: 't_stringliteral_4eb8da6cffcea5dfeb56950cc263d91dcc90ff0bed6eeab8e1568e0f5a88b891',
                            typeString: 'literal_string "too long terms"'
                          },
                          value: 'too long terms'
                        }
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_stringliteral_4eb8da6cffcea5dfeb56950cc263d91dcc90ff0bed6eeab8e1568e0f5a88b891',
                            typeString: 'literal_string "too long terms"'
                          }
                        ],
                        id: 48177,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '4650:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48179,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '4650:24:36',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48180,
                    nodeType: 'ExpressionStatement',
                    src: '4650:24:36'
                  }
                },
                {
                  assignments: [ 48183 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48183,
                      mutability: 'mutable',
                      name: 'recipient',
                      nameLocation: '4692:9:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48216,
                      src: '4684:17:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48182,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '4684:7:36',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48186,
                  initialValue: {
                    expression: {
                      id: 48184,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '4704:3:36',
                      typeDescriptions: {
                        typeIdentifier: 't_magic_message',
                        typeString: 'msg'
                      }
                    },
                    id: 48185,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '4708:6:36',
                    memberName: 'sender',
                    nodeType: 'MemberAccess',
                    src: '4704:10:36',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '4684:30:36'
                },
                {
                  assignments: [ 48188 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48188,
                      mutability: 'mutable',
                      name: 'owner',
                      nameLocation: '4732:5:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48216,
                      src: '4724:13:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      },
                      typeName: {
                        id: 48187,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '4724:7:36',
                        stateMutability: 'nonpayable',
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48192,
                  initialValue: {
                    arguments: [
                      {
                        id: 48190,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48163,
                        src: '4748:7:36',
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
                      id: 48189,
                      name: 'ownerOf',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 45288,
                      src: '4740:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_address_$',
                        typeString: 'function (uint256) view returns (address)'
                      }
                    },
                    id: 48191,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4740:16:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '4724:32:36'
                },
                {
                  assignments: [ 48195 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48195,
                      mutability: 'mutable',
                      name: 'newDeriv',
                      nameLocation: '4784:8:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48216,
                      src: '4766:26:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                        typeString: 'contract DerivativeProduct'
                      },
                      typeName: {
                        id: 48194,
                        nodeType: 'UserDefinedTypeName',
                        pathNode: {
                          id: 48193,
                          name: 'DerivativeProduct',
                          nameLocations: [ '4766:17:36' ],
                          nodeType: 'IdentifierPath',
                          referencedDeclaration: 48526,
                          src: '4766:17:36'
                        },
                        referencedDeclaration: 48526,
                        src: '4766:17:36',
                        typeDescriptions: {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                          typeString: 'contract DerivativeProduct'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48210,
                  initialValue: {
                    arguments: [
                      {
                        id: 48199,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48163,
                        src: '4830:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      {
                        arguments: [
                          {
                            id: 48202,
                            name: 'owner',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48188,
                            src: '4859:5:36',
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
                          id: 48201,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '4851:8:36',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_payable_$',
                            typeString: 'type(address payable)'
                          },
                          typeName: {
                            id: 48200,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '4851:8:36',
                            stateMutability: 'payable',
                            typeDescriptions: {}
                          }
                        },
                        id: 48203,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '4851:14:36',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        arguments: [
                          {
                            id: 48206,
                            name: 'recipient',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48183,
                            src: '4887:9:36',
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
                          id: 48205,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '4879:8:36',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_payable_$',
                            typeString: 'type(address payable)'
                          },
                          typeName: {
                            id: 48204,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '4879:8:36',
                            stateMutability: 'payable',
                            typeDescriptions: {}
                          }
                        },
                        id: 48207,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '4879:18:36',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        }
                      },
                      {
                        id: 48208,
                        name: 'terms',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48165,
                        src: '4911:5:36',
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
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_address_payable',
                          typeString: 'address payable'
                        },
                        {
                          typeIdentifier: 't_string_calldata_ptr',
                          typeString: 'string calldata'
                        }
                      ],
                      id: 48198,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      nodeType: 'NewExpression',
                      src: '4795:21:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_creation_nonpayable$_t_uint256_$_t_address_payable_$_t_address_payable_$_t_string_memory_ptr_$returns$_t_contract$_DerivativeProduct_$48526_$',
                        typeString: 'function (uint256,address payable,address payable,string memory) returns (contract DerivativeProduct)'
                      },
                      typeName: {
                        id: 48197,
                        nodeType: 'UserDefinedTypeName',
                        pathNode: {
                          id: 48196,
                          name: 'DerivativeProduct',
                          nameLocations: [ '4799:17:36' ],
                          nodeType: 'IdentifierPath',
                          referencedDeclaration: 48526,
                          src: '4799:17:36'
                        },
                        referencedDeclaration: 48526,
                        src: '4799:17:36',
                        typeDescriptions: {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                          typeString: 'contract DerivativeProduct'
                        }
                      }
                    },
                    id: 48209,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4795:131:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                      typeString: 'contract DerivativeProduct'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '4766:160:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48213,
                        name: 'newDeriv',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48195,
                        src: '4951:8:36',
                        typeDescriptions: {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                          typeString: 'contract DerivativeProduct'
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                          typeString: 'contract DerivativeProduct'
                        }
                      ],
                      id: 48212,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      nodeType: 'ElementaryTypeNameExpression',
                      src: '4943:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_type$_t_address_$',
                        typeString: 'type(address)'
                      },
                      typeName: {
                        id: 48211,
                        name: 'address',
                        nodeType: 'ElementaryTypeName',
                        src: '4943:7:36',
                        typeDescriptions: {}
                      }
                    },
                    id: 48214,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'typeConversion',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '4943:17:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  functionReturnParameters: 48169,
                  id: 48215,
                  nodeType: 'Return',
                  src: '4936:24:36'
                }
              ]
            },
            documentation: {
              id: 48161,
              nodeType: 'StructuredDocumentation',
              src: '4277:217:36',
              text: '@param tokenId The tokenID to which the Content is bound\n' +
                ' @param terms explain how the content will be used\n' +
                ' @return the adress of the new contract.\n' +
                ' @dev see the `DerivativeProduct` contract.'
            },
            functionSelector: '0d6314df',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'deriveToken',
            nameLocation: '4508:11:36',
            parameters: {
              id: 48166,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48163,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '4528:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48217,
                  src: '4520:15:36',
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
                    src: '4520:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48165,
                  mutability: 'mutable',
                  name: 'terms',
                  nameLocation: '4553:5:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48217,
                  src: '4537:21:36',
                  stateVariable: false,
                  storageLocation: 'calldata',
                  typeDescriptions: {
                    typeIdentifier: 't_string_calldata_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48164,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '4537:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '4519:40:36'
            },
            returnParameters: {
              id: 48169,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48168,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48217,
                  src: '4583:7:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 48167,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '4583:7:36',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '4582:9:36'
            },
            scope: 48296,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48263,
            nodeType: 'FunctionDefinition',
            src: '5290:334:36',
            nodes: [],
            body: {
              id: 48262,
              nodeType: 'Block',
              src: '5340:284:36',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    },
                    id: 48228,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      arguments: [
                        {
                          id: 48224,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48220,
                          src: '5361:7:36',
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
                        id: 48223,
                        name: 'ownerOf',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 45288,
                        src: '5353:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_internal_view$_t_uint256_$returns$_t_address_$',
                          typeString: 'function (uint256) view returns (address)'
                        }
                      },
                      id: 48225,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '5353:16:36',
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
                        id: 48226,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '5373:3:36',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48227,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '5377:6:36',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '5373:10:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    src: '5353:30:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48233,
                  nodeType: 'IfStatement',
                  src: '5350:76:36',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '6f776e65722063616e6e6f7420636f7369676e',
                          id: 48230,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '5404:21:36',
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
                        id: 48229,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '5397:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48231,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '5397:29:36',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48232,
                    nodeType: 'ExpressionStatement',
                    src: '5397:29:36'
                  }
                },
                {
                  condition: {
                    baseExpression: {
                      expression: {
                        baseExpression: {
                          id: 48234,
                          name: 'cosigners',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 47963,
                          src: '5439:9:36',
                          typeDescriptions: {
                            typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
                            typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                          }
                        },
                        id: 48236,
                        indexExpression: {
                          id: 48235,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48220,
                          src: '5449:7:36',
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
                        src: '5439:18:36',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_Cosigners_$47947_storage',
                          typeString: 'struct Cosigners storage ref'
                        }
                      },
                      id: 48237,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '5458:7:36',
                      memberName: 'signers',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 47946,
                      src: '5439:26:36',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                        typeString: 'mapping(address => bool)'
                      }
                    },
                    id: 48240,
                    indexExpression: {
                      expression: {
                        id: 48238,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '5466:3:36',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48239,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '5470:6:36',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '5466:10:36',
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
                    src: '5439:38:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48245,
                  nodeType: 'IfStatement',
                  src: '5436:90:36',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '63616e6e6f74207369676e207365766572616c2074696d6573',
                          id: 48242,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '5498:27:36',
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
                        id: 48241,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '5491:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
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
                      src: '5491:35:36',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48244,
                    nodeType: 'ExpressionStatement',
                    src: '5491:35:36'
                  }
                },
                {
                  expression: {
                    id: 48250,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: 'UnaryOperation',
                    operator: '++',
                    prefix: false,
                    src: '5536:26:36',
                    subExpression: {
                      expression: {
                        baseExpression: {
                          id: 48246,
                          name: 'cosigners',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 47963,
                          src: '5536:9:36',
                          typeDescriptions: {
                            typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
                            typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                          }
                        },
                        id: 48248,
                        indexExpression: {
                          id: 48247,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48220,
                          src: '5546:7:36',
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
                        src: '5536:18:36',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_Cosigners_$47947_storage',
                          typeString: 'struct Cosigners storage ref'
                        }
                      },
                      id: 48249,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      memberLocation: '5555:5:36',
                      memberName: 'total',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 47942,
                      src: '5536:24:36',
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
                  id: 48251,
                  nodeType: 'ExpressionStatement',
                  src: '5536:26:36'
                },
                {
                  expression: {
                    id: 48260,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        expression: {
                          baseExpression: {
                            id: 48252,
                            name: 'cosigners',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 47963,
                            src: '5572:9:36',
                            typeDescriptions: {
                              typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
                              typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                            }
                          },
                          id: 48254,
                          indexExpression: {
                            id: 48253,
                            name: 'tokenId',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48220,
                            src: '5582:7:36',
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
                          src: '5572:18:36',
                          typeDescriptions: {
                            typeIdentifier: 't_struct$_Cosigners_$47947_storage',
                            typeString: 'struct Cosigners storage ref'
                          }
                        },
                        id: 48255,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '5591:7:36',
                        memberName: 'signers',
                        nodeType: 'MemberAccess',
                        referencedDeclaration: 47946,
                        src: '5572:26:36',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                          typeString: 'mapping(address => bool)'
                        }
                      },
                      id: 48258,
                      indexExpression: {
                        expression: {
                          id: 48256,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '5599:3:36',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 48257,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '5603:6:36',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '5599:10:36',
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
                      src: '5572:38:36',
                      typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '74727565',
                      id: 48259,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'bool',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '5613:4:36',
                      typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                      value: 'true'
                    },
                    src: '5572:45:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48261,
                  nodeType: 'ExpressionStatement',
                  src: '5572:45:36'
                }
              ]
            },
            documentation: {
              id: 48218,
              nodeType: 'StructuredDocumentation',
              src: '4973:312:36',
              text: '@notice authorizes a third party to sign the token,\n' +
                ' increasing the authenticity of the content.\n' +
                ' This also makes it possible to draw up a written contract\n' +
                ' between two or more parties, enabling, for example, an\n' +
                ' agreement to pay debts.\n' +
                ' @param tokenId The tokenID to sign.'
            },
            functionSelector: '2fb1b25f',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'sign',
            nameLocation: '5299:4:36',
            parameters: {
              id: 48221,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48220,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '5312:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48263,
                  src: '5304:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48219,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '5304:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '5303:17:36'
            },
            returnParameters: {
              id: 48222,
              nodeType: 'ParameterList',
              parameters: [],
              src: '5340:0:36'
            },
            scope: 48296,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48281,
            nodeType: 'FunctionDefinition',
            src: '5891:153:36',
            nodes: [],
            body: {
              id: 48280,
              nodeType: 'Block',
              src: '5983:61:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    baseExpression: {
                      expression: {
                        baseExpression: {
                          id: 48273,
                          name: 'cosigners',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 47963,
                          src: '6000:9:36',
                          typeDescriptions: {
                            typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
                            typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                          }
                        },
                        id: 48275,
                        indexExpression: {
                          id: 48274,
                          name: 'tokenId',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48266,
                          src: '6010:7:36',
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
                        src: '6000:18:36',
                        typeDescriptions: {
                          typeIdentifier: 't_struct$_Cosigners_$47947_storage',
                          typeString: 'struct Cosigners storage ref'
                        }
                      },
                      id: 48276,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '6019:7:36',
                      memberName: 'signers',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 47946,
                      src: '6000:26:36',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_bool_$',
                        typeString: 'mapping(address => bool)'
                      }
                    },
                    id: 48278,
                    indexExpression: {
                      id: 48277,
                      name: 'candidate',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48268,
                      src: '6027:9:36',
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
                    src: '6000:37:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  functionReturnParameters: 48272,
                  id: 48279,
                  nodeType: 'Return',
                  src: '5993:44:36'
                }
              ]
            },
            documentation: {
              id: 48264,
              nodeType: 'StructuredDocumentation',
              src: '5630:256:36',
              text: '@notice Query if an address is cosigner of the content\n' +
                ' bound to a specific token\n' +
                ' @param tokenId The tokenID to which the Content is bound\n' +
                ' @param candidate The address to be checked\n' +
                ' @return true if the address is cosigner'
            },
            functionSelector: '48bcbd2d',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'isSigner',
            nameLocation: '5900:8:36',
            parameters: {
              id: 48269,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48266,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '5917:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48281,
                  src: '5909:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48265,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '5909:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48268,
                  mutability: 'mutable',
                  name: 'candidate',
                  nameLocation: '5934:9:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48281,
                  src: '5926:17:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address',
                    typeString: 'address'
                  },
                  typeName: {
                    id: 48267,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '5926:7:36',
                    stateMutability: 'nonpayable',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '5908:36:36'
            },
            returnParameters: {
              id: 48272,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48271,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48281,
                  src: '5973:4:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                  typeName: {
                    id: 48270,
                    name: 'bool',
                    nodeType: 'ElementaryTypeName',
                    src: '5973:4:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  visibility: 'internal'
                }
              ],
              src: '5972:6:36'
            },
            scope: 48296,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48295,
            nodeType: 'FunctionDefinition',
            src: '6234:130:36',
            nodes: [],
            body: {
              id: 48294,
              nodeType: 'Block',
              src: '6316:48:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    expression: {
                      baseExpression: {
                        id: 48289,
                        name: 'cosigners',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 47963,
                        src: '6333:9:36',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_uint256_$_t_struct$_Cosigners_$47947_storage_$',
                          typeString: 'mapping(uint256 => struct Cosigners storage ref)'
                        }
                      },
                      id: 48291,
                      indexExpression: {
                        id: 48290,
                        name: 'tokenId',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48284,
                        src: '6343:7:36',
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
                      src: '6333:18:36',
                      typeDescriptions: {
                        typeIdentifier: 't_struct$_Cosigners_$47947_storage',
                        typeString: 'struct Cosigners storage ref'
                      }
                    },
                    id: 48292,
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: '6352:5:36',
                    memberName: 'total',
                    nodeType: 'MemberAccess',
                    referencedDeclaration: 47942,
                    src: '6333:24:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  functionReturnParameters: 48288,
                  id: 48293,
                  nodeType: 'Return',
                  src: '6326:31:36'
                }
              ]
            },
            documentation: {
              id: 48282,
              nodeType: 'StructuredDocumentation',
              src: '6050:179:36',
              text: '@notice Query the number of cosigner of a specific token\n' +
                ' @param tokenId The tokenID to which the Content is bound\n' +
                ' @return the number of cosigner for this token'
            },
            functionSelector: '14257ff5',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'countCosigners',
            nameLocation: '6243:14:36',
            parameters: {
              id: 48285,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48284,
                  mutability: 'mutable',
                  name: 'tokenId',
                  nameLocation: '6266:7:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48295,
                  src: '6258:15:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48283,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '6258:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '6257:17:36'
            },
            returnParameters: {
              id: 48288,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48287,
                  mutability: 'mutable',
                  name: '',
                  nameLocation: '-1:-1:-1',
                  nodeType: 'VariableDeclaration',
                  scope: 48295,
                  src: '6303:7:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48286,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '6303:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '6302:9:36'
            },
            scope: 48296,
            stateMutability: 'view',
            virtual: false,
            visibility: 'public'
          }
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 47949,
              name: 'ERC721',
              nameLocations: [ '862:6:36' ],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 46155,
              src: '862:6:36'
            },
            id: 47950,
            nodeType: 'InheritanceSpecifier',
            src: '862:6:36'
          },
          {
            baseName: {
              id: 47951,
              name: 'ERC721URIStorage',
              nameLocations: [ '870:16:36' ],
              nodeType: 'IdentifierPath',
              referencedDeclaration: 46416,
              src: '870:16:36'
            },
            id: 47952,
            nodeType: 'InheritanceSpecifier',
            src: '870:16:36'
          }
        ],
        canonicalName: 'CryptoStamp',
        contractDependencies: [ 48526 ],
        contractKind: 'contract',
        documentation: {
          id: 47948,
          nodeType: 'StructuredDocumentation',
          src: '676:162:36',
          text: '@title CryptoStamp smart contract.\n' +
            ' @notice An ERC-721 contract aimed at protecting a writtng with an\n' +
            ' NFT on the blockchain.\n' +
            ' @author Mickaël Viey'
        },
        fullyImplemented: true,
        linearizedBaseContracts: [
          48296, 46416, 46155,
          45021, 46444, 44927,
          46272, 46753, 46765,
          46474
        ],
        name: 'CryptoStamp',
        nameLocation: '847:11:36',
        scope: 48527,
        usedErrors: [
          44979, 44984,
          44993, 44998,
          45003, 45010,
          45015, 45020
        ],
        usedEvents: [ 44919, 44926, 46171, 46180, 46189 ]
      },
      {
        id: 48301,
        nodeType: 'EnumDefinition',
        src: '6435:200:36',
        nodes: [],
        canonicalName: 'ContractStatus',
        documentation: {
          id: 48297,
          nodeType: 'StructuredDocumentation',
          src: '6369:66:36',
          text: '@notice represents the status of a DerivativeProduct contract'
        },
        members: [
          {
            id: 48298,
            name: 'InProgress',
            nameLocation: '6461:10:36',
            nodeType: 'EnumValue',
            src: '6461:10:36'
          },
          {
            id: 48299,
            name: 'Accepted',
            nameLocation: '6527:8:36',
            nodeType: 'EnumValue',
            src: '6527:8:36'
          },
          {
            id: 48300,
            name: 'Refused',
            nameLocation: '6584:7:36',
            nodeType: 'EnumValue',
            src: '6584:7:36'
          }
        ],
        name: 'ContractStatus',
        nameLocation: '6440:14:36'
      },
      {
        id: 48526,
        nodeType: 'ContractDefinition',
        src: '6638:2460:36',
        nodes: [
          {
            id: 48304,
            nodeType: 'VariableDeclaration',
            src: '6726:32:36',
            nodes: [],
            constant: false,
            documentation: {
              id: 48302,
              nodeType: 'StructuredDocumentation',
              src: '6672:49:36',
              text: '@notice the tokenId the contract is bound to.'
            },
            functionSelector: '17d70f7c',
            mutability: 'immutable',
            name: 'tokenId',
            nameLocation: '6751:7:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 48303,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '6726:7:36',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'public'
          },
          {
            id: 48307,
            nodeType: 'VariableDeclaration',
            src: '6804:38:36',
            nodes: [],
            constant: false,
            documentation: {
              id: 48305,
              nodeType: 'StructuredDocumentation',
              src: '6764:35:36',
              text: '@notice the owner of the token.'
            },
            functionSelector: '8da5cb5b',
            mutability: 'immutable',
            name: 'owner',
            nameLocation: '6837:5:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address_payable',
              typeString: 'address payable'
            },
            typeName: {
              id: 48306,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '6804:15:36',
              stateMutability: 'payable',
              typeDescriptions: {
                typeIdentifier: 't_address_payable',
                typeString: 'address payable'
              }
            },
            visibility: 'public'
          },
          {
            id: 48310,
            nodeType: 'VariableDeclaration',
            src: '6912:42:36',
            nodes: [],
            constant: false,
            documentation: {
              id: 48308,
              nodeType: 'StructuredDocumentation',
              src: '6848:59:36',
              text: '@notice the address of the claimant to the right of use'
            },
            functionSelector: '66d003ac',
            mutability: 'immutable',
            name: 'recipient',
            nameLocation: '6945:9:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_address_payable',
              typeString: 'address payable'
            },
            typeName: {
              id: 48309,
              name: 'address',
              nodeType: 'ElementaryTypeName',
              src: '6912:15:36',
              stateMutability: 'payable',
              typeDescriptions: {
                typeIdentifier: 't_address_payable',
                typeString: 'address payable'
              }
            },
            visibility: 'public'
          },
          {
            id: 48313,
            nodeType: 'VariableDeclaration',
            src: '6991:19:36',
            nodes: [],
            constant: false,
            documentation: {
              id: 48311,
              nodeType: 'StructuredDocumentation',
              src: '6960:26:36',
              text: '@notice terms of usage'
            },
            functionSelector: 'd5025625',
            mutability: 'mutable',
            name: 'terms',
            nameLocation: '7005:5:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_string_storage',
              typeString: 'string'
            },
            typeName: {
              id: 48312,
              name: 'string',
              nodeType: 'ElementaryTypeName',
              src: '6991:6:36',
              typeDescriptions: {
                typeIdentifier: 't_string_storage_ptr',
                typeString: 'string'
              }
            },
            visibility: 'public'
          },
          {
            id: 48316,
            nodeType: 'VariableDeclaration',
            src: '7075:27:36',
            nodes: [],
            constant: false,
            documentation: {
              id: 48314,
              nodeType: 'StructuredDocumentation',
              src: '7016:54:36',
              text: '@notice The amount paid to the owner if he accepts'
            },
            functionSelector: 'ad7a672f',
            mutability: 'mutable',
            name: 'totalBalance',
            nameLocation: '7090:12:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' },
            typeName: {
              id: 48315,
              name: 'uint256',
              nodeType: 'ElementaryTypeName',
              src: '7075:7:36',
              typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
            },
            visibility: 'public'
          },
          {
            id: 48320,
            nodeType: 'VariableDeclaration',
            src: '7108:32:36',
            nodes: [],
            constant: false,
            mutability: 'mutable',
            name: 'bids',
            nameLocation: '7136:4:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
              typeString: 'mapping(address => uint256)'
            },
            typeName: {
              id: 48319,
              keyName: '',
              keyNameLocation: '-1:-1:-1',
              keyType: {
                id: 48317,
                name: 'address',
                nodeType: 'ElementaryTypeName',
                src: '7116:7:36',
                typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
              },
              nodeType: 'Mapping',
              src: '7108:27:36',
              typeDescriptions: {
                typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                typeString: 'mapping(address => uint256)'
              },
              valueName: '',
              valueNameLocation: '-1:-1:-1',
              valueType: {
                id: 48318,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '7127:7:36',
                typeDescriptions: { typeIdentifier: 't_uint256', typeString: 'uint256' }
              }
            },
            visibility: 'internal'
          },
          {
            id: 48323,
            nodeType: 'VariableDeclaration',
            src: '7147:28:36',
            nodes: [],
            constant: false,
            functionSelector: '200d2ed2',
            mutability: 'mutable',
            name: 'status',
            nameLocation: '7169:6:36',
            scope: 48526,
            stateVariable: true,
            storageLocation: 'default',
            typeDescriptions: {
              typeIdentifier: 't_enum$_ContractStatus_$48301',
              typeString: 'enum ContractStatus'
            },
            typeName: {
              id: 48322,
              nodeType: 'UserDefinedTypeName',
              pathNode: {
                id: 48321,
                name: 'ContractStatus',
                nameLocations: [ '7147:14:36' ],
                nodeType: 'IdentifierPath',
                referencedDeclaration: 48301,
                src: '7147:14:36'
              },
              referencedDeclaration: 48301,
              src: '7147:14:36',
              typeDescriptions: {
                typeIdentifier: 't_enum$_ContractStatus_$48301',
                typeString: 'enum ContractStatus'
              }
            },
            visibility: 'public'
          },
          {
            id: 48375,
            nodeType: 'FunctionDefinition',
            src: '7182:419:36',
            nodes: [],
            body: {
              id: 48374,
              nodeType: 'Block',
              src: '7324:277:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        id: 48340,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 48335,
                          name: 'owner_',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48327,
                          src: '7342:6:36',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '!=',
                        rightExpression: {
                          arguments: [
                            {
                              hexValue: '30',
                              id: 48338,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '7360:1:36',
                              typeDescriptions: {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              },
                              value: '0'
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              }
                            ],
                            id: 48337,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '7352:7:36',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_$',
                              typeString: 'type(address)'
                            },
                            typeName: {
                              id: 48336,
                              name: 'address',
                              nodeType: 'ElementaryTypeName',
                              src: '7352:7:36',
                              typeDescriptions: {}
                            }
                          },
                          id: 48339,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '7352:10:36',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        src: '7342:20:36',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      },
                      {
                        hexValue: '696e76616c6964206f776e65722061646472657373',
                        id: 48341,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '7364:23:36',
                        typeDescriptions: {
                          typeIdentifier: 't_stringliteral_096e7136b7c57bd8569fdbf319cbfc4e25d63e415c3fa5e0b1e0424c8fe790bd',
                          typeString: 'literal_string "invalid owner address"'
                        },
                        value: 'invalid owner address'
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        },
                        {
                          typeIdentifier: 't_stringliteral_096e7136b7c57bd8569fdbf319cbfc4e25d63e415c3fa5e0b1e0424c8fe790bd',
                          typeString: 'literal_string "invalid owner address"'
                        }
                      ],
                      id: 48334,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '7334:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (bool,string memory) pure'
                      }
                    },
                    id: 48342,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '7334:54:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48343,
                  nodeType: 'ExpressionStatement',
                  src: '7334:54:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_address',
                          typeString: 'address'
                        },
                        id: 48350,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 48345,
                          name: 'recipient_',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48329,
                          src: '7406:10:36',
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '!=',
                        rightExpression: {
                          arguments: [
                            {
                              hexValue: '30',
                              id: 48348,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '7428:1:36',
                              typeDescriptions: {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              },
                              value: '0'
                            }
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0'
                              }
                            ],
                            id: 48347,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '7420:7:36',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_$',
                              typeString: 'type(address)'
                            },
                            typeName: {
                              id: 48346,
                              name: 'address',
                              nodeType: 'ElementaryTypeName',
                              src: '7420:7:36',
                              typeDescriptions: {}
                            }
                          },
                          id: 48349,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '7420:10:36',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        src: '7406:24:36',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      },
                      {
                        hexValue: '696e76616c696420726563697069656e742061646472657373',
                        id: 48351,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '7432:27:36',
                        typeDescriptions: {
                          typeIdentifier: 't_stringliteral_33381e06fa894e1567a62eb0564225fe395282d25975f1fad0d4c1cc234a87cb',
                          typeString: 'literal_string "invalid recipient address"'
                        },
                        value: 'invalid recipient address'
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        },
                        {
                          typeIdentifier: 't_stringliteral_33381e06fa894e1567a62eb0564225fe395282d25975f1fad0d4c1cc234a87cb',
                          typeString: 'literal_string "invalid recipient address"'
                        }
                      ],
                      id: 48344,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '7398:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (bool,string memory) pure'
                      }
                    },
                    id: 48352,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '7398:62:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48353,
                  nodeType: 'ExpressionStatement',
                  src: '7398:62:36'
                },
                {
                  expression: {
                    id: 48356,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48354,
                      name: 'terms',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48313,
                      src: '7470:5:36',
                      typeDescriptions: {
                        typeIdentifier: 't_string_storage',
                        typeString: 'string storage ref'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48355,
                      name: 'terms_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48331,
                      src: '7478:6:36',
                      typeDescriptions: {
                        typeIdentifier: 't_string_memory_ptr',
                        typeString: 'string memory'
                      }
                    },
                    src: '7470:14:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage',
                      typeString: 'string storage ref'
                    }
                  },
                  id: 48357,
                  nodeType: 'ExpressionStatement',
                  src: '7470:14:36'
                },
                {
                  expression: {
                    id: 48360,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48358,
                      name: 'tokenId',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48304,
                      src: '7494:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48359,
                      name: 'tokenId_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48325,
                      src: '7504:8:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '7494:18:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48361,
                  nodeType: 'ExpressionStatement',
                  src: '7494:18:36'
                },
                {
                  expression: {
                    id: 48364,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48362,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48307,
                      src: '7522:5:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48363,
                      name: 'owner_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48327,
                      src: '7530:6:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '7522:14:36',
                    typeDescriptions: {
                      typeIdentifier: 't_address_payable',
                      typeString: 'address payable'
                    }
                  },
                  id: 48365,
                  nodeType: 'ExpressionStatement',
                  src: '7522:14:36'
                },
                {
                  expression: {
                    id: 48368,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48366,
                      name: 'recipient',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48310,
                      src: '7546:9:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      id: 48367,
                      name: 'recipient_',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48329,
                      src: '7558:10:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '7546:22:36',
                    typeDescriptions: {
                      typeIdentifier: 't_address_payable',
                      typeString: 'address payable'
                    }
                  },
                  id: 48369,
                  nodeType: 'ExpressionStatement',
                  src: '7546:22:36'
                },
                {
                  expression: {
                    id: 48372,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48370,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48316,
                      src: '7578:12:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '30',
                      id: 48371,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '7593:1:36',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '7578:16:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48373,
                  nodeType: 'ExpressionStatement',
                  src: '7578:16:36'
                }
              ]
            },
            implemented: true,
            kind: 'constructor',
            modifiers: [],
            name: '',
            nameLocation: '-1:-1:-1',
            parameters: {
              id: 48332,
              nodeType: 'ParameterList',
              parameters: [
                {
                  constant: false,
                  id: 48325,
                  mutability: 'mutable',
                  name: 'tokenId_',
                  nameLocation: '7211:8:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48375,
                  src: '7203:16:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_uint256',
                    typeString: 'uint256'
                  },
                  typeName: {
                    id: 48324,
                    name: 'uint256',
                    nodeType: 'ElementaryTypeName',
                    src: '7203:7:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  visibility: 'internal'
                },
                {
                  constant: false,
                  id: 48327,
                  mutability: 'mutable',
                  name: 'owner_',
                  nameLocation: '7245:6:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48375,
                  src: '7229:22:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address_payable',
                    typeString: 'address payable'
                  },
                  typeName: {
                    id: 48326,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '7229:15:36',
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
                  id: 48329,
                  mutability: 'mutable',
                  name: 'recipient_',
                  nameLocation: '7277:10:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48375,
                  src: '7261:26:36',
                  stateVariable: false,
                  storageLocation: 'default',
                  typeDescriptions: {
                    typeIdentifier: 't_address_payable',
                    typeString: 'address payable'
                  },
                  typeName: {
                    id: 48328,
                    name: 'address',
                    nodeType: 'ElementaryTypeName',
                    src: '7261:15:36',
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
                  id: 48331,
                  mutability: 'mutable',
                  name: 'terms_',
                  nameLocation: '7311:6:36',
                  nodeType: 'VariableDeclaration',
                  scope: 48375,
                  src: '7297:20:36',
                  stateVariable: false,
                  storageLocation: 'memory',
                  typeDescriptions: {
                    typeIdentifier: 't_string_memory_ptr',
                    typeString: 'string'
                  },
                  typeName: {
                    id: 48330,
                    name: 'string',
                    nodeType: 'ElementaryTypeName',
                    src: '7297:6:36',
                    typeDescriptions: {
                      typeIdentifier: 't_string_storage_ptr',
                      typeString: 'string'
                    }
                  },
                  visibility: 'internal'
                }
              ],
              src: '7193:130:36'
            },
            returnParameters: {
              id: 48333,
              nodeType: 'ParameterList',
              parameters: [],
              src: '7324:0:36'
            },
            scope: 48526,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48388,
            nodeType: 'ModifierDefinition',
            src: '7607:117:36',
            nodes: [],
            body: {
              id: 48387,
              nodeType: 'Block',
              src: '7631:93:36',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_enum$_ContractStatus_$48301',
                      typeString: 'enum ContractStatus'
                    },
                    id: 48380,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 48377,
                      name: 'status',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48323,
                      src: '7644:6:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48301',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '!=',
                    rightExpression: {
                      expression: {
                        id: 48378,
                        name: 'ContractStatus',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48301,
                        src: '7654:14:36',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_enum$_ContractStatus_$48301_$',
                          typeString: 'type(enum ContractStatus)'
                        }
                      },
                      id: 48379,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '7669:10:36',
                      memberName: 'InProgress',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48298,
                      src: '7654:25:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48301',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    src: '7644:35:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48385,
                  nodeType: 'IfStatement',
                  src: '7641:65:36',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '62696464696e67206973206f766572',
                          id: 48382,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '7688:17:36',
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
                        id: 48381,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '7681:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48383,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '7681:25:36',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48384,
                    nodeType: 'ExpressionStatement',
                    src: '7681:25:36'
                  }
                },
                {
                  id: 48386,
                  nodeType: 'PlaceholderStatement',
                  src: '7716:1:36'
                }
              ]
            },
            name: 'whenInProgress',
            nameLocation: '7616:14:36',
            parameters: {
              id: 48376,
              nodeType: 'ParameterList',
              parameters: [],
              src: '7631:0:36'
            },
            virtual: false,
            visibility: 'internal'
          },
          {
            id: 48401,
            nodeType: 'ModifierDefinition',
            src: '7730:94:36',
            nodes: [],
            body: {
              id: 48400,
              nodeType: 'Block',
              src: '7749:75:36',
              nodes: [],
              statements: [
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_address',
                      typeString: 'address'
                    },
                    id: 48393,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      expression: {
                        id: 48390,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '7762:3:36',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48391,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '7766:6:36',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '7762:10:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '!=',
                    rightExpression: {
                      id: 48392,
                      name: 'owner',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48307,
                      src: '7776:5:36',
                      typeDescriptions: {
                        typeIdentifier: 't_address_payable',
                        typeString: 'address payable'
                      }
                    },
                    src: '7762:19:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48398,
                  nodeType: 'IfStatement',
                  src: '7759:47:36',
                  trueBody: {
                    expression: {
                      arguments: [
                        {
                          hexValue: '6e6f7420746865206f776e6572',
                          id: 48395,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '7790:15:36',
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
                        id: 48394,
                        name: 'revert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [ -19, -19 ],
                        referencedDeclaration: -19,
                        src: '7783:6:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_revert_pure$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (string memory) pure'
                        }
                      },
                      id: 48396,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '7783:23:36',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()'
                      }
                    },
                    id: 48397,
                    nodeType: 'ExpressionStatement',
                    src: '7783:23:36'
                  }
                },
                {
                  id: 48399,
                  nodeType: 'PlaceholderStatement',
                  src: '7816:1:36'
                }
              ]
            },
            name: 'onlyOwner',
            nameLocation: '7739:9:36',
            parameters: {
              id: 48389,
              nodeType: 'ParameterList',
              parameters: [],
              src: '7749:0:36'
            },
            virtual: false,
            visibility: 'internal'
          },
          {
            id: 48424,
            nodeType: 'FunctionDefinition',
            src: '7897:159:36',
            nodes: [],
            body: {
              id: 48423,
              nodeType: 'Block',
              src: '7942:114:36',
              nodes: [],
              statements: [
                {
                  assignments: [ 48408 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48408,
                      mutability: 'mutable',
                      name: 'ammount',
                      nameLocation: '7960:7:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48423,
                      src: '7952:15:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48407,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '7952:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48411,
                  initialValue: {
                    expression: {
                      id: 48409,
                      name: 'msg',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: -15,
                      src: '7970:3:36',
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
                    memberLocation: '7974:5:36',
                    memberName: 'value',
                    nodeType: 'MemberAccess',
                    src: '7970:9:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '7952:27:36'
                },
                {
                  expression: {
                    id: 48417,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 48412,
                        name: 'bids',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48320,
                        src: '7989:4:36',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 48415,
                      indexExpression: {
                        expression: {
                          id: 48413,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '7994:3:36',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 48414,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '7998:6:36',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '7994:10:36',
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
                      src: '7989:16:36',
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
                      referencedDeclaration: 48408,
                      src: '8009:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '7989:27:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48418,
                  nodeType: 'ExpressionStatement',
                  src: '7989:27:36'
                },
                {
                  expression: {
                    id: 48421,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48419,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48316,
                      src: '8026:12:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '+=',
                    rightHandSide: {
                      id: 48420,
                      name: 'ammount',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48408,
                      src: '8042:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '8026:23:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48422,
                  nodeType: 'ExpressionStatement',
                  src: '8026:23:36'
                }
              ]
            },
            documentation: {
              id: 48402,
              nodeType: 'StructuredDocumentation',
              src: '7830:62:36',
              text: '@notice allows supporters of the project to pay for usage.'
            },
            functionSelector: '1998aeef',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 48405,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48404,
                  name: 'whenInProgress',
                  nameLocations: [ '7927:14:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48388,
                  src: '7927:14:36'
                },
                nodeType: 'ModifierInvocation',
                src: '7927:14:36'
              }
            ],
            name: 'bid',
            nameLocation: '7906:3:36',
            parameters: {
              id: 48403,
              nodeType: 'ParameterList',
              parameters: [],
              src: '7909:2:36'
            },
            returnParameters: {
              id: 48406,
              nodeType: 'ParameterList',
              parameters: [],
              src: '7942:0:36'
            },
            scope: 48526,
            stateMutability: 'payable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48478,
            nodeType: 'FunctionDefinition',
            src: '8213:343:36',
            nodes: [],
            body: {
              id: 48477,
              nodeType: 'Block',
              src: '8240:316:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_enum$_ContractStatus_$48301',
                          typeString: 'enum ContractStatus'
                        },
                        id: 48432,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 48429,
                          name: 'status',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48323,
                          src: '8258:6:36',
                          typeDescriptions: {
                            typeIdentifier: 't_enum$_ContractStatus_$48301',
                            typeString: 'enum ContractStatus'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '!=',
                        rightExpression: {
                          expression: {
                            id: 48430,
                            name: 'ContractStatus',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48301,
                            src: '8268:14:36',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_enum$_ContractStatus_$48301_$',
                              typeString: 'type(enum ContractStatus)'
                            }
                          },
                          id: 48431,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          memberLocation: '8283:8:36',
                          memberName: 'Accepted',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: 48299,
                          src: '8268:23:36',
                          typeDescriptions: {
                            typeIdentifier: 't_enum$_ContractStatus_$48301',
                            typeString: 'enum ContractStatus'
                          }
                        },
                        src: '8258:33:36',
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
                      id: 48428,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '8250:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 48433,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '8250:42:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48434,
                  nodeType: 'ExpressionStatement',
                  src: '8250:42:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        },
                        id: 48441,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          baseExpression: {
                            id: 48436,
                            name: 'bids',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48320,
                            src: '8310:4:36',
                            typeDescriptions: {
                              typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                              typeString: 'mapping(address => uint256)'
                            }
                          },
                          id: 48439,
                          indexExpression: {
                            expression: {
                              id: 48437,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: -15,
                              src: '8315:3:36',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg'
                              }
                            },
                            id: 48438,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: '8319:6:36',
                            memberName: 'sender',
                            nodeType: 'MemberAccess',
                            src: '8315:10:36',
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
                          src: '8310:16:36',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        nodeType: 'BinaryOperation',
                        operator: '>',
                        rightExpression: {
                          hexValue: '30',
                          id: 48440,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'number',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '8329:1:36',
                          typeDescriptions: {
                            typeIdentifier: 't_rational_0_by_1',
                            typeString: 'int_const 0'
                          },
                          value: '0'
                        },
                        src: '8310:20:36',
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
                      id: 48435,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '8302:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$returns$__$',
                        typeString: 'function (bool) pure'
                      }
                    },
                    id: 48442,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '8302:29:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48443,
                  nodeType: 'ExpressionStatement',
                  src: '8302:29:36'
                },
                {
                  assignments: [ 48445 ],
                  declarations: [
                    {
                      constant: false,
                      id: 48445,
                      mutability: 'mutable',
                      name: 'ammount',
                      nameLocation: '8349:7:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48477,
                      src: '8341:15:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      },
                      typeName: {
                        id: 48444,
                        name: 'uint256',
                        nodeType: 'ElementaryTypeName',
                        src: '8341:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256'
                        }
                      },
                      visibility: 'internal'
                    }
                  ],
                  id: 48450,
                  initialValue: {
                    baseExpression: {
                      id: 48446,
                      name: 'bids',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48320,
                      src: '8359:4:36',
                      typeDescriptions: {
                        typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                        typeString: 'mapping(address => uint256)'
                      }
                    },
                    id: 48449,
                    indexExpression: {
                      expression: {
                        id: 48447,
                        name: 'msg',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: -15,
                        src: '8364:3:36',
                        typeDescriptions: {
                          typeIdentifier: 't_magic_message',
                          typeString: 'msg'
                        }
                      },
                      id: 48448,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: '8368:6:36',
                      memberName: 'sender',
                      nodeType: 'MemberAccess',
                      src: '8364:10:36',
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
                    src: '8359:16:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '8341:34:36'
                },
                {
                  expression: {
                    id: 48453,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48451,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48316,
                      src: '8385:12:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '-=',
                    rightHandSide: {
                      id: 48452,
                      name: 'ammount',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48445,
                      src: '8401:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    src: '8385:23:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48454,
                  nodeType: 'ExpressionStatement',
                  src: '8385:23:36'
                },
                {
                  expression: {
                    id: 48460,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 48455,
                        name: 'bids',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48320,
                        src: '8418:4:36',
                        typeDescriptions: {
                          typeIdentifier: 't_mapping$_t_address_$_t_uint256_$',
                          typeString: 'mapping(address => uint256)'
                        }
                      },
                      id: 48458,
                      indexExpression: {
                        expression: {
                          id: 48456,
                          name: 'msg',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: -15,
                          src: '8423:3:36',
                          typeDescriptions: {
                            typeIdentifier: 't_magic_message',
                            typeString: 'msg'
                          }
                        },
                        id: 48457,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '8427:6:36',
                        memberName: 'sender',
                        nodeType: 'MemberAccess',
                        src: '8423:10:36',
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
                      src: '8418:16:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      hexValue: '30',
                      id: 48459,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '8437:1:36',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '8418:20:36',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    }
                  },
                  id: 48461,
                  nodeType: 'ExpressionStatement',
                  src: '8418:20:36'
                },
                {
                  assignments: [ 48463, null ],
                  declarations: [
                    {
                      constant: false,
                      id: 48463,
                      mutability: 'mutable',
                      name: 'success',
                      nameLocation: '8454:7:36',
                      nodeType: 'VariableDeclaration',
                      scope: 48477,
                      src: '8449:12:36',
                      stateVariable: false,
                      storageLocation: 'default',
                      typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' },
                      typeName: {
                        id: 48462,
                        name: 'bool',
                        nodeType: 'ElementaryTypeName',
                        src: '8449:4:36',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      },
                      visibility: 'internal'
                    },
                    null
                  ],
                  id: 48471,
                  initialValue: {
                    arguments: [
                      {
                        hexValue: '',
                        id: 48469,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '8498:2:36',
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
                            id: 48464,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: -15,
                            src: '8466:3:36',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg'
                            }
                          },
                          id: 48465,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: '8470:6:36',
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '8466:10:36',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address'
                          }
                        },
                        id: 48466,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: '8477:4:36',
                        memberName: 'call',
                        nodeType: 'MemberAccess',
                        src: '8466:15:36',
                        typeDescriptions: {
                          typeIdentifier: 't_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$',
                          typeString: 'function (bytes memory) payable returns (bool,bytes memory)'
                        }
                      },
                      id: 48468,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      names: [ 'value' ],
                      nodeType: 'FunctionCallOptions',
                      options: [
                        {
                          id: 48467,
                          name: 'ammount',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 48445,
                          src: '8489:7:36',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        }
                      ],
                      src: '8466:31:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value',
                        typeString: 'function (bytes memory) payable returns (bool,bytes memory)'
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
                    src: '8466:35:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$_t_bool_$_t_bytes_memory_ptr_$',
                      typeString: 'tuple(bool,bytes memory)'
                    }
                  },
                  nodeType: 'VariableDeclarationStatement',
                  src: '8448:53:36'
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 48473,
                        name: 'success',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48463,
                        src: '8520:7:36',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool'
                        }
                      },
                      {
                        hexValue: '7472616e7366657274206661696c6c6564',
                        id: 48474,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: 'string',
                        lValueRequested: false,
                        nodeType: 'Literal',
                        src: '8529:19:36',
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
                      id: 48472,
                      name: 'require',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [ -18, -18 ],
                      referencedDeclaration: -18,
                      src: '8511:7:36',
                      typeDescriptions: {
                        typeIdentifier: 't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                        typeString: 'function (bool,string memory) pure'
                      }
                    },
                    id: 48475,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: 'functionCall',
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: 'FunctionCall',
                    src: '8511:38:36',
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: 't_tuple$__$',
                      typeString: 'tuple()'
                    }
                  },
                  id: 48476,
                  nodeType: 'ExpressionStatement',
                  src: '8511:38:36'
                }
              ]
            },
            documentation: {
              id: 48425,
              nodeType: 'StructuredDocumentation',
              src: '8062:146:36',
              text: '@notice allows supporters to withdraw his contribution.\n' +
                ' bidders can withdraw only when the contract is\n' +
                ' in progress or refused.'
            },
            functionSelector: '3ccfd60b',
            implemented: true,
            kind: 'function',
            modifiers: [],
            name: 'withdraw',
            nameLocation: '8222:8:36',
            parameters: {
              id: 48426,
              nodeType: 'ParameterList',
              parameters: [],
              src: '8230:2:36'
            },
            returnParameters: {
              id: 48427,
              nodeType: 'ParameterList',
              parameters: [],
              src: '8240:0:36'
            },
            scope: 48526,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48511,
            nodeType: 'FunctionDefinition',
            src: '8714:222:36',
            nodes: [],
            body: {
              id: 48510,
              nodeType: 'Block',
              src: '8764:172:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 48489,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48486,
                      name: 'status',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48323,
                      src: '8774:6:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48301',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      expression: {
                        id: 48487,
                        name: 'ContractStatus',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48301,
                        src: '8783:14:36',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_enum$_ContractStatus_$48301_$',
                          typeString: 'type(enum ContractStatus)'
                        }
                      },
                      id: 48488,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '8798:8:36',
                      memberName: 'Accepted',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48299,
                      src: '8783:23:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48301',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    src: '8774:32:36',
                    typeDescriptions: {
                      typeIdentifier: 't_enum$_ContractStatus_$48301',
                      typeString: 'enum ContractStatus'
                    }
                  },
                  id: 48490,
                  nodeType: 'ExpressionStatement',
                  src: '8774:32:36'
                },
                {
                  condition: {
                    commonType: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256'
                    },
                    id: 48493,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      id: 48491,
                      name: 'totalBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48316,
                      src: '8820:12:36',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256'
                      }
                    },
                    nodeType: 'BinaryOperation',
                    operator: '>',
                    rightExpression: {
                      hexValue: '30',
                      id: 48492,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: 'number',
                      lValueRequested: false,
                      nodeType: 'Literal',
                      src: '8835:1:36',
                      typeDescriptions: {
                        typeIdentifier: 't_rational_0_by_1',
                        typeString: 'int_const 0'
                      },
                      value: '0'
                    },
                    src: '8820:16:36',
                    typeDescriptions: { typeIdentifier: 't_bool', typeString: 'bool' }
                  },
                  id: 48509,
                  nodeType: 'IfStatement',
                  src: '8816:114:36',
                  trueBody: {
                    id: 48508,
                    nodeType: 'Block',
                    src: '8838:92:36',
                    statements: [
                      {
                        expression: {
                          id: 48496,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 48494,
                            name: 'totalBalance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 48316,
                            src: '8852:12:36',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256'
                            }
                          },
                          nodeType: 'Assignment',
                          operator: '=',
                          rightHandSide: {
                            hexValue: '30',
                            id: 48495,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'number',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '8867:1:36',
                            typeDescriptions: {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0'
                            },
                            value: '0'
                          },
                          src: '8852:16:36',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256'
                          }
                        },
                        id: 48497,
                        nodeType: 'ExpressionStatement',
                        src: '8852:16:36'
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    id: 48503,
                                    name: 'this',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: -28,
                                    src: '8905:4:36',
                                    typeDescriptions: {
                                      typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                                      typeString: 'contract DerivativeProduct'
                                    }
                                  }
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: 't_contract$_DerivativeProduct_$48526',
                                      typeString: 'contract DerivativeProduct'
                                    }
                                  ],
                                  id: 48502,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: 'ElementaryTypeNameExpression',
                                  src: '8897:7:36',
                                  typeDescriptions: {
                                    typeIdentifier: 't_type$_t_address_$',
                                    typeString: 'type(address)'
                                  },
                                  typeName: {
                                    id: 48501,
                                    name: 'address',
                                    nodeType: 'ElementaryTypeName',
                                    src: '8897:7:36',
                                    typeDescriptions: {}
                                  }
                                },
                                id: 48504,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: 'typeConversion',
                                lValueRequested: false,
                                nameLocations: [],
                                names: [],
                                nodeType: 'FunctionCall',
                                src: '8897:13:36',
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: 't_address',
                                  typeString: 'address'
                                }
                              },
                              id: 48505,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberLocation: '8911:7:36',
                              memberName: 'balance',
                              nodeType: 'MemberAccess',
                              src: '8897:21:36',
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
                              id: 48498,
                              name: 'owner',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 48307,
                              src: '8882:5:36',
                              typeDescriptions: {
                                typeIdentifier: 't_address_payable',
                                typeString: 'address payable'
                              }
                            },
                            id: 48500,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberLocation: '8888:8:36',
                            memberName: 'transfer',
                            nodeType: 'MemberAccess',
                            src: '8882:14:36',
                            typeDescriptions: {
                              typeIdentifier: 't_function_transfer_nonpayable$_t_uint256_$returns$__$',
                              typeString: 'function (uint256)'
                            }
                          },
                          id: 48506,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: 'functionCall',
                          lValueRequested: false,
                          nameLocations: [],
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '8882:37:36',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_tuple$__$',
                            typeString: 'tuple()'
                          }
                        },
                        id: 48507,
                        nodeType: 'ExpressionStatement',
                        src: '8882:37:36'
                      }
                    ]
                  }
                }
              ]
            },
            documentation: {
              id: 48479,
              nodeType: 'StructuredDocumentation',
              src: '8562:147:36',
              text: '@notice call by the owner to accept the usage.\n' +
                ' if contribution was sent on the contract the ammount\n' +
                ' is transfered to the owner.'
            },
            functionSelector: '2852b71c',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 48482,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48481,
                  name: 'onlyOwner',
                  nameLocations: [ '8739:9:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48401,
                  src: '8739:9:36'
                },
                nodeType: 'ModifierInvocation',
                src: '8739:9:36'
              },
              {
                id: 48484,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48483,
                  name: 'whenInProgress',
                  nameLocations: [ '8749:14:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48388,
                  src: '8749:14:36'
                },
                nodeType: 'ModifierInvocation',
                src: '8749:14:36'
              }
            ],
            name: 'accept',
            nameLocation: '8723:6:36',
            parameters: {
              id: 48480,
              nodeType: 'ParameterList',
              parameters: [],
              src: '8729:2:36'
            },
            returnParameters: {
              id: 48485,
              nodeType: 'ParameterList',
              parameters: [],
              src: '8764:0:36'
            },
            scope: 48526,
            stateMutability: 'nonpayable',
            virtual: false,
            visibility: 'public'
          },
          {
            id: 48525,
            nodeType: 'FunctionDefinition',
            src: '8997:98:36',
            nodes: [],
            body: {
              id: 48524,
              nodeType: 'Block',
              src: '9047:48:36',
              nodes: [],
              statements: [
                {
                  expression: {
                    id: 48522,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 48519,
                      name: 'status',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 48323,
                      src: '9057:6:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48301',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    nodeType: 'Assignment',
                    operator: '=',
                    rightHandSide: {
                      expression: {
                        id: 48520,
                        name: 'ContractStatus',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 48301,
                        src: '9066:14:36',
                        typeDescriptions: {
                          typeIdentifier: 't_type$_t_enum$_ContractStatus_$48301_$',
                          typeString: 'type(enum ContractStatus)'
                        }
                      },
                      id: 48521,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      lValueRequested: false,
                      memberLocation: '9081:7:36',
                      memberName: 'Refused',
                      nodeType: 'MemberAccess',
                      referencedDeclaration: 48300,
                      src: '9066:22:36',
                      typeDescriptions: {
                        typeIdentifier: 't_enum$_ContractStatus_$48301',
                        typeString: 'enum ContractStatus'
                      }
                    },
                    src: '9057:31:36',
                    typeDescriptions: {
                      typeIdentifier: 't_enum$_ContractStatus_$48301',
                      typeString: 'enum ContractStatus'
                    }
                  },
                  id: 48523,
                  nodeType: 'ExpressionStatement',
                  src: '9057:31:36'
                }
              ]
            },
            documentation: {
              id: 48512,
              nodeType: 'StructuredDocumentation',
              src: '8942:50:36',
              text: '@notice call by the owner to refuse the usage.'
            },
            functionSelector: '62c69b80',
            implemented: true,
            kind: 'function',
            modifiers: [
              {
                id: 48515,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48514,
                  name: 'onlyOwner',
                  nameLocations: [ '9022:9:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48401,
                  src: '9022:9:36'
                },
                nodeType: 'ModifierInvocation',
                src: '9022:9:36'
              },
              {
                id: 48517,
                kind: 'modifierInvocation',
                modifierName: {
                  id: 48516,
                  name: 'whenInProgress',
                  nameLocations: [ '9032:14:36' ],
                  nodeType: 'IdentifierPath',
                  referencedDeclaration: 48388,
                  src: '9032:14:36'
                },
                nodeType: 'ModifierInvocation',
                src: '9032:14:36'
              }
            ],
            name: 'refuse',
            nameLocation: '9006:6:36',
            parameters: {
              id: 48513,
              nodeType: 'ParameterList',
              parameters: [],
              src: '9012:2:36'
            },
            returnParameters: {
              id: 48518,
              nodeType: 'ParameterList',
              parameters: [],
              src: '9047:0:36'
            },
            scope: 48526,
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
        linearizedBaseContracts: [ 48526 ],
        name: 'DerivativeProduct',
        nameLocation: '6647:17:36',
        scope: 48527,
        usedErrors: [],
        usedEvents: []
      }
    ],
    license: 'MIT'
  },
  id: 36
}

export default derivativeProductData;