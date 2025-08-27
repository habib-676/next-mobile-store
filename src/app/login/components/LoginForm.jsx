"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/products");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-base-200">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <button className="w-full h-12 bg-blue-500 text-white rounded-3xl font-bold">
            Sign In
          </button>

          <p className="text-center text-base-content mt-2">Or Sign In with</p>
          {/* <SocialLogin /> */}

          <p className="text-center text-base-content mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="font-bold  underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
