import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Body } from '../../components/body/body';

@Component({
  selector: 'app-landing',
  imports: [Header, Body],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
