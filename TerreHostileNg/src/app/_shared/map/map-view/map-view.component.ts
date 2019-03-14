import { Component, OnInit, HostListener } from '@angular/core';
declare function launchMap(map): any;

@Component({
  selector: 'app-map-view',
  template: `

<div id="mapView">
<canvas id="mapViewCanvas"></canvas>
</div>
  `,
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }


  ngOnInit() {

    const map = {
      ground: [
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 2],
        [2, 2, 2, 2, 2, 2, 2, 0, 0, 2],
        [0, 0, 2, 2, 2, 2, 1, 0, 0, 2],
        [0, 0, 2, 2, 2, 2, 2, 2, 1, 2],
        [0, 0, 2, 2, 2, 2, 2, 2, 1, 2],
        [0, 0, 2, 2, 2, 2, 2, 2, 1, 0],
        [0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      height: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      resources: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [
          null,
          null,
          {
            resourceId: 0,
            xCoord: 537,
            yCoord: 532,
            userId: null,
            type: 1,
            quantity: 1
          },
          null,
          {
            resourceId: 0,
            xCoord: 537,
            yCoord: 534,
            userId: null,
            type: 1,
            quantity: 1
          },
          null,
          null,
          null,
          null,
          null
        ],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
      ],
      buildings: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [
          null,
          null,
          null,
          {
            buildingId: 0,
            xCoord: 534,
            yCoord: 533,
            userId: null,
            type: 1,
            health: 0,
            state: 0
          },
          {
            buildingId: 0,
            xCoord: 534,
            yCoord: 534,
            userId: null,
            type: 1,
            health: 0,
            state: 0
          },
          null,
          null,
          null,
          null,
          null
        ],
        [null, null, null, null, null, null, null, null, null, null],
        [
          null,
          null,
          null,
          null,
          null,
          {
            buildingId: 0,
            xCoord: 536,
            yCoord: 535,
            userId: null,
            type: 1,
            health: 0,
            state: 0
          },
          null,
          null,
          null,
          null
        ],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
      ],
      troops: [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          {
            troopId: '08d45166-7b77-4f78-a34e-0ba7e3f1321a',
            xCoord: 533,
            yCoord: 536,
            userId: 0,
            units: [
              {
                unitId: 155,
                troopId: '08d45166-7b77-4f78-a34e-0ba7e3f1321a',
                unitType: 2,
                unitNumber: 1,
                health: 1,
                experience: 0
              }
            ]
          },
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          {
            troopId: '0869de72-1302-4b18-a540-b71e1854ed54',
            xCoord: 534,
            yCoord: 533,
            userId: null,
            units: [
              {
                unitId: 115,
                troopId: '0869de72-1302-4b18-a540-b71e1854ed54',
                unitType: 1,
                unitNumber: 1,
                health: 1,
                experience: 0
              }
            ]
          },
          null,
          null,
          {
            troopId: '957b0785-f67a-49a1-bfad-9e04ee89b6c4',
            xCoord: 534,
            yCoord: 536,
            userId: 0,
            units: [
              {
                unitId: 156,
                troopId: '957b0785-f67a-49a1-bfad-9e04ee89b6c4',
                unitType: 2,
                unitNumber: 1,
                health: 1,
                experience: 0
              }
            ]
          },
          null,
          null,
          null
        ],
        [
          null,
          {
            troopId: '2a666ccd-c0b5-49de-86c6-5c9efdba19ad',
            xCoord: 535,
            yCoord: 531,
            userId: null,
            units: [
              {
                unitId: 116,
                troopId: '2a666ccd-c0b5-49de-86c6-5c9efdba19ad',
                unitType: 1,
                unitNumber: 1,
                health: 1,
                experience: 0
              }
            ]
          },
          null,
          {
            troopId: '367fac0c-bf25-4b33-9504-c0078d59c0ec',
            xCoord: 535,
            yCoord: 533,
            userId: null,
            units: [
              {
                unitId: 117,
                troopId: '367fac0c-bf25-4b33-9504-c0078d59c0ec',
                unitType: 2,
                unitNumber: 1,
                health: 1,
                experience: 0
              }
            ]
          },
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          {
            troopId: '89ce9804-5355-4262-b1be-a29ea189c322',
            xCoord: 536,
            yCoord: 533,
            userId: null,
            units: [
              {
                unitId: 118,
                troopId: '89ce9804-5355-4262-b1be-a29ea189c322',
                unitType: 1,
                unitNumber: 1,
                health: 1,
                experience: 0
              }
            ]
          },
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
      ],
      beginXCoord: 530,
      beginYCoord: 530,
      xSize: 10,
      ySize: 10,
      currentXCoord: 530,
      currentYCoord: 530
    };

    launchMap(map);
  }

}
