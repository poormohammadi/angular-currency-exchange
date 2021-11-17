import { CurrencyNameModel } from './currency-name.model';

export interface CurrencyModel {
  name: CurrencyNameModel;
  symbol: '£' | '€' | '$';
}
