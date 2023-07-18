import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRateListPageComponent } from './customer-rate-list-page.component';

describe('CustomerRateListPageComponent', () => {
  let component: CustomerRateListPageComponent;
  let fixture: ComponentFixture<CustomerRateListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRateListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
