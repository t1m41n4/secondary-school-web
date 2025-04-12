import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4 sm:mb-6">
              <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center" style={{ color: "#204434" }}>
              SCHOOL LOCATION
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              The school is located in Nakuru County, Njoro Sub-County, Lare Division.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center" style={{ color: "#204434" }}>
              PHONE NUMBER
            </h3>
            <p className="text-center text-sm sm:text-base">
              <a href="tel:+254103001600" className="text-primary hover:underline">
                +254103001600
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center" style={{ color: "#204434" }}>
              SCHOOL EMAIL
            </h3>
            <p className="text-center text-sm sm:text-base">
              <a
                href="mailto:communications@kerikosecondary.com"
                className="text-primary hover:underline break-all"
              >
                communications@kerikosecondary.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

