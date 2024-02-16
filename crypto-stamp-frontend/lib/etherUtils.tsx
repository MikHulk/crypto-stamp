import cryptoStampData from '@/contractData';


const contractAddress = process.env.NEXT_PUBLIC_CRYPTOSTAMP_ADDR;
if(!contractAddress) console.error("No contract address.");
const { abi } = cryptoStampData;


export interface Content {
  value: string,
  contentType: number,
}

export function getContentType(v: number): string {
  if (v === 0) return "Text";
  else if (v === 1) return "URI";
  else return 'unknown';
}

export async function getContent(client: any, tokenID: bigint) {
  return await client?.readContract(
    {
      address: contractAddress,
      abi: abi,
      functionName: "content",
      args: [tokenID],
    }
  );
}

export async function stampTextContent(client: any, content: string): Promise<`0x{string}`> {
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
