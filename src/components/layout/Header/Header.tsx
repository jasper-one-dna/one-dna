/**
 * ONE-DNA™ Header Component
 *
 * Global header system enforcing brand consistency across all pages.
 * Includes logo, primary navigation, language/country selectors.
 */

'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import clsx from 'clsx';
import { Button } from '@/components/ui/Button';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
}

interface HeaderProps {
  navigation: NavigationItem[];
  currentLocale: string;
  locales: { code: string; label: string }[];
  onLocaleChange?: (locale: string) => void;
}

export function Header({
  navigation,
  currentLocale,
  locales,
  onLocaleChange,
}: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleLocaleChange = useCallback(
    (locale: string) => {
      setIsLocaleMenuOpen(false);
      onLocaleChange?.(locale);
    },
    [onLocaleChange]
  );

  return (
    <header className={styles.header} role="banner">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="ONE-DNA™ Home">
          <OneDnaLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={styles.desktopNav}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.id} className={styles.navItem}>
                {item.children ? (
                  <NavDropdown item={item} pathname={pathname} />
                ) : (
                  <Link
                    href={item.href}
                    className={clsx(
                      styles.navLink,
                      pathname === item.href && styles.navLinkActive
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Locale Selector */}
          <div className={styles.localeSelector}>
            <button
              className={styles.localeTrigger}
              onClick={() => setIsLocaleMenuOpen(!isLocaleMenuOpen)}
              aria-expanded={isLocaleMenuOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
            >
              <GlobeIcon />
              <span>{currentLocale.toUpperCase()}</span>
              <ChevronDownIcon />
            </button>

            {isLocaleMenuOpen && (
              <ul className={styles.localeMenu} role="listbox">
                {locales.map((locale) => (
                  <li key={locale.code}>
                    <button
                      className={clsx(
                        styles.localeOption,
                        currentLocale === locale.code && styles.localeOptionActive
                      )}
                      onClick={() => handleLocaleChange(locale.code)}
                      role="option"
                      aria-selected={currentLocale === locale.code}
                    >
                      {locale.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Contact CTA */}
          <Button
            as="a"
            href="/contact"
            variant="primary"
            size="sm"
            className={styles.contactCta}
          >
            Contact
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-menu"
        className={clsx(styles.mobileNav, isMobileMenuOpen && styles.mobileNavOpen)}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={clsx(
                  styles.mobileNavLink,
                  pathname === item.href && styles.mobileNavLinkActive
                )}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className={styles.mobileNavSubList}>
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={child.href}
                        className={styles.mobileNavSubLink}
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// Navigation Dropdown Component
function NavDropdown({
  item,
  pathname,
}: {
  item: NavigationItem;
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={clsx(
          styles.navLink,
          styles.dropdownTrigger,
          item.children?.some((c) => pathname === c.href) && styles.navLinkActive
        )}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        {item.label}
        <ChevronDownIcon />
      </button>

      {isOpen && item.children && (
        <ul className={styles.dropdownMenu} role="menu">
          {item.children.map((child) => (
            <li key={child.id} role="none">
              <Link
                href={child.href}
                className={clsx(
                  styles.dropdownLink,
                  pathname === child.href && styles.dropdownLinkActive
                )}
                role="menuitem"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ONE-DNA™ Logo SVG
function OneDnaLogo() {
  return (
    <svg
      width="140"
      height="40"
      viewBox="0 0 140 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ONE-DNA™ Icon */}
      <circle cx="20" cy="20" r="16" fill="var(--color-brand)" />
      <path
        d="M14 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
        fill="var(--color-brand-accent)"
      />
      <circle cx="20" cy="20" r="2" fill="var(--color-white)" />

      {/* ONE-DNA™ Text */}
      <text
        x="44"
        y="26"
        fontFamily="var(--font-family-heading)"
        fontSize="18"
        fontWeight="700"
        fill="var(--color-brand)"
      >
        ONE-DNA
      </text>
      <text
        x="126"
        y="18"
        fontFamily="var(--font-family-heading)"
        fontSize="8"
        fill="var(--color-brand)"
      >
        ™
      </text>
    </svg>
  );
}

// Icon Components
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default Header;
