import { Component, ChangeDetectionStrategy, input, output, signal, computed, inject, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnimateOnScrollDirective } from '../directives/animate-on-scroll.directive';
import { CalculatorService, CalculatorScope } from '../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pricing-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, AnimateOnScrollDirective],
  templateUrl: './pricing-calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingCalculatorComponent implements OnDestroy {
  calculatorServices = input.required<CalculatorService[]>();
  calculatorScopes = input.required<CalculatorScope[]>();
  calculatorComplexities = input.required<CalculatorScope[]>();

  scrollTo = output<{ event: Event; href: string; message: string }>();

  private fb = inject(FormBuilder);
  
  calculatorStep = signal(1);
  calculatorForm: FormGroup;
  
  private servicesValueSignal = signal<{ [key: string]: boolean | null }>({
    web_app: false,
    ui_ux: false,
    mobile_app: false,
    cloud: false,
  });
  private valueChangesSubscription: Subscription;

  estimatedPrice = computed(() => this.calculatePrice());
  servicesSelected = computed(() => {
    const services = this.servicesValueSignal();
    return Object.values(services).some(v => v);
  });

  constructor() {
    this.calculatorForm = this.fb.group({
      services: this.fb.group({
        web_app: [false],
        ui_ux: [false],
        mobile_app: [false],
        cloud: [false],
      }),
      scope: ['medium', Validators.required],
      complexity: ['advanced', Validators.required]
    });
    
    this.valueChangesSubscription = this.calculatorForm.get('services')!.valueChanges.subscribe(value => {
        this.servicesValueSignal.set(value);
    });
  }
  
  ngOnDestroy(): void {
    this.valueChangesSubscription?.unsubscribe();
  }

  setCalculatorStep(step: number): void {
    this.calculatorStep.set(step);
  }
  
  resetCalculator(): void {
    this.calculatorForm.reset({
      services: { web_app: false, ui_ux: false, mobile_app: false, cloud: false },
      scope: 'medium',
      complexity: 'advanced'
    });
    this.calculatorStep.set(1);
  }

  onScrollTo(event: Event, href: string, message: string) {
    event.preventDefault();
    this.scrollTo.emit({ event, href, message });
  }

  private calculatePrice(): { min: number, max: number } {
    const formValue = this.calculatorForm.getRawValue();
    if (!formValue) return { min: 0, max: 0 };

    const selectedServices = this.calculatorServices().filter(s => formValue.services[s.id]);
    const basePrice = selectedServices.reduce((acc, curr) => acc + curr.basePrice, 0);

    const scopeMultiplier = this.calculatorScopes().find(s => s.id === formValue.scope)?.multiplier ?? 1;
    const complexityMultiplier = this.calculatorComplexities().find(c => c.id === formValue.complexity)?.multiplier ?? 1;

    if(basePrice === 0) return { min: 0, max: 0 };

    const minPrice = Math.round((basePrice * scopeMultiplier * complexityMultiplier) / 100) * 100;
    const maxPrice = Math.round((minPrice * 1.5) / 100) * 100;
    
    return { min: minPrice, max: maxPrice };
  }

  getCalculatorSummaryMessage(): string {
    const formValue = this.calculatorForm.value;
    const selectedServices = this.calculatorServices()
      .filter(s => formValue.services[s.id])
      .map(s => s.name)
      .join(', ');
    const scope = this.calculatorScopes().find(s => s.id === formValue.scope)?.name;
    const complexity = this.calculatorComplexities().find(c => c.id === formValue.complexity)?.name;
    const price = this.estimatedPrice();

    let message = "I've used the pricing calculator and I'm interested in a detailed quote.\n\n";
    message += `Selected Services: ${selectedServices || 'None'}\n`;
    message += `Project Scope: ${scope}\n`;
    message += `Project Complexity: ${complexity}\n`;
    message += `Estimated Price Range: $${price.min.toLocaleString()} - $${price.max.toLocaleString()}\n\n`;
    message += "Please provide a more detailed quote.";

    return message;
  }
}
