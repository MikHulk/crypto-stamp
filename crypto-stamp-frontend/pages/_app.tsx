import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  localhost,
  sepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { Flex, VStack, Heading, Spacer  } from '@chakra-ui/react';
import StyleIt from '@/lib/SyleIt';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia, localhost] : []),
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
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
            <StyleIt>
              <main>
                <VStack 
                  ml="auto"
                  mr="auto"
                  mt={1}
                  p={5}
                  color="#cca8c4"
                  backgroundColor="gray.700"
                  maxW={800}
                >
                  <VStack mb={7}>
                    <Heading color="#bd7f9a">CryptoStamp</Heading>
                    <Heading as="i" size="md">
                      Protect your writting on the blockchain
                    </Heading>
                  </VStack>
                  <ConnectButton />
                  <Component {...pageProps} />
                </VStack>
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
          </RainbowKitProvider>
        </WagmiConfig>
    </>
  );
}

export default MyApp;
