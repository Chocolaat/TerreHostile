export class MapView {
    beginXCoord: number;
    beginYCoord: number;
    size: number;
    buildings: Object;
    ground: Object;
    height: Object;
    resources: Object;
    troops: Object;

    constructor() {
        this.beginXCoord = 0;
        this.beginYCoord = 0;
        this.size = 0;
        this.buildings = {};
        this.ground = {};
        this.height = {};
        this.resources = {};
        this.troops = {};
    }
}

