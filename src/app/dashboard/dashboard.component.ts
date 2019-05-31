import { Component } from '@angular/core';
import { menus, MenuSB } from '../data';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  config = menus;
  slideBar = MenuSB;

  constructor() { }
}
