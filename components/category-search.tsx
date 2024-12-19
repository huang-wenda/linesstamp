import Link from 'next/link'

export function CategorySearch() {
  const categories = ['鬼滅の刃', 'ディズニー', 'ジブリ', 'スヌーピー', 'トトロ', 'ムーミン', '誕生日']

  return (
    <div className="w-full border rounded-md my-2 p-2">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category}`}
            className="text-blue-600 hover:underline"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}

