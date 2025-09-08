import { Component, signal } from '@angular/core';
import { Login } from "./pages/login/login";
import { Landing } from './pages/landing/landing';


@Component({
  selector: 'app-root',
  imports: [Login, Landing],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('store360');
}
