import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export function FeaturedBanners() {
  const banners = [
    {
      id: 1,
      title: "新年スタンプ",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-green-100",
    },
    {
      id: 2,
      title: "人気キャラクター",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-yellow-100",
    },
    {
      id: 3,
      title: "季節のスタンプ",
      image: "/placeholder.svg?height=200&width=400",
      color: "bg-blue-100",
    },
  ]

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full space-x-4 p-4">
        {banners.map((banner) => (
          <Card key={banner.id} className={`inline-block w-[300px] ${banner.color}`}>
            <CardContent className="p-0">
              <Image
                src={banner.image}
                alt={banner.title}
                width={300}
                height={150}
                className="object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{banner.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

