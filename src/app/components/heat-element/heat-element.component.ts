import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeatCell } from 'src/app/model/heat-cell';

@Component({
  selector: 'app-heat-element',
  templateUrl: './heat-element.component.html',
  styleUrls: ['./heat-element.component.css']
})
export class HeatElementComponent implements OnInit {
  public elementStyles;
  @Input() public cellData: HeatCell;
  @Output() public elementHover: EventEmitter<HeatCell>;

  constructor() { 
    this.elementHover = new EventEmitter<HeatCell>();
    this.cellData = new HeatCell(-1, "white", "Default Tooltip Text");
  }

  ngOnInit() {
    this.elementStyles =  {     
      "background-color": this.cellData.color
    }   
  }

  onHover() {
    console.log("HeatElementComponent::caught onHover event...")
    this.elementHover.emit(this.cellData);
  }

}
