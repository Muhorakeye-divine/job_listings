import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { App } from '../app';
import { apiInterceptor } from '../interceptors/api-interceptor';
import { Apipage } from '../apipage/apipage';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { Holiday } from '../services/holiday';


bootstrapApplication(App).catch((err) =>console.error(err));


@NgModule({
  
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  
    
  providers: [
    { provide: HTTP_INTERCEPTORS, useValue: apiInterceptor, multi:true},
    
  ],

  
  
})
export class ModulesModule { }
