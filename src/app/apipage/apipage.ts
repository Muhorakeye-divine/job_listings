import { Component, OnInit } from '@angular/core';
import { Holiday } from '../services/holiday';
import { HolidayModel } from '../models/holiday.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apipage',
  imports: [CommonModule],
  templateUrl: './apipage.html',
  styleUrl: './apipage.css'
})
export class Apipage implements OnInit {
  holidays: HolidayModel[] = [];
 error: string | null = null;

 constructor(private holidayService: Holiday){}

 ngOnInit(): void {
   this.getHolidays();
 }
  getHolidays(): void{
    this.holidayService.getHolidays('Canada', 2025).subscribe({
      next: (data) =>{
        this.holidays = data;
      },
      error: (err) =>{
        this.error=err.mesage;
      }
    });
  }

}


