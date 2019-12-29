import { Injectable } from '@angular/core';
import { HeatCell } from '../model/heat-cell';

@Injectable({
  providedIn: 'root'
})
export class HeatMapService {
  data: Array<HeatCell>;

  constructor() { 
    this.data = [
      new HeatCell(1,'green', "Application health is good!"),
      new HeatCell(2,'green', "Application health is good!"),
      new HeatCell(3,'red', "Application health is critical!"),
      new HeatCell(4,'green', "Application health is good!"),
      new HeatCell(5,'green', "Application health is good!"),
      new HeatCell(6,'red', "Application health is critical!"),
      new HeatCell(7,'green', "Application health is good!"),
      new HeatCell(8,'green', "Application health is good!"),
      new HeatCell(9,'red', "Application health is critical!"),
      new HeatCell(10,'green', "Application health is good!"),
      new HeatCell(12,'green', "Application health is good!"),
      new HeatCell(13,'red', "Application health is critical!"),
      new HeatCell(14,'red', "Application health is good!"),
      new HeatCell(15,'red', "Application health is good!"),
      new HeatCell(16,'red', "Application health is critical!"),
      new HeatCell(17,'green', "Application health is good!"),
      new HeatCell(18,'green', "Application health is good!"),
      new HeatCell(19,'red', "Application health is critical!"),
      new HeatCell(20,'green', "Application health is good!"),
      new HeatCell(21,'green', "Application health is good!"),
      new HeatCell(22,'red', "Application health is critical!"),
      new HeatCell(23,'green', "Application health is good!"),
      new HeatCell(24,'green', "Application health is good!"),
      new HeatCell(31,'green', "Application health is good!"),
      new HeatCell(32,'green', "Application health is good!"),
      new HeatCell(33,'red', "Application health is critical!"),
      new HeatCell(43,'green', "Application health is good!"),
      new HeatCell(53,'green', "Application health is good!"),
      new HeatCell(63,'red', "Application health is critical!"),
      new HeatCell(73,'green', "Application health is good!"),
      new HeatCell(83,'green', "Application health is good!"),
      new HeatCell(113,'red', "Application health is critical!"),
      new HeatCell(30,'green', "Application health is good!"),
      new HeatCell(34,'green', "Application health is good!"),
      new HeatCell(93,'red', "Application health is critical!"),
      new HeatCell(94,'red', "Application health is good!"),
      new HeatCell(95,'red', "Application health is good!"),
      new HeatCell(96,'red', "Application health is critical!"),
      new HeatCell(97,'green', "Application health is good!"),
      new HeatCell(98,'green', "Application health is good!"),
      new HeatCell(99,'red', "Application health is critical!"),
      new HeatCell(100,'green', "Application health is good!"),
      new HeatCell(101,'green', "Application health is good!"),
      new HeatCell(102,'red', "Application health is critical!"),
      new HeatCell(103,'green', "Application health is good!"),
      new HeatCell(104,'green', "Application health is good!"),
      new HeatCell(105,'red', "Application health is critical!")
    ];
  }

  getData(): Array<HeatCell> {
    return this.data;
  }

  getFilteredData(color: string): Array<HeatCell> {
    let filteredData = [];

    if(color == "black") {
      filteredData = this.data;
    } else {
      this.data.forEach((cellObj) => {
        if(cellObj.color == color) {
          filteredData.push(cellObj);
        }
      })
    }

    return filteredData;
  }

}
