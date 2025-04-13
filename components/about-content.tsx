"use client"

import { Separator } from "@/components/ui/separator"

export default function AboutContent() {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>

          <p>
            Keriko Secondary School was established in 1991 as a community school to serve the educational
            needs of students from Pwani, Njoro Sub-County and its surrounding areas. Located in Nakuru County,
            the school has grown from humble beginnings to become a center of academic excellence and holistic
            student development.
          </p>

          <Separator className="my-8" />

          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p>
            To provide quality education founded on strong principles of discipline, character formation,
            and leadership development, preparing students to become responsible citizens and future leaders.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Our Vision</h3>
          <p>
            To be a leading institution that nurtures talent, fosters innovation, and develops well-rounded
            individuals who contribute positively to society.
          </p>

          <Separator className="my-8" />

          <h3 className="text-2xl font-bold mb-4">Core Values</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li><span className="font-medium">Excellence:</span> Striving for the highest standards in all our endeavors.</li>
            <li><span className="font-medium">Integrity:</span> Upholding honesty, transparency, and ethical conduct.</li>
            <li><span className="font-medium">Discipline:</span> Fostering self-control and adherence to rules and regulations.</li>
            <li><span className="font-medium">Innovation:</span> Encouraging creative thinking and problem-solving skills.</li>
            <li><span className="font-medium">Inclusivity:</span> Embracing diversity and ensuring equal opportunities for all students.</li>
            <li><span className="font-medium">Community Service:</span> Instilling the value of giving back to society.</li>
          </ul>

          <Separator className="my-8" />

          <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
          <p>
            Keriko Secondary School gained international recognition when our teacher, Brother Peter Tabichi,
            won the prestigious Global Teacher Prize in 2019. This accolade has inspired our entire
            community to aim higher and has brought significant improvements to our school infrastructure
            and educational resources.
          </p>
          <p>
            Our students have also excelled in national examinations, various competitions, and
            extracurricular activities, including science fairs, sports events, and creative arts.
          </p>

          <Separator className="my-8" />

          <h3 className="text-2xl font-bold mb-4">Our Facilities</h3>
          <p>
            The school boasts modern facilities including well-equipped classrooms, science laboratories,
            a library, computer lab, and sports fields. These resources enhance the learning experience
            and provide opportunities for students to explore their interests and talents.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">School Leadership</h3>
          <p>
            Under the guidance of our dedicated principal and a team of qualified teachers, Keriko Secondary
            School continues to grow and evolve. The school's board of management, in collaboration with
            parents and the community, ensures effective governance and strategic direction.
          </p>

          <p className="mt-8 font-medium text-center">
            Join us in our journey of nurturing the next generation of leaders, innovators, and change-makers.
          </p>
        </div>
      </div>
    </section>
  )
}

