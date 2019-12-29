import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatElementComponent } from './heat-element.component';
import { By } from '@angular/platform-browser';
import { HeatCell } from 'src/app/model/heat-cell';

//suite
describe('HeatElementComponent', () => {
  let component: HeatElementComponent;
  let fixture: ComponentFixture<HeatElementComponent>;

  //setup
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatElementComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HeatElementComponent);
    component = fixture.componentInstance;
    
  });

  //spec
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //spec
  it('input can be set using a heat cell object', () => {
    component.cellData = new HeatCell(12, "red", "Test Default Tooltip Text");
    fixture.detectChanges();
    const he = fixture.debugElement.query(By.css('.element'));
    expect(he.nativeElement.style.backgroundColor).toBe('red');
    //expect(component.cellData.toolTipText).toBe(he.nativeElement.textContent);
  });

  //spec
  it('should emit cell data when hovered over', () => {
    const he = fixture.debugElement.query(By.css('.element'));
    const heEl = he.nativeElement;

    //Arrange.
    //mock the cell data supplied by the parent component
    const cellData = new HeatCell(-1, "yellow", "Hover Default Tooltip Text");
    //simulate the parent setting the input property with that cell data
    component.cellData = cellData;
    //trigger initial data binding
    fixture.detectChanges();

    //Act.
    let hoveredElementCell: HeatCell;
    component.elementHover.subscribe((cell: HeatCell) => hoveredElementCell = cell);    
    //https://stackoverflow.com/questions/40804671/angular-2-emitting-hover-event-in-unit-tests
    heEl.dispatchEvent(new MouseEvent('mouseover', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    //he.triggerEventHandler('hover', null);

    //Assert.
    expect(hoveredElementCell).toBe(cellData);
  });

});
