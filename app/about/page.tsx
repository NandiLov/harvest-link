import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">

      {/* HERO */}

      <section className="bg-green-50 py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl font-bold text-green-800 mb-6">
              About Harvest Link Farms
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Harvest Link Farms is a tech-enabled avocado propagation
              enterprise focused on improving access to high-quality
              planting materials and strengthening Zambia’s avocado
              value chain.
            </p>

            <p className="mt-6 text-gray-600">
              We combine modern agricultural practices, farmer support,
              and scalable systems to help build productive orchards
              and sustainable agricultural opportunities.
            </p>

          </div>

          <div>

            <Image
              src="/about-avocado.jpeg"
              alt="Harvest Link Farms"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />

          </div>

        </div>

      </section>


      {/* MISSION + VISION */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="p-8 border rounded-2xl shadow-sm">

            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600">
              To empower farmers with quality avocado planting
              materials, practical agricultural knowledge,
              and innovative systems that improve productivity,
              income generation, and long-term sustainability.
            </p>

          </div>


          <div className="p-8 border rounded-2xl shadow-sm">

            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600">
              To become a leading agricultural enterprise
              strengthening Zambia's avocado ecosystem while
              creating opportunities in food systems,
              exports, and value addition.
            </p>

          </div>

        </div>

      </section>


      {/* IMPACT SECTION */}

      <section className="bg-gray-50 py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12">
            What We Aim To Achieve
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <div className="text-4xl mb-4">
                🌱
              </div>

              <h3 className="font-bold text-xl mb-3">
                Quality Seedlings
              </h3>

              <p className="text-gray-600">
                Improve farmer access to healthy,
                high-yield avocado planting material.
              </p>

            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <div className="text-4xl mb-4">
                👨‍🌾
              </div>

              <h3 className="font-bold text-xl mb-3">
                Farmer Support
              </h3>

              <p className="text-gray-600">
                Equip farmers with knowledge and
                practical agricultural guidance.
              </p>

            </div>


            <div className="bg-white p-8 rounded-2xl shadow-sm">

              <div className="text-4xl mb-4">
                📈
              </div>

              <h3 className="font-bold text-xl mb-3">
                Sustainable Growth
              </h3>

              <p className="text-gray-600">
                Create opportunities through local
                production, exports and value addition.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="py-20 text-center px-6">

        <h2 className="text-3xl font-bold mb-5">
          Grow With Harvest Link Farms
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          We believe stronger agricultural systems begin with
          quality planting materials, farmer empowerment,
          and innovation.
        </p>

        <a
          href="https://wa.me/260779769456"
          className="bg-green-700 text-white px-8 py-4 rounded-full inline-block hover:bg-green-800 transition"
        >
          Contact Us
        </a>

      </section>

    </main>
  );
}