import type { NextPage } from 'next';
import { useState } from 'react';
import { 
  Heading,
  HStack, 
  Text, 
  Button
} from '@chakra-ui/react';

import { CreateTextContentView } from './components/CreateTextContentView';
import { CreateIPFSContentView } from './components/CreateIPFSContentView';
import { buttonStyles } from '../lib/commonStyles';

const Home: NextPage = () => {
  const [view, SetView] = useState(<CreateTextContentView />);
  return (
    <>
      <Heading mt={5} size="md">Where do you want to store ?</Heading>
      <HStack w="100%" justify="space-evenly">
        <Button 
          {...buttonStyles}
          w="10em"
          onClick={() => SetView(<CreateTextContentView />)}
        >
          on blockchain
        </Button>
        <Button 
          {...buttonStyles}
          w="10em"
          onClick={() => SetView(<CreateIPFSContentView />)}
        >
          on IPFS
        </Button>
      </HStack>
      <Text>In any case your content will be protected with our special STMP Token</Text>
      <Text>
        for maximum protection, remember to include your name and the date on the document.
      </Text>
      {view}
    </>
  );
}


export default Home;
