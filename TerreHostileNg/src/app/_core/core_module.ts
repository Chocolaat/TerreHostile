import { AppRoutingModule } from './../app-routing.module';
import { HeaderComponent } from './header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    LoginComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class CoreModule { }
