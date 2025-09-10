import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class ChartSettingsService{

  gradient = signal(true);
  showXAxis = signal(true);
  showYAxis = signal(true);
  showLegend = signal(true);
  showXAxisLabel = signal(true);
  showYAxisLabel =  signal(true);

}
