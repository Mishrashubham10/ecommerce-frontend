'use client';

import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import {
  useLogoutMutation,
} from '@/redux/reducers/auth/authApi';
import { useRouter } from 'next/navigation';
import { getToken, removeToken } from '@/lib/token';

export default function Navbar() {
  const token = getToken();
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      removeToken(token);
      router.push('/auth/signin');
    } catch (err) {
      console.log('Something went wrong while logging out', err);
    }
  };

  console.log(token, 'Current User Token');

  return (
    <nav className="flex items-center h-16 bg-blue-400 px-4 md:px-8 justify-between shadow-md w-full backdrop-blur-md mx-auto">
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
        {/* ======= SHOW USER IF ITS THERE ======= */}
        {token && (
          <button
            onClick={handleLogout}
            className="text-sm font-semibold py-1.5 px-3 bg-gray-200 hover:bg-gray-300 text-gray-600"
          >
            Logout
          </button>
        )}
        {!token && (
          <Link
            href="/auth/signin"
            className="text-sm font-semibold py-1.5 px-3 bg-gray-200 hover:bg-gray-300 text-gray-600"
          >
            Login
          </Link>
        )}

        <ThemeToggle />
      </ul>
    </nav>
  );
}
