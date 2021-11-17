import { CurrencyNameModel } from './currency-name.model';

export type WalletModel = {
  [key in CurrencyNameModel]: number;
}
