import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
    private _isOpen = signal(true);
    isOpen = this._isOpen.asReadonly();

    open(){
        this._isOpen.set(true);
    }

    close(){
        this._isOpen.set(false);
    }
}
