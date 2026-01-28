/**
 * ONE-DNA™ Content Type Definitions
 *
 * These types define the content models and metadata structure
 * for the ONE-DNA™ Global Knowledge Platform.
 */

// ============================================
// LOCALIZATION TYPES
// ============================================

export type SupportedLocale = 'en' | 'nl' | 'de' | 'fr' | 'es' | 'it';

export type SupportedCountry =
  | 'global'
  | 'nl' // Netherlands
  | 'be' // Belgium
  | 'de' // Germany
  | 'fr' // France
  | 'es' // Spain
  | 'it' // Italy
  | 'uk' // United Kingdom
  | 'us' // United States
  | 'au'; // Australia

// ============================================
// AUDIENCE TYPES
// ============================================

export type Audience =
  | 'policymaker'
  | 'architect'
  | 'designer'
  | 'specifier'
  | 'project-owner'
  | 'retailer'
  | 'partner'
  | 'contractor'
  | 'municipality'
  | 'general';

// ============================================
// THEME TYPES
// ============================================

export type Theme =
  | 'sustainability'
  | 'circularity'
  | 'recyclability'
  | 'take-back'
  | 'specifications'
  | 'installation'
  | 'maintenance'
  | 'policy'
  | 'procurement'
  | 'certification'
  | 'lifecycle'
  | 'technology';

// ============================================
// BASE CONTENT METADATA
// ============================================

export interface ContentMetadata {
  /** Primary language of the content */
  language: SupportedLocale;

  /** Country-specific context (optional, defaults to global) */
  country?: SupportedCountry;

  /** Target audiences for this content */
  audiences: Audience[];

  /** Thematic categorization */
  themes: Theme[];

  /** References to evidence objects */
  evidenceRefs?: string[];

  /** Date of last content review */
  lastReviewed: string;

  /** Internal content owner/responsible party */
  contentOwner: string;

  /** SEO metadata */
  seo: SEOMetadata;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

// ============================================
// CORE KNOWLEDGE PAGE
// ============================================

export interface CoreKnowledgePage {
  id: string;
  type: 'core-knowledge';
  slug: string;
  metadata: ContentMetadata;

  /** Page title */
  title: string;

  /** Subtitle or tagline */
  subtitle?: string;

  /** Lead paragraph */
  lead: string;

  /** Main content sections */
  sections: ContentSection[];

  /** Claims framework (mandatory for substantive pages) */
  claimsFramework: ClaimsFramework;

  /** Related content references */
  relatedContent?: RelatedContentRef[];

  /** Call-to-action configuration */
  cta?: CallToAction;
}

// ============================================
// AUDIENCE-SPECIFIC GUIDANCE PAGE
// ============================================

export interface AudienceGuidancePage {
  id: string;
  type: 'audience-guidance';
  slug: string;
  metadata: ContentMetadata;

  /** Target audience for this page */
  targetAudience: Audience;

  /** Page title */
  title: string;

  /** Problem statement specific to this audience */
  problemStatement: string;

  /** How ONE-DNA™ addresses this audience's needs */
  solutionOverview: string;

  /** Specific guidance sections */
  guidanceSections: GuidanceSection[];

  /** Claims framework */
  claimsFramework: ClaimsFramework;

  /** Relevant specifications for this audience */
  specifications?: SpecificationRef[];

  /** Next steps / CTAs */
  nextSteps: NextStep[];
}

// ============================================
// COUNTRY MODULE
// ============================================

export interface CountryModule {
  id: string;
  type: 'country-module';
  country: SupportedCountry;
  metadata: ContentMetadata;

  /** Country-specific regulatory context */
  regulatoryContext: RegulatoryContext;

  /** Local market conditions */
  marketConditions?: string;

  /** Country-specific certifications and standards */
  localStandards: LocalStandard[];

  /** Local partner information */
  partnerInfo?: PartnerInfo;

  /** Legal modules (GDPR, cookie policy, etc.) */
  legalModules: LegalModule[];
}

// ============================================
// EVIDENCE OBJECT
// ============================================

export type EvidenceType =
  | 'epd'           // Environmental Product Declaration
  | 'lca'           // Life Cycle Assessment
  | 'test-report'   // Test Report
  | 'certification' // Certification
  | 'definition'    // Definition/Glossary
  | 'scope'         // Scope Statement
  | 'third-party';  // Third-party Verification

export interface EvidenceObject {
  id: string;
  type: 'evidence';
  evidenceType: EvidenceType;
  metadata: ContentMetadata;

  /** Evidence title */
  title: string;

  /** Brief description */
  description: string;

  /** Issuing organization */
  issuingOrganization?: string;

  /** Date of issue */
  issueDate?: string;

  /** Expiration date (if applicable) */
  expirationDate?: string;

