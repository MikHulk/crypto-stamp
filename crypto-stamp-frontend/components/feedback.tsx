import { ReactNode } from 'react';
import {
  HStack, VStack,
  Alert,
  AlertIcon, AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/react';

export function SuccessMessage(
  { messages, onClose }: { messages: string[]; onClose: () => void; }): ReactNode {
  const messageNodes = messages.map(
    (message: string, ind: number) => <AlertDescription key={ind}>{message}</AlertDescription>
  );
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
            onClick={onClose} />
        </HStack>
        <VStack ml="4em" mr="4em" align="start" gap={0}>
          {...messageNodes}
        </VStack>
      </VStack>
    </Alert>
  );
}
export function ErrorMessage(
  { messages, onClose }: { messages: string[]; onClose: () => void; }): ReactNode {
  const messageNodes = messages.map(
    (message: string, ind: number) => <AlertDescription key={ind}>{message}</AlertDescription>
  );
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
            onClick={onClose} />
        </HStack>
        <VStack ml="4em" mr="4em" align="start" gap={0}>
          {...messageNodes}
        </VStack>
      </VStack>
    </Alert>
  );
}
