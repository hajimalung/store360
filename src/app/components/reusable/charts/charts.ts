import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-charts',
  imports: [NgxChartsModule],
  templateUrl: './charts.html',
  styleUrl: './charts.scss'
})
export class Charts {
  view:[number, number] = [600, 400];
  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  public single = [
  {
    "name": "China",
    "value": 2243772
  },
  {
    "name": "USA",
    "value": 1126000
  },
  {
    "name": "Norway",
    "value": 296215
  },
  {
    "name": "Japan",
    "value": 257363
  },
  {
    "name": "Germany",
    "value": 196750
  },
  {
    "name": "France",
    "value": 204617
  }
];

gradient = true;
 showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';

}
