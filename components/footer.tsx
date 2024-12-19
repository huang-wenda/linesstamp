import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">スタンプについて</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:underline">会社概要</Link></li>
              <li><Link href="/terms" className="text-sm hover:underline">利用規約</Link></li>
              <li><Link href="/privacy" className="text-sm hover:underline">プライバシーポリシー</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">スタンプ作成</h3>
            <ul className="space-y-2">
              <li><Link href="/create" className="text-sm hover:underline">スタンプを作る</Link></li>
              <li><Link href="/guidelines" className="text-sm hover:underline">ガイドライン</Link></li>
              <li><Link href="/faq" className="text-sm hover:underline">よくある質問</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">カテゴリー</h3>
            <ul className="space-y-2">
              <li><Link href="/category/popular" className="text-sm hover:underline">人気</Link></li>
              <li><Link href="/category/new" className="text-sm hover:underline">新着</Link></li>
              <li><Link href="/category/free" className="text-sm hover:underline">無料</Link></li>
              <li><Link href="/category/creators" className="text-sm hover:underline">クリエイターズ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-gray-800">
                <Facebook size={24} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-800">
                <Twitter size={24} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-gray-800">
                <Instagram size={24} />
              </Link>
              <Link href="https://youtube.com" className="text-gray-600 hover:text-gray-800">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} スタンプマーケットプレイス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

