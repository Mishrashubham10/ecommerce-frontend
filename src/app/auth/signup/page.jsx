"use client";

import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-8 flex items-center justify-center flex-col gap-8 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
        Register here!
      </h1>
      <form
        action=""
        className="w-full flex flex-col gap-8 py-4 px-4 md:py-8 md:px-8"
      >
        {/* ======= FIELD WRAPPER ========== */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Username</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="py-2 px-2 border-none outline-none rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="py-2 px-2 border-none outline-none rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
        {/* =========== LOGIN BUTTONS ============= */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="py-1.5 px-5 bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-500 font-semibold w-1/3">
            Register
          </button>
          {/* <button className="py-1.5 px-5 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 font-semibold w-1/3">
            Login with Github
          </button>
          <button className="py-1.5 px-5 bg-blue-400 text-white rounded-lg shadow-lg hover:bg-blue-500 font-semibold w-1/3">
            Login with Linkedin
          </button> */}
        </div>

        {/* ====== SIGN UP ======== */}
        <div className="">
          <p className="text-center">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}