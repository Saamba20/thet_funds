"use client"

import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

const partners = [
  { name: "TaybullPay", logo: "/Partner logo/12 - taybullpay.png" },
  { name: "AfriMoney", logo: "/Partner logo/13 - afrimoney logo.png" },
  { name: "NYC", logo: "/Partner logo/14 - NYC logo.jpg" },
  { name: "Wistem", logo: "/Partner logo/15 - wistem.jpeg" },
  { name: "Building Capacity and Bridges", logo: "/Partner logo/16 - Building capacity and bridges.jpeg" },
  { name: "Senegalo-Gambia", logo: "/Partner logo/18 - senegalo-gambia.jpg" },
  { name: "UNCDF", logo: "/Partner logo/2 - UNCDF w tag.png" },
  { name: "Fatt Fatt", logo: "/Partner logo/20 - fatt fatt logo.png" },
  { name: "Dex Deliveries", logo: "/Partner logo/21 - dex deliveries logo.jpeg" },
  { name: "Link Corporation", logo: "/Partner logo/24 - link corporation partner logo.png" },
  { name: "UTG Student's Union", logo: "/Partner logo/25 - utg student's union logo.jpeg" },
  { name: "GYIN", logo: "/Partner logo/26 - gyin.png" },
  { name: "GSCC", logo: "/Partner logo/30 - GSCC logo.png" },
  { name: "CSM Technology", logo: "/Partner logo/7 - CSMTechnology_1556082550855.png" },
  { name: "Reliance", logo: "/Partner logo/9 - reliance.png" },
]

export function PartnersCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1, // Slow continuous scroll
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  return (
    <section className="py-16 lg:py-24 border-t border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 mb-10 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Our Partners</h2>
        <p className="mt-2 text-2xl font-serif font-bold text-foreground">
          Collaborating for Educational Excellence
        </p>
      </div>

      <div className="relative">
        {/* Gradients for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {partners.map((partner, index) => (
              <div key={index} className="flex-[0_0_150px] min-w-0 sm:flex-[0_0_180px] mx-4 sm:mx-8">
                <div className="h-24 w-full flex items-center justify-center p-2 transition-all duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 hover:scale-110">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
