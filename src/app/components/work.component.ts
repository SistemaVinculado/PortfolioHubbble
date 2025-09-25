import { Component, ChangeDetectionStrategy, input, output, AfterViewInit, OnDestroy, ElementRef, inject, Renderer2, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { PortfolioItem, ProcessStep, TeamMember } from '../models';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [AnimateOnScrollDirective, NgOptimizedImage],
  templateUrl: './work.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent implements AfterViewInit, OnDestroy {
  portfolioItems = input.required<PortfolioItem[]>();
  processSteps = input.required<ProcessStep[]>();
  teamMembers = input.required<TeamMember[]>();
  categories = input.required<string[]>();
  activeCategory = input.required<string>();

  openPortfolioModal = output<PortfolioItem>();
  filterChange = output<string>();

  @ViewChild('processSection') processSection!: ElementRef<HTMLElement>;

  private platformId = inject(PLATFORM_ID);
  private renderer = inject(Renderer2);
  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        threshold: 0.2
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.processSection.nativeElement, 'is-visible');
            this.observer.unobserve(this.processSection.nativeElement);
          }
        });
      }, options);

      this.observer.observe(this.processSection.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}