"use client"

export default function GalleryGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-amber-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-amber-800">Gallery Under Construction</h3>
              <div className="mt-2 text-md text-amber-700">
                <p>
                  Our gallery is currently being updated with new photos. Please check back soon to see our complete
                  collection of images showcasing school activities, achievements, and events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

