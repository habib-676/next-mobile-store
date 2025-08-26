import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 ">
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
          className="px-6 py-3  rounded-xl font-semibold shadow-md transition"
        >
          Explore Products
        </Link>
        <Link
          href="/login"
          className="px-6 py-3  rounded-xl font-semibold shadow-md  transition"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
