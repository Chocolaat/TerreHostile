import { Component, OnInit } from '@angular/core';

@Component({
  template: ''
})
export class JsIsoJsonComponent implements OnInit {

  constructor() { }

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

  load(paths): any {

    function _jsonPromise(path) {
      return new Promise(function (resolve, reject) {
        if (path.startsWith('{')) {
          resolve(JSON.parse(path));
        } else {
          const xmlhttp = new XMLHttpRequest();
          xmlhttp.open('GET', path, true);
          xmlhttp.send();
          xmlhttp.onload = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
              resolve(JSON.parse(xmlhttp.responseText));
            } else {
              reject();
            }
          };
        }
      });
    }

    if (typeof paths !== 'string') {
      const promises = [];
      for (let i = 0; i < paths.length; i++) {
        promises.push(_jsonPromise(paths[i]));
      }
      return Promise.all(promises);
    } else {
      return _jsonPromise(paths);
    }
  }
}
