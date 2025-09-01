import { NextResponse, NextRequest } from 'next/server';

export function middleware(NextRequest) {
  const token = NextRequest.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/auth/signin', NextRequest.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/customers/:path*', '/sellers/:path*', '/admin/:path*'],
};