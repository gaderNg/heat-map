import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatMapComponent } from './heat-map.component';
import { HeatElementComponent } from '../heat-element/heat-element.component';
import { HeatCell } from 'src/app/model/heat-cell';
import { By } from '@angular/platform-browser';

describe('HeatMapComponent', () => {
  let component: HeatMapComponent;
  let fixture: ComponentFixture<HeatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeatMapComponent, 
        HeatElementComponent 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatMapComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle the hover event emitted by the heat element', () => {

    //Arrange.
    const arrData = [
      new HeatCell(1,'green', "Application health is good!"),
      new HeatCell(2,'red', "Application health is bad!")
    ];
    component.data = arrData;
    fixture.detectChanges();
    const he = fixture.debugElement.query(By.css('app-heat-element'));
    const heEl = he.nativeElement;

    //Act.
    //https://stackoverflow.com/questions/40804671/angular-2-emitting-hover-event-in-unit-tests
    heEl.dispatchEvent(new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    fixture.detectChanges();

    
    //Assert.


  });

});
