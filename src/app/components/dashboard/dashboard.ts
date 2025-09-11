import { Component } from '@angular/core';
import { SaleGraph } from '../sale-graph/sale-graph';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule,SaleGraph],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
