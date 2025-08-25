'use client'

import Link from 'next/link'
import Login from './auth/login/page';
import { redirect } from 'next/navigation';

export default function Home() {
  const isLogin: boolean = false;
  if ( isLogin ) {
    return (
    <div>
      <h1>Welcome to my blog</h1>
      <Link href="/analytics/customers">customers</Link>
      <Link href="/analytics/funnel">funnel</Link>
    </div>
  )
  } else {
    redirect('/auth/login');
  //   return (
  //   <Login />
  // )
  }
  
}