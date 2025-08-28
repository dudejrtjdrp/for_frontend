'use client'

import { Global, ThemeProvider } from "@emotion/react"
import  { GlobalStyle }  from "@/styles/global";
import theme from "@/styles/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </>




    // <html lang="en">
    //   <body style={{height:"100vh", overflow:"hidden"}}>
    //     {/* 레이아웃 UI */}
    //     <main>{children}</main>
    //   </body>
    // </html>
  )
}