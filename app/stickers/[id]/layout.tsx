import { NavBar } from '@/components/nav-bar'
import { Footer } from '@/components/footer'

export default function StickerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

