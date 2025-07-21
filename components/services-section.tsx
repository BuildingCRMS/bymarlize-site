export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header text-gray-900 dark:text-white">Property & Tenant Support</h2>

        <div className="text-center mb-12">
          <span className="brand-badge">Starting at 8–12% of Monthly Rent</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Basic Oversight */}
          <div className="service-card">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Basic Oversight</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Tenant communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Repair/vendor scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Lease/document organization</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Monthly updates</span>
              </li>
            </ul>
          </div>

          {/* Full-Service Assistant */}
          <div className="service-card">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Full-Service Assistant</h3>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400 mb-4 font-medium">
              Includes all Basic Oversight services plus:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Listing management</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Screening & showings</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Expense tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 font-bold">•</span>
                <span className="text-gray-700 dark:text-gray-300">Insurance/registration reminders</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="section-header text-gray-900 dark:text-white">Document & Admin Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Document Support */}
            <div className="service-card">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business Document Support</h3>
              </div>
              <div className="mb-4">
                <span className="brand-badge">$200/project or $35/hr</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700 dark:text-gray-300">File digitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Tax preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Insurance documents</span>
                </li>
              </ul>
            </div>

            {/* Executive Admin Support */}
            <div className="service-card">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Executive Admin Support</h3>
              </div>
              <div className="mb-4">
                <span className="brand-badge">$50/hr</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Calendar/email management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Travel bookings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Scheduling & errands</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
