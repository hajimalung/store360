import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-nav-list',
  imports: [MatListModule, MatRippleModule, MatIconModule],
  templateUrl: './nav-list.html',
  styleUrl: './nav-list.scss'
})
export class NavList {

}
