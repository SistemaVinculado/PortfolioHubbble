import { Component, ChangeDetectionStrategy, input, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { NavLink } from '../models';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = input.required<number>();
  navLinks = input.required<NavLink[]>();
  
  scrollTo = output<{ event: Event; href: string }>();
  openTermsModal = output<void>();
  openPrivacyModal = output<void>();

  newsletterFormStatus = signal<'idle' | 'submitting' | 'success'>('idle');
  newsletterForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onScrollTo(event: Event, href: string) {
    this.scrollTo.emit({ event, href });
  }

  submitNewsletter(): void {
    if (this.newsletterForm.invalid) {
        this.newsletterForm.markAllAsTouched();
        return;
    }
    this.newsletterFormStatus.set('submitting');
    console.log('Newsletter signup:', this.newsletterForm.value.email);

    // Simulate network request
    setTimeout(() => {
        this.newsletterFormStatus.set('success');
    }, 1500);
  }
}
