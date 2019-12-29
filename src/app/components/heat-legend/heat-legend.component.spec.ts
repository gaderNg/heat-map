import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatLegendComponent } from './heat-legend.component';

describe('HeatLegendComponent', () => {
  let component: HeatLegendComponent;
  let fixture: ComponentFixture<HeatLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
