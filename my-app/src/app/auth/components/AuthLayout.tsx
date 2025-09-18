'use client'

import { ReactNode } from 'react'
import { Grid, theme, Typography } from 'antd'
import Image from 'next/image'
import { getStyles } from '../styles/commonStyles'

type Props = {
  children: ReactNode
}

export default function AuthLayout({ children }: Props) {
  const screens = Grid.useBreakpoint()
  const { token } = theme.useToken()

  const styles = getStyles(token, screens)
  
  const { Text } = Typography

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Image
            sizes="100vw"
            style={{ width: styles.logo.width, height: styles.logo.height }}
            width={500}
            height={300}
            src="/logo-toss-shopping.png"
            alt="토스쇼핑로고"
          />
          {/* <Title style={styles.title}>로그인</Title> */}
          <Text style={styles.text}></Text>
        </div>
        {children}
      </div>
    </section>
  )
}
