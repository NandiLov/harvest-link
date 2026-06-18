const products = [
  {
    name: "Grafted Hass Avocado Seedlings",
    description:
      "High-quality grafted Hass avocado seedlings developed for commercial orchards and smallholder farmers. Strong rootstock, fast growth, and high yield potential.",
    price: "K85 – K120",
    tag: "Seedlings",
  },
  {
    name: "Avocado Grafting Service",
    description:
      "Professional field grafting service to improve productivity, yield, and fruit quality of existing avocado trees using proven techniques.",
    price: "From K10 per tree",
    tag: "Service",
  },
  {
    name: "Farm Advisory Support",
    description:
      "Expert guidance on orchard planning, spacing, irrigation systems, pest management, and long-term farm productivity strategies.",
    price: "Consultation-based",
    tag: "Advisory",
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800">
          Our Products & Services
        </h1>

        <p className="mt-4 text-gray-600">
          We provide high-quality avocado propagation solutions and farm support services designed to help farmers establish profitable, export-ready orchards.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">

        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition bg-green-50/30"
          >
            
            {/* TAG */}
            <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
              {item.tag}
            </span>

            {/* TITLE */}
            <h2 className="text-xl font-bold text-green-800 mt-4">
              {item.name}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* PRICE */}
            <p className="mt-4 text-lg font-bold text-gray-900">
              {item.price}
            </p>

            {/* CTA */}
            <a
              href={`https://wa.me/260779769456?text=Hello%20Harvest%20Link%20Farms,%20I%20am%20interested%20in:%20${encodeURIComponent(
                item.name
              )}`}
              className="inline-block mt-5 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
            >
              Order via WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* FOOTER NOTE */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        All products are subject to seasonal availability and nursery capacity.
      </div>

    </main>
  );
}