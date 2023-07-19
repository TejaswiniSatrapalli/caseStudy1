import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddRatePageComponent } from './admin-add-rate-page.component';

describe('AdminAddRatePageComponent', () => {
  let component: AdminAddRatePageComponent;
  let fixture: ComponentFixture<AdminAddRatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddRatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddRatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
