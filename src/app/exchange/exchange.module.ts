import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { ExchangeCurrencyRowComponent } from './exchange-currency-row/exchange-currency-row.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { ExchangeRoutingModule } from './exchange-routing.module';
import { ExchangeComponent } from './exchange.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    ExchangeComponent,
    ExchangeCurrencyRowComponent,
    CurrencySelectorComponent,
    InputComponent,
    ExchangeRateComponent
  ],
  imports: [
    CommonModule,
    ExchangeRoutingModule,
    FormsModule,
  ]
})
export class ExchangeModule { }
