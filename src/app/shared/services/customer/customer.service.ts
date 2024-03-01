import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient, private router: Router) { }

  public createCustomer(user) {
    console.log('create customer', user);
    const customerData = {
      display_name: user.displayName,
      email: user.email,
      // other properties based on your requirements
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any other headers you need, e.g., Authorization
    });

    return this.http.post(this.apiUrl + 'create-customer', customerData, {headers})
  }

  setCustomer(email) {
    // To clear the previous customer object
    localStorage.removeItem('customer');
    
    // To store the customer object
    this.http.get<Customer>(`${this.apiUrl}get-customer/${email}`).subscribe(
      (customer: Customer) => {
      console.log(customer);
        localStorage.setItem('customer', JSON.stringify(customer));
      },
      (error) => {
        if(error.status === 404) {
          console.log('customer not enrolled', error)
          this.router.navigate(['onboarding']);
        }
        // console.error('Error getting customer:', error);
      }
    );
    
  }
}
