/**
 * ONE-DNA™ Evidence Block Component
 *
 * Displays evidence objects (EPDs, LCAs, certifications, etc.) with
 * proper scope framing and verification status.
 *
 * Part of the anti-greenwashing framework.
 */

import styles from './EvidenceBlock.module.css';
import clsx from 'clsx';

type EvidenceType =
  | 'epd'
  | 'lca'
  | 'test-report'
  | 'certification'
  | 'definition'
  | 'scope'
  | 'third-party';

type VerificationStatus = 'verified' | 'pending' | 'expired';

interface EvidenceBlockProps {
  type: EvidenceType;
  title: string;
  description: string;
  issuingOrganization?: string;
  issueDate?: string;
  expirationDate?: string;
  referenceNumber?: string;
  documentUrl?: string;
  scopeLimitations?: string[];
  verificationStatus: VerificationStatus;
  className?: string;
}

export function EvidenceBlock({
  type,
  title,
  description,
  issuingOrganization,
  issueDate,
  expirationDate,
  referenceNumber,
  documentUrl,
  scopeLimitations,
  verificationStatus,
  className,
}: EvidenceBlockProps) {
  const typeLabels: Record<EvidenceType, string> = {
    epd: 'Environmental Product Declaration',
    lca: 'Life Cycle Assessment',
    'test-report': 'Test Report',
    certification: 'Certification',
    definition: 'Definition',
    scope: 'Scope Statement',
    'third-party': 'Third-Party Verification',
  };

  const statusLabels: Record<VerificationStatus, string> = {
    verified: 'Verified',
    pending: 'Pending Verification',
    expired: 'Expired',
  };

  return (
    <article
      className={clsx(styles.evidenceBlock, styles[`status-${verificationStatus}`], className)}
      aria-labelledby={`evidence-${referenceNumber || title}`}
    >
      <header className={styles.header}>
        <div className={styles.typeLabel}>
          <EvidenceTypeIcon type={type} />
          <span>{typeLabels[type]}</span>
        </div>

        <div
          className={clsx(styles.statusBadge, styles[`badge-${verificationStatus}`])}
          aria-label={`Verification status: ${statusLabels[verificationStatus]}`}
        >
          <StatusIcon status={verificationStatus} />
          <span>{statusLabels[verificationStatus]}</span>
        </div>
      </header>

      <h3 className={styles.title} id={`evidence-${referenceNumber || title}`}>
        {title}
      </h3>

      <p className={styles.description}>{description}</p>

      <dl className={styles.metadata}>
        {issuingOrganization && (
          <div className={styles.metaItem}>
            <dt>Issuing Organization</dt>
            <dd>{issuingOrganization}</dd>
          </div>
        )}

        {referenceNumber && (
          <div className={styles.metaItem}>
            <dt>Reference Number</dt>
            <dd>{referenceNumber}</dd>
          </div>
        )}

        {issueDate && (
          <div className={styles.metaItem}>
            <dt>Issue Date</dt>
            <dd>{formatDate(issueDate)}</dd>
          </div>
        )}

        {expirationDate && (
          <div className={styles.metaItem}>
            <dt>Valid Until</dt>
            <dd>{formatDate(expirationDate)}</dd>
          </div>
        )}
      </dl>

      {/* Scope Limitations - Critical for anti-greenwashing */}
      {scopeLimitations && scopeLimitations.length > 0 && (
        <div className={styles.scopeSection}>
          <h4 className={styles.scopeTitle}>
            <WarningIcon />
            Scope & Limitations
          </h4>
          <ul className={styles.scopeList}>
            {scopeLimitations.map((limitation, index) => (
              <li key={index}>{limitation}</li>
            ))}
          </ul>
        </div>
      )}

      {documentUrl && (
        <footer className={styles.footer}>
          <a
            href={documentUrl}
            className={styles.documentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DocumentIcon />
            View Full Document
            <ExternalLinkIcon />
          </a>
        </footer>
      )}
    </article>
  );
}

// Helper function for date formatting
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

// Icon Components
function EvidenceTypeIcon({ type }: { type: EvidenceType }) {
  const iconPaths: Record<EvidenceType, string> = {
    epd: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    lca: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    'test-report': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    certification: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    definition: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    scope: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    'third-party': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[type]} />
    </svg>
  );
}

function StatusIcon({ status }: { status: VerificationStatus }) {
  if (status === 'verified') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (status === 'pending') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default EvidenceBlock;
