export class MapView {
    beginXCoord: number;
    beginYCoord: number;
    xSize: number;
    ySize: number;
    buildings: Object;
    ground: Object;
    height: Object;
    resources: Object;
    troops: Object;

    constructor() {
        this.beginXCoord = 0;
        this.beginYCoord = 0;
        this.xSize = 0;
        this.ySize = 0;
        this.buildings = {};
        this.ground = {};
        this.height = {};
        this.resources = {};
        this.troops = {};
    }
}

