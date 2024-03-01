import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private phoneCodesUrl = 'assets/countries/countries_phone_code.json';
  private vatCodesUrl = 'assets/countries/countries_vat_code.json';

  constructor(private http: HttpClient) {}

  getPhoneCodes(): Observable<any[]> {
    return this.http.get<any[]>(this.phoneCodesUrl);
  }

  getVATCodes(): Observable<any[]> {
    return this.http.get<any[]>(this.vatCodesUrl);
  }
}
