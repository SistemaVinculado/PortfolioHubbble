import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { ContactInfo, CalculatorService, CalculatorScope } from '../models';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';
import { PricingCalculatorComponent } from './pricing-calculator.component';
import { ContactComponent } from './contact.component';
import { CtaComponent } from './cta.component';

@Component({
  selector: 'app-action-zone',
  standalone: true,
  imports: [AnimateOnScrollDirective, PricingCalculatorComponent, ContactComponent, CtaComponent],
  templateUrl: './action-zone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionZoneComponent {
  calculatorServices = input.required<CalculatorService[]>();
  calculatorScopes = input.required<CalculatorScope[]>();
  calculatorComplexities = input.required<CalculatorScope[]>();
  contactInfo = input.required<ContactInfo[]>();
  initialContactMessage = input<string | null>(null);

  scrollTo = output<{ event: Event; href: string; message?: string }>();
}
