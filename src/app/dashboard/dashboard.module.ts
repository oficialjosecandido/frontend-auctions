import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListingsComponent } from './views/listings/listings.component';
import { WalletComponent } from './views/wallet/wallet.component';
import { ProfileComponent } from './views/profile/profile.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LogoComponent,
    HomeComponent,
    DashboardComponent,
    ListingsComponent,
    WalletComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
