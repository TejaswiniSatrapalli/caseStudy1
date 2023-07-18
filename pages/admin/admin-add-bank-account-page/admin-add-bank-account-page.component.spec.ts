import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBankAccountPageComponent } from './admin-add-bank-account-page.component';

describe('AdminAddBankAccountPageComponent', () => {
  let component: AdminAddBankAccountPageComponent;
  let fixture: ComponentFixture<AdminAddBankAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddBankAccountPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddBankAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
