import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppContext{
  APP_NAME = signal('Store 360');
}
