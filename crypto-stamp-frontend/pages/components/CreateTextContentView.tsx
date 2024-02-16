import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Heading,
  HStack,
  IconButton,
  Spinner,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { usePublicClient, useWalletClient } from 'wagmi';

import { stampTextContent } from '@/lib/etherUtils';
import { SuccessMessage, ErrorMessage, UrlDialog } from '@/components/feedback';


export function CreateTextContentView(): ReactNode {

  const { data: walletClient, isError, isLoading } = useWalletClient();
  const client = usePublicClient();

  const [message, setMessage] = useState<null | string[]>(null);
  const [newUrl, setNewUrl] = useState<null | string>(null);
  const [error, setError] = useState<null | string[]>(null);
  const [waitingTransaction, setWaitingTransaction] = useState(false);

  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(
    () => isError ? setError(["error on wallet"]) : setError(null),
    [isError]
  );

  function onSuccess(transacHash: `0x{string}`) {
    if (contentRef && contentRef.current) contentRef.current.value = "";
    client.getTransactionReceipt({ hash: transacHash })
      .then(buildMessage, processTrError);
  }

  function buildMessage(transac: any) {
    setWaitingTransaction(false);
    if (transac.status === "success") {
      const tokenID = BigInt(transac.logs[0].topics[3]);
      setMessage([transac.transactionHash, "Token ID: " + tokenID.toString()]);
      setNewUrl("/tokens/" + tokenID);
    } else setError([transac.transacHash, transac.status]);
  }

  function processTrError({ name }: { name: string; }) {
    setWaitingTransaction(false);
    setError([name]);
  }

  function processContent() {
    // @ts-ignore
    if (!walletClient) openConnectModal();
    if (contentRef !== null) {
      let content = contentRef?.current?.value;
      if (!content || content.length === 0)
        setError(
          [
            "Your content is empty.",
            "Please fill the text area with a content you want to protect."
          ]
        );
      else if (content && content.length < 250) {
        setWaitingTransaction(true);
        stampTextContent(walletClient, content)
          .then(onSuccess, processTrError);
      } else setError(
        [
          "Your content is too big.",
          "Please upload the document you want to protect on IPFS."
        ]
      );
    }
  }

  return (
    <>
      { (isLoading || waitingTransaction) && <Spinner color='red.500' />}
      { message && <SuccessMessage messages={message} onClose={() => setMessage(null)} />}
      { error && <ErrorMessage messages={error} onClose={() => setError(null)} />}
      { newUrl && <UrlDialog url={newUrl} onClose={() => setNewUrl(null)}/> }
      <VStack align="left" justify="start" m={6} w="100%">
        <HStack justify="space-between">
          <Heading size="sm">
            Enter your new content bellow and send it by clicking on the mail icon on the right.
          </Heading>
          <IconButton
            onClick={processContent}
            size="0"
            color="#bd7f9a"
            aria-label='stamp'
            icon={<EmailIcon fontSize="1.5em" />} />
        </HStack>
        <Textarea
          ref={contentRef}
          _focus={{ boxShadow: '0 0 10px #ce3385', borderColor: '#ce3385' }}
          color="#e5cbcb"
          borderColor="#bd7f9a"
          rows={10}
          h="auto" />
      </VStack>
    </>
  );
}
;
