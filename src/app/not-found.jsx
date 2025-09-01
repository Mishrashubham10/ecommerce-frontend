'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[43rem] bg-background text-foreground">
      <h1 className="text-6xl font-bold text-error">404</h1>
      <p className="text-xl mt-4 text-muted-foreground">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-accent text-accent-foreground rounded-md hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}