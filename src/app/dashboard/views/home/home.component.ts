import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../dashboard-styles.scss', './home.component.scss']
})
export class HomeComponent {

  customer = JSON.parse(localStorage.getItem('customer'));

  constructor(private router: Router) { }

 

}
