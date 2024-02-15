import cryptoStampData from '@/contractData';

export async function stampTextContent(client: any, content: string): Promise<`0x{string}`> {
  const contractAddress = process.env.NEXT_PUBLIC_CRYPTOSTAMP_ADDR;
  if(!contractAddress) console.error("No contract address.");
  const { abi } = cryptoStampData;
  return await client?.writeContract(
    {
      address: contractAddress,
      abi: abi,
      account: client.account.address,
      functionName: "stampTextContent",
      args: [content],
    }
  );
}

export async function stampURIContent(client: any, content: string): Promise<`0x{string}`> {
  const contractAddress = process.env.NEXT_PUBLIC_CRYPTOSTAMP_ADDR;
  if(!contractAddress) console.error("No contract address.");
  const { abi } = cryptoStampData;
  return await client?.writeContract(
    {
      address: contractAddress,
      abi: abi,
      account: client.account.address,
      functionName: "stampURI",
      args: [content],
    }
  );
}
