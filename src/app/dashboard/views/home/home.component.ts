import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../dashboard-styles.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  public showWebsite() {
    this.router.navigate(['/']);
  }

}
