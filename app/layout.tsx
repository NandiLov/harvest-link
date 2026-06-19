"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <nav className="bg-white border-b p-4 md:p-6">

          <div className="flex justify-between items-center">

            {/* Logo */}
            <a href="/">
              <h1 className="font-bold text-xl text-green-800">
                Harvest Link Farms
              </h1>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-green-700">Home</a>
              <a href="/products" className="hover:text-green-700">Products</a>
              <a href="/about" className="hover:text-green-700">About</a>
              <a href="/resources" className="hover:text-green-700">Resources</a>
              <a href="/contact" className="hover:text-green-700">Contact</a>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-4 flex flex-col space-y-3">
              <a href="/" className="hover:text-green-700">Home</a>
              <a href="/products" className="hover:text-green-700">Products</a>
              <a href="/about" className="hover:text-green-700">About</a>
              <a href="/resources" className="hover:text-green-700">Resources</a>
              <a href="/contact" className="hover:text-green-700">Contact</a>
            </div>
          )}

        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER (keep yours unchanged) */}
        <footer className="bg-green-900 text-white mt-20">
          <div className="max-w-6xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">

            <div>
              <h2 className="font-bold text-xl mb-4">
                Harvest Link Farms
              </h2>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 flex flex-col">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/careers">Careers</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <div className="space-y-2 text-gray-300">
                <p>Grafted Hass Seedlings</p>
                <p>Avocado Grafting</p>
                <p>Farmer Support</p>
                <p>Consultation Services</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Lusaka, Zambia</p>
                <p>📞 +260 779 769 456</p>
                <p>✉ harvestlinkltd@gmail.com</p>
              </div>
            </div>

          </div>

          <div className="border-t border-green-800 py-5 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Harvest Link Farms. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
