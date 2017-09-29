import { Component, OnInit } from '@angular/core';
import {Routes_menu} from '../../app.routing';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit {
  menuRepeat:any = Routes_menu;
  constructor() { }

  ngOnInit() {
  }

}
