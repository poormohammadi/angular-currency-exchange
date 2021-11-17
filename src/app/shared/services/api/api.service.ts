import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ExchangeRateResponseModel } from '../../models/exchange-rate-response.model';

const CURRENCY_EXCHANGE_RATE_BASE_URL = 'http://api.exchangeratesapi.io/v1/latest';
const ACCESS_KEY = '42a264e9d421d1e8b006e8537afca2d4';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getExchangeRates() {
    return this.http.get<ExchangeRateResponseModel>(CURRENCY_EXCHANGE_RATE_BASE_URL, {
      params: {
        access_key: ACCESS_KEY,
        format: '1'
      }
    });
  }

}
