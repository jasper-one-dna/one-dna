/**
 * ONE-DNA™ Footer Component
 *
 * Modular footer system with jurisdiction-aware legal modules,
 * trademark notices, sustainability disclaimers, and social links.
 */

import Link from 'next/link';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: 'linkedin' | 'youtube' | 'instagram' | 'twitter';
  href: string;
  label: string;
}

interface FooterProps {
  sections: FooterSection[];
  socialLinks: SocialLink[];
  currentYear?: number;
  locale?: string;
  countryCode?: string;
}

export function Footer({
  sections,
  socialLinks,
  currentYear = new Date().getFullYear(),
  locale = 'en',
  countryCode = 'global',
}: FooterProps) {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Main Footer Content */}
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo} aria-label="ONE-DNA™ Home">
            <OneDnaLogoWhite />
          </Link>

          <p className={styles.brandTagline}>
            Operating at system level, not product level.
          </p>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <SocialIcon platform={link.platform} />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <p>
              <a href="tel:+31541217900">+31 (0) 541 21 79 00</a>
            </p>
            <p>
              <a href="mailto:info@one-dna.com">info@one-dna.com</a>
            </p>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className={styles.navSections} aria-label="Footer navigation">
          {sections.map((section) => (
            <div key={section.title} className={styles.navSection}>
              <h3 className={styles.navTitle}>{section.title}</h3>
              <ul className={styles.navList}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Sustainability Disclaimer */}
      <div className={styles.disclaimerSection}>
        <div className={styles.disclaimerContainer}>
          <SustainabilityDisclaimer />
        </div>
      </div>

      {/* Legal Bar */}
      <div className={styles.legalBar}>
        <div className={styles.legalContainer}>
          <div className={styles.legalLeft}>
            <p className={styles.copyright}>
              © {currentYear} ONE-DNA™. All rights reserved.
            </p>
            <p className={styles.trademark}>
              ONE-DNA™ is a registered trademark. Use of the ONE-DNA™ name, logo,
              and associated marks is subject to trademark guidelines.
            </p>
          </div>

          <div className={styles.legalRight}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className={styles.legalLink}>
              Cookie Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Use
            </Link>
            {countryCode === 'de' && (
              <Link href="/impressum" className={styles.legalLink}>
                Impressum
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Sustainability Disclaimer Component
function SustainabilityDisclaimer() {
  return (
    <div className={styles.disclaimer}>
      <div className={styles.disclaimerIcon}>
        <InfoIcon />
      </div>
      <div className={styles.disclaimerContent}>
        <h4 className={styles.disclaimerTitle}>
          Important Note on Sustainability Claims
        </h4>
        <p className={styles.disclaimerText}>
          ONE-DNA™ is committed to transparency and avoiding greenwashing. All
          sustainability claims on this platform are supported by evidence and
          clearly framed within their applicable scope. Design intent and
          technical potential are distinguished from real-world implementation
          outcomes, which depend on proper installation, maintenance, and
          end-of-life processing by qualified partners. For specific evidence and
          scope limitations, please refer to individual product and service pages.
        </p>
      </div>
    </div>
  );
}

// ONE-DNA™ Logo SVG (White version)
function OneDnaLogoWhite() {
  return (
    <svg
      width="120"
      height="34"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="16" fill="var(--color-brand-accent)" />
      <path
        d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
        fill="var(--color-white)"
        fillOpacity="0.3"
      />
      <circle cx="20" cy="20" r="2" fill="var(--color-white)" />
      <text
        x="44"
        y="26"
        fontFamily="var(--font-family-heading)"
        fontSize="18"
        fontWeight="700"
        fill="var(--color-white)"
      >
        ONE-DNA
      </text>
      <text
        x="126"
        y="18"
        fontFamily="var(--font-family-heading)"
        fontSize="8"
        fill="var(--color-white)"
      >
        ™
      </text>
    </svg>
  );
}

// Social Media Icons
function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case 'linkedin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case 'twitter':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

// Info Icon
function InfoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

export default Footer;
