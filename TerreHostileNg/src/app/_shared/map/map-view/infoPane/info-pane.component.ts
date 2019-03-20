import { MapEditorSelection } from 'src/app/modules/admin/mapEditor/model/mapEditorSelection';
import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import * as MapJsModule from 'src/assets/js/map/map.js';
import { MapService } from '../../services/map.service';


@Component({
    selector: 'app-map-info-pane',
    template: `
    <img src="assets/images/backgrounds/map/info_panel.png" id="infoPanelPicture">
    <div id="infoPanelText">
      <p> Position : ({{beginXCoord}}, {{beginYCoord}}) / Size : {{size}}</p>
   </div>
    `,
    styleUrls: ['./info-pane.component.css']
  })
export class InfoPaneComponent implements OnInit {

  @Input() beginXCoord: number;
  @Input() beginYCoord: number;
  @Input() size: number;

/*   currentXCoord: number;
  currentYCoord: number;
  size: number; */

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
/*
    this.mapService.currentMap.subscribe(map => {
      this.currentXCoord = map.beginXCoord;
      this.currentYCoord = map.beginYCoord;
      this.size = map.xSize;
    });
 */
  }

}
