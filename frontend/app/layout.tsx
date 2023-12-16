import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
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
          <Navbar />
          <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
