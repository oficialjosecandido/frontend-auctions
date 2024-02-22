import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private apiUrl = 'http://127.0.0.1:8000/api/listings/';
  private apiUrl2 = 'http://127.0.0.1:8000/api/listings/';

  constructor(private http: HttpClient) { }

  getListings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  public createCustomer(user) {
    const customerData = {
      display_name: user.displayName,
      email: user.email,
      // other properties based on your requirements
    };

    this.http.post(this.apiUrl2, customerData)
      .subscribe(response => {
        console.log('Customer created:', response);
      }, error => {
        console.error('Error creating customer:', error);
      });
  }


}
