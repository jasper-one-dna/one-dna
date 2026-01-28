/**
 * ONE-DNA™ Claims Framework Component
 *
 * This is the core anti-greenwashing component. Every substantive page
 * must include this structured framework that clearly distinguishes:
 * - Problem framing
 * - Design principles
 * - What this enables (potential)
 * - What this does NOT guarantee (limitations)
 * - Evidence and scope
 * - Local conditions
 *
 * This ensures transparency and prevents misleading sustainability claims.
 */

import styles from './ClaimsFramework.module.css';
import clsx from 'clsx';

interface EvidenceScopeItem {
  claim: string;
  evidenceRef: string;
  scopeLimitations?: string[];
}

interface ClaimsFrameworkProps {
  problemFraming: string;
  designPrinciples: string[];
  whatThisEnables: string[];
  whatThisDoesNotGuarantee: string[];
  evidenceAndScope: EvidenceScopeItem[];
  localConditions?: string[];
  className?: string;
}

export function ClaimsFramework({
  problemFraming,
  designPrinciples,
  whatThisEnables,
  whatThisDoesNotGuarantee,
  evidenceAndScope,
  localConditions,
  className,
}: ClaimsFrameworkProps) {
  return (
    <section
      className={clsx(styles.claimsFramework, className)}
      aria-labelledby="claims-framework-title"
    >
      <header className={styles.header}>
        <h2 className={styles.mainTitle} id="claims-framework-title">
          <TransparencyIcon />
          Transparency Framework
        </h2>
        <p className={styles.headerDescription}>
          ONE-DNA™ is committed to avoiding greenwashing. This section provides
          clear framing of claims, evidence, and limitations.
        </p>
      </header>

      <div className={styles.grid}>
        {/* Problem Framing */}
        <div className={clsx(styles.section, styles.problemSection)}>
          <h3 className={styles.sectionTitle}>
            <ProblemIcon />
            Problem Framing
          </h3>
          <p className={styles.sectionContent}>{problemFraming}</p>
        </div>

        {/* Design Principles */}
        <div className={clsx(styles.section, styles.principlesSection)}>
          <h3 className={styles.sectionTitle}>
            <PrinciplesIcon />
            ONE-DNA™ Design Principles
          </h3>
          <ul className={styles.list}>
            {designPrinciples.map((principle, index) => (
              <li key={index} className={styles.listItem}>
                <CheckIcon />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What This Enables */}
        <div className={clsx(styles.section, styles.enablesSection)}>
          <h3 className={styles.sectionTitle}>
            <EnablesIcon />
            What This Enables
          </h3>
          <p className={styles.sectionNote}>
            <em>Technical potential, subject to proper implementation</em>
          </p>
          <ul className={styles.list}>
            {whatThisEnables.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <ArrowRightIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What This Does NOT Guarantee */}
        <div className={clsx(styles.section, styles.limitationsSection)}>
          <h3 className={styles.sectionTitle}>
            <LimitationsIcon />
            What This Does NOT Guarantee
          </h3>
          <p className={styles.sectionNote}>
            <em>Outcomes depend on third-party actions</em>
          </p>
          <ul className={styles.list}>
            {whatThisDoesNotGuarantee.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <XIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Evidence and Scope */}
      <div className={clsx(styles.section, styles.evidenceSection)}>
        <h3 className={styles.sectionTitle}>
          <EvidenceIcon />
          Evidence & Scope
        </h3>
        <div className={styles.evidenceGrid}>
          {evidenceAndScope.map((item, index) => (
            <div key={index} className={styles.evidenceItem}>
              <p className={styles.evidenceClaim}>
                <strong>Claim:</strong> {item.claim}
              </p>
              <p className={styles.evidenceRef}>
                <strong>Evidence:</strong>{' '}
                <a href={`#evidence-${item.evidenceRef}`} className={styles.evidenceLink}>
                  {item.evidenceRef}
                </a>
              </p>
              {item.scopeLimitations && item.scopeLimitations.length > 0 && (
                <div className={styles.scopeLimitations}>
                  <strong>Scope Limitations:</strong>
                  <ul>
                    {item.scopeLimitations.map((limitation, limIndex) => (
                      <li key={limIndex}>{limitation}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Local Conditions */}
      {localConditions && localConditions.length > 0 && (
        <div className={clsx(styles.section, styles.localSection)}>
          <h3 className={styles.sectionTitle}>
            <LocalIcon />
            Local Conditions & Context
          </h3>
          <p className={styles.sectionNote}>
            <em>
              Real-world outcomes may vary based on local regulations,
              infrastructure, and partner capabilities
            </em>
          </p>
          <ul className={styles.list}>
            {localConditions.map((condition, index) => (
              <li key={index} className={styles.listItem}>
                <MapPinIcon />
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Disclaimer */}
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          This transparency framework reflects ONE-DNA™'s commitment to honest
          communication. For questions about specific claims or evidence,
          please{' '}
          <a href="/contact" className={styles.footerLink}>
            contact us
          </a>
          .
        </p>
      </footer>
    </section>
  );
}

// Icon Components
function TransparencyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function ProblemIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

function PrinciplesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function EnablesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function LimitationsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}

function LocalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default ClaimsFramework;
