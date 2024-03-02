import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Customer } from 'src/app/shared/services/customer/customer';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../dashboard-styles.scss']
})
export class DashboardComponent implements OnInit {
  
  customer;
  status = false;

  constructor(
    public router: Router, 
    public authService: AuthService,
    public customerService: CustomerService
    ) {}

  public ngOnInit(): void {
    this.getCustomer();
  }
  
  addToggle() {
    this.status = !this.status;       
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.SignOut();
  }

  getCustomer() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.customerService.getCustomer(user.email).subscribe(
      (customer: Customer) => {
        this.customer = customer;
        localStorage.setItem('customer', JSON.stringify(this.customer));
      }
    );
  }
}
