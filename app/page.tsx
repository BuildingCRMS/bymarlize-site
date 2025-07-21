import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AddOnServices } from "@/components/add-on-services"
import { FamilyServices } from "@/components/family-services"
import { NotaryServices } from "@/components/notary-services"
import { ServiceArea } from "@/components/service-area"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { BrandBanner } from "@/components/brand-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <BrandBanner />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AddOnServices />
      <FamilyServices />
      <NotaryServices />
      <ServiceArea />
      <BookingSection />
      <Footer />
    </main>
  )
}
