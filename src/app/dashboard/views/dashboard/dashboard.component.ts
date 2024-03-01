import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../dashboard-styles.scss']
})
export class DashboardComponent {
  
  
  status = false;

  constructor(public router: Router, public authService: AuthService) {}

  addToggle() {
    this.status = !this.status;       
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.SignOut();
  }

  getUser() {

  }
}
