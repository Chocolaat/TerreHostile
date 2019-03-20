export class MapView {
    beginXCoord: number;
    beginYCoord: number;
    xSize: number;
    ySize: number;
    buildings: number[][];
    ground: Object;
    height: Object;
    resources: Object;
    troops: Object;

    constructor() {
        this.beginXCoord = 0;
        this.beginYCoord = 0;
        this.xSize = 0;
        this.ySize = 0;
        this.buildings =  [[0]];
        this.ground =  [[0]];
        this.height =  [[0]];
        this.resources =  [[0]];
        this.troops =  [[0]];
    }
}

