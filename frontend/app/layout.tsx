import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import NextTopLoader from 'nextjs-toploader';
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
        <NextTopLoader />
        <Providers>
          <Navbar />
          <div className='mx-auto max-w-2xl px-4x sm:px-6 lg:max-w-7xl lg:px-8'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
