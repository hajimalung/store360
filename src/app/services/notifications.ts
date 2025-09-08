import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  private _notifications = signal([]);
  notifications = this._notifications.asReadonly();
}
