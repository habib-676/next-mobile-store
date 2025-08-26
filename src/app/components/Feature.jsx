import React from "react";

export default function Feature() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Products
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Laptop Pro</h3>
          <p className="text-gray-600 mb-4">
            Powerful laptop for modern professionals.
          </p>
          <p className="font-bold text-indigo-600 text-lg">$1200</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Smartphone X</h3>
          <p className="text-gray-600 mb-4">
            Next-generation smartphone with sleek design.
          </p>
          <p className="font-bold text-indigo-600 text-lg">$800</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Wireless Earbuds</h3>
          <p className="text-gray-600 mb-4">
            Crystal-clear sound with noise cancellation.
          </p>
          <p className="font-bold text-indigo-600 text-lg">$200</p>
        </div>
      </div>
    </section>
  );
}
