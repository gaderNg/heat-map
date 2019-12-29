import { Component, OnInit } from '@angular/core';
import { HeatCell } from 'src/app/model/heat-cell';
import { HeatMapService } from 'src/app/services/heat-map.service';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.css']
})
export class HeatMapComponent implements OnInit {

  public data: HeatCell[];
  
  constructor(private service: HeatMapService) { }

  ngOnInit() {
    this.data = this.service.getData();
  }

  onHover(cellData: HeatCell) {
    console.log("HeatMapComponent::Hovering over : " + cellData.appID);
  }

  onClickLegend(color: string) {
    console.log("HeatMapComponent::clicked on : " + color);
    this.data = this.service.getFilteredData(color);
  }

}
