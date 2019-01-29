
import { JsIsoParticlesParticleComponent } from './particles/particlesParticle.component';
import { JsIsoParticlesEmitterComponent } from './particles/particlesEmitter.component';
import { JsIsoParticlesEffectLoaderComponent } from './particles/particlesEffectLoader.component';
import { JsIsoParticlesEffectComponent } from './particles/particlersEffect.component';
import { JsIsoTileFieldComponent } from './tile/tileField.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsIsoJsonComponent } from './json/json.component';
import { JsIsoImgComponent } from './img/img.component';
import { JsIsoCanvasControlComponent } from './canvas/canvasControl.component';
import { JsIsoCanvasInputComponent } from './canvas/canvasInput.component';
import { JsIsoUtilsComponent } from './jsIsoUtils.component';

@NgModule({
  declarations: [JsIsoJsonComponent, JsIsoImgComponent, JsIsoCanvasControlComponent,
    JsIsoCanvasInputComponent, JsIsoTileFieldComponent, JsIsoParticlesEffectComponent,
    JsIsoParticlesEffectLoaderComponent, JsIsoParticlesEmitterComponent,
    JsIsoParticlesParticleComponent, JsIsoUtilsComponent],
  imports: [
    CommonModule
  ],
  exports: [JsIsoJsonComponent, JsIsoImgComponent, JsIsoCanvasControlComponent,
    JsIsoCanvasInputComponent, JsIsoTileFieldComponent, JsIsoParticlesEffectComponent,
    JsIsoParticlesEffectLoaderComponent, JsIsoParticlesEmitterComponent,
    JsIsoParticlesParticleComponent, JsIsoUtilsComponent]
})
export class JsisoModule { }
