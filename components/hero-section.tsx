import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 purple-gradient-bg"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <span className="brand-badge">PROPERTY MANAGEMENT & ADMINISTRATIVE SERVICES</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-6">
              <span className="block text-purple-700">Marlize</span>
              <span className="block text-purple-700">Bustamante</span>
            </h1>

            {/* Professional Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
                  <Image
                    src="/images/marlize-photo.png"
                    alt="Marlize Bustamante - Property Management Professional"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "50% 15%" }}
                    priority
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-full border-2 border-purple-300/30"></div>
              </div>
            </div>

            <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Reliable and detail-oriented property management specialist with hands-on experience supporting property
              managers, business owners, and tenants. Committed to delivering organized, professional support to
              property owners and executives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.squareup.com/appointments/book/f8lsousfg6fh6e/L3CKXB65SQ2QR/start"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-8 py-4 text-lg bg-purple-500 hover:bg-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Now
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  className="px-8 py-4 text-lg border-purple-300 text-purple-700 hover:bg-purple-50 rounded-xl bg-transparent"
                >
                  View Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
