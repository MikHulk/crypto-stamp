import '../styles.css';

import { Flex, VStack, Heading, Spacer  } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  localhost,
  sepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import StyleIt from '@/lib/SyleIt';


function getConfig() {
  function configure(chainString : string|undefined) {
    const availableChains = {
      "localhost": localhost,
      "mainnet": mainnet,
      "sepolia": sepolia
    }
    // @ts-ignore
    const chain = availableChains[chainString];
    if(chain) {
      const { chains, publicClient, webSocketPublicClient } = configureChains(
        [
          chain,
        ],
        [publicProvider()]
      );
      
      const { connectors } = getDefaultWallets({
        appName: 'CryptoStamp',
        projectId: '9998c9182ff85120dfa92a5925333d75',
        chains,
      });
      
      const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient,
        webSocketPublicClient,
      });
      return [chains, wagmiConfig];
    }
    // comme le JS...
    return [null, null];
  }
  return configure(process.env.NEXT_PUBLIC_CHAIN)
}

const [chains, wagmiConfig] = getConfig();
const isContractAddressValid: boolean = (
  process.env.NEXT_PUBLIC_CRYPTOSTAMP_ADDR && 
  process.env.NEXT_PUBLIC_CRYPTOSTAMP_ADDR.match(/^0x[0-9A-Fa-f]{40}$/) ? true : false
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CryptoStamp</title>
        <meta
          content="Generated by @rainbow-me/create-rainbowkit"
          name="description"
        />
      </Head>
      <StyleIt>
        <main>
            { (isContractAddressValid && chains && wagmiConfig) ? (
              // @ts-ignore
              <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider 
                  theme={darkTheme()}
                  // @ts-ignore
                  chains={chains}
                >
                  <VStack 
                    ml="auto"
                    mr="auto"
                    mt={10}
                    p={5}
                    color="#cca8c4"
                    backgroundColor="gray.700"
                    maxW={800}
                  >
                    <VStack mb={7}>
                      <Heading textShadow="2px 1px 7px #ce3385" color="#dd5f91">
                        CryptoStamp
                      </Heading>
                      <Heading as="i" size="md">
                        Protect your writting on the blockchain
                      </Heading>
                    </VStack>
                    <ConnectButton />
                    <Component {...pageProps} />
                  </VStack>
                </RainbowKitProvider>
              </WagmiConfig>
            ) : <Heading mt={50} textAlign="center" ml="auto" mr="auto" color="red">
                  Chain not configured
                </Heading>
            }
        </main>
        <footer>
          <Flex 
            color="#bd7f9a" 
            borderTop="1px" 
            borderColor="#bd7f9a" 
            maxW={800} mr="auto" ml="auto" mt={10}
          >
            <Spacer />
            <i>Mickaël Viey. Alyra 2024.</i>
          </Flex>
        </footer>
      </StyleIt>
    </>
  );
}

export default MyApp;
