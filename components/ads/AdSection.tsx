import { AdaptiveAd } from './AdaptiveAd'

export function AdSection() {
  return (
    <section className="w-full py-4 space-y-4">
      <div className="flex justify-center">
        <AdaptiveAd width="100%" height="90px" className="max-w-[728px]" />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <AdaptiveAd width="300px" height="250px" />
        <AdaptiveAd width="300px" height="250px" />
        <div className="hidden lg:block">
          <AdaptiveAd width="160px" height="600px" />
        </div>
      </div>
    </section>
  )
}

