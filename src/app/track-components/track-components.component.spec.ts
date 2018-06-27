import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackComponentsComponent } from './track-components.component';

describe('TrackComponentsComponent', () => {
  let component: TrackComponentsComponent;
  let fixture: ComponentFixture<TrackComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
