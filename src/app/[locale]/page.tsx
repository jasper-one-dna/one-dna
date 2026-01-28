/**
 * ONE-DNA™ Home Page
 *
 * The main landing page introducing the ONE-DNA™ system-level
 * approach to sustainable artificial grass.
 */

import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ClaimsFramework } from '@/components/content/ClaimsFramework';
import styles from './page.module.css';

// Navigation structure - fixed globally as per masterprompt
const navigation = [
  { id: 'what-is', label: 'What is ONE-DNA™', href: '/what-is-one-dna' },
  { id: 'solutions', label: 'Solutions', href: '/solutions' },
  { id: 'policy', label: 'Policy & Procurement', href: '/policy-procurement' },
  { id: 'takeback', label: 'Take-back & Circularity', href: '/take-back-circularity' },
  { id: 'specs', label: 'Specifications', href: '/specifications' },
  { id: 'insights', label: 'Insights', href: '/insights' },
  { id: 'partners', label: 'Find a Partner', href: '/find-partner' },
];

const footerSections = [
  {
    title: 'About',
    links: [
      { label: 'What is ONE-DNA™', href: '/what-is-one-dna' },
      { label: 'Our Approach', href: '/what-is-one-dna/approach' },
      { label: 'Technology', href: '/what-is-one-dna/technology' },
      { label: 'Sustainability', href: '/what-is-one-dna/sustainability' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Sports Fields', href: '/solutions/sports' },
      { label: 'Landscaping', href: '/solutions/landscaping' },
      { label: 'Playgrounds', href: '/solutions/playgrounds' },
      { label: 'Commercial', href: '/solutions/commercial' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Specifications', href: '/specifications' },
      { label: 'Evidence Library', href: '/evidence' },
      { label: 'Case Studies', href: '/insights/case-studies' },
      { label: 'Downloads', href: '/downloads' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Find a Partner', href: '/find-partner' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'News', href: '/insights/news' },
    ],
  },
];

const socialLinks = [
  { platform: 'linkedin' as const, href: 'https://linkedin.com/company/one-dna', label: 'Follow ONE-DNA™ on LinkedIn' },
  { platform: 'youtube' as const, href: 'https://youtube.com/@one-dna', label: 'Watch ONE-DNA™ on YouTube' },
];

const locales = [
  { code: 'en', label: 'English' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
];

export default function HomePage() {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  // Example claims framework data for the home page
  const claimsFrameworkData = {
    problemFraming:
      'Conventional artificial grass products are made from multiple materials (polyethylene, polypropylene, latex, polyurethane) that are bonded together permanently. This mixed-material construction makes mechanical recycling impractical and economically unviable, leading to end-of-life disposal via landfill or incineration.',
    designPrinciples: [
      'Single material family (polyolefin-based) throughout all product layers',
      'Designed for disassembly and mechanical recycling from inception',
      'Take-back program integration as a core system element',
      'Full lifecycle responsibility from raw material to end-of-life',
    ],
    whatThisEnables: [
      'Mechanical recyclability of the complete product system',
      'Closed-loop material flows when processed through certified partners',
      'Reduced dependency on virgin raw materials',
      'Lower carbon footprint potential over multiple lifecycles',
    ],
    whatThisDoesNotGuarantee: [
      'Actual recycling outcome depends on proper end-of-life collection and processing',
      'Environmental benefits require participation in official take-back programs',
      'Local recycling infrastructure availability varies by region',
      'Real-world performance depends on proper installation and maintenance',
    ],
    evidenceAndScope: [
      {
        claim: 'Products consist of ≥95% polyolefin materials',
        evidenceRef: 'EPD-2024-ONE-DNA-001',
        scopeLimitations: ['Applies to ONE-DNA™ certified products only', 'Excludes infill materials'],
      },
      {
        claim: 'Mechanical recyclability verified by independent testing',
        evidenceRef: 'TUV-TEST-2024-123',
        scopeLimitations: ['Laboratory conditions', 'Requires proper collection and sorting'],
      },
    ],
    localConditions: [
      'Recycling facility availability varies by country and region',
      'Take-back program coverage depends on local partner network',
      'Regulatory requirements for end-of-life processing differ by jurisdiction',
    ],
  };

  return (
    <>
      <Header
        navigation={navigation}
        currentLocale="en"
        locales={locales}
      />

      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>{t('heroTitle')}</h1>
            <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
            <div className={styles.heroCta}>
              <Button as="a" href="/what-is-one-dna" variant="primary" size="lg">
                {t('heroCta')}
              </Button>
              <Button as="a" href="/contact" variant="outline" size="lg">
                {tCommon('contact')}
              </Button>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('problemTitle')}</h2>
              <p className={styles.sectionDescription}>{t('problemDescription')}</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('solutionTitle')}</h2>
              <p className={styles.sectionDescription}>{t('solutionDescription')}</p>
            </div>

            <div className={styles.featureGrid}>
              <FeatureCard
                icon="single-material"
                title="Single Material Design"
                description="All product layers from the same polyolefin family, enabling true material separation and recycling."
              />
              <FeatureCard
                icon="lifecycle"
                title="Lifecycle Thinking"
                description="Designed with end-of-life in mind from day one, not as an afterthought."
              />
              <FeatureCard
                icon="takeback"
                title="Take-Back Integration"
                description="Official take-back programs ensure products return to the material cycle."
              />
              <FeatureCard
                icon="evidence"
                title="Evidence-Based Claims"
                description="Every claim backed by EPDs, LCAs, and third-party verification."
              />
            </div>
          </div>
        </section>

        {/* Transparency Framework Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <ClaimsFramework {...claimsFrameworkData} />
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ready to learn more?</h2>
              <p className={styles.ctaDescription}>
                Explore how ONE-DNA™ can support your sustainability goals
                with system-level solutions.
              </p>
              <div className={styles.ctaButtons}>
                <Button as="a" href="/what-is-one-dna" variant="secondary" size="lg">
                  Discover ONE-DNA™
                </Button>
                <Button as="a" href="/find-partner" variant="outline" size="lg">
                  Find a Partner
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        sections={footerSections}
        socialLinks={socialLinks}
      />
    </>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <FeatureIcon name={icon} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </article>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    'single-material': (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    lifecycle: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    takeback: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
    evidence: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
