import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { FundingWindows } from "@/components/home/funding-windows"
import { NewsSection } from "@/components/home/news-section"
import { ImpactSnapshot } from "@/components/home/impact-snapshot"
import { PartnersCarousel } from "@/components/home/partners-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutPreview />
        <FundingWindows />
        <NewsSection />
        <ImpactSnapshot />
        <PartnersCarousel />
      </main>
      <Footer />
    </div>
  )
}
