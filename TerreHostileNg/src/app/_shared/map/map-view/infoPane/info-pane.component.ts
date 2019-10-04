import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { MapService } from '../../services/map.service';
import { UserService } from 'src/app/_shared/user/user.service';
import { User } from 'src/app/_shared/user/user';


@Component({
    selector: 'app-map-info-pane',
    template: `
    <img src="assets/img/game/pannels/info_panel.png" id="infoPanelPicture">
    <div id="infoPanelText">
      <p> Position : ({{beginXCoord}}, {{beginYCoord}}) / Size : {{size}}</p>
      <p> UserName : {{user?.name}} / UserId : {{user?.userId}}</p>
   </div>
    `,
    styleUrls: ['./info-pane.component.css']
  })
export class InfoPaneComponent implements OnInit {

  @Input() beginXCoord: number;
  @Input() beginYCoord: number;
  @Input() size: number;

  user: any;


  constructor(private mapService: MapService, private userService: UserService) {
  }

  ngOnInit() {
  }

}
