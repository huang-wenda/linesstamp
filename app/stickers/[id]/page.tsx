import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Head from 'next/head'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const stickerId = parseInt(params.id)
  const isOfficial = stickerId <= 10
  const stickerType = isOfficial ? 'Official' : 'Free'
  const stickerNumber = isOfficial ? stickerId : stickerId - 10

  return {
    title: `${stickerType} Sticker ${stickerNumber} | スタンプマーケットプレイス`,
    description: `${stickerType} Sticker ${stickerNumber}の詳細ページです。このスタンプパックには24個のスタンプが含まれています。`,
    openGraph: {
      title: `${stickerType} Sticker ${stickerNumber} | スタンプマーケットプレイス`,
      description: `${stickerType} Sticker ${stickerNumber}の詳細ページです。このスタンプパックには24個のスタンプが含まれています。`,
      type: 'website',
      locale: 'ja_JP',
      url: `https://example.com/stickers/${params.id}`,
    },
  }
}

export default function StickerDetail({ params }: { params: { id: string } }) {
  const stickerId = parseInt(params.id)
  const isOfficial = stickerId <= 10
  const stickerType = isOfficial ? 'Official' : 'Free'
  const stickerNumber = isOfficial ? stickerId : stickerId - 10

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
        {stickerType} Sticker {stickerNumber} Details
      </h1>

      <div className="flex justify-center mb-6">
        <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
          <Image
            src={`/placeholder.svg?height=300&width=300&text=${stickerType}${stickerNumber}`}
            alt={`${stickerType} Sticker ${stickerNumber}`}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-6 text-center">
        <p className="text-gray-700 text-sm sm:text-base">
          This is a detailed description for {stickerType} Sticker {stickerNumber}. It includes information about the sticker pack, its theme, and any special features.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Button 
          className="bg-[#008CBA] hover:bg-[#007399] text-white rounded-full px-4 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg font-bold w-full max-w-xs sm:max-w-2xl"
        >
          購入・プレゼント | {isOfficial ? '250円' : '無料'} | スタンプ 24個
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="text-blue-600 hover:underline inline-block">Creator Name</p>
        <span className="mx-2">/</span>
        <span>登録日：2023年12月19日</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-4 max-w-4xl mx-auto">
        {Array(24).fill(null).map((_, index) => (
          <div key={index} className="aspect-square relative border rounded-lg overflow-hidden">
            <Image
              src={`/placeholder.svg?height=200&width=200&text=${stickerType}${stickerNumber}-${index + 1}`}
              alt={`Sticker ${index + 1}`}
              fill
              className="object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

