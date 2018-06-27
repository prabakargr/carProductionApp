import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponentsComponent } from './order-components.component';

describe('OrderComponentsComponent', () => {
  let component: OrderComponentsComponent;
  let fixture: ComponentFixture<OrderComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
