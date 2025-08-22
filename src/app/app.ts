import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ElementRef,AfterViewInit } from '@angular/core';
import data from '../assets/data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements AfterViewInit {
  protected readonly title = signal('statics');
  
  items = data;
  row :any;
  
  
  constructor(private elementRef: ElementRef, private router: Router){}

  pageapi(){
    this.router.navigate(['./apipage']);
  }
  

  
  ngAfterViewInit(): void {
    const domCreation = this.elementRef.nativeElement;
    domCreation.querySelector('#items').innerHTML = JSON.stringify(this.items);
    this.row = this.elementRef.nativeElement.querySelectorAll('#row');
    

    if(this.items.length){
      this.row.innerHTML='';
      this.items.forEach((item) => {
        this.row.innerHTML +=`
        
        `;

      });

       
    }
  }
}
