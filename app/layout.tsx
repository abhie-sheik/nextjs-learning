import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "your-first-name's Blog",
  description: 'Created by Your Name',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-800`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  )
}
