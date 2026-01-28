/**
 * ONE-DNA™ Specification Block Component
 *
 * Displays specification and tender text with copy-to-clipboard functionality.
 * Includes usage guidance and disclaimer as per anti-greenwashing requirements.
 */

'use client';

import { useState, useCallback } from 'react';
import styles from './SpecificationBlock.module.css';
import clsx from 'clsx';

interface TechnicalParameter {
  name: string;
  value: string;
  unit?: string;
  testMethod?: string;
}

interface SpecificationBlockProps {
  title: string;
  category: 'tender' | 'technical' | 'installation' | 'maintenance';
  applicationContext: string;
  specificationText: string;
  technicalParameters?: TechnicalParameter[];
  usageGuidance: string;
  disclaimer: string;
  evidenceRefs?: string[];
  className?: string;
}

export function SpecificationBlock({
  title,
  category,
  applicationContext,
  specificationText,
  technicalParameters,
  usageGuidance,
  disclaimer,
  evidenceRefs,
  className,
}: SpecificationBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(specificationText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }, [specificationText]);

  const categoryLabels: Record<typeof category, string> = {
    tender: 'Tender Specification',
    technical: 'Technical Specification',
    installation: 'Installation Specification',
    maintenance: 'Maintenance Specification',
  };

  return (
    <article
      className={clsx(styles.specificationBlock, className)}
      aria-labelledby={`spec-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <header className={styles.header}>
        <div className={styles.categoryBadge}>
          <SpecIcon category={category} />
          <span>{categoryLabels[category]}</span>
        </div>
        <h3
          className={styles.title}
          id={`spec-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {title}
        </h3>
        <p className={styles.applicationContext}>{applicationContext}</p>
      </header>

      {/* Specification Text with Copy Button */}
      <div className={styles.specTextContainer}>
        <div className={styles.specTextHeader}>
          <h4 className={styles.specTextTitle}>Specification Text</h4>
          <button
            className={clsx(styles.copyButton, copied && styles.copyButtonSuccess)}
            onClick={handleCopy}
            aria-label={copied ? 'Copied!' : 'Copy specification text to clipboard'}
          >
            {copied ? (
              <>
                <CheckIcon />
                Copied!
              </>
            ) : (
              <>
                <CopyIcon />
                Copy to Clipboard
              </>
            )}
          </button>
        </div>
        <div className={styles.specText}>
          <pre>{specificationText}</pre>
        </div>
      </div>

      {/* Technical Parameters */}
      {technicalParameters && technicalParameters.length > 0 && (
        <div className={styles.parametersSection}>
          <h4 className={styles.sectionTitle}>Technical Parameters</h4>
          <table className={styles.parametersTable}>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Test Method</th>
              </tr>
            </thead>
            <tbody>
              {technicalParameters.map((param, index) => (
                <tr key={index}>
                  <td>{param.name}</td>
                  <td>
                    {param.value}
                    {param.unit && <span className={styles.unit}> {param.unit}</span>}
                  </td>
                  <td>{param.testMethod || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Usage Guidance */}
      <div className={styles.guidanceSection}>
        <h4 className={styles.sectionTitle}>
          <InfoIcon />
          Usage Guidance
        </h4>
        <p className={styles.guidanceText}>{usageGuidance}</p>
      </div>

      {/* Evidence References */}
      {evidenceRefs && evidenceRefs.length > 0 && (
        <div className={styles.evidenceSection}>
          <h4 className={styles.sectionTitle}>Supporting Evidence</h4>
          <ul className={styles.evidenceList}>
            {evidenceRefs.map((ref, index) => (
              <li key={index}>
                <a href={`#evidence-${ref}`} className={styles.evidenceLink}>
                  <DocumentIcon />
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Disclaimer */}
      <footer className={styles.disclaimerSection}>
        <div className={styles.disclaimer}>
          <WarningIcon />
          <div>
            <h4 className={styles.disclaimerTitle}>Disclaimer</h4>
            <p className={styles.disclaimerText}>{disclaimer}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}

// Icon Components
function SpecIcon({ category }: { category: string }) {
  const iconPaths: Record<string, string> = {
    tender: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    technical: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    installation: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    maintenance: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
  };

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={iconPaths[category]} />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
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

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );
}

export default SpecificationBlock;
