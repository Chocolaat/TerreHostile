import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
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


  constructor(private mapService: MapService) {
  }

  ngOnInit() {
  }

}
