import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransactionListPageComponent } from './admin-transaction-list-page.component';

describe('AdminTransactionListPageComponent', () => {
  let component: AdminTransactionListPageComponent;
  let fixture: ComponentFixture<AdminTransactionListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransactionListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTransactionListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
