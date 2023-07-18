import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransferMoneyPageComponent } from './customer-transfer-money-page.component';

describe('CustomerTransferMoneyPageComponent', () => {
  let component: CustomerTransferMoneyPageComponent;
  let fixture: ComponentFixture<CustomerTransferMoneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransferMoneyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTransferMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
