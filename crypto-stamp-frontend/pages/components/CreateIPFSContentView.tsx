import { ReactNode, useEffect, useState } from 'react';
import { 
  Box, 
  Button, 
  Grid, 
  GridItem, 
  Heading, 
  HStack, 
  IconButton, 
  Spinner, 
  VStack 
} from '@chakra-ui/react';
import { DeleteIcon, EmailIcon } from '@chakra-ui/icons';
import { NFTStorage, File, Blob } from 'nft.storage'
import { usePublicClient, useWalletClient } from 'wagmi';

import { buttonStyles } from '@/lib/commonStyles';
import { stampURIContent } from '@/lib/etherUtils';
import { ErrorMessage, SuccessMessage } from '@/components/feedback';
import { formatBytes, formatTime } from '@/lib/format';


export function CreateIPFSContentView(): ReactNode {

  const { data: walletClient, isError, isLoading } = useWalletClient();
  const client = usePublicClient();

  const [file, setFile] = useState<null|File>(null);
  const [fileContent, setFileContent] = useState<null|string>(null);
  const [cid, setCid] = useState<null|string>(null);
  
  const [error, setError] = useState<null | string[]>(null);
  const [message, setMessage] = useState<null | string[]>(null);
  const [waitingTransaction, setWaitingTransaction] = useState(false);

  // @ts-ignore
  const apiKey: string = process.env.NEXT_PUBLIC_STORAGE_API_KEY;

  useEffect(
    () => isError ? setError(["error on wallet"]) : setError(null),
    [isError]
  );

  useEffect(
    () => {
      if (cid) {
        setMessage(["pushed on IPFS", "now create token"])
        stampURIContent(walletClient, cid).then(onSuccess, processTrError);
      }
    },
    [cid]
  )

  useEffect(
    () => {
      if(file?.type === "" || file?.type === "text/plain")
        file?.text().then(setFileContent, e => setError([e.message]));
    },
    [file]
  )

  function onSuccess(transacHash: `0x{string}`) {
    client.getTransactionReceipt({ hash: transacHash })
      .then(buildMessage, processTrError);
  }

  function buildMessage(transac: any) {
    setWaitingTransaction(false);
    if (transac.status === "success") {
      const tokenID = BigInt(transac.logs[0].topics[3]);
      const cid_ = cid;
      resetContent();
      setMessage([transac.transactionHash, cid_, "Token ID: " + tokenID.toString()]);
    } else setError([transac.transacHash, transac.status]);
  }

  function processTrError({ name }: { name: string; }) {
    setWaitingTransaction(false);
    setError([name]);
  }

  function resetContent() {
    setWaitingTransaction(false);
    setFileContent(null);
    setFile(null);
  }

  function processContent() {
    if(fileContent) {
      setWaitingTransaction(true);
      const client = new NFTStorage({ token: apiKey });
      const blob = new Blob([fileContent], {
        type: file?.type
      });
      client.storeBlob(blob).then(setCid, e => setError([e.message]));
    }
  }
  
  const pickFile = () => {
    async function accessFiles() {
      // @ts-ignore
      const [fileHandle] = await window.showOpenFilePicker();
      return await fileHandle.getFile()
    }
    accessFiles().then(setFile, e => setError([e.message]));
  }
  
  return (
    <>
      { !file && <Button {...buttonStyles} onClick={pickFile}>pick a file</Button> }
      {(isLoading || waitingTransaction) && <Spinner color='red.500' />}
      {message && <SuccessMessage messages={message} onClose={() => setMessage(null)} />}
      {error && <ErrorMessage messages={error} onClose={() => setError(null)} />}
      { fileContent &&
        <VStack w="100%">
          <HStack w="100%">
            <Heading w="100%" justifyContent="start" size="md">{file?.name}</Heading>
            <IconButton
              justifyContent="end"
              onClick={resetContent}
              size="0"
              color="#bd7f9a"
              aria-label='stamp'
              icon={<DeleteIcon fontSize="1.5em" />} 
            />
            <IconButton
              justifyContent="end"
              onClick={processContent}
              size="0"
              color="#bd7f9a"
              aria-label='stamp'
              icon={<EmailIcon fontSize="1.5em" />} 
            />
          </HStack>
          <VStack gap={0} w="100%" align="start">
            <Grid w={350} templateColumns='1fr 2fr' gap={6}>
              <GridItem><b>size</b>:</GridItem>
              <GridItem>{file?.size ? formatBytes(file?.size): "unknown"}</GridItem>
            </Grid>
            <Grid w={350} templateColumns='1fr 2fr' gap={6}>
              <GridItem><b>modified on</b>:</GridItem>
              <GridItem>
                {file?.lastModified ? formatTime(file?.lastModified) : "unknown"}
              </GridItem>
            </Grid>
          </VStack>
          <Box p={1} 
            overflowY="auto"
            height="30em"
            fontSize="xs" 
            w="100%" 
            bgColor="#ebdcdc" 
            color="#403636" 
            border="solid #c5749f" 
            boxShadow="0 0 10px #c51170"
          >
            <pre>{fileContent}</pre>
          </Box>
        </VStack>
      }
    </>
  );
}
