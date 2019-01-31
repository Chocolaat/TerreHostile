import { JsIsoParticlesEffectComponent } from './particlersEffect.component';
import { JsIsoUtilsComponent } from './../jsIsoUtils.component';
import { Component, OnInit } from '@angular/core';
import { JsIsoParticlesEmitterComponent } from './particlesEmitter.component';

@Component({
  template: ''
})
export class JsIsoParticlesEffectLoaderComponent implements OnInit {

  utils = new JsIsoUtilsComponent();
  effect;

  constructor() { }

  ngOnInit() {
  }

  _get(name, ctx, xBoundRange, yBoundRange) {

    switch (String(name)) {

      case 'fire':

        const fire = new JsIsoParticlesEmitterComponent();
        // TODO pass parameters : ctx, 0, 0, 20, true, xBoundRange, yBoundRange

        fire.xRange = this.utils.range(-22, 18);

        fire.yRange = this.utils.range(0, 0);

        fire.lifeRange = this.utils.range(0.8, 1);

        fire.fadeRange = this.utils.range(0.02, 0.08);

        fire.redRange = this.utils.range(175, 255);

        fire.greenRange = this.utils.range(0, 150);

        fire.blueRange = this.utils.range(0, 0);

        fire.xiRange = this.utils.range(-10, 10);

        fire.yiRange = this.utils.range(0, 0);

        fire.xgRange = this.utils.range(-10, 10);

        fire.ygRange = this.utils.range(10, 10);

        fire.slowdownRange = this.utils.range(0.5, 1);

        fire.radiusRange = this.utils.range(20, 30);

        fire.composite = 'lighter';

        fire.xOffset = 43;

        fire.yOffset = 30;

        this.effect = new JsIsoParticlesEffectComponent();
        // TODO pass parameter : fire

      break;

      case 'well':

        const well = new JsIsoParticlesEmitterComponent();
        // TODO pass parameters : ctx, 0, 0, 20, true, xBoundRange, yBoundRange

        well.xRange = this.utils.range(-22, 18);

        well.yRange = this.utils.range(0, 0);

        well.lifeRange = this.utils.range(0.8, 1);

        well.fadeRange = this.utils.range(0.02, 0.08);

        well.redRange = this.utils.range(10, 20);

        well.greenRange = this.utils.range(10, 30);

        well.blueRange = this.utils.range(120, 120);

        well.xiRange = this.utils.range(-10, 10);

        well.yiRange = this.utils.range(0, 0);

        well.xgRange = this.utils.range(-4, 4);

        well.ygRange = this.utils.range(-10, -10);

        well.slowdownRange = this.utils.range(0.5, 1);

        well.radiusRange = this.utils.range(3, 5);

        well.composite = 'lighter';

        well.xOffset = 46;

        well.yOffset = 54;

        const wellB = new JsIsoParticlesEmitterComponent();
        // TODO pass parameters : ctx, 0, 0, 20, true, xBoundRange, yBoundRange

        wellB.xRange = this.utils.range(-22, 18);

        wellB.yRange = this.utils.range(0, 0);

        wellB.lifeRange = this.utils.range(0.8, 1);

        wellB.fadeRange = this.utils.range(0.02, 0.08);

        wellB.redRange = this.utils.range(10, 20);

        wellB.greenRange = this.utils.range(10, 30);

        wellB.blueRange = this.utils.range(120, 120);

        wellB.xiRange = this.utils.range(-10, 10);

        wellB.yiRange = this.utils.range(0, 0);

        wellB.xgRange = this.utils.range(-4, 4);

        wellB.ygRange = this.utils.range(- 10, -10);

        wellB.slowdownRange = this.utils.range(0.5, 1);

        wellB.radiusRange = this.utils.range(3, 5);

        wellB.composite = 'lighter';

        wellB.xOffset = 31;

        wellB.yOffset = 99;

        this.effect = new JsIsoParticlesEffectComponent();
        // TODO pass parameter : well

        this.effect.AddEmitter(wellB);

      break;

      case 'wcandle':

        const wallcandle = new JsIsoParticlesEmitterComponent();
        // TODO pass parameters : ctx, 0, 0, 20, true, xBoundRange, yBoundRange

        wallcandle.xRange = this.utils.range(0, 0);

        wallcandle.yRange = this.utils.range(1, 1);

        wallcandle.lifeRange = this.utils.range(0.8, 1);

        wallcandle.fadeRange = this.utils.range(0.02, 0.08);

        wallcandle.redRange = this.utils.range(175, 255);

        wallcandle.greenRange = this.utils.range(0, 150);

        wallcandle.blueRange = this.utils.range(0, 0);

        wallcandle.xiRange = this.utils.range(0, 0);

        wallcandle.yiRange = this.utils.range(0, 0);

        wallcandle.xgRange = this.utils.range(0, 0);

        wallcandle.ygRange = this.utils.range(1, 1);

        wallcandle.slowdownRange = this.utils.range(0.5, 1);

        wallcandle.radiusRange = this.utils.range(1, 7);

        wallcandle.composite = 'lighter';

        wallcandle.xOffset = 45;

        wallcandle.yOffset = 55;

        this.effect = new JsIsoParticlesEffectComponent();
        // TODO pass parameter : wallcandle

      break;

      case 'candleFire':

        const candles = [];

        const candlePositions = [[44, 17], [60, 12], [77, 29]];

        for (let i = 0; i < 3; i++) {

          const candle = new JsIsoParticlesEmitterComponent();
          // TODO pass parameters : ctx, 0, 0, 20, true, xBoundRange, yBoundRange

          candle.xRange = this.utils.range(0, 0);

          candle.yRange = this.utils.range(1, 1);

          candle.lifeRange = this.utils.range(0.8, 1);

          candle.fadeRange = this.utils.range(0.02, 0.08);

          candle.redRange = this.utils.range(175, 255);

          candle.greenRange = this.utils.range(0, 150);

          candle.blueRange = this.utils.range(0, 0);

          candle.xiRange = this.utils.range(0, 0);

          candle.yiRange = this.utils.range(0, 0);

          candle.xgRange = this.utils.range(0, 0);

          candle.ygRange = this.utils.range(1, 1);

          candle.slowdownRange = this.utils.range(0.5, 1);

          candle.radiusRange = this.utils.range(1, 7);

          candle.composite = 'lighter';

          candle.xOffset = candlePositions[i][0];

          candle.yOffset = candlePositions[i][1];

          candles.push(candle);

        }

        // effect = new Effect(candles[0]);
        this.effect = new JsIsoParticlesEffectComponent();
        // TODO pass parameter

        this.effect.AddEmitter(candles[1]);

        this.effect.AddEmitter(candles[2]);

      break;

      case 'rain':

        const rain = new JsIsoParticlesEmitterComponent();
        // TODO pass parameters : ctx, 0, 0, 100, true, xBoundRange, yBoundRange

        rain.xRange = this.utils.range(0, 420);

        rain.yRange = this.utils.range(-100, 10);

        rain.lifeRange = this.utils.range(0.8, 1.4);

        rain.fadeRange = this.utils.range(0.01, 0.08);

        rain.redRange = this.utils.range(0, 150);

        rain.greenRange = this.utils.range(0, 150);

        rain.blueRange = this.utils.range(175, 200);

        rain.xiRange = this.utils.range(0, 420);

        rain.yiRange = this.utils.range(-10, -10);

        rain.xgRange = this.utils.range(0, 50);

        rain.ygRange = this.utils.range(-40, -50);

        rain.slowdownRange = this.utils.range(0.5, 1);

        rain.radiusRange = this.utils.range(7, 10);

        rain.composite = 'lighter';

        // effect = new Effect(rain);
        this.effect = new JsIsoParticlesEffectComponent();
        // TODO PASS parameter effect = new Effect(rain);

      break;

    }
    return this.effect || {};
  }

       getEffect(name, ctx, xBoundRange, yBoundRange) {
        return this._get(name, ctx, xBoundRange, yBoundRange);
      }

    }
