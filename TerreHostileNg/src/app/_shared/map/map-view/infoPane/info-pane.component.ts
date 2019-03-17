import { MapEditorSelection } from 'src/app/modules/admin/mapEditor/model/mapEditorSelection';
import { Component } from '@angular/core';

@Component({
    selector: 'app-map-info-pane',
    template: `
  <label>X = </label>
  <label>Y = </label>
  <label>Size = </label>
    `,
    styleUrls: ['./info-pane.component.css']
  })
export class InfoPaneComponent {

    constructor() {

    }
}
