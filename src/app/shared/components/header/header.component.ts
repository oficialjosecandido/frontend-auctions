import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false; 

  constructor(private translate: TranslateService) {}

  public ngOnInit(): void {
    this.getLanguage();
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

  selectedLanguageFlag(): string {
    // You can implement logic to return the flag based on the selectedLanguage
    return '🇺🇸'; // Default to US flag for English
  }

  selectedLanguageCode(): string {
    // You can implement logic to return the code based on the selectedLanguage
    return 'EN'; // Default to English
  }
  

}
