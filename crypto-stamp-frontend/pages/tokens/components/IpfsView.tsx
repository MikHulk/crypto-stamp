import { Spinner } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import TextView from './TextView';

export default function IpfsView({ cid }: { cid: string; }): ReactNode {
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
