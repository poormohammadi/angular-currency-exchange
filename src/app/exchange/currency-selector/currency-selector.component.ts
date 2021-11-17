import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ALL_CURRENCIES } from './../../shared/data/constants';
import { CurrencyModel } from './../../shared/models/currency.model';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent implements OnInit {

  @Input() currency?: CurrencyModel;
  @Output() currencyChange = new EventEmitter<CurrencyModel>();

  allCurrencies = ALL_CURRENCIES;

  constructor() { }

  onSelect(e: CurrencyModel) {
    this.currency = e;
    this.currencyChange.emit(e);
  }

  compareOptions(a: CurrencyModel, b: CurrencyModel) {
    return a?.name === b?.name;
  }

  ngOnInit(): void {
  }

}
