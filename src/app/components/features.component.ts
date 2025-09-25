import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Service, EngagementModel, Technology } from '../models';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './features.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesComponent {
  services = input.required<Service[]>();
  engagementModels = input.required<EngagementModel[]>();
  technologies = input.required<Technology[]>();
}
