import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-lic-intel-chart',
  templateUrl: './lic-intel-chart.component.html',
  styleUrls: ['./lic-intel-chart.component.css'],
})
export class LicIntelChartComponent {
  Highcharts = Highcharts;
  linechart: any = {
    series: [
      {
        data: [
          ['Januray', 12],
          ['February', 19],
          ['Macrh', 3],
          ['April', 2],
          ['May', 4],
          ['June', 2],
          ['July', 6],
          ['August', 15],
          ['September', 5],
          ['October', 2],
          ['Novermber', 9],
          ['December', 20],
        ],
      },
    ],
    chart: {
      type: 'line',
    },
    title: {
      text: 'linechart',
    },
  };
}
