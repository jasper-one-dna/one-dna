# ONE-DNA™ Global Knowledge Platform

A secure, scalable, multilingual, evidence-driven knowledge and specification platform for the ONE-DNA™ sustainable artificial grass system.

> "ONE-DNA™ operates at system level, not product level."

## Overview

This platform serves as the primary knowledge source for policymakers, architects, designers, specifiers, project owners, retailers, and strategic partners worldwide. It is designed to communicate the ONE-DNA™ system with credibility, transparency, and evidence-based claims.

## Core Principles

### Platform & Technology
- **Secure by design**: HTTPS only, strict CSP, no inline scripts, XSS/injection protection
- **Modern web standards**: Semantic HTML5, mobile-first, WCAG 2.1 AA, Core Web Vitals oriented
- **Privacy-first**: GDPR-ready, region-aware cookie consent, privacy policy hooks
- **AI-readable**: Clean structure, Schema.org markup, logical knowledge objects

### Anti-Greenwashing Governance
Every substantive page includes:
- Problem framing
- ONE-DNA™ design principles
- What this enables (potential)
- What this does NOT guarantee (limitations)
- Evidence and scope
- Local conditions

## Project Structure

```
one-dna/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   └── [locale]/           # Internationalized routes
│   │       ├── layout.tsx      # Root layout with Schema.org
│   │       ├── page.tsx        # Home page
│   │       └── what-is-one-dna/# Core knowledge page
│   ├── components/             # React components
│   │   ├── ui/                 # UI primitives (Button, etc.)
│   │   ├── layout/             # Layout components (Header, Footer)
│   │   └── content/            # Content components (Evidence, Claims)
│   ├── i18n/                   # Internationalization
│   │   ├── config.ts           # Locale/country configuration
│   │   ├── request.ts          # Next-intl setup
│   │   └── messages/           # Translation files
│   ├── lib/                    # Utilities
│   │   └── schema.ts           # Schema.org generators
│   ├── styles/                 # Global styles
│   │   ├── tokens.css          # Design tokens (colors, spacing)
│   │   └── globals.css         # Global styles
│   └── types/                  # TypeScript definitions
│       └── content.ts          # Content model types
├── public/                     # Static assets
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Key Components

### Claims Framework (`ClaimsFramework`)
The core anti-greenwashing component that structures all substantive content with:
- Problem framing
- Design principles
- What this enables
- What this does NOT guarantee
- Evidence and scope
- Local conditions

### Evidence Block (`EvidenceBlock`)
Displays evidence objects (EPDs, LCAs, certifications) with:
- Verification status
- Scope limitations
- Document references

### Specification Block (`SpecificationBlock`)
Copy-to-clipboard specification text for tender documents with:
- Technical parameters
- Usage guidance
- Disclaimer

## Global Navigation Structure (Fixed)

1. What is ONE-DNA™
2. Solutions
3. Policy & Procurement
4. Take-back & Circularity
5. Specifications
6. Insights
7. Find a Partner

## Supported Languages

- English (en) - Default
- Dutch (nl)
- German (de)
- French (fr)
- Spanish (es)
- Italian (it)

## Brand Colors (ONE-DNA™ Brandbook)

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Deep | `#265149` | PANTONE 3035 C - Primary brand green |
| Primary Dark | `#2f3f45` | PANTONE PMS 7545 C - Dark accent |
| Primary Accent | `#569e82` | PANTONE PMS 7473 C - Accent green |
| White | `#ffffff` | Backgrounds, text on dark |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Content Models

### Core Content Types
- **Core Knowledge Pages**: Main informational content
- **Audience-Specific Guidance**: Tailored for specific stakeholders
- **Country Modules**: Regional regulatory context
- **Evidence Objects**: EPDs, LCAs, certifications
- **Articles/Insights**: News and case studies
- **Specification Objects**: Tender and technical specs

### Required Metadata
Every content object includes:
- `language`: Primary language
- `country`: Optional country context
- `audiences`: Target audiences
- `themes`: Thematic categorization
- `evidenceRefs`: Evidence references
- `lastReviewed`: Review date
- `contentOwner`: Responsible party
- `seo`: SEO metadata

## Security

Security headers configured in `next.config.js`:
- Strict Transport Security (HSTS)
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Schema.org Support

Built-in schema generators for:
- Organization
- WebPage
- Article
- FAQ
- Product
- HowTo
- Certification
- BreadcrumbList

## Contributing

1. Follow the ONE-DNA™ Brandbook guidelines
2. Ensure all claims include evidence references
3. Use the Claims Framework for substantive content
4. Maintain accessibility (WCAG 2.1 AA)
5. Test across all supported languages

## Trademark Notice

ONE-DNA™ is a registered trademark. Use of the ONE-DNA™ name, logo, and associated marks is subject to trademark guidelines.

## Contact

- **Phone**: +31 (0) 541 21 79 00
- **Email**: info@one-dna.com
- **Website**: www.one-dna.com

## License

Proprietary - All rights reserved.
