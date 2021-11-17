import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CurrencyModel } from './../../shared/models/currency.model';

@Component({
  selector: 'app-exchange-currency-row',
  templateUrl: './exchange-currency-row.component.html',
  styleUrls: ['./exchange-currency-row.component.scss']
})
export class ExchangeCurrencyRowComponent implements OnInit {

  @Input() type: 'withdraw' | 'deposit' = 'withdraw';
  @Input() balance?: number;
  @Input() disabled?: boolean;

  @Input() error?: string;

  @Input() selectedCurrency?: CurrencyModel;
  @Output() selectedCurrencyChange = new EventEmitter<CurrencyModel>();

  @Input() amount?: number;
  @Output() amountChange = new EventEmitter<number>();

  constructor() { }

  onAmountChange(e: number) {
    this.amountChange.emit(e);
    this.amount = e;
  }

  onCurrencyChange(e: CurrencyModel) {
    this.selectedCurrency = e;
    this.selectedCurrencyChange.emit(e);
  }

  ngOnInit(): void {
  }

}
