import { FileSignature } from "lucide-react"

export function NotaryServices() {
  return (
    <section className="bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <FileSignature className="h-10 w-10 text-primary-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Notary Services</h2>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium mb-6">
            Coming December 2025
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Professional notary services for all your document needs:
          </p>

          <ul className="space-y-3 text-left max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✔</span>
              <span className="text-gray-700 dark:text-gray-300">Vehicle documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✔</span>
              <span className="text-gray-700 dark:text-gray-300">Property documents</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✔</span>
              <span className="text-gray-700 dark:text-gray-300">On-site options available</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
