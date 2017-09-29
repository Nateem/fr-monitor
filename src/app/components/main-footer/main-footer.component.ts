import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {
  version:any = require("../../../../package.json").version;
  year:Date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
