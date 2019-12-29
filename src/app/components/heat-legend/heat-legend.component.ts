import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-heat-legend',
  templateUrl: './heat-legend.component.html',
  styleUrls: ['./heat-legend.component.css']
})
export class HeatLegendComponent implements OnInit {

  @Output() public legendClick: EventEmitter<string>;
  public clicked: string = "black";

  constructor() { 
    this.legendClick = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onClick(event) {
    if(event.srcElement.style.cssText.indexOf("red") > -1) {
      this.legendClick.emit("red");
      this.clicked="red"
    } else if(event.srcElement.style.cssText.indexOf("green") > -1) {
      this.legendClick.emit("green");
      this.clicked = "green";
    } else {
      this.legendClick.emit("black");
      this.clicked="black"
    }
  }

}
