import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatUIModule } from './mat-ui/mat-ui.module';
import { BoqComponent } from './boq/boq.component';
import { BoqHeaderComponent } from './boq/boq-header/boq-header.component';
import { BoqTableComponent } from './boq/boq-table/boq-table.component';
import { LicIntelComponent } from './lic-intel/lic-intel.component';
import { LicIntelTableComponent } from './lic-intel/lic-intel-table/lic-intel-table.component';
import { LicIntelChartComponent } from './lic-intel/lic-intel-chart/lic-intel-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BoqComponent,
    BoqHeaderComponent,
    BoqTableComponent,
    LicIntelComponent,
    LicIntelTableComponent,
    LicIntelChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatUIModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
