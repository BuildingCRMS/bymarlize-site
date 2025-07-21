import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function BookingSection() {
  return (
    <section id="contact" className="purple-gradient-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <Calendar className="h-12 w-12 mx-auto mb-6 text-white" />

          <h2 className="text-3xl font-bold mb-6">Ready to book Marlize's services?</h2>

          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Schedule your appointment today and experience reliable, professional support for your property management
            and family needs.
          </p>

          <a
            href="https://app.squareup.com/appointments/book/f8lsousfg6fh6e/L3CKXB65SQ2QR/start"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="px-8 py-4 text-lg bg-white text-primary-700 hover:bg-gray-100 hover:text-primary-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold">
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
