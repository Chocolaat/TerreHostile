
import { CoreModule } from 'src/app/_core/core_module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    UserModule
  ],
  providers: [
      UserService
  ]
})
export class UserModule { }
