import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatCountComponent } from './heat-count.component';

describe('HeatCountComponent', () => {
  let component: HeatCountComponent;
  let fixture: ComponentFixture<HeatCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
