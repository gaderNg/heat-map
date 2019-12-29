import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeatElementComponent } from './components/heat-element/heat-element.component';
import { HeatMapComponent } from './components/heat-map/heat-map.component';
import { HeatMapService } from './services/heat-map.service';
import { HeatLegendComponent } from './components/heat-legend/heat-legend.component';
import { HeatCountComponent } from './components/heat-count/heat-count.component';
import { AlertsPaneComponent } from './components/alerts-pane/alerts-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatElementComponent,
    HeatMapComponent,
    HeatLegendComponent,
    HeatCountComponent,
    AlertsPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeatMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
