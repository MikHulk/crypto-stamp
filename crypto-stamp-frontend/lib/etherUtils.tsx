import cryptoStampData from '@/contractData';

export async function stampTextContent(client: any, content: string): Promise<`0x{string}`> {
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
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
