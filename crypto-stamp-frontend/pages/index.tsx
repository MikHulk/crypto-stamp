import type { NextPage } from 'next';
import { ReactNode, useRef, useState } from 'react';
import 
  { IconButton
  , Heading
  , HStack
  , Textarea
  , VStack
  , Alert
  , AlertIcon
  , Box
  , AlertTitle
  , AlertDescription
  , CloseButton,  
  Spinner
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { usePublicClient, useWalletClient } from 'wagmi';

import cryptoStampData from '@/contractData';


async function stampContent(client: any, content: string): Promise<`0x{string}`>{
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const {abi} = cryptoStampData;
  return await client?.writeContract(
    {
      address: contractAddress,
      abi: abi,
      account: client.account.address,
      functionName: "stampTextContent",
      args: [content],
    }
  );
}

function SuccessMessage(
  {messages, onClose}: {messages: string[], onClose: () => void}) : ReactNode
{
  const messageNodes = messages.map(
    (message: string, ind: number) => 
      <AlertDescription key={ind}>{message}</AlertDescription>
  )
  return (
    <Alert status='success' display="flex">
      <VStack w="100%" align="start" gap={0}>
        <HStack w="100%" justify="space-between">
          <AlertIcon />
          <AlertTitle fontSize="2xl">Sucess!</AlertTitle>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </HStack>
        <VStack ml="4em" mr="4em" align="start" gap={0}>
          {...messageNodes }
        </VStack>
      </VStack>
    </Alert>
  );
}

function ErrorMessage(
  {messages, onClose } : {messages: string[], onClose: () => void}) : ReactNode
{
  const messageNodes = messages.map(
    (message: string, ind: number) => 
      <AlertDescription key={ind}>{message}</AlertDescription>
  )
  return (
    <Alert status='error' display="flex">
      <VStack w="100%" align="start" gap={0}>
        <HStack w="100%" justify="space-between">
          <AlertIcon />
          <AlertTitle fontSize="2xl">Error!</AlertTitle>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={onClose}
          />
        </HStack>
        <VStack ml="4em" mr="4em" align="start" gap={0}>
          {...messageNodes }
        </VStack>
      </VStack>
    </Alert>
  );
}

const Home: NextPage = () => {

  const { data: walletClient, isError, isLoading } = useWalletClient();
  const [message, setMessage] = useState<null|string[]>(null);
  const [error, setError] = useState<null|string[]>(null);
  const [waitingTransaction, setWaitingTransaction] = useState(false);
  const client = usePublicClient();

  const contentRef = useRef<HTMLTextAreaElement>(null);

  function onSuccess(transacHash: `0x{string}`) {
    if(contentRef && contentRef.current) contentRef.current.value = "";
    const transac = client.getTransactionReceipt({hash: transacHash}).then(buildMessage);
  }

  function buildMessage(transac: any) {
    setWaitingTransaction(false);
    if(transac.status === "success") {
      const tokenID = BigInt(transac.logs[0].topics[3]);
      setMessage([transac.transactionHash, "Token ID:" + tokenID.toString()]);
    } else setError([transac.transacHash, transac.status]);
  }

  function processContent() {
    // @ts-ignore
    if (!walletClient) openConnectModal();
    if(contentRef !== null) {
      let content = contentRef?.current?.value;
      if(content) {
        setWaitingTransaction(true);
        stampContent(walletClient, content)
          .then(onSuccess, e => setError(e.name));
      } else setError(
        [
          "Your content is empty.", 
          "Please fill the text area with a content you want to protect."
        ]
      );
    }
  }

  return (
    <>
      { waitingTransaction && <Spinner color='red.500' /> }
      { message && <SuccessMessage messages={message} onClose={() => setMessage(null)} />}
      { error && <ErrorMessage messages={error} onClose={() => setError(null)} />}
      <VStack align="left" justify="start" m={6} w="100%">
        <HStack justify="space-between">
          <Heading size="sm">
            Enter your new content bellow and send it by clicking on the mail icon on the left.
          </Heading>
          <IconButton
            onClick={processContent}
            size="0" 
            color="#bd7f9a" 
            aria-label='stamp' 
            icon={<EmailIcon fontSize="1.5em"/>} 
          />
        </HStack>
        <Textarea 
          ref={contentRef}
          _focus={{ boxShadow: '0 0 10px #ce3385', borderColor: '#ce3385' }}
          color="#e5cbcb"
          borderColor="#bd7f9a"
          rows={10}
          h="auto"
        />
      </VStack>
    </>
  );
};

export default Home;
