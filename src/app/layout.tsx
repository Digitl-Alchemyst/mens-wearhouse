import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'
import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Men's Fashion and Clothes - Suits, Shirts, and Ties | Men's Wearhouse`,
  description: `Men's Clothing Landing Page`,
  keywords: `Men's Clothing Landing Page`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col items-center w-full ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

