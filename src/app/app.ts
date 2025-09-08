import { Component, signal } from '@angular/core';
import { Landing } from "./pages/landing/landing";


@Component({
  selector: 'app-root',
  imports: [Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('store360');
}
