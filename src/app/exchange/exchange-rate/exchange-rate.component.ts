import { Component, Input, OnInit } from '@angular/core';

import { CurrencyModel } from './../../shared/models/currency.model';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  @Input() withdrawalCurency?: CurrencyModel;
  @Input() depositCurrency?: CurrencyModel;
  @Input() exchangeRate?: number;
  @Input() isLoading?: boolean;
  @Input() error?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
