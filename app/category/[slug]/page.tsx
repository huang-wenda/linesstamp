import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { StickerListItem } from '@/components/sticker-list/StickerListItem'
import { AdSection } from '@/components/ads/AdSection'
import { Button } from '@/components/ui/button'
import type { Sticker } from '@/types/sticker'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // 这里应该根据slug从API获取贴纸，现在我们使用模拟数据
  const stickers: Sticker[] = [
    {
      id: '1',
      title: `${params.slug} Sticker 1`,
      image: '/placeholder.svg?height=200&width=200&text=Sticker1',
      registrationDate: '2024年12月19日',
      description: `This is a ${params.slug} sticker.`,
      buttonType: 'add_friend',
      isNew: true,
    },
    {
      id: '2',
      title: `${params.slug} Sticker 2`,
      image: '/placeholder.svg?height=200&width=200&text=Sticker2',
      registrationDate: '2024年12月18日',
      description: `Another ${params.slug} sticker.`,
      buttonType: 'add_friend_premium',
      isNew: false,
    },
    // 添加更多模拟数据...
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            {decodeURIComponent(params.slug)} スタンプ
          </h1>
          <p className="text-gray-600">
            {stickers.length} 件のスタンプが見つかりました
          </p>
        </div>

        <AdSection />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-6">
          {stickers.map((sticker) => (
            <StickerListItem key={sticker.id} sticker={sticker} />
          ))}
        </div>

        <div className="flex justify-center my-6">
          <Button variant="outline" className="mx-2">
            前のページ
          </Button>
          <Button variant="outline" className="mx-2">
            次のページ
          </Button>
        </div>

        <AdSection />
      </main>
      <Footer />
    </div>
  )
}

