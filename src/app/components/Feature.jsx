"use client";

import Image from "next/image";

const products = [
  {
    brand: "Apple",
    model: "iPhone 16e",
    series: "iPhone",
    image: "https://i.ibb.co.com/twKKByDd/i-Phone-16e.webp",
    release_year: 2025,
    chip_set: "Apple A18",
    display: "6.1-inch OLED",
    camera: "48MP single camera",
    battery: "4005 mAh",
    price_bdt: 74000,
  },
  {
    brand: "Xiaomi",
    model: "Xiaomi 15 Ultra",
    series: "Xiaomi 15",
    image: "https://i.ibb.co.com/d0JNDQCz/Xiaomi-15-Ultra.png",
    release_year: 2025,
    chip_set: "Snapdragon 8 Elite",
    display: "6.73-inch QHD+ AMOLED",
    camera: "200MP quad camera",
    battery: "5410 mAh",
    price_bdt: 165000,
  },
  {
    brand: "Xiaomi",
    model: "Xiaomi 15S Pro",
    series: "Xiaomi 15",
    image: "https://i.ibb.co.com/wNP1mnzS/Xiaomi-15-S-Pro.webp",
    release_year: 2025,
    chip_set: "Snapdragon 8 Elite",
    display: "6.73-inch AMOLED 120Hz",
    camera: "50MP triple camera",
    battery: "6000 mAh",
    price_bdt: 160000,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold">Latest Featured Phones</h2>
        <p className="text-base-content/70 mt-2">
          Discover the newest smartphones with advanced technology.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((phone, idx) => (
          <div
            key={idx}
            className="bg-base-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-56 bg-base-300 flex items-center justify-center">
              <Image
                src={phone.image}
                alt={phone.model}
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-primary">
                {phone.brand} {phone.model}
              </h3>
              <p className="text-sm text-base-content/70">
                Series: {phone.series} | Released: {phone.release_year}
              </p>

              <ul className="text-sm space-y-1 text-base-content/80">
                <li>⚡ {phone.chip_set}</li>
                <li>📱 {phone.display}</li>
                <li>📷 {phone.camera}</li>
                <li>🔋 {phone.battery}</li>
              </ul>

              <div className="pt-3 flex justify-between items-center">
                <span className="font-bold text-lg text-secondary">
                  ৳ {phone.price_bdt.toLocaleString()}
                </span>
                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm hover:opacity-90">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
