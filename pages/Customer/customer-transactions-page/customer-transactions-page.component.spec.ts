import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionsPageComponent } from './customer-transactions-page.component';

describe('CustomerTransactionsPageComponent', () => {
  let component: CustomerTransactionsPageComponent;
  let fixture: ComponentFixture<CustomerTransactionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransactionsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTransactionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
