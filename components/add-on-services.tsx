import { Camera, ShoppingBag, FileText, Phone, Home, Key, FileCheck, Box, Clock } from "lucide-react"

export function AddOnServices() {
  const services = [
    { name: "Listing Photography", icon: Camera },
    { name: "Errand Runs", icon: ShoppingBag },
    { name: "Expense Report", icon: FileText },
    { name: "Emergency Vendor Call", icon: Phone },
    { name: "House Sitting", icon: Home },
    { name: "Property Walkthrough", icon: Home },
    { name: "Lockout / Key Drop", icon: Key },
    { name: "Document Drop-off", icon: FileCheck },
    { name: "Storage Setup", icon: Box },
    { name: "Appointment Sitting", icon: Clock },
  ]

  return (
    <section className="bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-header text-gray-900 dark:text-white">Add-On Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-sm hover:shadow-lg border border-purple-200 dark:border-purple-800 transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <service.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
