import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStaffOrdersComponent } from './get-staff-orders.component';

describe('GetStaffOrdersComponent', () => {
  let component: GetStaffOrdersComponent;
  let fixture: ComponentFixture<GetStaffOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStaffOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStaffOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
