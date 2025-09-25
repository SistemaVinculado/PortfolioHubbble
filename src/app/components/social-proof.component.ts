import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Testimonial, Award, FaqItem } from '../models';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-social-proof',
  standalone: true,
  imports: [AnimateOnScrollDirective, NgOptimizedImage],
  templateUrl: './social-proof.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialProofComponent {
  testimonials = input.required<Testimonial[]>();
  awards = input.required<Award[]>();
  faqs = input.required<FaqItem[]>();
  openFaqIndex = input.required<number | null>();

  toggleFaq = output<number>();
}
