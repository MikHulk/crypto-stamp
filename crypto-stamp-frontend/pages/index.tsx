import type { NextPage } from 'next';
import { useState } from 'react';
import 
  { Heading
  , HStack
  , Text
  , Button
} from '@chakra-ui/react';

import { CreateTextContentView } from './components/CreateTextContentView';
import { CreateIPFSContentView } from './components/CreateIPFSContentView';
import { buttonStyles } from '../lib/commonStyles';

const Home: NextPage = () => {
  const [view, SetView] = useState(<CreateTextContentView />);
  return (
    <>
      <Heading mt={5} size="md">So What'Cha Want?</Heading>
      <HStack w="100%" justify="space-evenly">
        <Button 
          {...buttonStyles}
          onClick={() => SetView(<CreateTextContentView />)}
        >
          Store text on blockchain
        </Button>
        <Button 
          {...buttonStyles}
          onClick={() => SetView(<CreateIPFSContentView />)}
        >
          Store document on IPFS
        </Button>
      </HStack>
      <Text>In any case your content will be protected with our special STMP Token</Text>
      {view}
    </>
  );
}


export default Home;
