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

  public createCustomer(customer: Customer): Observable<Customer> {
    console.log('create customer', customer);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Customer>(this.apiUrl + 'create-customer', customer, {headers})
  }

  setCustomer(email) {
    // To clear the previous customer object
    localStorage.removeItem('customer');
    
    // To store the customer object
    this.http.get<Customer>(`${this.apiUrl}get-customer/${email}`).subscribe(
      (customer: Customer) => {
        console.log(customer);
        localStorage.setItem('customer', JSON.stringify(customer)); // customer is onboarded
      },
      (error) => {
        if(error.status === 404) {
          console.log('customer not enrolled', error);
          this.router.navigate(['onboarding']); // redirect user to onboarding to create customer
        }
      }
    );
    
  }
}
