import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Client, StatItem } from '../models';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';
import { CountUpDirective } from '../directives/count-up.directive';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [AnimateOnScrollDirective, CountUpDirective],
  templateUrl: './intro.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroComponent {
  clients = input.required<Client[]>();
  stats = input.required<StatItem[]>();

  scrollTo = output<{ event: Event; href: string }>();

  onScrollTo(event: Event, href: string) {
    this.scrollTo.emit({ event, href });
  }
}