  /** Document reference number */
  referenceNumber?: string;

  /** Link to document (PDF, external) */
  documentUrl?: string;

  /** Scope limitations */
  scopeLimitations?: string[];

  /** Verification status */
  verificationStatus: 'verified' | 'pending' | 'expired';
}

// ============================================
// ARTICLE / INSIGHT
// ============================================

export interface Article {
  id: string;
  type: 'article';
  slug: string;
  metadata: ContentMetadata;

  /** Article title */
  title: string;

  /** Article type */
  articleType: 'insight' | 'case-study' | 'news' | 'technical';

  /** Publication date */
  publishedAt: string;

  /** Author information */
  author?: Author;

  /** Featured image */
  featuredImage?: MediaAsset;

  /** Article excerpt */
  excerpt: string;

  /** Full article content */
  content: ContentSection[];

  /** Claims framework (if substantive) */
  claimsFramework?: ClaimsFramework;

  /** Tags for filtering */
  tags: string[];
}

// ============================================
// SPECIFICATION OBJECT
// ============================================

export interface SpecificationObject {
  id: string;
  type: 'specification';
  slug: string;
  metadata: ContentMetadata;

  /** Specification title */
  title: string;

  /** Specification category */
  category: 'tender' | 'technical' | 'installation' | 'maintenance';

  /** Application context */
  applicationContext: string;

  /** Specification text (copyable) */
  specificationText: string;

  /** Technical parameters */
  technicalParameters?: TechnicalParameter[];

  /** Related evidence */
  evidenceRefs: string[];

  /** Usage guidance */
  usageGuidance: string;

  /** Disclaimer text */
  disclaimer: string;
}

// ============================================
// CLAIMS FRAMEWORK (ANTI-GREENWASHING)
// ============================================

export interface ClaimsFramework {
  /** Problem framing - what challenge does this address? */
  problemFraming: string;

  /** ONE-DNA™ design principles applied */
  designPrinciples: string[];

  /** What this enables (potential benefits) */
  whatThisEnables: string[];

  /** What this does NOT guarantee (explicit limitations) */
  whatThisDoesNotGuarantee: string[];

  /** Evidence and scope references */
  evidenceAndScope: EvidenceScopeItem[];

  /** Local conditions that may affect outcomes */
  localConditions?: string[];
}

export interface EvidenceScopeItem {
  /** Claim being supported */
  claim: string;

  /** Evidence reference ID */
  evidenceRef: string;

  /** Scope limitations */
  scopeLimitations?: string[];
}

// ============================================
// SUPPORTING TYPES
// ============================================

export interface ContentSection {
  id: string;
  type: 'text' | 'heading' | 'list' | 'quote' | 'callout' | 'evidence-block' | 'specification-block' | 'media' | 'video-embed';
  content: string | string[];
  heading?: string;
  level?: 2 | 3 | 4;
  variant?: string;
  evidenceRef?: string;
  mediaAsset?: MediaAsset;
  videoEmbed?: VideoEmbed;
}

export interface GuidanceSection {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  relevantEvidence?: string[];
}

export interface RegulatoryContext {
  overview: string;
  keyRegulations: Regulation[];
  complianceNotes: string;
}

export interface Regulation {
  name: string;
  description: string;
  relevance: string;
  url?: string;
}

export interface LocalStandard {
  name: string;
  organization: string;
  description: string;
  oneDnaCompliance: 'full' | 'partial' | 'pending';
}

export interface PartnerInfo {
  partnerTypes: string[];
  contactInstructions: string;
}

export interface LegalModule {
  type: 'privacy-policy' | 'cookie-policy' | 'terms' | 'disclaimer' | 'imprint';
  content: string;
  lastUpdated: string;
}

export interface TechnicalParameter {
  name: string;
  value: string;
  unit?: string;
  testMethod?: string;
}

export interface RelatedContentRef {
  id: string;
  type: string;
  title: string;
  slug: string;
}

export interface CallToAction {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface NextStep {
  title: string;
  description: string;
  href: string;
}

export interface Author {
  name: string;
  role?: string;
  avatar?: string;
}

export interface MediaAsset {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface VideoEmbed {
  type: 'youtube' | 'vimeo' | 'hosted';
  videoId?: string;
  src?: string;
  title: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

// ============================================
// NAVIGATION TYPES
// ============================================

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
  audiences?: Audience[];
  themes?: Theme[];
}

export interface GlobalNavigation {
  /** Primary navigation items (fixed structure) */
  primary: NavigationItem[];

  /** Secondary navigation (utility links) */
  secondary: NavigationItem[];

  /** Language selector options */
  languages: { locale: SupportedLocale; label: string }[];

  /** Country selector options */
  countries: { country: SupportedCountry; label: string }[];
}
