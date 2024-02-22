import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }


  constructor(private translate: TranslateService, private authService: AuthService, public router: Router) {}

  public ngOnInit(): void {
    this.getLanguage();
  }

  public toggleLogin(): void {
    if (this.isLoggedIn) {
      this.authService.SignOut();
    } else {
      this.router.navigate(['auth/login']);
    }
  }

  private getLanguage(): void {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }

  public changeLanguage(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('selectedLanguage', lang);
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  selectedLanguageFlag(): string {
    return '🇺🇸'; 
  }

  selectedLanguageCode(): string {
    return 'EN'; 
  }
  

}
