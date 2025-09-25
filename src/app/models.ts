export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  iconPath: string;
  title: string;
  description: string;
}

export interface EngagementModel {
    iconPath: string;
    title: string;
    description: string;
    features: string[];
}

export interface LegalContentSection {
    type: 'h2' | 'p';
    text: string;
}

export interface LegalContent {
    title: string;
    lastUpdated: string;
    content: LegalContentSection[];
}


export interface PortfolioItem {
  imageUrl: string;
  category: string;
  title: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TeamMember {
  imageUrl: string;
  name: string;
  title: string;
  socials: {
    twitter: string;
    linkedin: string;
  }
}

export interface BlogPost {
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  url: string;
  authorName: string;
  authorAvatarUrl: string;
  date: string;
  readTime: number; // in minutes
  content: LegalContentSection[];
}

export interface Testimonial {
  avatarUrl: string;
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface Award {
  title: string;
  issuer: string;
  year: string;
}

export interface Technology {
  name: string;
  svgLogo: string; // path data for SVG
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  iconPath: string;
  title: string;
  value: string;
  href: string;
}

export interface Client {
  name: string;
}

export interface JobOpening {
  position: string;
  location: string;
  type: string;
}

export interface StatItem {
  iconPath: string;
  value: number;
  label: string;
  suffix: string;
}

export interface CalculatorService {
  id: string;
  name: string;
  basePrice: number;
}

export interface CalculatorScope {
  id: string;
  name: string;
  description: string;
  multiplier: number;
}

export interface LabExperiment {
  iconPath: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}