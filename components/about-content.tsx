export default function AboutContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#204434" }}>
              HISTORY
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                The school was started in the year 2007 when the parents implemented the long-awaited project. The
                school was initially hosted by Keriko Primary School before they constructed their premises on the
                ground set aside for them by the primary school committee.
              </p>
              <p>
                The main objective of starting the school was to offer education cheaply to a large number of school
                leavers from Keriko, Sinendet, Naishi, Ndemi, and other primary schools who are unable to access
                education due to the escalating poverty in the area.
              </p>
              <p>
                The main catchment of the school Keriko Primary produces over 100 KCPE candidates annually. Most of them
                end up in the village due to a lack of school fees. This, therefore, was an effort toward poverty
                alleviation.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-6" style={{ color: "#204434" }}>
              FACILITIES
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Keriko Secondary School has continued to develop its facilities to provide a conducive learning
                environment for all students. Our current facilities include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Modern classrooms equipped with necessary learning materials</li>
                <li>Well-equipped science laboratories for practical learning</li>
                <li>Computer laboratory with internet access</li>
                <li>Library with a growing collection of books and reference materials</li>
                <li>Sports fields for various activities including football, volleyball, and athletics</li>
                <li>Clean water supply system</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3" style={{ color: "#204434" }}>
                MOTTO
              </h3>
              <p className="text-gray-700 dark:text-gray-300">Knowledge is power</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3" style={{ color: "#204434" }}>
                OUR MISSION
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Keriko will strive to be a centre of academic excellence and youth development
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3" style={{ color: "#204434" }}>
                OUR VISION
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Keriko's vision is to provide quality and Holistic Education founded on strong principles of discipline,
                character formation and leadership development
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3" style={{ color: "#204434" }}>
                CORE VALUES
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Integrity</li>
                <li>Transparency</li>
                <li>Teamwork</li>
                <li>Professionalism</li>
                <li>Diligence</li>
                <li>Accountability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "#204434" }}>
                CORE FUNCTIONS
              </h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Provision of quality education</li>
                <li>Identify and nurture talents in the learners and staff</li>
                <li>Produce God fearing students</li>
                <li>To be a role model to the society</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

