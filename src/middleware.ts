import { NextRequest, NextResponse } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n/config';

const AUTH_USERNAME = 'nhg';
const AUTH_PASSWORD = 'nhg@2026';
const AUTH_COOKIE_NAME = 'auth-session';

// Create the intl middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false
});

/**
 * Verify Basic Auth credentials
 */
function verifyAuth(username: string, password: string): boolean {
  return username === AUTH_USERNAME && password === AUTH_PASSWORD;
}

/**
 * Parse Basic Auth header
 */
function parseBasicAuth(authHeader: string | null): { username: string; password: string } | null {
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return null;
  }

  try {
    const base64Credentials = authHeader.substring(6);
    const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    return { username, password };
  } catch {
    return null;
  }
}

export default function middleware(request: NextRequest) {
  // Check if user is already authenticated via cookie
  const authCookie = request.cookies.get(AUTH_COOKIE_NAME);
  const isAuthenticated = authCookie?.value === 'authenticated';

  if (!isAuthenticated) {
    // Check for Basic Auth header
    const authHeader = request.headers.get('authorization');
    const credentials = parseBasicAuth(authHeader);

    if (credentials && verifyAuth(credentials.username, credentials.password)) {
      // Valid credentials - set cookie and continue
      const response = intlMiddleware(request);
      response.cookies.set(AUTH_COOKIE_NAME, 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });
      return response;
    } else {
      // Not authenticated - return 401 with WWW-Authenticate header
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="ITSM Survey"',
          'Content-Type': 'text/plain'
        }
      });
    }
  }

  // Already authenticated - proceed with intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(vi|en)/:path*']
};

