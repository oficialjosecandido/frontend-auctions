import { Component } from '@angular/core';
import { ListingsService } from 'src/app/shared/services/listings.service';

@Component({
  selector: 'app-get-listings',
  templateUrl: './get-listings.component.html',
  styleUrls: ['./get-listings.component.scss']
})
export class GetListingsComponent {

  listings: any[]; // create a model for Listings

  constructor(private listingsService: ListingsService) { }

  public ngOnInit(): void {
    this.getListings();
  }

  public getListings(): void {
    this.listingsService.getListings()
      .subscribe(listings => {
        console.log(listings);
        this.listings = listings
      });
  }

  public isLoggedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false
  }

}
