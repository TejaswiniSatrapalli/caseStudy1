import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRateListPageComponent } from './admin-rate-list-page.component';

describe('AdminRateListPageComponent', () => {
  let component: AdminRateListPageComponent;
  let fixture: ComponentFixture<AdminRateListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRateListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRateListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
