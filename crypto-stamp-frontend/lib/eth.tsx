"use client"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  localhost,
  mainnet,
  sepolia,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

export default function Connect({children} : {children: React.ReactNode})
        : React.ReactNode {
    const isLocal = process.env.NEXT_PUBLIC_LOCAL == '1';
    const hasKey = Boolean(process.env.ALCHEMY_ID);
    if (isLocal || hasKey ) {
      const getProvider = () : Array<any> => [ 
        publicProvider(),  
        ...(
          process.env.NEXT_PUBLIC_LOCAL === '1'
          ? [
              publicProvider(),
              jsonRpcProvider(
                {  
                  rpc: (chain) => {
                    return {http: "http://localhost:8545", webSocket: "http://localhost:8545"}
                  }
                }
                )
            ]
          : hasKey
          // @ts-ignore 
            ? [ alchemyProvider({ apiKey: process.env.ALCHEMY_ID }) ] 
            : []
      )
    ];
  
      const { chains, publicClient } = configureChains(
        [ isLocal
          ? localhost 
          : process.env.NEXT_PUBLIC_TEST == '1' 
            ? sepolia 
            : mainnet
        ],
        getProvider()
      );
  
      const { connectors } = getDefaultWallets({
        appName: 'Voting 3.0',
        projectId: '57c4d2ac5f514e35f7b96e549ecf887d',
        chains
      });
  
      const wagmiConfig = createConfig({
        autoConnect: false,
        connectors,
        publicClient
      })
      
      return <>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </>
    } else return <p className="error">No chain configured !</p>
  }