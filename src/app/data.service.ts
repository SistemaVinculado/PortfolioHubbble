import { Injectable, signal } from '@angular/core';
import {
    Award,
    BlogPost,
    CalculatorScope,
    CalculatorService,
    Client,
    ContactInfo,
    EngagementModel,
    FaqItem,
    JobOpening,
    LabExperiment,
    LegalContent,
    NavLink,
    PortfolioItem,
    ProcessStep,
    Service,
    StatItem,
    TeamMember,
    Technology,
    Testimonial
} from './models';
import {
    AWARDS,
    BLOG_POSTS,
    CALCULATOR_COMPLEXITIES,
    CALCULATOR_SCOPES,
    CALCULATOR_SERVICES,
    CLIENTS,
    CONTACT_INFO,
    ENGAGEMENT_MODELS,
    FAQS,
    JOB_OPENINGS,
    LAB_EXPERIMENTS,
    NAV_LINKS,
    PORTFOLIO_ITEMS,
    PROCESS_STEPS,
    PRIVACY_POLICY,
    SERVICES,
    STATS,
    TEAM_MEMBERS,
    TECHNOLOGIES,
    TERMS_OF_SERVICE,
    TESTIMONIALS
  } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  navLinks = signal<NavLink[]>(NAV_LINKS);
  clients = signal<Client[]>(CLIENTS);
  stats = signal<StatItem[]>(STATS);
  services = signal<Service[]>(SERVICES);
  engagementModels = signal<EngagementModel[]>(ENGAGEMENT_MODELS);
  technologies = signal<Technology[]>(TECHNOLOGIES);
  portfolioItems = signal<PortfolioItem[]>(PORTFOLIO_ITEMS);
  processSteps = signal<ProcessStep[]>(PROCESS_STEPS);
  teamMembers = signal<TeamMember[]>(TEAM_MEMBERS);
  jobOpenings = signal<JobOpening[]>(JOB_OPENINGS);
  labExperiments = signal<LabExperiment[]>(LAB_EXPERIMENTS);
  blogPosts = signal<BlogPost[]>(BLOG_POSTS);
  testimonials = signal<Testimonial[]>(TESTIMONIALS);
  awards = signal<Award[]>(AWARDS);
  faqs = signal<FaqItem[]>(FAQS);
  contactInfo = signal<ContactInfo[]>(CONTACT_INFO);
  privacyPolicy = signal<LegalContent>(PRIVACY_POLICY);
  termsOfService = signal<LegalContent>(TERMS_OF_SERVICE);
  calculatorServices = signal<CalculatorService[]>(CALCULATOR_SERVICES);
  calculatorScopes = signal<CalculatorScope[]>(CALCULATOR_SCOPES);
  calculatorComplexities = signal<CalculatorScope[]>(CALCULATOR_COMPLEXITIES);
}
