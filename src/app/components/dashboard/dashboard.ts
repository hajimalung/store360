import { Component } from '@angular/core';
import { SaleGraph } from '../sale-graph/sale-graph';

@Component({
  selector: 'app-dashboard',
  imports: [SaleGraph],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
