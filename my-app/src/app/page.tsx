import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      <Link href="/analytics/customers">customers</Link>
      <Link href="/analytics/funnel">funnel</Link>
    </div>
  )
}