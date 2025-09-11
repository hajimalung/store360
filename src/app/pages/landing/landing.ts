import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Body } from '../../components/body/body';
import { BadRequest } from "../bad-request-error/bad-request-error";

@Component({
  selector: 'app-landing',
  imports: [Header, Body, BadRequest],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
}
