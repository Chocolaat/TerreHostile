import { WindowRef } from './../../../_core/window.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoCanvasInputComponent implements OnInit {

  @Input() doc: any;
  @Input() canvas: any;

  ngOnInit() {
  }


  constructor(private window: WindowRef) {

    // Private properties for Input

    /**
    * Used for getting keyboard interaction keycodes
    * param {Event} Event
    * param {Function} Callback function
    * param {Boolean} If the key is down or up
    * return {Function} callback({Number} keycode, {Boolean} pressed)
    */


  }

  _keyboardInput(e: any, callback: any, pressed: any) {
    // let keyCode;
    // if (e === null) {
    // keyCode = window.e.keyCode;
    // } else {
    // keyCode = e.keyCode;
    // }
    // callback(keyCode, pressed, e);
  }
  /**
  * Used for getting touch screen coordinates
  * param {Event} Event
  * param {Function} Callback function
  * param {Boolean} If the screen is being touched
  * return {Function} callback({Object} X & Y touch coordinates, {Boolean} pressed)
  */
  _mobileInput(e, callback, pressed) {
    const coords = { x: 0, y: 0 };
    if (pressed) {
      coords.x = e.touches[0].pageX - this.canvas.offsetLeft;
      coords.y = e.touches[0].pageY - this.canvas.offsetTop;
    }
    callback(coords, pressed);
  }
  /**
  * Used for getting mouse click coordinates
  * param {Event} Event
  * param {Function} Callback function
  * return {Function} callback({Object} X & Y mouse coordinates)
  */
  _mouseInput(e, callback) {
    const coords = { x: 0, y: 0 };
    coords.x = e.pageX - this.canvas.offsetLeft;
    coords.y = e.pageY - this.canvas.offsetTop;
    callback(coords);
  }
  /**
  * Performs the callback function when screen orientation change is detected
  * param {Function} Callback function
  * return {Function} callback()
  */
  _orientationChange(callback: any) {
    // window.addEventListener("orientationchange", function() {
    //   callback();
    // }, false);
  }

  /**
   * Public method for adding keyboard input
   * param {Function} Callback function
   */
  keyboard(callback) {
    // Callback returns 2 paramaters:
    // -- Pressed keycode
    // -- True if button is down / False if button is up


    this.doc.onkeydown = function (event) {
      this._keyboardInput(event, callback, true);
    };
    this.doc.onkeyup = function (event) {
      this._keyboardInput(event, callback, false);
    };
  }


  /**
  * Public method for adding orientation detection
  * param {Function} Callback function
  */
  orientationChange(callback) {
    // Callback returns if orientation of screen is changed
    this._orientationChange(callback);
  }


  /**
  * Public method for adding mobile touch detection
  * param {Function} Callback function
  */
  mobile(callback) {
    let touchendCoords = {};
    // Callback returns when screen is touched and when screen touch ends
    this.canvas.addEventListener('touchstart', function (event) {
      event.preventDefault();
      this._mobileInput(event, function (coords, pressed) {
        touchendCoords = coords;
        callback(coords, pressed);
      }, true);
    }, false);
    this.canvas.addEventListener('touchend', function (event) {
      event.preventDefault();
      callback(touchendCoords, false);
    });
  }


  /**
  * Public method for adding mouse click detection
  * param {Function} Callback function
  */
  mouse_action(callback) {
    // Callback returns on mouse down
    this.canvas.addEventListener('mousedown', function (event) {
      event.preventDefault();
      this._mouseInput(event, callback);
    }, false);
  }


  /**
  * Public method for adding mouse move detection
  * param {Function} Callback function
  */
  mouse_move(callback) {
    // Callback returns when mouse is moved
    this.canvas.addEventListener('mousemove', function (event) {
      event.preventDefault();
      this._mouseInput(event, callback);
    }, false);
  }


  /**
  * Public method for adding mouse up detection
  * param {Function} Callback function
  */
  mouse_up(callback) {
    // Callback returns when mouse is moved
    this.canvas.addEventListener('mouseup', function (event) {
      event.preventDefault();
      this._mouseInput(event, callback);
    }, false);
  }


  /**
  * Public method for adding eventListener
  * param {Function} Callback function
  */
  addListener(eventName, callback) {
    // Callback returns when mouse is moved
    this.canvas.addEventListener(eventName, callback, false);
  }


  /**
  * Public method for removing eventListener
  * param {Function} Callback function
  */
  removeListener(eventName, callback) {
    // Callback returns when mouse is moved
    this.canvas.removeEventListener(eventName, callback, false);
  }


}
