import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsIsoJsonComponent } from './json/json.component';
import { JsIsoImgComponent } from './img/img.component';
import { JsIsoCanvasControlComponent } from './canvas/canvasControl.component';
import { JsIsoCanvasInputComponent } from './canvas/canvasInput.component';

@NgModule({
  declarations: [JsIsoJsonComponent, JsIsoImgComponent, JsIsoCanvasControlComponent, JsIsoCanvasInputComponent],
  imports: [
    CommonModule
  ],
  exports: [JsIsoJsonComponent, JsIsoImgComponent, JsIsoCanvasControlComponent, JsIsoCanvasInputComponent]
})
export class JsisoModule { }
