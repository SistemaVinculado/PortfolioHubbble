import { Component, ChangeDetectionStrategy, input, signal, effect } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';
import { ContactInfo } from '../models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, AnimateOnScrollDirective],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactInfo = input.required<ContactInfo[]>();
  initialMessage = input<string | null>(null);

  formStatus = signal<'idle' | 'submitting' | 'success'>('idle');
  
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl(''),
    message: new FormControl('', Validators.required)
  });

  constructor() {
    effect(() => {
      const message = this.initialMessage();
      if (message) {
        this.contactForm.patchValue({ message });
      }
    });
  }

  submitForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.formStatus.set('submitting');
    console.log('Form Submitted!', this.contactForm.value);
    
    // Simulate network request
    setTimeout(() => {
      this.formStatus.set('success');
    }, 2000);
  }

  resetForm(): void {
    this.contactForm.reset();
    this.formStatus.set('idle');
  }
}
