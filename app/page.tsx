import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      
      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-green-50">
        
        <h1 className="text-4xl md:text-6xl font-bold text-green-800">
          Harvest Link Farms
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto">
          A tech-enabled avocado propagation enterprise producing high-quality grafted Hass avocado seedlings, supporting farmers with modern orchard establishment and agricultural guidance.
        </p>

        <a
          href="https://wa.me/260779769456"
          className="inline-block mt-8 bg-green-700 text-white px-6 py-3 rounded-full"
        >
          Order Seedlings via WhatsApp
        </a>
      </section>

{/* SERVICES */}
<section className="py-16 px-6 max-w-6xl mx-auto">

  <h2 className="text-3xl font-bold text-center mb-10">
    Our Services
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Seedlings */}

    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

      <Image
        src="/seedlings.png"
        alt="Grafted Hass seedlings"
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">
          Grafted Seedlings
        </h3>

        <p>
          High-quality Hass avocado seedlings for farmers
          and commercial orchards.
        </p>
      </div>

    </div>


    {/* Grafting */}

    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

      <Image
        src="/grafting.png"
        alt="Avocado grafting"
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">
          Grafting Services
        </h3>

        <p>
          Professional avocado grafting techniques for
          stronger, higher-yield plants.
        </p>
      </div>

    </div>


    {/* Farmer Support */}

    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

      <Image
        src="/farmer-support.png"
        alt="Farmer support"
        width={500}
        height={300}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">
          Farmer Support
        </h3>

        <p>
          Guidance on orchard establishment, crop
          management and avocado farming practices.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* IMPACT */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          We are strengthening Zambia’s avocado value chain by improving access to quality planting material and empowering farmers to build sustainable, high-yield orchards.
        </p>
      </section>



    </main>
  );
}