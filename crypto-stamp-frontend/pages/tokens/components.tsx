import {
  Box,
  Heading, Spinner
} from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';

export function TextView({ content }: { content: string; }): ReactNode {
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
export function IpfsView({ cid }: { cid: string; }): ReactNode {
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
export function UnknownTypeView(): ReactNode {
  return (
    <Heading size="md">Unknown Type</Heading>
  );
}
