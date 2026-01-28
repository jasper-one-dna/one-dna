/**
 * ONE-DNA™ - What is ONE-DNA™ Page
 *
 * Core knowledge page explaining the ONE-DNA™ system-level approach
 * to sustainable artificial grass.
 */

import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ClaimsFramework } from '@/components/content/ClaimsFramework';
import { EvidenceBlock } from '@/components/content/EvidenceBlock';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

// Navigation structure
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

export const metadata = {
  title: 'What is ONE-DNA™',
  description:
    'ONE-DNA™ is a design philosophy enabling circularity from the first molecule. Learn about our system-level approach to sustainable artificial grass.',
};

export default function WhatIsOneDnaPage() {
  const t = useTranslations('common');

  const claimsFramework = {
    problemFraming:
      'The artificial grass industry faces a critical sustainability challenge. Traditional products combine multiple incompatible materials—polyethylene fibers, polypropylene backing, latex or polyurethane coatings—creating products that cannot be economically recycled. At end-of-life, over 90% of artificial grass ends up in landfill or incineration.',
    designPrinciples: [
      'Single Material Philosophy: All product components from one compatible material family',
      'Design for Disassembly: Products engineered for end-of-life separation from inception',
      'System-Level Thinking: Beyond product performance to full lifecycle responsibility',
      'Transparency by Design: Every claim backed by verifiable, scoped evidence',
    ],
    whatThisEnables: [
      'Mechanical recycling of complete product systems without material separation',
      'Potential for true closed-loop material cycles in partnership with certified recyclers',
      'Reduced reliance on virgin raw materials through incorporation of recycled content',
      'Lower lifecycle carbon footprint when processed through official take-back programs',
      'Clear specification language for sustainable procurement processes',
    ],
    whatThisDoesNotGuarantee: [
      'Automatic environmental benefit—outcomes require proper end-of-life handling',
      'Universal recycling infrastructure—availability varies by region and partner network',
      'Identical performance to all conventional products in all applications',
      'That all products marketed as "recyclable" deliver equivalent outcomes',
      'Results independent of installation quality and maintenance practices',
    ],
    evidenceAndScope: [
      {
        claim: 'Single material composition (≥95% polyolefin)',
        evidenceRef: 'EPD-ONE-DNA-2024',
        scopeLimitations: [
          'Applies to ONE-DNA™ certified turf products only',
          'Excludes optional infill materials which are specified separately',
        ],
      },
      {
        claim: 'Mechanical recyclability verified',
        evidenceRef: 'TUV-RECYCLABILITY-2024',
        scopeLimitations: [
          'Tested under controlled laboratory conditions',
          'Real-world recycling requires certified processing facilities',
        ],
      },
      {
        claim: 'Take-back program operational',
        evidenceRef: 'TAKEBACK-CERT-2024',
        scopeLimitations: [
          'Coverage depends on regional partner availability',
          'Logistics costs vary by location and volume',
        ],
      },
    ],
    localConditions: [
      'Recycling infrastructure and certified processors vary by country',
      'Local regulations may impose additional requirements for end-of-life processing',
      'Take-back program availability depends on proximity to collection points',
      'Economic viability of recycling influenced by local material markets',
    ],
  };

  return (
    <>
      <Header
        navigation={navigation}
        currentLocale="en"
        locales={locales}
      />

      <main id="main-content">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroBadge}>
              Core Knowledge
            </div>
            <h1 className={styles.heroTitle}>What is ONE-DNA™?</h1>
            <p className={styles.heroLead}>
              ONE-DNA™ is not a product. It's a design philosophy that operates
              at system level, enabling circularity from the very first molecule.
            </p>
          </div>
        </section>

        {/* Core Concept Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              <div className={styles.contentMain}>
                <h2>System-Level Thinking</h2>
                <p>
                  Where conventional artificial grass focuses on performance
                  metrics—durability, appearance, playability—ONE-DNA™ begins
                  with a different question: What happens at end-of-life?
                </p>
                <p>
                  This fundamental shift in perspective leads to fundamentally
                  different design choices. Instead of selecting materials
                  based solely on performance, ONE-DNA™ products are engineered
                  from a single material family that enables true mechanical
                  recycling.
                </p>
                <h3>The Single Material Principle</h3>
                <p>
                  Traditional artificial grass combines polyethylene fibers with
                  polypropylene backing, latex or polyurethane coatings, and
                  various infill materials. These materials are permanently
                  bonded, making separation impractical and recycling economically
                  unviable.
                </p>
                <p>
                  ONE-DNA™ products use polyolefin-based materials throughout—fibers,
                  backing, and coating. This material compatibility means the
                  entire product can be mechanically recycled without the complex
                  and costly separation processes that make conventional grass
                  recycling impractical.
                </p>
              </div>
              <aside className={styles.contentSidebar}>
                <div className={styles.keyFact}>
                  <h4>Key Distinction</h4>
                  <p>
                    "ONE-DNA™ operates at system level, not product level."
                  </p>
                  <p className={styles.keyFactNote}>
                    This means considering the full lifecycle—raw materials,
                    manufacturing, use phase, and end-of-life—as an integrated
                    system rather than optimizing each phase independently.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Evidence Section */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Supporting Evidence</h2>
            <p className={styles.sectionDescription}>
              Every claim is backed by verified evidence with clearly defined scope.
            </p>

            <div className={styles.evidenceGrid}>
              <EvidenceBlock
                type="epd"
                title="Environmental Product Declaration"
                description="Third-party verified EPD documenting environmental impacts across the product lifecycle, including material composition and end-of-life scenarios."
                issuingOrganization="EPD International"
                issueDate="2024-01-15"
                expirationDate="2029-01-15"
                referenceNumber="EPD-ONE-DNA-2024"
                verificationStatus="verified"
                scopeLimitations={[
                  'Covers ONE-DNA™ certified turf products only',
                  'Functional unit: 1m² of installed turf for 10-year reference service life',
                  'End-of-life scenarios based on European average treatment',
                ]}
              />

              <EvidenceBlock
                type="certification"
                title="Recyclability Certification"
                description="Independent verification of mechanical recyclability, confirming that ONE-DNA™ products can be processed through standard polyolefin recycling streams."
                issuingOrganization="TÜV Rheinland"
                issueDate="2024-03-01"
                referenceNumber="TUV-RECYCLABILITY-2024"
                verificationStatus="verified"
                scopeLimitations={[
                  'Laboratory testing under controlled conditions',
                  'Real-world recycling requires proper collection and processing',
                  'Does not guarantee acceptance by all recycling facilities',
                ]}
              />

              <EvidenceBlock
                type="third-party"
                title="Take-Back Program Verification"
                description="Audit confirmation of operational take-back program with documented collection, logistics, and processing partnerships."
                issuingOrganization="Bureau Veritas"
                issueDate="2024-02-15"
                referenceNumber="TAKEBACK-CERT-2024"
                verificationStatus="verified"
                scopeLimitations={[
                  'Program availability varies by region',
                  'Logistics costs not included in product price',
                  'Minimum volume requirements may apply',
                ]}
              />
            </div>
          </div>
        </section>

        {/* Claims Framework */}
        <section className={styles.section}>
          <div className={styles.container}>
            <ClaimsFramework {...claimsFramework} />
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Explore ONE-DNA™ Solutions</h2>
              <p>
                Discover how the ONE-DNA™ approach applies to different
                applications and contexts.
              </p>
              <div className={styles.ctaButtons}>
                <Button as="a" href="/solutions" variant="secondary" size="lg">
                  View Solutions
                </Button>
                <Button as="a" href="/specifications" variant="outline" size="lg">
                  Technical Specifications
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
