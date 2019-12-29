import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsPaneComponent } from './alerts-pane.component';

describe('AlertsPaneComponent', () => {
  let component: AlertsPaneComponent;
  let fixture: ComponentFixture<AlertsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
