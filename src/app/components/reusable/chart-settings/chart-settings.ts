import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChartSettingsService } from '../../../services/chart-settings';

@Component({
  selector: 'app-chart-settings',
  imports: [MatSlideToggleModule],
  templateUrl: './chart-settings.html',
  styleUrl: './chart-settings.scss'
})
export class ChartSettings {
  chartSettingsService = inject(ChartSettingsService);
}
