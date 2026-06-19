"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="bg-green-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Get In Touch
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We would love to hear from you. Whether you're interested
            in grafted seedlings, farming consultations, partnerships,
            or agricultural support, our team is ready to assist.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <div className="text-4xl mb-4">📞</div>
            <h2 className="font-bold text-xl mb-3">Phone</h2>
            <p className="text-gray-600">+260 779 769 456</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <div className="text-4xl mb-4">✉️</div>
            <h2 className="font-bold text-xl mb-3">Email</h2>
            <p className="text-gray-600 break-words">
              harvestlinkltd@gmail.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <div className="text-4xl mb-4">📍</div>
            <h2 className="font-bold text-xl mb-3">Location</h2>
            <p className="text-gray-600">Lusaka, Zambia</p>
          </div>

        </div>
      </section>

      {/* FORM + WHATSAPP */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h2 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h2>

            <form
              action="https://formspree.io/f/maqzrbrb"
              method="POST"
              className="space-y-5"
              onSubmit={() => setStatus("Sending...")}
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border rounded-lg p-3"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full border rounded-lg p-3"
                required
              />

              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition"
              >
                Send Message
              </button>

              {status && (
                <p className="text-sm text-green-700">
                  {status}
                </p>
              )}

            </form>
          </div>

          {/* WHATSAPP */}
          <div className="bg-green-800 text-white rounded-2xl p-10 flex flex-col justify-center">

            <h2 className="text-3xl font-bold mb-4">
              Need Immediate Assistance?
            </h2>

            <p className="mb-8 text-green-100">
              Chat with us directly on WhatsApp for quicker responses.
            </p>

            <a
              href="https://wa.me/260779769456"
              className="inline-block bg-white text-green-800 px-6 py-4 rounded-full font-semibold text-center hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
