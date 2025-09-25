import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { JobOpening, LabExperiment, BlogPost } from '../models';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [AnimateOnScrollDirective, NgOptimizedImage],
  templateUrl: './community.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityComponent {
  jobOpenings = input.required<JobOpening[]>();
  labExperiments = input.required<LabExperiment[]>();
  blogPosts = input.required<BlogPost[]>();

  scrollTo = output<{ event: Event; href: string, message: string }>();
  openBlogModal = output<BlogPost>();

  onScrollTo(event: Event, href: string, message: string) {
    event.preventDefault();
    this.scrollTo.emit({ event, href, message });
  }
}
