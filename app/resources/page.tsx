export default function Resources() {
  return (
    <main className="min-h-screen">

      {/* HERO */}

      <section className="bg-green-50 py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Farmer Resources
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Access agricultural knowledge, practical guides,
            and farm management tools designed to help farmers
            improve productivity and establish successful
            avocado orchards.
          </p>

        </div>

      </section>


      {/* KNOWLEDGE SECTION */}

      <section className="py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10">
            Farming Guides
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                🌱
              </div>

              <h3 className="font-bold text-xl mb-3">
                Avocado Planting Guide
              </h3>

              <p className="text-gray-600">
                Learn spacing requirements,
                land preparation, and orchard
                establishment methods.
              </p>

            </div>


            <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                ✂️
              </div>

              <h3 className="font-bold text-xl mb-3">
                Grafting Best Practices
              </h3>

              <p className="text-gray-600">
                Improve propagation success with
                proper grafting and seedling
                management techniques.
              </p>

            </div>


            <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <div className="text-4xl mb-4">
                🚜
              </div>

              <h3 className="font-bold text-xl mb-3">
                Farm Management Advice
              </h3>

              <p className="text-gray-600">
                Guidance on irrigation,
                nutrition, disease prevention,
                and farm operations.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* FARM TOOLS */}

      <section className="bg-gray-50 py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-10">
            Farm Management Tools
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm">

              <div className="text-4xl mb-3">
                📅
              </div>

              <h3 className="font-bold mb-2">
                Planting Calendar
              </h3>

              <p className="text-gray-600 text-sm">
                Track planting periods and
                orchard schedules.
              </p>

            </div>



            <div className="bg-white p-6 rounded-xl shadow-sm">

              <div className="text-4xl mb-3">
                💧
              </div>

              <h3 className="font-bold mb-2">
                Irrigation Planner
              </h3>

              <p className="text-gray-600 text-sm">
                Estimate watering schedules
                for healthier trees.
              </p>

            </div>



            <div className="bg-white p-6 rounded-xl shadow-sm">

              <div className="text-4xl mb-3">
                📈
              </div>

              <h3 className="font-bold mb-2">
                Yield Calculator
              </h3>

              <p className="text-gray-600 text-sm">
                Estimate future orchard
                production and growth.
              </p>

            </div>



            <div className="bg-white p-6 rounded-xl shadow-sm">

              <div className="text-4xl mb-3">
                💰
              </div>

              <h3 className="font-bold mb-2">
                Cost Tracker
              </h3>

              <p className="text-gray-600 text-sm">
                Monitor expenses and
                farm profitability.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Need Additional Support?
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Harvest Link Farms provides farmer support,
          consultation services and guidance to help
          establish productive avocado orchards.
        </p>

        <a
          href="https://wa.me/260779769456"
          className="bg-green-700 text-white px-8 py-4 rounded-full inline-block hover:bg-green-800 transition"
        >
          Talk to Us on WhatsApp
        </a>

      </section>

    </main>
  );
}