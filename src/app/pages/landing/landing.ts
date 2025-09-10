import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Body } from '../../components/body/body';
import { Dashboard } from "../../components/dashboard/dashboard";
import { Charts } from "../../components/reusable/charts/charts";
import { SaleGraph } from "../../components/sale-graph/sale-graph";

@Component({
  selector: 'app-landing',
  imports: [Header, Body, Dashboard],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
}
