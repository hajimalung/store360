import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav-list',
  imports: [MatListModule, MatRippleModule, MatIconModule, RouterModule],
  templateUrl: './nav-list.html',
  styleUrl: './nav-list.scss'
})
export class NavList {

}
