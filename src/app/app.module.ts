import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardCustomComponent } from './dashboard-custom/dashboard-custom.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    ContentHeaderComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DashboardCustomComponent,
    Dashboard1Component,
    Dashboard2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
