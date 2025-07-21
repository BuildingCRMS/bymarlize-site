import { Baby, Home, Package, Mail, Dog } from "lucide-react"

export function FamilyServices() {
  return (
    <section id="family-support" className="bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Family Support Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Childcare Assistant */}
          <div className="service-card hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <Baby className="service-icon" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Childcare Assistant</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Starting at $25/hr</p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">✔</span>
                <span className="text-gray-700 dark:text-gray-300">After-school help</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Date-night care</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Event/kid activity planning</span>
              </li>
            </ul>
          </div>

          {/* Pet Care Services */}
<div className="service-card hover:border-primary-300 hover:shadow-md transition-all duration-300">
  {/* Use the Dog icon from lucide-react */}
  <Dog className="service-icon" />
  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Pet Care Services</h3>
  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Travel & Overnight Pet Assistant – Starting at $65/night</p>
  <ul className="space-y-3">
    <li className="flex items-start">
      <span className="text-primary-500 mr-2">✔</span>
      <span className="text-gray-700 dark:text-gray-300">In-home overnight care while you're away</span>
    </li>
    <li className="flex items-start">
      <span className="text-primary-500 mr-2">✔</span>
      <span className="text-gray-700 dark:text-gray-300">Feeding, walking & companionship routines</span>
    </li>
    <li className="flex items-start">
      <span className="text-primary-500 mr-2">✔</span>
      <span className="text-gray-700 dark:text-gray-300">Daily updates & photo check-ins for peace of mind</span>
    </li>
  </ul>
</div>

          {/* Home Organization */}
          <div className="service-card hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <Home className="service-icon" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Home Organization</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">$40/hr</p>

            <p className="text-gray-700 dark:text-gray-300">
              Professional organization services to help declutter and optimize your living spaces.
            </p>
          </div>

          {/* Supply Restocking */}
          <div className="service-card hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <Package className="service-icon" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Supply Restocking</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">$30 + cost</p>

            <p className="text-gray-700 dark:text-gray-300">Regular restocking of household essentials and supplies.</p>
          </div>

          {/* Mail & Package Management */}
          <div className="service-card hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <Mail className="service-icon" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Mail & Package Management</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">$25/trip</p>

            <p className="text-gray-700 dark:text-gray-300">
              Collection, sorting, and management of mail and packages.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
