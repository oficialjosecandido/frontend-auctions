import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  private apiUrl = 'http://127.0.0.1:8000/api/listings/';

  constructor(private http: HttpClient) { }

  getListings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
