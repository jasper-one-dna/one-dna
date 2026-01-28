/**
 * ONE-DNA™ Middleware
 *
 * Handles internationalization routing and locale detection.
 * Language and country are layers, never separate websites.
 */

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Prefix the default locale as well
  localePrefix: 'always',

  // Detect locale from Accept-Language header
  localeDetection: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - api routes
    // - _next (Next.js internals)
    // - static files (images, fonts, etc.)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
