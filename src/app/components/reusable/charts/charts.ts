import { Component, input, inject, computed } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ChartSettings } from "../chart-settings/chart-settings";
import { ChartSettingsService } from '../../../services/chart-settings';

@Component({
  selector: 'app-charts',
  imports: [NgxChartsModule, MatButtonModule, MatIconModule, MatToolbar, MatSidenavModule, ChartSettings],
  templateUrl: './charts.html',
  styleUrl: './charts.scss'
})
export class Charts {

  chartSettingsService = inject(ChartSettingsService);

  view:[number, number] = [600, 400];

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

  gradient = computed(()=>this.chartSettingsService.gradient());
  showXAxis = computed(()=>this.chartSettingsService.showXAxis());
  showYAxis = computed(()=>this.chartSettingsService.showYAxis());
  showLegend = computed(()=>this.chartSettingsService.showLegend());
  showXAxisLabel = computed(()=>this.chartSettingsService.showXAxisLabel());
  showYAxisLabel =  computed(()=>this.chartSettingsService.showYAxisLabel());
  yAxisLabel = input('Sales');
  xAxisLabel = input('Country');
}
