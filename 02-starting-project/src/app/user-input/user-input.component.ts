import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInputModel } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInputModel>();
  enteredInitialInvestment = '0';
  enteredMonthlyInvestment = '0';
  enteredExpectedReturn = '5';
  enteredInvestmentDuration = '10';
  onSubmit() {
    this.calculate.emit({
      annualInvestment: +this.enteredMonthlyInvestment,
      initialInvestment: +this.enteredInitialInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredInvestmentDuration
    })
  }
}
