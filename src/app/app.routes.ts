import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apipage } from './apipage/apipage';


export const routes: Routes = [
    
    {path: 'apipage' ,component: Apipage}

];
@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
