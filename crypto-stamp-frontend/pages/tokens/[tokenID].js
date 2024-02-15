import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>TokenID: {router.query.tokenID}</p>
}
