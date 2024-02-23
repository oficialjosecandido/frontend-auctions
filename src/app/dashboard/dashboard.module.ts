import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { MyListingsComponent } from './pages/my-listings/my-listings.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListingsComponent } from './views/listings/listings.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    DashboardHomeComponent,
    SidebarComponent,
    LogoComponent,
    MyListingsComponent,
    HomeComponent,
    DashboardComponent,
    ListingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
