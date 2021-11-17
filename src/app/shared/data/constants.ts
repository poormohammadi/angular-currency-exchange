import { WalletModel } from '../models/wallet.model';
import { CurrencyModel } from './../models/currency.model';

export const ALL_CURRENCIES: CurrencyModel[] = [
  {
    name: 'EUR',
    symbol: '€',
  },
  {
    name: 'GBP',
    symbol: '£',
  },
  {
    name: 'USD',
    symbol: '$',
  }
];

export const DEFAULT_WALLET: WalletModel = {
  'USD': 200,
  'EUR': 150,
  'GBP': 10,
};

export const DEFAULT_WITHDRAWAL_CURRENCY: CurrencyModel = { name: 'USD', symbol: '$' };
export const DEFAULT_DEPOSIT_CURRENCY: CurrencyModel = { name: 'EUR', symbol: '€' };
