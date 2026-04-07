import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const host = request.headers.get('host') || ''
  let changed = false

  // 1. Force lowercase for path (except for dynamic segments if needed, but here simple)
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase()
    changed = true
  }

  // 2. Remove trailing slash (doing it manually avoids chain with Next.js internal redirect)
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
    changed = true
  }

  /* 
  // 3. WWW to Non-WWW (Conflict with Vercel dashboard settings - causes redirect loop)
  if (host.startsWith('www.')) {
    const newHostname = host.replace('www.', '')
    const newUrl = new URL(request.url.toLowerCase())
    newUrl.hostname = newHostname
    
    if (newUrl.pathname.length > 1 && newUrl.pathname.endsWith('/')) {
        newUrl.pathname = newUrl.pathname.slice(0, -1)
    }

    return NextResponse.redirect(newUrl, 301)
  }
  */

  if (changed) {
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
    * Match all request paths except for the ones starting with:
    * - api (API routes)
    * - _next/static (static files)
    * - _next/image (image optimization files)
    * - favicon.ico (favicon file)
    * - robots.txt (robots file)
    * - sitemap.xml (sitemap file)
    */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
