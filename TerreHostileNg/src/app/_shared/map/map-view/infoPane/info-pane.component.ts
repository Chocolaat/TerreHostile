import { MapEditorSelection } from 'src/app/modules/admin/mapEditor/model/mapEditorSelection';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { MapService } from '../../services/map.service';


@Component({
    selector: 'app-map-info-pane',
    template: `
    <p>Yolo = {{message}}</p>
    <img src="assets/images/backgrounds/map/info_panel.png" id="infoPanelPicture">
    <div id="infoPanelText">
      <p> Position : ({{currentXCoord}}, {{currentYCoord}}) / Size : {{size}}</p>
   </div>
    `,
    styleUrls: ['./info-pane.component.css']
  })
export class InfoPaneComponent implements OnInit {

  currentXCoord: number;
  currentYCoord: number;
  size: number;

  message: string;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {

    this.mapService.currentMessage.subscribe(message => this.message = message);
    this.mapService.currentMap.subscribe(map => {
      this.currentXCoord = map.currentXCoord;
      this.currentYCoord = map.currentYCoord;
      this.size = map.size;
    });

/*     this.mapService.getMapByXYAndSize(500, 500, 30).subscribe(
      () => {
       this.currentXCoord = MapJsModule.map.currentXCoord;
       this.currentYCoord = MapJsModule.map.currentYCoord;
       this.size = MapJsModule.map.xSize;
      }); */

  }

}
