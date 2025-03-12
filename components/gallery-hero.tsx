import Image from "next/image"

export default function GalleryHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <Image
        src="/placeholder.svg?height=600&width=1200"
        alt="Keriko Secondary School Gallery"
        fill
        className="object-cover"
        priority
      />
      <h1
        className="relative z-20 text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
        data-aos="fade-left"
      >
        SCHOOL GALLERY
      </h1>
    </section>
  )
}

