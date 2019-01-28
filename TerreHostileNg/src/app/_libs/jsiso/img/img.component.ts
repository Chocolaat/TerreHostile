import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoImgComponent implements OnInit {

  letructor() { }

  ngOnInit() {
  }

  /*
Copyright (c) 2013 - 2015 Iain Hamilton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/


  load(graphics): any {

    /**
   * Breaks up a solid image into smaller images via canvas and returns the individual sprite graphics and individual ones
   * Param {Object} spritesheet contains the spritesheet image
   * and required paramaters for measuring the individual image locations for cropping
   * Return {Promise.<Array>}             Returns seperated spritesheet images in array for using once fulfilled
   */
    function _splitSpriteSheet(spritesheet) {
      return new Promise(function (resolve, reject) {
        let loaded = 0; // Images total the preloader has loaded
        let loading = 0; // Images total the preloader needs to load

        const images = [];
        const ctx = document.createElement('canvas');
        let tileManip;
        const imageFilePathArray = [];
        let spriteID = (spritesheet.firstgid || 0);

        const spritesheetCols = Math.floor(spritesheet.files[spritesheet.dictionary[0]].width / (spritesheet.width));
        const spritesheetRows = Math.floor(spritesheet.files[spritesheet.dictionary[0]].height / (spritesheet.height));
        loading += spritesheetCols * spritesheetRows;
        ctx.width = spritesheet.width;
        ctx.height = spritesheet.height;
        tileManip = ctx.getContext('2d');
        for (let i = 0; i < spritesheetRows; i++) {
          for (let j = 0; j < spritesheetCols; j++) {
            tileManip.drawImage(spritesheet.files[spritesheet.dictionary[0]],
              j * (spritesheet.width + spritesheet.offsetX + spritesheet.spacing) + spritesheet.spacing,
              i * (spritesheet.height + spritesheet.offsetY + spritesheet.spacing) + spritesheet.spacing,
              spritesheet.width + spritesheet.offsetX - spritesheet.spacing,
              spritesheet.height + spritesheet.offsetY - spritesheet.spacing,
              0,
              0,
              spritesheet.width,
              spritesheet.height);
            imageFilePathArray[spriteID] = spriteID;
            images[spriteID] = new Image();
            images[spriteID].src = ctx.toDataURL();
            tileManip.clearRect(0, 0, spritesheet.width, spritesheet.height);
            images[spriteID].onload = function () {
              loaded++;
              if (loaded === loading) {
                resolve({ files: images, dictionary: imageFilePathArray });
              }
            };
            spriteID++;
          }
        }
      });
    }

    /**
     * Takes an individual set of graphics whether a singular image, an array of images, or spritesheet and loads it for using within JsIso
     * param  {Object} graphic a single graphic set with the optional spritesheet paramaters for preloading
     * return {Promite.<Array>}         Contains the loaded images for use
     */
    function _imgPromise(graphic) {
      return new Promise(function (resolve, reject) {

        let loaded = 0; // Images total the preloader has loaded
        let loading = 0; // Images total the preloader needs to load

        const images = [];
        loading += graphic.graphics.length;

        graphic.graphics.map(function (img) {
          let imgName = img;
          if (graphic.removePath === undefined || graphic.removePath === true) {
            imgName = img.split('/').pop();
          }
          images[imgName] = new Image();
          images[imgName].src = img;
          images[imgName].onload = function () {
            loaded++;
            if (loaded === loading && !graphic.spritesheet) {
              resolve({ files: images, dictionary: graphic.graphics });
            } else {
              if (graphic.spritesheet) {
                _splitSpriteSheet({
                  files: images,
                  dictionary: graphic.graphics,
                  width: graphic.spritesheet.width,
                  height: graphic.spritesheet.height,
                  offsetX: (graphic.spritesheet.offsetX || 0),
                  offsetY: (graphic.spritesheet.offsetY || 0),
                  spacing: (graphic.spritesheet.spacing || 0),
                  firstgid: (graphic.spritesheet.firstgid || 0)
                }).then(function (response) {
                  resolve(response);
                });
              }
            }
          };
        });
        if (graphic.removePath === undefined || graphic.removePath === true) {
          for (let i = 0; i < graphic.graphics.length; i++) {
            graphic.graphics[i] = graphic.graphics[i].split('/').pop();
          }
        }
      });
    }

    if (Object.prototype.toString.call(graphics) === '[object Array]') {
      const promises = [];
      for (let i = 0; i < graphics.length; i++) {
        promises.push(_imgPromise(graphics[i]));
      }
      return Promise.all(promises);
    } else {
      return _imgPromise(graphics);
    }

  }


}
