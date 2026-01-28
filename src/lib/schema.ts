/**
 * ONE-DNA™ Schema.org Markup Utilities
 *
 * Generates structured data for SEO and AI-readability.
 * Supports Organization, WebPage, Article, FAQ, and Product schemas.
 */

import type {
  ContentMetadata,
  Article as ArticleContent,
  SpecificationObject,
  EvidenceObject,
} from '@/types/content';

const ORGANIZATION_BASE = {
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
};

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    ...ORGANIZATION_BASE,
    sameAs: [
      'https://www.linkedin.com/company/one-dna',
      'https://www.youtube.com/@one-dna',
    ],
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema({
  title,
  description,
  url,
  lastModified,
  breadcrumbs,
}: {
  title: string;
  description: string;
  url: string;
  lastModified?: string;
  breadcrumbs?: { name: string; url: string }[];
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'ONE-DNA™',
      url: 'https://www.one-dna.com',
    },
    publisher: ORGANIZATION_BASE,
  };

  if (lastModified) {
    schema.dateModified = lastModified;
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  }

  return schema;
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(article: ArticleContent, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    url,
    datePublished: article.publishedAt,
    dateModified: article.metadata.lastReviewed,
    author: article.author
      ? {
          '@type': 'Person',
          name: article.author.name,
          jobTitle: article.author.role,
        }
      : ORGANIZATION_BASE,
    publisher: ORGANIZATION_BASE,
    image: article.featuredImage?.src,
    articleSection: article.articleType,
    keywords: article.tags.join(', '),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Product schema for specifications
 */
export function generateProductSchema(spec: SpecificationObject, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: spec.title,
    description: spec.applicationContext,
    url,
    brand: {
      '@type': 'Brand',
      name: 'ONE-DNA™',
    },
    manufacturer: ORGANIZATION_BASE,
    category: spec.category,
    additionalProperty: spec.technicalParameters?.map((param) => ({
      '@type': 'PropertyValue',
      name: param.name,
      value: param.value,
      unitText: param.unit,
    })),
  };
}

/**
 * Generate HowTo schema for installation/maintenance content
 */
export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string; image?: string }[];
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  };
}

/**
 * Generate Certification schema for evidence objects
 */
export function generateCertificationSchema(evidence: EvidenceObject) {
  if (evidence.evidenceType !== 'certification') {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Certification',
    name: evidence.title,
    description: evidence.description,
    certificationIdentification: evidence.referenceNumber,
    issuedBy: {
      '@type': 'Organization',
      name: evidence.issuingOrganization,
    },
    dateCreated: evidence.issueDate,
    expires: evidence.expirationDate,
    url: evidence.documentUrl,
  };
}

/**
 * Helper to generate JSON-LD script tag content
 */
export function toJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}

/**
 * Generate breadcrumb schema from path
 */
export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.one-dna.com${item.href}`,
    })),
  };
}
