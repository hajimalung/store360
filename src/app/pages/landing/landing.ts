import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/header/header';
import { Body } from '../../components/body/body';

@Component({
  selector: 'app-landing',
  imports: [RouterOutlet, Header, Body],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
}
