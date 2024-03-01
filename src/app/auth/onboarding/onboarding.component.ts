import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountriesService } from 'src/app/shared/services/countries/countries.service';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent {
  
  countriesPhone: any[] = [];
  countriesVAT: any[] = [];
  profileForm: FormGroup;
  user: any;

  constructor(
    private countriesService: CountriesService, 
    private fb: FormBuilder, 
    private customerService: CustomerService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      countryCodePhone: ['', Validators.required],
      phone: ['', Validators.required],
      countryCodeVAT: ['', Validators.required],
      vat: ['', Validators.required],
      profilePicture: [null],
      idPicture: [null],
      message: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadUser();
    this.getCodes();
    
  }

  private loadUser(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
      this.profileForm.patchValue({
        email: this.user.email
      });
    }
  }

  public getCodes(): void {
    this.countriesService.getPhoneCodes().subscribe((phoneCodes) => {
      this.countriesPhone = phoneCodes;
    });

    this.countriesService.getVATCodes().subscribe((vatCodes) => {
      this.countriesVAT = vatCodes;
    });
  }


  onSubmit() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      console.log(formData);

      // prepare the form to the BE format
      const customer = {
        displayName: this.profileForm.get('name').value,
      }

      this.customerService.createCustomer(formData).subscribe((response) => {
        console.log(response);
        alert('Customer Created Successfully');
        this.router.navigate(['dashboard']);
      })
    } else {
      // Handle form validation errors
      alert('Something went wrong');
    }
  }

  onProfilePictureChange(event: any) {
    // Handle profile picture file change
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file);
    this.profileForm.patchValue({
      profilePicture: file,
    });
  }

  onIdPictureChange(event: any) {
    // Handle ID picture file change
    const file = (event.target as HTMLInputElement).files[0];
    console.log(file)
    this.profileForm.patchValue({
      idPicture: file,
    });
  }

}
