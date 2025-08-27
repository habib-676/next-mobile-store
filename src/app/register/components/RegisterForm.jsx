"use client";

import Link from "next/link";
import { registerUser } from "@/app/actions/auth/registerUser";
export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({ name, email, password });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-base-200">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="label-text font-semibold">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="input input-bordered w-full mt-1"
            />
          </label>

          <label className="block">
            <span className="label-text font-semibold">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full mt-1"
            />
          </label>

          <label className="block">
            <span className="label-text font-semibold">Password</span>
            <input
              type="password"
              name="password"
              placeholder="Type your password"
              className="input input-bordered w-full mt-1"
            />
          </label>

          <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-bold">
            Sign Up
          </button>

          <p className="text-center text-base-content">Or Sign In with</p>
          {/* <SocialLogin /> */}

          <p className="text-center text-base-content">
            Already have an account?{" "}
            <Link href="/login" className="font-bold underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
