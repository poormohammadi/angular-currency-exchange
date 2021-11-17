import { CurrencyNameModel } from './currency-name.model';

export interface ExchangeRateResponseModel {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: {
    [key in CurrencyNameModel]: number;
  }
}
