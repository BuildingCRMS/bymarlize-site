import { MapPin, Mail, Phone } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header text-gray-900 dark:text-white">About Marlize</h2>

        <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-8 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Marlize Bustamante is a Metairie-based property and admin professional offering organized, hands-on
              support for homeowners, investors, and families. With a background in business administration and strong
              experience in tenant relations, documentation, and logistics, she delivers trusted service with a personal
              touch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-purple-200">
            <MapPin className="h-6 w-6 text-purple-500 mr-3" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Metairie, LA</span>
          </div>

          <div className="flex items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-purple-200">
            <Mail className="h-6 w-6 text-purple-500 mr-3" />
            <a
              href="mailto:marlizebustamante@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-medium"
            >
              Email
            </a>
          </div>

          <div className="flex items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-sm border border-purple-200">
            <Phone className="h-6 w-6 text-purple-500 mr-3" />
            <a
              href="tel:5049821508"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 font-medium"
            >
              (504) 982-1508
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
