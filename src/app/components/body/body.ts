import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DrawerService } from '../../services/drawer';
import { NavList } from "../nav-list/nav-list";

@Component({
  selector: 'app-body',
  imports: [MatSidenavModule, NavList],
  templateUrl: './body.html',
  styleUrl: './body.scss'
})
export class Body {
    drawerService = inject(DrawerService);
}
