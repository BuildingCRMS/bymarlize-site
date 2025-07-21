import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Metairie, LA</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:marlizebustamante@gmail.com" className="hover:underline">
                  marlizebustamante@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:5049821508" className="hover:underline">
                  (504) 982-1508
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline">
                  About Marlize
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#family-support" className="hover:underline">
                  Family Support
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Book Now */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Book an Appointment</h3>
            <p className="mb-4">Ready to get started? Book your appointment today.</p>
            <a
              href="https://app.squareup.com/appointments/book/f8lsousfg6fh6e/L3CKXB65SQ2QR/start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary-600 px-4 py-2 rounded-md font-medium hover:bg-primary-100 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-400 text-center">
          <p>© {currentYear} ByMarlize.com — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
