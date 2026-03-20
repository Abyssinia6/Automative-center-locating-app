import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { UserType } from '@/generated/prisma';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = [
    '/auth/signin',
    '/auth/register',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/api/auth/login',
    '/api/auth/logout',
    '/api/users/register',
    '/api/auth/forgot-password',
    '/api/auth/reset-password',
    '/',
  ];

  // Check if the path is public
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Get token using NextAuth getToken
  const token = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  });

  if (!token) {
    // Redirect to signin if no token
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  try {
    // Extract user info from NextAuth token
    const userType = token.userType as UserType;

    // Define protected routes for each user type
    const routePermissions = {
      [UserType.SYSTEM_ADMIN]: ['/system-admin'],
      [UserType.GARAGE_ADMIN]: ['/garage-admin'],
      [UserType.MECHANIC]: ['/mechanic'],
      [UserType.CUSTOMER]: ['/customer'],
    };

    // Check if user has access to the requested route
    const allowedRoutes = routePermissions[userType] || [];
    const hasAccess = allowedRoutes.some(route => pathname.startsWith(route));

    if (!hasAccess) {
      // Redirect to appropriate dashboard based on user type
      const dashboards = {
        [UserType.SYSTEM_ADMIN]: '/system-admin',
        [UserType.GARAGE_ADMIN]: '/garage-admin',
        [UserType.MECHANIC]: '/mechanic',
        [UserType.CUSTOMER]: '/customer',
      };

      return NextResponse.redirect(new URL(dashboards[userType], request.url));
    }

    // Add user info to request headers for API routes
    const response = NextResponse.next();
    response.headers.set('x-user-id', token.id?.toString() || '');
    response.headers.set('x-user-type', token.userType?.toString() || '');
    response.headers.set('x-username', token.username?.toString() || '');

    return response;
  } catch (error) {
    console.error('Token verification failed:', error);
    // Redirect to signin if token is invalid
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (*.svg, *.png, *.jpg, *.jpeg, *.gif, *.webp)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};