import { Component, OnInit, HostListener } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-map-view',
  template: `

<div id='mapView'>
<app-map-info-pane></app-map-info-pane>
<canvas id='mapViewCanvas' tabindex='0' appInputEventDirective (keyboardEvent)='keyboardEvent($event)'></canvas>
</div>
  `,
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor(private mapService: MapService) {

  }

  ngOnInit() {
    this.mapService.getMapByXYAndSize(500, 500, 30).subscribe(
      (map) => {
        MapJsModule.launchGame(map);
      });
  }

  keyboardEvent(event: KeyboardEvent) {

    switch (event.key) {
      case '6':
      case 'ArrowRight':

        MapJsModule.mapLayers.map(function (layer) {
          if (event.ctrlKey) {
            layer.rotate('right');
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('left');
              layer.move('down');
            }

            // TODOTODO    if (layer.getTitle() === 'Ground') {updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord + 10)};

          }
        });
        //    startY ++;
        break;
      case '8':
      case 'ArrowUp':
        MapJsModule.mapLayers.map(function (layer) {
          if (event.ctrlKey) {
            layer.setZoom('in');
            // TODOTODO  centerView(layer);
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('down');
              layer.move('up');
            }
            // TODOTODO   if (layer.getTitle() === 'Ground') {updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord -10)};
          }

        });
        //    startX --;
        break;
      // fleche bas ou numpad 2
      case '2':
      case 'ArrowDown':
        MapJsModule.mapLayers.map(function (layer) {
          if (event.ctrlKey) {
            layer.setZoom('out');
            // TODOTODO    centerView(layer);
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('left');
              layer.move('right');
            }
            // TODOTODO     if (layer.getTitle() === 'Ground') { updateCurrentCenterXY(map.currentXCoord +10, map.currentYCoord + 10)};
          }
        });
        //     startX ++;
        break;
      // fleche gauche ou numpad 4
      case '4':
      case 'ArrowLeft':
        MapJsModule.mapLayers.map(function (layer) {
          if (event.ctrlKey) {
            layer.rotate('left');
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('right');
              layer.move('up');
            }
            // TODOTODO          if (layer.getTitle() === 'Ground') { updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord - 10)};
          }

        });
        // 		                startY --;
        break;
      // numpad 1 (bas gauche)
      case '1':
        MapJsModule.mapLayers.map(function (layer) {
          for (let i = 0; i < 5; i++) {
            layer.move('right');
            layer.move('up');
            layer.move('left');
            layer.move('right');
          }
          // TODOTODO        if (layer.getTitle() === 'Ground') {updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord)};
        });
        break;
      // numpad 3 bas droite
      case '3':
        MapJsModule.mapLayers.map(function (layer) {
          for (let i = 0; i < 5; i++) {
            layer.move('left');
            layer.move('right');
            layer.move('left');
            layer.move('down');
          }
          // TODOTODO         if (layer.getTitle() === 'Ground') {updateCurrentCenterXY(map.currentXCoord, map.currentYCoord  + 10)};
        });
        break;
      // numpad 7 haut gauche
      case '7':
        MapJsModule.mapLayers.map(function (layer) {
          for (let i = 0; i < 5; i++) {
            layer.move('down');
            layer.move('up');
            layer.move('right');
            layer.move('up');
          }
          // TODOTODO        if (layer.getTitle() === 'Ground') {updateCurrentCenterXY(map.currentXCoord, map.currentYCoord - 10)};
        });
        break;
      // numpad 9 haut droite
      case '9':
        MapJsModule.mapLayers.map(function (layer) {
          for (let i = 0; i < 5; i++) {
            layer.move('down');
            layer.move('up');
            layer.move('left');
            layer.move('down');
          }
          // TODOTODO         if (layer.getTitle() === 'Ground') {updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord)};
        });
        break;
      case '+':
        MapJsModule.mapLayers.map(function (layer) {
          layer.setZoom('in');
          // TODOTODO       centerView(layer);

        });
        // 			                startY --;
        break;
      case '-':
        MapJsModule.mapLayers.map(function (layer) {
          layer.setZoom('out');
          // TODOTODO           centerView(layer);

        });
        // 			                startY --;
        break;
    }
  }

}
