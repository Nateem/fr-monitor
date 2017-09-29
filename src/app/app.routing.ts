import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardCustomComponent } from './dashboard-custom/dashboard-custom.component';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
const routes_menu = [
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard', icon: 'dashboard', class: '', menu_hide: false
    },
    component: DashboardComponent,
    //canActivate: [AuthGuard] 
    children: [
      {
        path: '',
        data: {
          title: '', icon: 'dashboard', class: '', menu_hide: true
        },
        redirectTo: 'dashboard1', pathMatch: 'full'
      },
      {
        path: 'dashboard1',
        data: {
          title: 'dashboard1', icon: 'dashboard', class: '', menu_hide: false
        },
        component: Dashboard1Component,
      },
      {
        path: 'dashboard2',
        data: {
          title: 'dashboard2', icon: 'dashboard', class: '', menu_hide: false
        },
        component: Dashboard2Component,
      }
    ]

  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    data: {
      menu_hide: true
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      menu_hide: true
    }
  }
];
const routes: Routes = routes_menu;

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
export const Routes_menu = routes_menu;