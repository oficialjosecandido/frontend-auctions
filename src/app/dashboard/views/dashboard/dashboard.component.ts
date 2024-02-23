import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../dashboard-styles.scss']
})
export class DashboardComponent {
  
  
  status = false;

  constructor(public router: Router) {}

  addToggle() {
    this.status = !this.status;       
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getUser() {

  }
}
