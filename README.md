# Angular Sample Currency Exchange App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Functionality
User has three wallets:
- USD (initial balance $200)
- EUR (initial balance €150)
- GBP (initial balance £10)
  
They can switch wallets e.g: EUR > GBP., GBP > USD., USD > EUR.  
Enter the desired amount to exchange and has a CTA (call-to-action) to conclude the transaction.  
This (https://exchangeratesapi.io/documentation/) is used to get the conversion rates.  
Wallet balances are updated correctly.  
It shows an error message when the desired exchange amount exceeds the current balance, the network request fails, amounts are empty or currencies are the same.

## Demo

To see the demo, click [here](http://currency-exchange.poormohammmadi.ir/).

`Note : make sure to run it without "https" since it is blocked by api.exchangeratesapi.io.`

## Run Locally
0- Make sure you have Angular cli installed. 
```
(sudo) npm i -g @angular/cli
```
1- Clone the project.
```
git clone https://github.com/poormohammadi/angular-currency-exchange.git
```
2- Go to the project directory and install node modules.
```
cd angular-currency-exchange
npm i
```
3- Run the application
```
npm start
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
