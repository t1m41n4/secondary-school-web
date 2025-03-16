import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#204434" }}>
              SCHOOL LOCATION
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              The school is located in Nakuru County, Njoro Sub-County, Lare Division, Keriko Location.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#204434" }}>
              PHONE NUMBER
            </h3>
            <p className="text-center">
              <a href="tel:+254103001600" className="text-primary hover:underline">
                +254103001600
              </a>
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-6">
              <Mail className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#204434" }}>
              SCHOOL EMAIL
            </h3>
            <p className="text-center">
              <a href="mailto:communications@kerikosecondary.com" className="text-primary hover:underline break-all">
                communications@kerikosecondary.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

