import { Component, ChangeDetectionStrategy, signal, inject, Renderer2, effect, PLATFORM_ID, computed, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { BlogPost, PortfolioItem } from './app/models';
import { DataService } from './app/data.service';

// New Component Imports
import { HeaderComponent } from './app/components/header.component';
import { IntroComponent } from './app/components/intro.component';
import { FeaturesComponent } from './app/components/features.component';
import { WorkComponent } from './app/components/work.component';
import { CommunityComponent } from './app/components/community.component';
import { SocialProofComponent } from './app/components/social-proof.component';
import { ActionZoneComponent } from './app/components/action-zone.component';
import { FooterComponent } from './app/components/footer.component';
import { CookieBannerComponent } from './app/components/cookie-banner.component';
import { BackToTopComponent } from './app/components/back-to-top.component';
import { PortfolioModalComponent } from './app/components/portfolio-modal.component';
import { BlogModalComponent } from './app/components/blog-modal.component';
import { LegalModalComponent } from './app/components/legal-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    IntroComponent,
    FeaturesComponent,
    WorkComponent,
    CommunityComponent,
    SocialProofComponent,
    ActionZoneComponent,
    FooterComponent,
    CookieBannerComponent,
    BackToTopComponent,
    PortfolioModalComponent,
    BlogModalComponent,
    LegalModalComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private dataService = inject(DataService);
  
  title = 'StellarDev';
  currentYear = new Date().getFullYear();
  openFaqIndex = signal<number | null>(null);
  isMobileMenuOpen = signal(false);
  showBackToTop = signal(false);
  theme = signal<'light' | 'dark'>('light');

  isLoading = signal(true);
  selectedPortfolioItem = signal<PortfolioItem | null>(null);
  selectedBlogPost = signal<BlogPost | null>(null);
  showCookieBanner = signal(false);
  showPrivacyModal = signal(false);
  showTermsModal = signal(false);
  contactFormMessage = signal<string | null>(null);

  private onScrollListener!: () => void;

  constructor() {
    effect(() => {
      const currentTheme = this.theme();
      if (currentTheme === 'dark') {
        this.renderer.addClass(this.document.documentElement, 'dark');
      } else {
        this.renderer.removeClass(this.document.documentElement, 'dark');
      }
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', currentTheme);
      }
    });

    // Combined effect for managing body scroll lock
    effect(() => {
        const shouldLock = this.isLoading() || this.isMobileMenuOpen() || !!this.selectedPortfolioItem() || !!this.selectedBlogPost() || this.showPrivacyModal() || this.showTermsModal();
        if (shouldLock) {
            this.renderer.addClass(this.document.body, 'overflow-hidden');
        } else {
            this.renderer.removeClass(this.document.body, 'overflow-hidden');
        }
    });

    // Effect for handling Escape key to close any open modal
    effect((onCleanup) => {
        const isModalOpen = !!this.selectedPortfolioItem() || !!this.selectedBlogPost() || this.showPrivacyModal() || this.showTermsModal();
        if (isModalOpen) {
            const escapeListener = this.renderer.listen('document', 'keydown.escape', () => {
                this.closePortfolioModal();
                this.closeBlogModal();
                this.closePrivacyModal();
                this.closeTermsModal();
            });
            onCleanup(() => {
                escapeListener();
            });
        }
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.isLoading.set(false), 1500);

      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme) {
        this.theme.set(savedTheme);
      } else {
        this.theme.set(prefersDark ? 'dark' : 'light');
      }

      if (localStorage.getItem('cookie_consent') !== 'accepted') {
        this.showCookieBanner.set(true);
      }

      this.onScrollListener = this.renderer.listen('window', 'scroll', () => {
        const scrollPosition = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        this.showBackToTop.set(scrollPosition > 300);
      });
    } else {
      this.isLoading.set(false);
    }
  }

  ngOnDestroy(): void {
    if (this.onScrollListener) {
      this.onScrollListener();
    }
  }

  acceptCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookie_consent', 'accepted');
    }
    this.showCookieBanner.set(false);
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(this.document.body, 'no-transitions');
    }

    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));

    if (isPlatformBrowser(this.platformId)) {
      // Use a short timeout to allow the theme change to be painted before re-enabling transitions.
      setTimeout(() => {
        this.renderer.removeClass(this.document.body, 'no-transitions');
      }, 50);
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Data signals from DataService
  navLinks = this.dataService.navLinks;
  clients = this.dataService.clients;
  stats = this.dataService.stats;
  services = this.dataService.services;
  engagementModels = this.dataService.engagementModels;
  technologies = this.dataService.technologies;
  portfolioItems = this.dataService.portfolioItems;
  processSteps = this.dataService.processSteps;
  teamMembers = this.dataService.teamMembers;
  jobOpenings = this.dataService.jobOpenings;
  labExperiments = this.dataService.labExperiments;
  blogPosts = this.dataService.blogPosts;
  testimonials = this.dataService.testimonials;
  awards = this.dataService.awards;
  faqs = this.dataService.faqs;
  contactInfo = this.dataService.contactInfo;
  privacyPolicy = this.dataService.privacyPolicy;
  termsOfService = this.dataService.termsOfService;
  calculatorServices = this.dataService.calculatorServices;
  calculatorScopes = this.dataService.calculatorScopes;
  calculatorComplexities = this.dataService.calculatorComplexities;

  // Portfolio filter state
  activePortfolioCategory = signal<string>('All');
  
  portfolioCategories = computed(() => {
    const categories = this.portfolioItems().map(item => item.category);
    return ['All', ...new Set(categories)];
  });

  filteredPortfolioItems = computed(() => {
    const category = this.activePortfolioCategory();
    if (category === 'All') {
      return this.portfolioItems();
    }
    return this.portfolioItems().filter(item => item.category === category);
  });

  toggleFaq(index: number): void {
    this.openFaqIndex.update(currentIndex => currentIndex === index ? null : index);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(isOpen => !isOpen);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(event: Event, href: string): void {
    event.preventDefault();
    const targetId = href.substring(1);
    const targetElement = this.document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.closeMobileMenu();
  }

  handleScrollToWithMessage(payload: { event: Event; href: string; message?: string }): void {
    this.scrollTo(payload.event, payload.href);
    this.contactFormMessage.set(payload.message ?? null);
  }
  
  onPortfolioFilterChange(category: string): void {
    this.activePortfolioCategory.set(category);
  }

  openPortfolioModal(item: PortfolioItem): void {
    this.selectedPortfolioItem.set(item);
  }

  closePortfolioModal(): void {
    this.selectedPortfolioItem.set(null);
  }

  openBlogModal(post: BlogPost): void {
    this.selectedBlogPost.set(post);
  }

  closeBlogModal(): void {
    this.selectedBlogPost.set(null);
  }

  openPrivacyModal(): void { this.showPrivacyModal.set(true); }
  closePrivacyModal(): void { this.showPrivacyModal.set(false); }
  openTermsModal(): void { this.showTermsModal.set(true); }
  closeTermsModal(): void { this.showTermsModal.set(false); }
}