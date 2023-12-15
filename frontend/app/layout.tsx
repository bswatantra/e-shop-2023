import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Providers } from './providers/Providers'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'E-shop',
  description: 'e-shop shopping app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
