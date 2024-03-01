import { Component } from '@angular/core';
import { CountriesService } from 'src/app/shared/services/countries/countries.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {
  
  countriesPhone: any[] = [];
  countriesVAT: any[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService.getPhoneCodes().subscribe((phoneCodes) => {
      this.countriesPhone = phoneCodes;
    });

    this.countriesService.getVATCodes().subscribe((vatCodes) => {
      this.countriesVAT = vatCodes;
    });
  }

}
