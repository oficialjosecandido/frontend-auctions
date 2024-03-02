import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HomeComponent } from './views/home/home.component';
import { ListingsComponent } from './views/listings/listings.component';
import { ProfileComponent } from './views/profile/profile.component';
import { WalletComponent } from './views/wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'listings', component: ListingsComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
