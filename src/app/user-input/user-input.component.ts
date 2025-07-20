import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentInput} from "../investment-input.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment: number = 0;
  enteredAnnualInvestment: number = 0;
  enteredExpectedReturnFromInvestment:number=5;
  enteredDurationOfInvestment: number = 10;

  onSubmit(){
    console.log("UserInputComponent submitted");
    this.calculate.emit({initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: + this.enteredExpectedReturnFromInvestment,
      duration: + this.enteredDurationOfInvestment})
  }
}
