import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer';

@Component({
  selector: 'app-body',
  imports: [MatSidenavModule],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
    drawerService = inject(DrawerService);
}
