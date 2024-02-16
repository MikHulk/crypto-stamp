import {
  Button,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react';
import { useAccount, usePublicClient, useWalletClient } from 'wagmi';

import { 
  getContent, 
  Content, 
  getContentType, 
  getIsSigner,
  getIsOwner,
  signToken,
} from '@/lib/etherUtils';
import { buttonStyles } from '@/lib/commonStyles';
import { ErrorMessage } from '@/components/feedback';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import { TextView, IpfsView, UnknownTypeView } from './components';


export default function Page(): ReactNode {
  const client = usePublicClient();
  const { data: walletClient, isError, isLoading } = useWalletClient();
  
  const router = useRouter();
  const account = useAccount();
  const [error, setError] = useState<null | string[]>(null);
  const [content, setContent] = useState<null | Content>(null);
  const [isSigner, setIsSigner] = useState<null | boolean>(null);
  const [isOwner, setIsOwner] = useState<null | boolean>(null);

  const tokenID = router.query.tokenID;

  useEffect(
    () => {
      if(tokenID) {
        try {
          // @ts-ignore
          getContent(client, BigInt(tokenID))
            .then(setContent, e => {
              if(e.name === "ContractFunctionExecutionError")
                setError(["Token not found"])
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

  useEffect(
    () => {
      if(tokenID && account && account.address && (isOwner === null || !isOwner)) {
        try {
          getIsSigner(
            client,
            // @ts-ignore
            BigInt(tokenID),
            account.address
          ).then(
            setIsSigner, 
            e => {
              if(e.name === "ContractFunctionExecutionError")
                setError(["isSigner: token not found"])
              else {
                console.error(e);
                setError([e.name]);
              }
            }
          );
        } catch {
          setError(["error fetching isSigner"]);
        }         
      }
    }, 
    [router, isOwner, account]
  );

  useEffect(
    () => {
      if(tokenID && account && account.address) {
        try {
          getIsOwner(
            client,
            // @ts-ignore
            BigInt(tokenID), 
            account.address
          ).then(
              setIsOwner,
              e => {
                if(e.name === "ContractFunctionExecutionError")
                  setError(["isOwner: token not found"])
                else {
                  console.error(e);
                  setError([e.name]);
                }
              }
            );
        } catch {
          setError(["error fetching isOwner"]);
        }         
      }
    }, 
    [router, account]
  );

  function getViews(type: string, content: string): ReactNode {
    if(type === "Text") return  <TextView content={content} />;
    if(type === "URI") return  <IpfsView cid={content} />;
    else return <UnknownTypeView />;
  }

  function signIt() {
    if(account && account.address && walletClient) {
      //
      signToken(
        walletClient,
        // @ts-ignore
        BigInt(tokenID)
      ).then(
        () =>
          getIsSigner(
            client, 
            // @ts-ignore
            BigInt(tokenID),
            // @ts-ignore 
            account.address
          ).then(
            setIsSigner, 
            e => {
              if(e.name === "ContractFunctionExecutionError")
                setError(["isSigner: token not found"])
              else {
                console.error(e);
                setError([e.name]);
              }
            }
          )
      )
    }
  }
  
  return (
    <>
      <Heading size="md">TokenID: {tokenID}</Heading>
      {error && <ErrorMessage messages={error} onClose={() => setError(null)} />}
      {content &&
        <>
          <HStack justify="space-between" w="100%">
            <ArrowLeftIcon 
              _hover={ {cursor: "pointer"} } 
              onClick={ () => router.push("/") } 
            />
            <Heading textAlign="center" flexGrow="1" size="xd" mr={6}>
              Type: { getContentType(content.contentType) }
            </Heading>
          </HStack>
          { isOwner && <Text>You are the owner</Text> }
          { !isOwner && isSigner !== null && 
            ( isSigner 
              ? <Text>you have signed this document.</Text>
              : <Button { ...buttonStyles } onClick={signIt}>
                  Sign
                </Button>
            )
          }
          { getViews(getContentType(content.contentType), content.value) }
        </>
      }
    </>
  );
}
