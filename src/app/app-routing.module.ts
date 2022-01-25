import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsignComponent } from './components/consign/consign.component';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path:'home',component:HomeComponent
  },
  
  {
    path:'consign',component:ConsignComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
