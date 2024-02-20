import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    DashboardHomeComponent,
    SidebarComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
