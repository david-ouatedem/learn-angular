import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputModel } from '../investment-input-model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredMonthlyInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredInvestmentDuration = signal('10');

  constructor(private investmentService: InvestmentService) { }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      annualInvestment: +this.enteredMonthlyInvestment(),
      initialInvestment: +this.enteredInitialInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredInvestmentDuration()
    })
    this.resetForm();

  }

  resetForm() {
    this.enteredInitialInvestment.set('0');
    this.enteredMonthlyInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredInvestmentDuration.set('10');
  }
}
