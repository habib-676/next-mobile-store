"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Navbar() {
  const session = useSession();
  console.log(session);
  const { data, status } = session;

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md ">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600">
        ProductApp
      </Link>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-600 transition">
          Products
        </Link>
        {status == "authenticated" ? (
          <button
            onClick={() => {
              signOut();
              toast.success("See you again...");
            }}
            className="hover:text-blue-600 cursor-pointer transition"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="hover:text-blue-600 transition">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
