import { MapView } from './../model/mapView';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { MapService } from '../services/map.service';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-map-view',
  template: `

<div id='mapView'>
<app-map-info-pane
[beginXCoord]="this.currentMap.beginXCoord"
[beginYCoord]="this.currentMap.beginYCoord"
[size]="this.currentMap.xSize"
  ></app-map-info-pane>
<canvas id='mapViewCanvas' tabindex='0' appInputEventDirective (keyboardEvent)='keyboardEvent($event)'></canvas>
</div>
  `,
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, OnDestroy {

  currentMap: MapView = new MapView();
  initialized = false;

  subscription: Subscription;

  constructor(private mapService: MapService) {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {

     this.subscription = this.mapService.currentMap.subscribe(map => {
      if (map) {
        this.currentMap = map;
        if (this.initialized) {
          MapJsModule.setMap(map);
        } else {
          MapJsModule.launchGame(map);
        }
      }
    });
    this.mapService.updateMap(500, 500, 50).subscribe();
  }


  updateChunkXYCoords(xOffset: number, yOffset: number) {

    let incOrDecXYChunkCoordsResult: any;
    incOrDecXYChunkCoordsResult = MapJsModule.incOrDecXYChunkCoords(xOffset, yOffset);

     if (incOrDecXYChunkCoordsResult) {
      this.mapService.updateMap(
        incOrDecXYChunkCoordsResult.newX, incOrDecXYChunkCoordsResult.newY, this.currentMap.xSize).subscribe();
    }
  }

  keyboardEvent(event: KeyboardEvent) {


    switch (event.key) {
      case '6':
      case 'ArrowRight':
        MapJsModule.mapLayers.map(function (layer: any) {
          if (event.ctrlKey) {
            layer.rotate('right');
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('left');
              layer.move('down');
            }
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(+10, -10); }
        break;
      case '8':
      case 'ArrowUp':
        MapJsModule.mapLayers.map(function (layer: any) {
          if (event.ctrlKey) {
            layer.setZoom('in');
            // TODOTODO  centerView(layer);
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('down');
              layer.move('up');
            }
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(-10, -10); }
        break;
      case '2':
      case 'ArrowDown':
        MapJsModule.mapLayers.map(function (layer: any) {
          if (event.ctrlKey) {
            layer.setZoom('out');
            // TODOTODO    centerView(layer);
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('left');
              layer.move('right');
            }
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(+10, +10); }
        break;
      case '4':
      case 'ArrowLeft':
        MapJsModule.mapLayers.map(function (layer: any) {
          if (event.ctrlKey) {
            layer.rotate('left');
          } else {
            for (let i = 0; i < 10; i++) {
              layer.move('right');
              layer.move('up');
            }
          }

        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(-10, +10); }
        break;
      case '1':
        MapJsModule.mapLayers.map(function (layer: any) {
          for (let i = 0; i < 5; i++) {
            layer.move('right');
            layer.move('up');
            layer.move('left');
            layer.move('right');
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(0, +10); }
        break;
      case '3':
        MapJsModule.mapLayers.map(function (layer: any) {
          for (let i = 0; i < 5; i++) {
            layer.move('left');
            layer.move('right');
            layer.move('left');
            layer.move('down');
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(+10, 0); }
        break;
      case '7':
        MapJsModule.mapLayers.map(function (layer: any) {
          for (let i = 0; i < 5; i++) {
            layer.move('down');
            layer.move('up');
            layer.move('right');
            layer.move('up');
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(-10, 0); }
        break;
      case '9':
        MapJsModule.mapLayers.map(function (layer: any) {
          for (let i = 0; i < 5; i++) {
            layer.move('down');
            layer.move('up');
            layer.move('left');
            layer.move('down');
          }
        });
        if (!event.ctrlKey) { this.updateChunkXYCoords(0, -10); }
        break;
      case '+':
        MapJsModule.mapLayers.map(function (layer: any) {
          layer.setZoom('in');
          // TODOTODO       centerView(layer);
        });
        break;
      case '-':
        MapJsModule.mapLayers.map(function (layer: any) {
          layer.setZoom('out');
          // TODOTODO           centerView(layer);
        });
        break;
    }
  }

}
