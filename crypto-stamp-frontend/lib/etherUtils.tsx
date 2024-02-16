import cryptoStampData from '@/cryptoStampData';
import derivativeProductData from '@/derivativeProductData';

const contractAddress = process.env.NEXT_PUBLIC_CRYPTOSTAMP_ADDR;
if(!contractAddress) console.error("No contract address.");
const { abi: abiMain } = cryptoStampData;
const { abi: abiSec} = derivativeProductData;


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
      abi: abiMain,
      functionName: "content",
      args: [tokenID],
    }
  );
}

export async function stampTextContent(client: any, content: string): Promise<`0x{string}`> {
  return await client?.writeContract(
    {
      address: contractAddress,
      abi: abiMain,
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
      abi: abiMain,
      account: client.account.address,
      functionName: "stampURI",
      args: [content],
    }
  );
}

export async function signToken(client: any, tokenID: bigint): Promise<`0x{string}`> {
  return await client?.writeContract(
    {
      address: contractAddress,
      abi: abiMain,
      account: client.account.address,
      functionName: "sign",
      args: [tokenID],
    }
  );
}

export async function getIsSigner(client: any, tokenID: bigint, addr: `0${string}`) {
  return await client?.readContract(
    {
      address: contractAddress,
      abi: abiMain,
      functionName: "isSigner",
      args: [tokenID, addr],
    }
  );
}

export async function getIsOwner(client: any, tokenID: bigint, addr: `0${string}`) {
  console.log(tokenID, addr);
  const owner: `0${string}` = await client?.readContract(
    {
      address: contractAddress,
      abi: abiMain,
      functionName: "ownerOf",
      args: [tokenID],
    }
  );
  return owner === addr;
}
