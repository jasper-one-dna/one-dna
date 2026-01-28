/**
 * ONE-DNA™ i18n Request Configuration
 *
 * This file configures how next-intl retrieves messages for the current locale.
 */

import { getRequestConfig } from 'next-intl/server';
import { locales, type Locale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
