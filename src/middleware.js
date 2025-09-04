import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  try {
    // Verify and decode JWT
    const secret = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secret);

    // Role-based access
    const path = req.nextUrl.pathname;

    if (path.startsWith('/admin') && decoded.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url)); // redirect non-admins
    }

    if (path.startsWith('/sellers') && decoded.role !== 'seller') {
      return NextResponse.redirect(new URL('/', req.url)); // redirect non-sellers
    }

    if (path.startsWith('/customers') && decoded.role !== 'customer') {
      return NextResponse.redirect(new URL('/', req.url)); // redirect non-customers
    }

    // Token valid & role matches → continue
    return NextResponse.next();
  } catch (err) {
    // Invalid or expired token → redirect to login
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }
}

export const config = {
  matcher: ['/customers/:path*', '/sellers/:path*', '/admin/:path*'],
};