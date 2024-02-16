import { ReactNode, useEffect } from 'react';
import {
  Alert,
  AlertIcon, 
  AlertTitle,
  AlertDescription,
  Button,
  CloseButton,
  HStack,
  Link, 
  Text, 
  useClipboard,
  VStack,
} from '@chakra-ui/react';
import { buttonStyles } from "@/lib/commonStyles";
import NextLink from "next/link";


export function SuccessMessage(
  { messages, onClose }: { messages: string[], onClose: () => void }): ReactNode 
{
  const messageNodes = messages.map(
    (message: string, ind: number) => 
      <AlertDescription fontSize="lg" key={ind}>{message}</AlertDescription>
  );
  return (
    <Alert p={0} status='success' display="flex">
      <VStack w="100%" align="start" gap={0}>
        <HStack 
          color="#c3e6c3" 
          p={1} 
          bgColor="#5d9571" 
          w="100%" 
          justify="space-between"
        >
          <AlertIcon />
          <AlertTitle fontSize="2xl">Success!</AlertTitle>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={0}
            onClick={onClose} />
        </HStack>
        <VStack mt={1} ml={3} align="start" gap={1}>
          {...messageNodes}
        </VStack>
      </VStack>
    </Alert>
  );
}

export function ErrorMessage(
  { messages, onClose }: { messages: string[], onClose: () => void }): ReactNode 
{
  const messageNodes = messages.map(
    (message: string, ind: number) => 
      <AlertDescription fontSize="lg" key={ind}>{message}</AlertDescription>
  );
  return (
    <Alert p={0} status='error' display="flex">
      <VStack w="100%" align="start" gap={0}>
        <HStack p={1} bgColor="#a45a5a" w="100%" justify="space-between">
          <AlertIcon />
          <AlertTitle fontSize="2xl">Error!</AlertTitle>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={0}
            onClick={onClose} />
        </HStack>
        <VStack mt={1} ml={3} align="start" gap={0}>
          {...messageNodes}
        </VStack>
      </VStack>
    </Alert>
  );
}

export function UrlDialog({ url, onClose }:
  { url: string; onClose: () => void; }): ReactNode 
{
  const { onCopy, value: ctrAdd, setValue: setCtrAdd, hasCopied } = useClipboard("");
  useEffect(() => setCtrAdd(process.env.NEXT_PUBLIC_VERCEL_URL + url));
  return (
    <VStack pb={4} w="100%" bgColor="#443b6c85">
      <HStack pt={1} w="100%" pl={4} pr={4} bgColor="#1b114785">
        <Text w="100%" fontSize="lg" justifyContent="start">
          This url identifies your document.
          You can share it with your future readers.
        </Text>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={0}
          onClick={onClose} />
      </HStack>
      <HStack w="100%" justify="space-between" pl={4} pr={4}>
        <Link fontSize="xl" as={NextLink} href={url} color="#a5a5d5">
          <u>{ctrAdd}</u>
        </Link>
        <Button {...buttonStyles} onClick={onCopy}>
          {hasCopied ? "Copied!" : "Copy url"}
        </Button>
      </HStack>
    </VStack>
  );
}
