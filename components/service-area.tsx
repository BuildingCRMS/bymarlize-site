import { MapPin } from "lucide-react"

export function ServiceArea() {
  return (
    <section className="bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <MapPin className="h-8 w-8 text-primary-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Service Area</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <div className="px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-medium">
            Metairie
          </div>
          <div className="px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-medium">
            Kenner
          </div>
          <div className="px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 font-medium">
            New Orleans
          </div>
        </div>
      </div>
    </section>
  )
}
