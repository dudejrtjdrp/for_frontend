'use client'

import '@ant-design/v5-patch-for-react-19'
import Link from 'next/link'
import Login from './auth/login/page'
import { redirect } from 'next/navigation'

export default function Home() {
  const isLogin: boolean = false

  if (process.env.NODE_ENV === 'development') {
    const warn = console.warn
    console.warn = (...args) => {
      if (
        typeof args[0] === 'string' &&
        args[0].includes('[antd: compatible]')
      ) {
        console.log('asdasd')
        return // antd 호환성 경고는 무시
      }
      warn(...args)
      console.log('asdasd')
    }
  }
  if (isLogin) {
    return (
      <div>
        <h1>Welcome to my blog</h1>
        <Link href="/analytics/customers">customers</Link>
        <Link href="/analytics/funnel">funnel</Link>
      </div>
    )
  } else {
    redirect('/auth/login')
    //   return (
    //   <Login />
    // )
  }
}
