import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { GetListingsComponent } from './pages/home/get-listings/get-listings.component';
import { HomeComponent } from './pages/home/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GetListingsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    SharedModule
  ]
})
export class StoreModule { }
