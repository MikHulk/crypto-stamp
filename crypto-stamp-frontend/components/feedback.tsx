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
    (message: string, ind: number) => 
      <AlertDescription fontSize="lg" key={ind}>{message}</AlertDescription>
  );
  return (
    <Alert status='success' display="flex">
      <VStack w="100%" align="start" gap={0}>
        <HStack color="#c3e6c3" p={1} bgColor="#5d9571" w="100%" justify="space-between">
          <AlertIcon />
          <AlertTitle fontSize="2xl">Success!</AlertTitle>
          <CloseButton
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={0}
            onClick={onClose} />
        </HStack>
        <VStack mt={1} align="start" gap={0}>
          {...messageNodes}
        </VStack>
      </VStack>
    </Alert>
  );
}
export function ErrorMessage(
  { messages, onClose }: { messages: string[]; onClose: () => void; }): ReactNode {
  const messageNodes = messages.map(
    (message: string, ind: number) => 
      <AlertDescription fontSize="lg" key={ind}>{message}</AlertDescription>
  );
  return (
    <Alert status='error' display="flex">
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
        <VStack mt={1} align="start" gap={0}>
          {...messageNodes}
        </VStack>
      </VStack>
    </Alert>
  );
}
