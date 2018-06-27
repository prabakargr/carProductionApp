import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionlistsComponent } from './productionlists.component';

describe('ProductionlistsComponent', () => {
  let component: ProductionlistsComponent;
  let fixture: ComponentFixture<ProductionlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
