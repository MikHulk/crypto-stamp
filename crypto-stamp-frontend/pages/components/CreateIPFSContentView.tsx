import { ReactNode, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { buttonStyles } from '@/lib/commonStyles';
import { ErrorMessage, SuccessMessage } from '@/components/feedback';


export function CreateIPFSContentView(): ReactNode {
  const [file, setFile] = useState<null|File>(null);
  const [message, setMessage] = useState<null | string[]>(null);
  const [error, setError] = useState<null | string[]>(null);

  const pickFile = () => {
    async function accessFiles() {
      // @ts-ignore
      const [fileHandle] = await window.showOpenFilePicker();

      return await fileHandle.getFile()
    }

    accessFiles().then(setFile, e => setError([e.message]));

  };
  console.log(file);
  return (
    <>
      <Button {...buttonStyles} onClick={pickFile}>pick a file</Button>
      {message && <SuccessMessage messages={message} onClose={() => setMessage(null)} />}
      {error && <ErrorMessage messages={error} onClose={() => setError(null)} />}
    </>
  );
}
