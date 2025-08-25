'use client'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* 레이아웃 UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}