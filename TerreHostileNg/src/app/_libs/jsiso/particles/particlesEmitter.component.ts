import { JsIsoParticlesParticleComponent } from './particlesParticle.component';
import { JsIsoUtilsComponent } from './../jsIsoUtils.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoParticlesEmitterComponent implements OnInit {

  @Input() ctx: any;
  @Input() x: any;
  @Input() y: any;
  @Input() pcount: any;
  @Input() loop: any;
  @Input() xboundRange: any;
  @Input() yboundRange: any;

  utils = new JsIsoUtilsComponent();
  particle = new JsIsoParticlesParticleComponent();

  constructor() {

    this.xRange = this.utils.range(0, 0);
    this.yRange = this.utils.range(0, 0);
    this.drawdelayRange = this.utils.range(-1, -1);
    this.lifeRange = this.utils.range(1, 1);
    this.fadeRange = this.utils.range(1, 1);
    this.redRange = this.utils.range(255, 255);
    this.greenRange = this.utils.range(0, 0);
    this.blueRange = this.utils.range(0, 0);
    this.xiRange = this.utils.range(10, 10);
    this.yiRange = this.utils.range(10, 10);
    this.xgRange = this.utils.range(0, 0);
    this.ygRange = this.utils.range(0, 0);
    this.slowdownRange = this.utils.range(1, 1);
    this.radiusRange = this.utils.range(10, 10);

    this.particles = [];
    this.xshiftOffset = 0;
    this.yshiftOffset = 0;
    this.loaded = false;
    this.xOffset = 0;
    this.yOffset = 0;
    this.pause = false;
    this.composite = 'lighter';
  }
  particles;
  xshiftOffset;
  yshiftOffset;
  loaded;
  xOffset;
  yOffset;
  pause;
  composite;
  xRange;
  yRange;
  drawdelayRange;
  lifeRange; // 0.000 - 1.000
  fadeRange; // 0.000 - 1.000
  redRange; // 0 - 255
  greenRange; // 0 - 255
  blueRange; // 0 - 255
  xiRange;
  yiRange;
  xgRange;
  ygRange;
  slowdownRange; // 0.000
  radiusRange;
  scale: 1;

   Load(x, y) {
    this.particles = [];
    for (let i = 0; i < this.pcount; i++) {
      this.particles.push(this.CreateParticle(false, false, x, y));
    }
    this.loaded = true;
  }

  ShiftTo (x, y) {
    this.ShiftBy(x - this.x, y - this.y);
  }

  Scale (scale) {
    this.scale = scale;
  }

   ShiftBy (xoffset, yoffset) {
    this.xshiftOffset += xoffset;
    this.yshiftOffset += yoffset;
    this.x += xoffset;
    this.y += yoffset;
  }

  Draw (x, y) {
    if (x) { this.x = x; }
    if (y) { this.y = y; }
    if (this.loaded && !this.pause) {
      this.ctx.save();

      this.ctx.globalCompositeOperation = this.composite;

      for (let i = 0, tmpsize = this.particles.length; i < tmpsize; i++) {

        this.particles[i].x += this.xshiftOffset;

        this.particles[i].y += this.yshiftOffset;

        this.particles[i].Draw(this.ctx);

        if (this.loop && this.loop !== 'false' && !this.particles[i].active) {

          this.particles[i] = this.CreateParticle(this.particles[i], true, undefined, undefined);

        }

      }

      this.ctx.restore();

      this.xshiftOffset = 0;
      this.yshiftOffset = 0;

    }

  }

  CreateParticle(reload, draw, x , y) {

    let p;
    if (reload) {
      p = reload;
    } else {
      p = new JsIsoParticlesParticleComponent();
    }
    if (draw || this.loop === false || this.loop === 'false') {
      p.active = true;
      if (x) {
        p.x = x + this.utils.rand(this.xRange.from * this.scale, this.xRange.to * this.scale) + this.xOffset * this.scale;
      } else {
        p.x = this.x + this.utils.rand(this.xRange.from * this.scale, this.xRange.to * this.scale) + this.xOffset * this.scale;
      }
      if (y) {
        p.y = y + this.utils.rand(this.yRange.from * this.scale, this.yRange.to * this.scale) + this.yOffset * this.scale;
      } else {
        p.y = this.y + this.utils.rand(this.yRange.from * this.scale, this.yRange.to * this.scale) + this.yOffset * this.scale;
      }

      p.drawdelay = 0;

      p.life = this.utils.rand(this.lifeRange.from * 1000, this.lifeRange.to * 1000) / 1000;

      p.fade = this.utils.rand(this.fadeRange.from * 1000, this.fadeRange.to * 1000) / 1000;

      p.r = this.utils.rand(this.redRange.from, this.redRange.to);

      p.b = this.utils.rand(this.blueRange.from, this.blueRange.to);

      p.g = this.utils.rand(this.greenRange.from, this.greenRange.to);

      p.xi = this.utils.rand(this.xiRange.from * this.scale, this.xiRange.to * this.scale);

      p.yi = this.utils.rand(this.yiRange.from * this.scale, this.yiRange.to * this.scale);

      p.xg = this.utils.rand(this.xgRange.from * this.scale, this.xgRange.to * this.scale);

      p.yg = this.utils.rand(this.ygRange.from * this.scale, this.ygRange.to * this.scale);

      p.slowdown = this.utils.rand(this.slowdownRange.from * 1000, this.slowdownRange.to * 1000) / 1000;

      p.radius = this.utils.rand(this.radiusRange.from * this.scale, this.radiusRange.to * this.scale);

      p.minxb = this.xboundRange.from * this.scale;

      p.maxxb = this.xboundRange.to * this.scale;

      p.minyb = this.yboundRange.from * this.scale;

      p.maxyb = this.yboundRange.to * this.scale;
    }
    return p;
  }


  ngOnInit() {

  }

}
