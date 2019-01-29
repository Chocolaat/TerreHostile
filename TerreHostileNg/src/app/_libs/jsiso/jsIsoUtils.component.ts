import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoUtilsComponent implements OnInit {

  arr: [];

  constructor() { }

  ngOnInit() {
  }

/*
Copyright (c) 2013 Iain Hamilton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

- Author : Iain M Hamilton - <iain@beakable.com> - http://www.beakable.com

  Twitter: @beakable

*/

/** jsiso/utils simple common functions used throughout JsIso **/


    roundTo(num, dec) {
      return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
    }

    rand (l: number, u: number) {
      return Math.floor((Math.random() * (u - l + 1)) + l);
    }

    remove (from, to) {
      const rest = this.arr.slice((to || from) + 1 || this.arr.length);
      this.arr.length = from < 0 ? this.arr.length + from : from;
      return this.arr.push.apply(this, rest);
    }

    range(from, to) {
      return {from: from, to: to};
    }

    flipTwoDArray(arrayLayout, direction) {
      const tempArray = [];
      let tempLine = [];
      if (direction === 'horizontal') {
        for (let i = arrayLayout.length - 1 ; i >= 0; i--) {
           for (let j = 0; j < arrayLayout[i].length; j++) {
            tempLine.push(arrayLayout[i][j]);
          }
          tempArray.push(tempLine);
          tempLine = [];
        }
        return tempArray;
      } else if (direction === 'vertical') {
        for (let i = 0; i < arrayLayout.length; i++) {
           for (let j = arrayLayout[i].length - 1; j >= 0; j--) {
            tempLine.push(arrayLayout[i][j]);
          }
          tempArray.push(tempLine);
          tempLine = [];
        }
        return tempArray;
      }
    }

    rotateTwoDArray(arrayLayout: any, direction: any) {
      const tempArray = [],
          tempLine = [];
      const w = arrayLayout.length;
      const h = (arrayLayout[0] ? arrayLayout[0].length : 0);
      if (direction === 'left') {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            if (!tempArray[i]) {
              tempArray[i] = [];
            }
            tempArray[i][j] = arrayLayout[w - j - 1][i];
          }
        }
        return tempArray;
      } else if (direction === 'right') {
        for (let i = 0; i < h; i++) {
          for (let j = 0; j < w; j++) {
            if (!tempArray[i]) {
              tempArray[i] = [];
            }
            tempArray[i][j] = arrayLayout[j][h - i - 1];
          }
        }
        return tempArray;
      }
    }

     lineSplit(ctx, text, width) {
      const textLines = [];
      let elements = '';
      let line = '';
      let tempLine = '';
      let lastword = null;
      if (ctx.measureText(text).width > width) {
        elements = text.split(' ');
        for (let i = 0; i < elements.length; i++) {
          tempLine += elements[i] + ' ';
          if (ctx.measureText(tempLine).width < width) {
            line += elements[i] + ' ';
            lastword = elements[i];
          } else {
            if (lastword && lastword !== elements[i]) { // Prevent getitng locked in a large word
              i --;
              textLines.push(line);
            } else {
              textLines.push(tempLine);
            }
            line = '';
            tempLine = '';
          }
        }
      } else {
        textLines[0] = text;
      }
      if (line !== '') {
        textLines.push(line);
      }
      return textLines;
    }
}
