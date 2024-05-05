import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.([^/]+)$/;
const PUBLIC_PATHS = ['/signin', '/register', '/auth/register']; // Add '/auth/register' and '/home' to PUBLIC_PATHS

export default async function middleware(req: NextRequest, res: NextResponse) {
  const { pathname } = req.nextUrl;

  // Check for public files and routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_PATHS.some((path) => pathname.startsWith(path)) ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // If the user is not authenticated and not trying to access a public path
  if (!user && !PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    // Check if the current path is not already '/auth/register'
    if (pathname !== '/auth/register') {
      req.nextUrl.pathname = '/auth/register';
      return NextResponse.redirect(req.nextUrl);
    }
  }

  // If the user is authenticated and trying to access a route starting from '/home'
  if (user && pathname.startsWith('/home')) {
    return NextResponse.next();
  }

  // If the user is authenticated but not accessing a route starting from '/home', redirect to '/home'
  if (user && !pathname.startsWith('/home')) {
    req.nextUrl.pathname = '/home';
    return NextResponse.redirect(req.nextUrl);
  }

  // Otherwise, continue to the next middleware or route handler
  return NextResponse.next();
}
