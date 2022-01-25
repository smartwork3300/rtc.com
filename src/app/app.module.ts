import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';


import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ImageModule} from 'primeng/image';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';

import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ConsignComponent } from './components/consign/consign.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {SplitterModule} from 'primeng/splitter';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    HeaderComponent,
    FooterComponent,
    ConsignComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ImageModule,
    MultiSelectModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    InputTextareaModule,
    InputNumberModule,
    SplitterModule

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
