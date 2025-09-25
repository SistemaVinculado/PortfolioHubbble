import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { NavLink } from '../models';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  navLinks = input.required<NavLink[]>();
  theme = input.required<'light' | 'dark'>();
  isMobileMenuOpen = input.required<boolean>();

  toggleTheme = output<void>();
  toggleMobileMenu = output<void>();
  closeMobileMenu = output<void>();
  scrollTo = output<{ event: Event; href: string }>();

  onScrollTo(event: Event, href: string) {
    this.scrollTo.emit({ event, href });
  }
}
