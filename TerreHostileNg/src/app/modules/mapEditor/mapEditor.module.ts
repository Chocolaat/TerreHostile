import { SharedModule } from './../../_shared/shared.module';
import { MapEditorComponent } from './mapEditor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/_core/core_module';

@NgModule({
  declarations: [
    MapEditorComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MapEditorModule { }
