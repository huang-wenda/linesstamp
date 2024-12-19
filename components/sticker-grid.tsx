import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface StickerGridProps {
  title: string
  stickers: Array<{
    id: number
    title: string
    image: string
  }>
}

export function StickerGrid({ title, stickers }: StickerGridProps) {
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {stickers.map((sticker) => (
          <Link key={sticker.id} href={`/stickers/${sticker.id}`}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <Image
                    src={sticker.image}
                    alt={sticker.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-1">
                  <p className="text-xs truncate">{sticker.title}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

