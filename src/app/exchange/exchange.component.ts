import { Component, OnInit } from '@angular/core';

import { WalletModel } from '../shared/models/wallet.model';
import { DEFAULT_DEPOSIT_CURRENCY, DEFAULT_WALLET, DEFAULT_WITHDRAWAL_CURRENCY } from './../shared/data/constants';
import { CurrencyModel } from './../shared/models/currency.model';
import { ApiService } from './../shared/services/api/api.service';

@Component({
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  isLoading?: boolean;

  wallet: WalletModel = DEFAULT_WALLET;

  withdrawalAmount?: number;
  withdrawalCurrency: CurrencyModel = DEFAULT_WITHDRAWAL_CURRENCY;
  withdrawalError = '';
  public get withdrawalBalance(): number {
    return this.wallet[this.withdrawalCurrency.name];
  }

  depositAmount?: number;
  depositCurrency: CurrencyModel = DEFAULT_DEPOSIT_CURRENCY;
  public get depositBalance(): number {
    return this.wallet[this.depositCurrency.name];
  }

  exchangeRateError?: string;
  exchangeRate: number = 1;

  constructor(
    private apiService: ApiService,
  ) { }

  private getExchangeRate() {
    this.isLoading = true;
    this.apiService.getExchangeRates()
      .subscribe({
        next: res => {
          const rate = res.rates[this.depositCurrency.name] / res.rates[this.withdrawalCurrency.name];
          const roundedRate = rate.toFixed(2);
          this.exchangeRate = +roundedRate;
          this.isLoading = false;
        },
        error: err => {
          this.exchangeRateError = err.statusText;
          this.isLoading = false;
        },
      });
  }

  private reset() {
    this.withdrawalError = '';
    this.exchangeRateError = '';
    this.depositAmount = undefined;
    this.withdrawalAmount = undefined;
  }

  onWidrawalAmountChange(withdrawalAmount: number) {
    this.withdrawalError = '';
    this.withdrawalAmount = withdrawalAmount;

    if (withdrawalAmount === undefined) {
      this.depositAmount = undefined;
      return;
    }

    const depositAmount = this.withdrawalAmount * this.exchangeRate;
    this.depositAmount = +depositAmount.toFixed(2);

    if (+this.withdrawalAmount > this.withdrawalBalance) {
      this.withdrawalError = 'Balance Exceed';
    }

  }

  onWithdrawalCurrencyChange(withdrawalCurrency: CurrencyModel) {
    this.getExchangeRate();
    this.reset();
    this.withdrawalCurrency = withdrawalCurrency;
  }

  onDepositAmountChange(depositAmount: number) {
    this.withdrawalError = '';

    this.depositAmount = depositAmount;
    if (this.depositAmount === undefined) {
      this.withdrawalAmount = undefined;
      return;
    }

    const withdrawalAmount = this.depositAmount / this.exchangeRate;
    this.withdrawalAmount = +withdrawalAmount.toFixed(2);

    if (+withdrawalAmount > this.withdrawalBalance)
      this.withdrawalError = 'Balance Exceed';
  }

  onDepositCurrencyChange(depositCurrency: CurrencyModel) {
    this.getExchangeRate();
    this.reset();
    this.depositCurrency = depositCurrency;
  }

  doExchange() {
    if (this.withdrawalCurrency.name === this.depositCurrency.name) {
      this.exchangeRateError = 'Convert a currency to another';
      return;
    } else if (!this.withdrawalAmount || !this.depositAmount) {
      this.exchangeRateError = 'Please fill one of the fields';
      return;
    } else if (this.withdrawalAmount < 0 || this.depositAmount < 0) {
      this.exchangeRateError = 'Please enter a positive number';
      return;
    }

    this.wallet = {
      ...this.wallet,
      [this.withdrawalCurrency.name]: (+this.withdrawalBalance) - (+this.withdrawalAmount),
      [this.depositCurrency.name]: (+this.depositBalance) + (+this.depositAmount),
    };

    this.reset();
  }

  ngOnInit(): void {
    this.getExchangeRate();
  }

}
