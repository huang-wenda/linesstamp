"use client"

import Link from 'next/link'
import { Search, Menu } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="w-full">
      <div className="bg-green-500 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            スタンプ
          </Link>
          <div className="hidden md:flex items-center space-x-2 w-64">
            <Input 
              type="search" 
              placeholder="スタンプを検索" 
              className="h-8 text-sm"
            />
            <Button size="sm" variant="secondary">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      <div className={`bg-black text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4">
          <nav className="flex flex-col md:flex-row">
            {['LINEスタンプ', '無料スタンプ', 'Twitter', '絵文字', '着せ替え'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="px-4 py-2 hover:bg-gray-800"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center bg-gray-100 p-2">
        <Input 
          type="search" 
          placeholder="スタンプを検索" 
          className="h-8 text-sm w-full max-w-xs"
        />
        <Button size="sm" variant="secondary" className="ml-2">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

