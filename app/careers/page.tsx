export default function Careers() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-6xl mx-auto">

      {/* Header */}

      <section className="text-center mb-14">

        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Careers at Harvest Link Farms
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Join us in building a stronger and more sustainable avocado
          value chain in Zambia through innovation, quality farming
          solutions, and farmer empowerment.
        </p>

      </section>


      {/* Why Join */}

      <section className="mb-14">

        <h2 className="text-2xl font-bold mb-6">
          Why Work With Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-3">
              Growth Opportunities
            </h3>

            <p>
              Be part of a growing agricultural enterprise with
              opportunities to learn and develop professionally.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-3">
              Innovation
            </h3>

            <p>
              Help shape technology-enabled solutions for modern
              agriculture and farmer support.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-bold mb-3">
              Meaningful Impact
            </h3>

            <p>
              Contribute to improving livelihoods and strengthening
              agricultural systems in Zambia.
            </p>
          </div>

        </div>

      </section>


      {/* Current Openings */}

      <section>

        <h2 className="text-2xl font-bold mb-6">
          Current Opportunities
        </h2>

        <div className="border rounded-xl p-8">

          <h3 className="font-bold text-xl">
            No open positions currently
          </h3>

          <p className="mt-3 text-gray-600">
            We are still growing. However, we are always interested
            in connecting with passionate people interested in
            agriculture, agritech, and business development.
          </p>

          <a
            href="mailto:harvestlinkfarms@gmail.com"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full"
          >
            Submit Your CV
          </a>

        </div>

      </section>

    </main>
  );
}