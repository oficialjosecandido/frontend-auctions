import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetListingsComponent } from './pages/home/get-listings/get-listings.component';
import { HomeComponent } from './pages/home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listings', component: GetListingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
