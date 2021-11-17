import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCurrencyRowComponent } from './exchange-currency-row.component';

describe('ExchangeCurrencyRowComponent', () => {
  let component: ExchangeCurrencyRowComponent;
  let fixture: ComponentFixture<ExchangeCurrencyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCurrencyRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCurrencyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
