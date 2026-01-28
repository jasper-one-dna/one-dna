/**
 * ONE-DNA™ Internationalization Configuration
 *
 * Language and country are layers, never separate websites.
 * Core content is created once, then locally contextualized.
 */

export const locales = ['en', 'nl', 'de', 'fr', 'es', 'it'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
};

export const countries = [
  'global',
  'nl',
  'be',
  'de',
  'fr',
  'es',
  'it',
  'uk',
  'us',
  'au',
] as const;

export type Country = (typeof countries)[number];

export const countryNames: Record<Country, string> = {
  global: 'Global',
  nl: 'Netherlands',
  be: 'Belgium',
  de: 'Germany',
  fr: 'France',
  es: 'Spain',
  it: 'Italy',
  uk: 'United Kingdom',
  us: 'United States',
  au: 'Australia',
};

/**
 * Mapping of countries to their primary languages
 */
export const countryToLocale: Record<Country, Locale> = {
  global: 'en',
  nl: 'nl',
  be: 'nl', // or 'fr' depending on region
  de: 'de',
  fr: 'fr',
  es: 'es',
  it: 'it',
  uk: 'en',
  us: 'en',
  au: 'en',
};

/**
 * Check if a string is a valid locale
 */
export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Check if a string is a valid country
 */
export function isValidCountry(value: string): value is Country {
  return countries.includes(value as Country);
}
