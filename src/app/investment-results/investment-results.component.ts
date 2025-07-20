import {Component, Input, input} from '@angular/core';
import {InvestmentResults} from "../investment-results.model";
import {CurrencyPipe, DatePipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe,
    DecimalPipe,
    DatePipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input()
  @Input() results?: InvestmentResults[];

}
