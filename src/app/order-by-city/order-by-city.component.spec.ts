import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByCityComponent } from './order-by-city.component';

describe('OrderByCityComponent', () => {
  let component: OrderByCityComponent;
  let fixture: ComponentFixture<OrderByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
