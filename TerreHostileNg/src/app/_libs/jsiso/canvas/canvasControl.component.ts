import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoCanvasControlComponent implements OnInit {


  // Private properties for Control

  canvasElement = null;

  width = null;
  height = null;

  constructor() { }

  ngOnInit() {
  }



  /**
   * Checks if browser supports the canvas context 2d
   * return {Boolean}
   */
  _supported() {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }


  _getRatio() {
    const ctx: any = document.createElement('canvas').getContext('2d'),
      dpr = window.devicePixelRatio || 1,
      bsr = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio || 1;
    return dpr / bsr;
  }


  _create(name, w, h, style, element, usePixelRatio) {
    let pxRatio = 1;
    let canvasType = null;
    if (this._supported()) {
      if (usePixelRatio) {
        pxRatio = this._getRatio();
      }

      this.canvasElement = document.createElement('canvas');
      this.canvasElement.id = name;
      this.canvasElement.tabindex = '1';

      // TODO
      // for (let s in style) {
      //  this.canvasElement.style[s] = style[s];
      // }


      canvasType = '2d';
      this.canvasElement.width = w * pxRatio || window.innerWidth;
      this.canvasElement.height = h * pxRatio || window.innerHeight;
      this.canvasElement.getContext(canvasType).setTransform(pxRatio, 0, 0, pxRatio, 0, 0);
      if (!element) {
        // Append Canvas into document body
        return document.body.appendChild(this.canvasElement).getContext(canvasType);
      } else {
        // Place canvas into passed through body element
        return document.getElementById(element).appendChild(this.canvasElement).getContext(canvasType);
      }
    } else {
      // Create an HTML element displaying that Canvas is not supported :(
      const noCanvas = document.createElement('div');
      noCanvas.style.color = '#FFF';
      noCanvas.style.textAlign = 'center';
      noCanvas.innerHTML = 'Sorry, you need to use a more modern browser.';
      return document.body.appendChild(noCanvas);
    }
  }

  _createSizeNotFixed(name, element) {
    const pxRatio = 1;
    let canvasType = null;
    if (this._supported()) {

      this.canvasElement = document.createElement('canvas');
      this.canvasElement.id = name;
      this.canvasElement.tabindex = '1';

      canvasType = '2d';


      // if high, vew from far
      // if low, view from near
      // canvasElement.getContext(canvasType).setTransform(pxRatio, 0, 0, pxRatio, 0, 0);

      return document.getElementById(element).appendChild(this.canvasElement).getContext(canvasType);

      // if (!element) {
      // Append Canvas into document body
      // 	        return document.body.appendChild(canvasElement).getContext(canvasType);
      // 	      }
      // 	      else {
      // 	        // Place canvas into passed through body element
      // 	        return document.getElementById(element).appendChild(canvasElement).getContext(canvasType);
      // 	      }
    } else {
      // Create an HTML element displaying that Canvas is not supported :(
      const noCanvas = document.createElement('div');
      noCanvas.style.color = '#FFF';
      noCanvas.style.textAlign = 'center';
      noCanvas.innerHTML = 'Sorry, you need to use a more modern browser.';
      return document.body.appendChild(noCanvas);
    }
  }

    _style(setting, value) {
      this.canvasElement.style[setting] = value;
}

/**
* Fullscreens the Canvas object
*/
_fullScreen() {
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.overflow = 'hidden';
  this.canvasElement.style.width = window.innerWidth + 'px';
  this.canvasElement.style.height = window.innerHeight + 'px';
  this.canvasElement.height = window.innerHeight;
  this.canvasElement.width = window.innerWidth;
  this.canvasElement.style.position = 'absolute';
  this.canvasElement.style.zIndex = 100;

  window.onresize = (e) => {
    this._update(0, 0);
  };

  window.top.scrollTo(0, 1);
}


/**
* Update the Canvas object dimensions
* param {Number} width
* param {Number} height
*/
_update(w, h) {
  this.canvasElement.width = w || window.innerWidth;
  this.canvasElement.height = h || window.innerHeight;
}


/**
* Return the created HTML Canvas element when it is called directly
* return {HTML} Canvas element
*/
canvas() {
  return this.canvasElement;
}


// ----
// -- Public properties for Control
// ----
// canvas.createSizeNotFixed = _createSizeNotFixed;
// canvas.create = _create;
// canvas.fullScreen = _fullScreen;
// canvas.update = _update;
// canvas.style = _style;


}
