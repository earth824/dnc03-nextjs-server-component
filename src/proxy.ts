import { NextRequest, NextResponse } from 'next/server';

// /profile
export function proxy(request: NextRequest) {
  console.log('REQUEST COMING AT: ' + new Date());
  console.log('PATH: ' + request.nextUrl.pathname);

  const token = request.cookies.get('accessToken');
  if (request.nextUrl.pathname === '/profile' && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/product']
};
