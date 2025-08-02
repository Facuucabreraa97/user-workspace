import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token')

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    if (!token) {
      // Not logged in, redirect to login
      return NextResponse.redirect(new URL('/', request.url))
    }
    // Decode token to check role (simplified, ideally verify JWT or session)
    // For demo, assume role is stored in cookie 'user-role'
    const role = request.cookies.get('user-role')
    if (role !== 'admin') {
      // Not admin, redirect to home
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // Redirect after login based on role
  if (pathname === '/login' || pathname === '/') {
    if (token) {
      const role = request.cookies.get('user-role')
      if (role === 'admin') {
        return NextResponse.redirect(new URL('/admin', request.url))
      } else {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/', '/login'],
}
