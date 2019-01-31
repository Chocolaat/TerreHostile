import { JsIsoParticlesEmitterComponent } from './particlesEmitter.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoParticlesEffectComponent implements OnInit {

  @Input() emitter: JsIsoParticlesEmitterComponent;

  emitters = [ this.emitter ];
  pause = false;

  constructor() { }

  ngOnInit() {
  }

     AddEmitter (emitter) {
      this.emitters.push(emitter);
    }

   Draw (x, y, scale) {
      if (!this.pause) {
        for (let i = 0, tmpTotal = this.emitters.length; i < tmpTotal; i++) {
          if (!this.emitters[i].loaded) {
            this.emitters[i].x = x;
            this.emitters[i].y = y;
            this.emitters[i].Load(undefined, undefined);
          }
          if (scale) {
            this.emitters[i].Scale(scale);
          }
          this.emitters[i].ShiftTo(x, y);
          this.emitters[i].Draw(undefined, undefined);
        }
      }
    }
}
