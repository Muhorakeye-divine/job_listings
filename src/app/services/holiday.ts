import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HolidayModel } from '../models/holiday.model';

@Injectable({
  providedIn: 'root'
})
export class Holiday {
  private apiUrl ='https://api.api-ninjas.com/v1/holidays?country=CA&year=2025&type=public_holiday';
  constructor(private http: HttpClient){}
  getHolidays(country:string, year:number): Observable<HolidayModel[]>{
    return this.http.get<HolidayModel[]>(`${this.apiUrl}?country=${country}}&year=${year}&type=public`);
  }
}
