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

    const formData = new FormData();
      formData.append('display_name', customer.display_name);
      formData.append('email', customer.email);
      formData.append('id_number', customer.id_number);
      formData.append('phone_number', customer.phone_number);
      formData.append('billing_address', customer.billing_address);
      formData.append('shipping_address', customer.shipping_address);
      formData.append('profile_picture', customer.profile_picture);
      formData.append('id_file', customer.id_file);

    return this.http.post<Customer>(this.apiUrl + 'create-customer', formData)
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
