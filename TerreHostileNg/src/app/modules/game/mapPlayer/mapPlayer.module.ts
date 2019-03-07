import { SharedModule } from 'src/app/_shared/shared.module';
import { CoreModule } from 'src/app/_core/core_module';
import { MapPlayerComponent } from './mapPlayer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    MapPlayerComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MapPlayerModule { }
