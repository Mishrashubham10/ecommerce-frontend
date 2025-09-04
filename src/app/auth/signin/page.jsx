'use client';

import { setToken } from '@/lib/token';
import { useLoginMutation } from '@/redux/reducers/auth/authApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(formData).unwrap();
      console.log(result);
      if (result.user) {
        setToken(result.token);
        router.push('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-8 flex items-center justify-center flex-col gap-8 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
        Login With Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-8 py-4 px-4 md:py-8 md:px-8"
      >
        {/* ======= FIELD WRAPPER ========== */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="py-2 px-2 border-none outline-none rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="py-2 px-2 border-none outline-none rounded-lg shadow-2xl w-full border-[0.3px] border-red-600"
            />
          </div>
        </div>
        {/* =========== LOGIN BUTTONS ============= */}
        {/* <div className="flex flex-col md:flex-row gap-4">
          <button className="py-1.5 px-5 bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-500 font-semibold w-1/3">
            Login with Google
          </button>
          <button className="py-1.5 px-5 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 font-semibold w-1/3">
            Login with Github
          </button>
          <button className="py-1.5 px-5 bg-blue-400 text-white rounded-lg shadow-lg hover:bg-blue-500 font-semibold w-1/3">
            Login with Linkedin
          </button>
        </div> */}

        <div className="">
          <button type="submit">Login</button>
        </div>

        {/* ====== SIGN UP ======== */}
        <div className="">
          <p className="text-center">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}