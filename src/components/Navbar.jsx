import React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center py-2 px-4 md:px-8 justify-between rounded-full shadow-md w-full max-w-6xl bg-background/30 backdrop-blur-md mx-auto">
      <Link
        href="/"
        className="text-md tracking-wide font-bold uppercase hover:text-customer-text cursor-pointer"
      >
        ShubhKart
      </Link>
      {/* ========== NAV LINKS =========== */}
      <ul className="flex items-center gap-4">
        <Link href="/customer/carts" className="text-sm font-semibold">
          Carts
        </Link>
        <Link href="/customer/orders" className="text-sm font-semibold">
          Orders
        </Link>
        <Link href="/customer/profile" className="text-sm font-semibold">
          Profile
        </Link>
        <Link href="/login" className="text-sm font-semibold">
          Login
        </Link>

        <ThemeToggle />
      </ul>
    </nav>
  );
}