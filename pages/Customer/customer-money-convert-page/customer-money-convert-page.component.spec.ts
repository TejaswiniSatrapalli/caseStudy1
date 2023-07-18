import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMoneyConvertPageComponent } from './customer-money-convert-page.component';

describe('CustomerMoneyConvertPageComponent', () => {
  let component: CustomerMoneyConvertPageComponent;
  let fixture: ComponentFixture<CustomerMoneyConvertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMoneyConvertPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMoneyConvertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
