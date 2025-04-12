export interface MediaAsset {
  id: number
  src: string
  alt: string
  width: number
  height: number
  type: "image"
  category?: string
  tags?: string[]
  caption?: string
  fallbackSrc?: string
  // year?: number  // Keep the field but don't display it
}

const IMG_DIMENSIONS = {
  standard: { width: 1920, height: 1080 },
}

// Function to generate gallery images organized by category
function generateGalleryImages(): MediaAsset[] {
  const images: MediaAsset[] = []

  // Archive Collection from the "old" folder (2006-2019)
  // Updated to include all 128 archive images
  const oldImages = [
    // Image files in numerical order
    { file: "1.jpg", alt: "Archive Image 1" },
    { file: "2.jpg", alt: "Archive Image 2" },
    { file: "3.jpg", alt: "Archive Image 3" },
    { file: "04.jpg", alt: "Archive Image 4" },
    { file: "5.jpg", alt: "Archive Image 5" },
    { file: "6.jpg", alt: "Archive Image 6" },
    { file: "7.jpg", alt: "Archive Image 7" },
    { file: "8.jpg", alt: "Archive Image 8" },
    { file: "9.jpg", alt: "Archive Image 9" },
    { file: "10.jpg", alt: "Archive Image 10" },
    { file: "011.jpg", alt: "Archive Image 11" },
    { file: "12.jpg", alt: "Archive Image 12" },
    { file: "13.jpg", alt: "Archive Image 13" },
    { file: "14.jpg", alt: "Archive Image 14" },
    { file: "15.jpg", alt: "Archive Image 15" },
    { file: "16.jpg", alt: "Archive Image 16" },
    { file: "17.jpg", alt: "Archive Image 17" },
    { file: "18.jpg", alt: "Archive Image 18" },
    { file: "019.jpg", alt: "Archive Image 19" },
    { file: "20.jpg", alt: "Archive Image 20" },
    { file: "21.jpg", alt: "Archive Image 21" },
    { file: "22.jpg", alt: "Archive Image 22" },
    { file: "23.jpg", alt: "Archive Image 23" },
    { file: "24.jpg", alt: "Archive Image 24" },
    { file: "25.jpg", alt: "Archive Image 25" },
    { file: "26.jpg", alt: "Archive Image 26" },
    { file: "27.jpg", alt: "Archive Image 27" },
    { file: "28.jpg", alt: "Archive Image 28" },
    { file: "29.jpg", alt: "Archive Image 29" },
    { file: "30.jpg", alt: "Archive Image 30" },
    { file: "31.jpg", alt: "Archive Image 31" },
    { file: "32.jpg", alt: "Archive Image 32" },
    { file: "33.jpg", alt: "Archive Image 33" },
    { file: "034.jpg", alt: "Archive Image 34" },
    { file: "35.jpg", alt: "Archive Image 35" },
    { file: "036.jpg", alt: "Archive Image 36" },
    { file: "37.jpg", alt: "Archive Image 37" },
    { file: "38.jpeg", alt: "Archive Image 38" },
    { file: "39.jpeg", alt: "Archive Image 39" },
    { file: "40.jpeg", alt: "Archive Image 40" },
    { file: "041.jpg", alt: "Archive Image 41" },
    { file: "043.jpeg", alt: "Archive Image 43" },
    { file: "044.jpg", alt: "Archive Image 44" },
    { file: "45.jpeg", alt: "Archive Image 45" },
    { file: "047.jpg", alt: "Archive Image 47" },
    { file: "048.jpg", alt: "Archive Image 48" },
    { file: "49.jpeg", alt: "Archive Image 49" },
    { file: "50.jpeg", alt: "Archive Image 50" },
    { file: "051.jpg", alt: "Archive Image 51" },
    { file: "52.jpeg", alt: "Archive Image 52" },
    { file: "53.jpeg", alt: "Archive Image 53" },
    { file: "54.jpeg", alt: "Archive Image 54" },
    { file: "55.jpeg", alt: "Archive Image 55" },
    { file: "56.jpeg", alt: "Archive Image 56" },
    { file: "57.jpeg", alt: "Archive Image 57" },
    { file: "58.jpeg", alt: "Archive Image 58" },
    { file: "59.jpeg", alt: "Archive Image 59" },
    { file: "60.jpeg", alt: "Archive Image 60" },
    { file: "61.jpeg", alt: "Archive Image 61" },
    { file: "62.jpeg", alt: "Archive Image 62" },
    { file: "63.jpeg", alt: "Archive Image 63" },
    { file: "64.jpeg", alt: "Archive Image 64" },

    // Science and Laboratory images
    { file: "lab1.jpg", alt: "Science Laboratory" },
    { file: "lab2.jpg", alt: "Chemistry Lab" },
    { file: "lab3.jpg", alt: "Laboratory Equipment" },
    { file: "lab4.jpg", alt: "Student Experiment" },

    // Israeli Embassy visit related images
    { file: "israel-1.jpg", alt: "Israeli Embassy Visit" },
    { file: "israel-2.jpg", alt: "Embassy Representatives" },
    { file: "israel-3.jpg", alt: "School Leaders Meeting" },
    { file: "israel-4.jpg", alt: "School Event" },

    // General school images
    { file: "tower-1.jpg", alt: "School Water Tower" },
    { file: "intro.jpg", alt: "School Introduction" },
    { file: "water2.jpg", alt: "Water Supply 2" },
    { file: "water3.jpg", alt: "Water Supply 3" },
    { file: "f3.jpg", alt: "School Facility 3" },
    { file: "f4.jpg", alt: "School Facility 4" },

    // Commissioner related images
    { file: "commissioner_planting_1.jpg", alt: "Commissioner Planting Tree" },
    { file: "high_commissioner_2.jpg", alt: "High Commissioner Visit" },

    // Sports images
    { file: "sports1.jpeg", alt: "Sports Activities" },
    { file: "sports2.jpeg", alt: "Student Athletics" },
    { file: "sports3.jpeg", alt: "School Sports Event" },
    { file: "sports4.jpeg", alt: "Athletics Competition" },
    { file: "sports5.jpeg", alt: "School Team" },
    { file: "sports6.jpeg", alt: "Sports Field" },
    { file: "sports7.jpeg", alt: "Student Sports" },
    { file: "sports8.jpeg", alt: "Annual Sports Day" },

    // Safaricom partnership related images
    { file: "saf-1.jpg", alt: "Safaricom Partnership 1" },
    { file: "saf-2.jpg", alt: "Safaricom Partnership 2" },
    { file: "saf-3.jpg", alt: "Safaricom Event 1" },
    { file: "saf-4.jpg", alt: "Safaricom Event 2" },
    { file: "saf-5.jpg", alt: "Safaricom Initiative 1" },
    { file: "saf-6.jpg", alt: "Safaricom Initiative 2" },
    { file: "saf-7.jpg", alt: "Safaricom Partnership 7" },
    { file: "saf-8.jpg", alt: "Safaricom Partnership 8" },
    { file: "saf-9.jpg", alt: "Safaricom Partnership 9" },
    { file: "saf-10.jpg", alt: "Safaricom Partnership 10" },
    { file: "saf-11.jpg", alt: "Safaricom Partnership 11" },
    { file: "saf-12.jpg", alt: "Safaricom Partnership 12" },
    { file: "saf-13.jpg", alt: "Safaricom Partnership 13" },
    { file: "saf-14.jpg", alt: "Safaricom Partnership 14" },
    { file: "saf-15.jpg", alt: "Safaricom Partnership 15" },
    { file: "saf-16.jpg", alt: "Safaricom Partnership 16" },
    { file: "saf-17.jpg", alt: "Safaricom Partnership 17" },
    { file: "saf-18.jpg", alt: "Safaricom Partnership 18" },
    { file: "saf-19.jpg", alt: "Safaricom Partnership 19" },
    { file: "saf-20.jpg", alt: "Safaricom Partnership 20" },
    { file: "saf-21.jpg", alt: "Safaricom Partnership 21" },
    { file: "saf-22.jpg", alt: "Safaricom Partnership 22" },
    { file: "saf-23.jpg", alt: "Safaricom Partnership 23" },
    { file: "saf-24.jpg", alt: "Safaricom Partnership 24" },
    { file: "saf-25.jpg", alt: "Safaricom Partnership 25" },
    { file: "saf-26.jpg", alt: "Safaricom Partnership 26" },
    { file: "saf-27.jpg", alt: "Safaricom Partnership 27" },
    { file: "saf-28.jpg", alt: "Safaricom Partnership 28" },
    { file: "saf-29.jpg", alt: "Safaricom Partnership 29" },
    { file: "saf-30.jpg", alt: "Safaricom Partnership 30" },
    { file: "saf-31.jpg", alt: "Safaricom Partnership 31" },
    { file: "saf-32.jpg", alt: "Safaricom Partnership 32" },
    { file: "saf-34.jpg", alt: "Safaricom Partnership 34" },
    { file: "saf-35.jpg", alt: "Safaricom Partnership 35" },

    // BI related images
    { file: "bi1.jpeg", alt: "School Event 1" },
    { file: "bi2.jpeg", alt: "School Event 2" },
    { file: "bi3.jpeg", alt: "School Event 3" },
    { file: "bi4.jpeg", alt: "School Event 4" },
    { file: "bi5.jpeg", alt: "School Event 5" },
    { file: "bi6.jpeg", alt: "School Event 6" },
    { file: "bi7.jpeg", alt: "School Event 7" },
    { file: "moringa.jpeg", alt: "Moringa Project" }
  ]

  // Make sure paths are consistent
  oldImages.forEach((img, index) => {
    // Skip known problematic images
    if (index + 1 === 42) return; // Skip the problematic image with ID 42

    const fallbackPath = `/placeholder.svg?height=600&width=800&text=Archive+Image+${index+1}`

    images.push({
      id: index + 1,
      src: `/images/old/${img.file}`,
      alt: img.alt,
      width: IMG_DIMENSIONS.standard.width,
      height: IMG_DIMENSIONS.standard.height,
      type: "image",
      category: "Archive Collection",
      // year: 2013 + Math.floor(index / 32), // Removing year display
      tags: ["history", "archive", "school"],
      fallbackSrc: fallbackPath,
    })
  })

  // Recent Highlights from the "latest" folder (2020-Present)
  // Updated to include all 54 recent images
  const latestImages = [
    // Drone shots (DJI_*)
    { file: "DJI_0003.JPG", alt: "Aerial Campus View 1" },
    { file: "DJI_0004.JPG", alt: "Aerial Campus View 2" },
    { file: "DJI_0008.JPG", alt: "Aerial Campus View 3" },
    { file: "DJI_0009.JPG", alt: "Aerial Campus View 4" },
    { file: "DJI_0012.JPG", alt: "Aerial Campus View 5" },
    { file: "DJI_0913.JPG", alt: "School Overview Aerial" },
    { file: "DJI_0917.JPG", alt: "Campus Drone Shot 1" },
    { file: "DJI_0918.JPG", alt: "Campus Drone Shot 2" },
    { file: "DJI_0919.JPG", alt: "Aerial View of Campus" },
    { file: "DJI_0920.JPG", alt: "School Buildings From Above 1" },
    { file: "DJI_0921.JPG", alt: "School Buildings From Above 2" },
    { file: "DJI_0922.JPG", alt: "School Buildings Aerial View" },
    { file: "DJI_0924.JPG", alt: "School Campus Overview 1" },
    { file: "DJI_0925.JPG", alt: "School Campus Overview 2" },
    { file: "DJI_0926.JPG", alt: "School Campus Overview 3" },
    { file: "DJI_0929.JPG", alt: "School Compound Aerial" },
    { file: "DJI_0930.JPG", alt: "School Grounds From Above 1" },
    { file: "DJI_0932.JPG", alt: "School Grounds From Above 2" },
    { file: "DJI_0934.JPG", alt: "School Aerial Perspective" },
    { file: "DJI_0938.JPG", alt: "School Infrastructure View 1" },
    { file: "DJI_0941.JPG", alt: "School Infrastructure View 2" },
    { file: "DJI_0947.JPG", alt: "School Aerial Shot 1" },
    { file: "DJI_0951.JPG", alt: "School Aerial Shot 2" },
    { file: "DJI_0956.JPG", alt: "School Aerial Shot 3" },
    { file: "DJI_0958.JPG", alt: "School Sports Field Aerial" },
    { file: "DJI_0961.JPG", alt: "School Facilities View 1" },
    { file: "DJI_0962.JPG", alt: "School Facilities Aerial View" },
    { file: "DJI_0965.JPG", alt: "School Grounds Overview" },
    { file: "DJI_0966.JPG", alt: "Complete School Aerial View" },
    { file: "DJI_0970.JPG", alt: "School Buildings from Above" },
    { file: "DJI_0973.JPG", alt: "School Infrastructure Aerial" },
    { file: "DJI_0974.JPG", alt: "Campus Aerial View 1" },
    { file: "DJI_0976.JPG", alt: "Campus Aerial View 2" },
    { file: "DJI_0977.JPG", alt: "Campus Aerial View 3" },
    { file: "DJI_0980.JPG", alt: "Campus Aerial Shot 1" },
    { file: "DJI_0982.JPG", alt: "Campus Aerial Shot 2" },
    { file: "DJI_0983.JPG", alt: "Campus Aerial Shot 3" },
    { file: "DJI_0984.JPG", alt: "Campus Aerial Shot" },
    { file: "DJI_0986.JPG", alt: "School Facilities Aerial 1" },
    { file: "DJI_0988.JPG", alt: "School Facilities Aerial 2" },
    { file: "DJI_0989.JPG", alt: "School Facilities Aerial 3" },
    { file: "DJI_0995.JPG", alt: "School Aerial Overview 1" },
    { file: "DJI_0996.JPG", alt: "School Aerial Overview 2" },
    { file: "DJI_0998.JPG", alt: "School Aerial Overview 3" },

    // Regular camera shots (IMG_*)
    { file: "IMG_4428.JPG", alt: "School Development Project" },
    { file: "IMG_4429.JPG", alt: "School Facilities" },
    { file: "IMG_4430.JPG", alt: "New Construction" },
    { file: "IMG_4432.JPG", alt: "School Infrastructure" },
    { file: "IMG_4433.JPG", alt: "School Buildings" },
    { file: "IMG_4437.JPG", alt: "Recent Developments" },
    { file: "IMG_4438.JPG", alt: "School Enhancements" },
    { file: "IMG_4443.JPG", alt: "School Improvements" },
    { file: "IMG_4445.JPG", alt: "Campus Development" },
    { file: "IMG_4446.JPG", alt: "School Updates" }
  ]

  // Make sure paths are consistent
  latestImages.forEach((img, index) => {
    const fallbackPath = `/placeholder.svg?height=600&width=800&text=Recent+Image+${index+100}`

    images.push({
      id: index + 1000, // Increased ID range to avoid conflicts
      src: `/images/latest/${img.file}`,
      alt: img.alt,
      width: IMG_DIMENSIONS.standard.width,
      height: IMG_DIMENSIONS.standard.height,
      type: "image",
      category: "Recent Highlights",
      // year: 2020 + Math.min(Math.floor(index / 18), 3), // Removing year display
      tags: ["current", "development", "facilities"],
      fallbackSrc: fallbackPath,
    })
  })

  return images
}

// Generate all gallery images
export const galleryImages: MediaAsset[] = generateGalleryImages()

// Helper functions
export const getImagesByCategory = (category: string) => galleryImages.filter((img) => img.category === category)

export const getImagesByTag = (tag: string) => galleryImages.filter((img) => img.tags?.includes(tag))

export const getRecentImages = (limit = 10) => [...galleryImages].slice(0, limit)

export const getCategories = () => Array.from(new Set(galleryImages.map((img) => img.category || "Uncategorized")))
