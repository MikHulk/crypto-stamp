import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';


export default function TextView({ content }: { content: string; }): ReactNode {
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
