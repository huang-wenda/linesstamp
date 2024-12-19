import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'スタンプマーケットプレイス | LINEスタンプ、絵文字、着せ替え',
  description: '人気のLINEスタンプ、絵文字、着せ替えを探そう。無料スタンプも多数あり！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

