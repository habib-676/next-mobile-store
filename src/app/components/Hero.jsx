import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-1  text-center px-6 pt-32 pb-20 ">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Discover & Manage Products Effortlessly
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        A simple product management app built with Next.js 15 and NextAuth.
        Browse, explore, and manage products in one place.
      </p>
      <div className="flex gap-4">
        <Link
          href="/products"
          className="px-6 py-3 rounded-xl font-semibold shadow-lg text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all transform hover:-translate-y-1 hover:scale-105"
        >
          Explore Products
        </Link>

        <Link
          href="/login"
          className="px-6 py-3 rounded-xl font-semibold shadow-lg text-blue-700 bg-white/80 backdrop-blur-md hover:bg-white/100 hover:text-blue-900 transition-all transform hover:-translate-y-1 hover:scale-105"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
