import {
  Box,
  Heading,
  HStack,
  Spinner
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react';
import { usePublicClient } from 'wagmi';

import { getContent, Content, getContentType } from '@/lib/etherUtils';
import { ErrorMessage } from '@/components/feedback';
import { ArrowLeftIcon } from '@chakra-ui/icons';


function TextView({content} : {content: string}): ReactNode {
  return (
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
      <pre>{content}</pre>
    </Box>
  );
}

function IpfsView({cid} : {cid: string}): ReactNode {
  const uri = "https://" + cid + ".ipfs.nftstorage.link/";
  const [content, setContent] = useState<null | string>(null);

  useEffect(
    () => {
      async function fetchDocument() {
        const response = await fetch(uri);
        setContent(await response.text());
      }
      fetchDocument();
    },
    []
  );
  return (content ? <TextView content={content} /> : <Spinner />);
}

function UnknownTypeView(): ReactNode {
  return (
    <Heading size="md">Unknown Type</Heading>
  );
}

function getViews(type: string, content: string): ReactNode {
  if(type === "Text") return  <TextView content={content} />;
  if(type === "URI") return  <IpfsView cid={content} />;
  else return <UnknownTypeView />;
}


export default function Page(): ReactNode {
  const client = usePublicClient();
  const router = useRouter();
  const [error, setError] = useState<null | string[]>(null);
  const [content, setContent] = useState<null | Content>(null);

  const tokenID = router.query.tokenID;

  useEffect(
    () => {
      if(tokenID) {
        try {
          // @ts-ignore
          getContent(client, BigInt(tokenID))
            .then(setContent, e => {
              if(e.name === "ContractFunctionExecutionError") setError(["Token not found"])
              else {
                console.error(e);
                setError([e.name]);
              }
            }
          );
        } catch {
          setError(["Invalid Token"]);
        }         
      }
    }, 
    [router]
  );

  return (
    <>
      <Heading size="md">TokenID: {tokenID}</Heading>
      {error && <ErrorMessage messages={error} onClose={() => setError(null)} />}
      {content &&
        <>
          <HStack justify="space-between" w="100%">
            <ArrowLeftIcon 
              _hover={{cursor: "pointer"}} 
              onClick={() => router.push("/")} 
            />
            <Heading textAlign="center" flexGrow="1" size="xd">
              Type: {getContentType(content.contentType)}
            </Heading>
          </HStack>
          { getViews(getContentType(content.contentType), content.value) }
        </>
      }
    </>
  );
}