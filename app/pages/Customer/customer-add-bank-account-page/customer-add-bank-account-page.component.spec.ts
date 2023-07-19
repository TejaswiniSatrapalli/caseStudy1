import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddBankAccountPageComponent } from './customer-add-bank-account-page.component';

describe('CustomerAddBankAccountPageComponent', () => {
  let component: CustomerAddBankAccountPageComponent;
  let fixture: ComponentFixture<CustomerAddBankAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAddBankAccountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAddBankAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
