/**
 * ONE-DNA™ Root Layout
 *
 * The root layout for all pages, providing:
 * - Global styles and design tokens
 * - Internationalization context
 * - Schema.org Organization markup
 * - Security and accessibility features
 */

import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    title: {
      default: 'ONE-DNA™ | System-Level Sustainability for Artificial Grass',
      template: '%s | ONE-DNA™',
    },
    description:
      'ONE-DNA™ is a design philosophy enabling circularity from the first molecule. Explore our evidence-driven approach to sustainable artificial grass systems.',
    keywords: [
      'ONE-DNA',
      'artificial grass',
      'sustainable turf',
      'circular economy',
      'recyclable grass',
      'EPD',
      'LCA',
      'single material',
    ],
    authors: [{ name: 'ONE-DNA™' }],
    creator: 'ONE-DNA™',
    publisher: 'ONE-DNA™',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://www.one-dna.com'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        nl: '/nl',
        de: '/de',
        fr: '/fr',
        es: '/es',
        it: '/it',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: 'https://www.one-dna.com',
      siteName: 'ONE-DNA™',
      title: 'ONE-DNA™ | System-Level Sustainability for Artificial Grass',
      description:
        'ONE-DNA™ is a design philosophy enabling circularity from the first molecule.',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ONE-DNA™ - System-Level Sustainability',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ONE-DNA™ | System-Level Sustainability',
      description:
        'ONE-DNA™ is a design philosophy enabling circularity from the first molecule.',
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* Schema.org Organization Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ONE-DNA™',
              url: 'https://www.one-dna.com',
              logo: 'https://www.one-dna.com/images/logo.png',
              description:
                'ONE-DNA™ operates at system level, not product level. A design philosophy enabling circularity from the first molecule.',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+31-541-21-79-00',
                email: 'info@one-dna.com',
                contactType: 'customer service',
                availableLanguage: ['English', 'Dutch', 'German', 'French', 'Spanish', 'Italian'],
              },
              sameAs: [
                'https://www.linkedin.com/company/one-dna',
                'https://www.youtube.com/@one-dna',
              ],
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
