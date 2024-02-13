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


const Home: NextPage = () => {
  const [view, SetView] = useState(<CreateTextContentView />);
  return (
    <>
      <Heading mt={5} size="md">So What'Cha Want?</Heading>
      <HStack w="100%" justify="space-evenly">
        <Button 
          bgColor="rgb(188 122 148 / 42%)"
          _hover={
            { bgColor: "rgb(188 122 148 / 70%)" 
            , boxShadow: '0 0 10px #ce3385'
            , borderColor: '#ce3385'
            }
          }
          onClick={() => SetView(<CreateTextContentView />)}
        >
          Store text in blockchain
        </Button>
        <Button 
          bgColor="rgb(188 122 148 / 42%)"
          _hover={
            { bgColor: "rgb(188 122 148 / 70%)" 
            , boxShadow: '0 0 10px #ce3385'
            , borderColor: '#ce3385'
            }
          }
          onClick={() => SetView(<CreateIPFSContentView />)}
        >
          Store document in IPFS
        </Button>
      </HStack>
      <Text>In any case your content will be protected with our special STMP Token</Text>
      {view}
    </>
  );
}


export default Home;
