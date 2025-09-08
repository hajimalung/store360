import { Component, inject, computed } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppContext } from '../../services/context';
import { DrawerService } from '../../services/drawer';
import { NotificationsService } from '../../services/notifications';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
    appContext = inject(AppContext);
    drawerService = inject(DrawerService);
    notificationsService = inject(NotificationsService);

    noOfNotifications = computed(()=> this.notificationsService.notifications().length);
}
