import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'
import { StickerListItem } from '@/components/sticker-list/StickerListItem'
import { AdSection } from '@/components/ads/AdSection'
import { Button } from '@/components/ui/button'
import type { Sticker } from '@/types/sticker'

export default function AllStickersPage() {
  // Mock data - replace with real data in production
  const stickers: Sticker[] = [
    {
      id: '1',
      title: 'おしゃべりセルフケア猫 ねこいちさん',
      image: '/placeholder.svg?height=200&width=200&text=Sticker1',
      registrationDate: '2024年12月19日',
      description: 'ねこいちさんのLINEスタンプ第2弾が登場！前回よ...',
      buttonType: 'add_friend',
      isNew: true,
    },
    {
      id: '2',
      title: 'TASAKIホリデースタンプ',
      image: '/placeholder.svg?height=200&width=200&text=Sticker2',
      registrationDate: '2024年12月18日',
      description: 'TASAKIのジュエリーをまとったキュートな猫のL...',
      buttonType: 'add_friend_premium',
      isNew: true,
    },
    // Add more mock data as needed
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">
            全てのスタンプ
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

