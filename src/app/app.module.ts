import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrbitCountComponent } from './orbit-count/orbit-count.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { OrbitReportComponent } from './orbit-report/orbit-report.component';
import { Satellite } from './satellite.ts/satellite.ts.component';
import { SatelliteComponent } from './satellite/satellite.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitCountComponent,
    OrbitListComponent,
    OrbitReportComponent,
    Satellite.TsComponent,
    SatelliteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
