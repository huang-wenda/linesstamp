import { NavBar } from '@/components/nav-bar'
import { CategorySearch } from '@/components/category-search'
import { StickerGrid } from '@/components/sticker-grid'
import { Footer } from '@/components/footer'
import { FeaturedBanners } from '@/components/featured-banners'

export default function Home() {
  const officialStickers = Array(10).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Official Sticker ${i + 1}`,
    image: `/placeholder.svg?height=200&width=200&text=Official${i+1}`,
  }))

  const freeStickers = Array(10).fill(null).map((_, i) => ({
    id: i + 11,
    title: `Free Sticker ${i + 1}`,
    image: `/placeholder.svg?height=200&width=200&text=Free${i+1}`,
  }))

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <main className="container mx-auto px-4 flex-grow">
        <FeaturedBanners />
        <CategorySearch />
        <div className="space-y-6">
          <StickerGrid title="公式LINEスタンプ ベスト10" stickers={officialStickers} />
          <StickerGrid title="無料スタンプ ベスト10" stickers={freeStickers} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

