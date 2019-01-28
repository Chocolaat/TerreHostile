import { Component, OnInit } from '@angular/core';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-map-view',
  template: `
  <div id="mapView">MapView</div>
  `,
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  initMap() {

    // -- FPS --------------------------------
    // window.requestAnimFrame = (function () {
    //   return window.requestAnimationFrame
    //     || window.webkitRequestAnimationFrame
    //     || window.mozRequestAnimationFrame
    //     || window.oRequestAnimationFrame
    //     || window.msRequestAnimationFrame
    //     || function (callback, element) {
    //       window.setTimeout(callback, 1000 / 60);
    //     };
    // })();

    // Global variables used to display and update map
    const mapLayers = [];
    const sizeMapToLoad = 70;
    const moveCountReloadTrigger = 3;

    const mapStr =  '{"ground":[[0,0,0,3,3,0,0,0,0,0],[2,2,2,2,2,2,2,0,0,0],[2,2,2,2,2,2,2,0,0,0],[2,2,2,2,2,2,2,0,0,0],[0,0,2,2,2,2,1,0,0,0],[0,0,2,2,2,2,2,2,1,0],[0,0,2,2,2,2,2,2,1,0],[0,0,2,2,2,2,2,2,1,0],[0,2,0,2,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],"height":[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],"resources":[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,{"resourceId":0,"xCoord":537,"yCoord":532,"userId":null,"type":1,"quantity":1},null,{"resourceId":0,"xCoord":537,"yCoord":534,"userId":null,"type":1,"quantity":1},null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],"buildings":[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,{"buildingId":0,"xCoord":534,"yCoord":533,"userId":null,"type":1,"health":0,"state":0},{"buildingId":0,"xCoord":534,"yCoord":534,"userId":null,"type":1,"health":0,"state":0},null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,{"buildingId":0,"xCoord":536,"yCoord":535,"userId":null,"type":1,"health":0,"state":0},null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],"troops":[[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,{"troopId":"08d45166-7b77-4f78-a34e-0ba7e3f1321a","xCoord":533,"yCoord":536,"userId":0,"units":[{"unitId":155,"troopId":"08d45166-7b77-4f78-a34e-0ba7e3f1321a","unitType":2,"unitNumber":1,"health":1,"experience":0}]},null,null,null],[null,null,null,{"troopId":"0869de72-1302-4b18-a540-b71e1854ed54","xCoord":534,"yCoord":533,"userId":null,"units":[{"unitId":115,"troopId":"0869de72-1302-4b18-a540-b71e1854ed54","unitType":1,"unitNumber":1,"health":1,"experience":0}]},null,null,{"troopId":"957b0785-f67a-49a1-bfad-9e04ee89b6c4","xCoord":534,"yCoord":536,"userId":0,"units":[{"unitId":156,"troopId":"957b0785-f67a-49a1-bfad-9e04ee89b6c4","unitType":2,"unitNumber":1,"health":1,"experience":0}]},null,null,null],[null,{"troopId":"2a666ccd-c0b5-49de-86c6-5c9efdba19ad","xCoord":535,"yCoord":531,"userId":null,"units":[{"unitId":116,"troopId":"2a666ccd-c0b5-49de-86c6-5c9efdba19ad","unitType":1,"unitNumber":1,"health":1,"experience":0}]},null,{"troopId":"367fac0c-bf25-4b33-9504-c0078d59c0ec","xCoord":535,"yCoord":533,"userId":null,"units":[{"unitId":117,"troopId":"367fac0c-bf25-4b33-9504-c0078d59c0ec","unitType":2,"unitNumber":1,"health":1,"experience":0}]},null,null,null,null,null,null],[null,null,null,{"troopId":"89ce9804-5355-4262-b1be-a29ea189c322","xCoord":536,"yCoord":533,"userId":null,"units":[{"unitId":118,"troopId":"89ce9804-5355-4262-b1be-a29ea189c322","unitType":1,"unitNumber":1,"health":1,"experience":0}]},null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null]],"beginXCoord":530,"beginYCoord":530,"xSize":10,"ySize":10,"currentXCoord":530,"currentYCoord":530}';

    const map = JSON.parse(mapStr);

    map.currentXCoord = map.beginXCoord;
    map.currentYCoord = map.beginYCoord;



    function updateCurrentCenterXY(x, y) {
      map.currentXCoord = x;
      map.currentYCoord = y;

      if (map.currentXCoord <= map.beginXCoord - (10 * moveCountReloadTrigger) || map.currentYCoord <= map.beginYCoord - (10 * moveCountReloadTrigger) || map.currentXCoord >= map.beginXCoord + (10 * moveCountReloadTrigger) || map.currentYCoord >= map.beginYCoord + (10 * moveCountReloadTrigger)) {
        mapEditorGetMapByXYAndSizeButton();
      }
    }


    //DUPLICATED  mapEditorMouseEvent.js
    function mapEditorGetMapByXYAndSizeButton() {

      var parameters = {
        beginX: map.currentXCoord,
        beginY: map.currentYCoord,
        size: sizeMapToLoad
      }

      // $.ajax({
      //   type: "GET",
      //   url: "/TH_Web/admin/mapEditorGetMapByXYAndSize",
      //   data: parameters,
      //   success: function (result) {

      //     map = result;
      //     mapLayers[0].setLayout(result.ground);
      //     mapLayers[0].setHeightLayout(result.height);

      //     mapLayers[1].setLayout(result.buildings);
      //     mapLayers[2].setLayout(result.resources);
      //     mapLayers[3].setLayout(result.troops);

      //     map.currentXCoord = map.beginXCoord;
      //     map.currentYCoord = map.beginYCoord;

      //     for (var i = 0; i < 0 + mapLayers.length; i++) {
      //       centerView(mapLayers[i]);
      //     };
      //   },
      //   error: function (result) {
      //     console.log("mapEditorGetMapByXYAndSize FAIL");
      //     console.log(result);
      //   }
      // });
    }



    function launch() {


      jsonLoader([JSON.stringify(groundConfigurationPropertyList), JSON.stringify(buildingConfigurationPropertyList), JSON.stringify(resourceConfigurationPropertyList), JSON.stringify(unitConfigurationPropertyList)])
        .then(
          function (jsonResponse) {
            var images = [
              {
                graphics: jsonResponse[0].imgPathsGround
              },
              {
                graphics: jsonResponse[1].imgPaths
              },
              {
                graphics: jsonResponse[2].imgPaths
              },
              {
                graphics: jsonResponse[3].imgPaths
              }
            ];

            imgLoader(images)
              .then(
                function (imgResponse) {

                  game = new main(0,
                    0, map.xSize,
                    imgResponse[3]); // X & Y drawing position, and tile span to draw

                  game
                    .init([
                      {
                        title: "Ground",
                        layout: map.ground,
                        graphics: imgResponse[0].files,
                        graphicsDictionary: imgResponse[0].dictionary,
                        isometric: true,
                        heightMap: {
                          map: map.height,
                          offset: 0,
                          heightTile: imgResponse[0].files["ground.png"],
                        },
                        tileHeight: 50,
                        tileWidth: 100,
                        applyInteractions: true,
                        shadow: {
                          offset: 20, // Offset is the same height as the stack tile
                          verticalColor: '(5, 5, 30, 0.4)',
                          horizontalColor: '(6, 5, 50, 0.5)'
                        }
                      },
                      {
                        title: "Buildings",
                        layout: map.buildings,
                        graphics: imgResponse[1].files,
                        graphicsDictionary: imgResponse[1].dictionary,
                        zeroIsBlank: true,
                        //															                alphaWhenFocusBehind: {
                        //															                    objectApplied: imgResponse[2].files["main.png"],
                        //															                    apply: true
                        //															                  },
                        //															                  shadowDistance: {
                        //															                    color: false,
                        //															                    distance: 4,
                        //															                    darkness: 1
                        //															                  },
                        heightMap: {
                          map: map.height,
                          offset: 0,
                          heightMapOnTop: true
                        },
                        tileHeight: 50,
                        tileWidth: 100
                      },
                      {
                        title: "Resources",
                        layout: map.resources,
                        graphics: imgResponse[2].files,
                        graphicsDictionary: imgResponse[2].dictionary,
                        zeroIsBlank: true,
                        heightMap: {
                          map: map.height,
                          offset: 0,
                          heightMapOnTop: true
                        },
                        tileHeight: 50,
                        tileWidth: 100
                      },
                      {
                        title: "Troops",
                        layout: map.troops,
                        graphics: imgResponse[3].files,
                        graphicsDictionary: imgResponse[3].dictionary,
                        zeroIsBlank: true,
                        heightMap: {
                          map: map.height,
                          offset: 0,
                          heightMapOnTop: true
                        },
                        tileHeight: 50,
                        tileWidth: 100
                      }
                    ]);

                });
          }
        );


    }

    function centerView(layer) {
      var mapViewWidth = document.getElementById('mapView').offsetWidth;
      var mapViewHeight = document.getElementById('mapView').offsetHeight;
      layer.align("h-center",
        mapViewWidth, map.xSize, 0);
      layer.align("v-center",
        mapViewHeight, map.xSize, 0);
    }

    function main(x, y, size, playerImages) {

      self = this;

      var context = CanvasControl.create("mapViewCanvas", 4000, 2000, {}, "mapView");

      var input = new CanvasInput(document, CanvasControl());

      if (mapLoadedFrom == "mapView") {
        mapViewMouseEvent.setInputEvents(input, mapLayers);
      }
      else if (mapLoadedFrom == "mapEditor") {
        mapEditorMouseEvent.setInputEvents(input, mapLayers);
      }




      input.keyboard(function (pressed, keydown, event) {
        var mapViewWidth = document.getElementById('mapView').offsetWidth;
        var mapViewHeight = document.getElementById('mapView').offsetHeight;
        if (!keydown) {
          switch (pressed) {
            case 81:
              mapLayers.map(function (layer) {
                layer.rotate("right");
              });
              break;
            case 87:
              mapLayers.map(function (layer) {
                layer.rotate("left");
              });
              break;
            //flech droite ou numpad 6
            case 39:
            case 102:

              mapLayers.map(function (layer) {
                if (event.ctrlKey) {
                  layer.rotate("right");
                }
                else {
                  for (var i = 0; i < 10; i++) {
                    layer.move("left");
                    layer.move("down");
                  }

                  if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord + 10) };

                }
              });
              //    startY ++;
              break;
            //fleche haut ou numpad8
            case 38:
            case 104:
              mapLayers.map(function (layer) {
                if (event.ctrlKey) {
                  layer.setZoom("in");
                  centerView(layer);
                }
                else {
                  for (var i = 0; i < 10; i++) {
                    layer.move("down");
                    layer.move("up");
                  }
                  if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord - 10) };
                }

              });
              //    startX --;
              break;
            //fleche bas ou numpad 2
            case 40:
            case 98:
              mapLayers.map(function (layer) {
                if (event.ctrlKey) {
                  layer.setZoom("out");
                  centerView(layer);
                }
                else {
                  for (var i = 0; i < 10; i++) {
                    layer.move("left");
                    layer.move("right");
                  }
                  if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord + 10) };
                }
              });
              //     startX ++;
              break;
            //fleche gauche ou numpad 4
            case 37:
            case 100:
              mapLayers.map(function (layer) {
                if (event.ctrlKey) {
                  layer.rotate("left");
                }
                else {
                  for (var i = 0; i < 10; i++) {
                    layer.move("right");
                    layer.move("up");
                  }
                  if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord - 10) };
                }

              });
              //		                startY --;
              break;
            // numpad 1 (bas gauche)
            case 97:
              mapLayers.map(function (layer) {
                for (var i = 0; i < 5; i++) {
                  layer.move("right");
                  layer.move("up");
                  layer.move("left");
                  layer.move("right");
                }
                if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord) };
              });
              break;
            // numpad 3 bas droite
            case 99:
              mapLayers.map(function (layer) {
                for (var i = 0; i < 5; i++) {
                  layer.move("left");
                  layer.move("right");
                  layer.move("left");
                  layer.move("down");
                }
                if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord, map.currentYCoord + 10) };
              });
              break;
            // numpad 7 haut gauche
            case 103:
              mapLayers.map(function (layer) {
                for (var i = 0; i < 5; i++) {
                  layer.move("down");
                  layer.move("up");
                  layer.move("right");
                  layer.move("up");
                }
                if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord, map.currentYCoord - 10) };
              });
              break;
            // numpad 9 haut droite
            case 105:
              mapLayers.map(function (layer) {
                for (var i = 0; i < 5; i++) {
                  layer.move("down");
                  layer.move("up");
                  layer.move("left");
                  layer.move("down");
                }
                if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord) };
              });
              break;
            case 107:
              mapLayers.map(function (layer) {
                layer.setZoom("in");
                centerView(layer);

              });
              //			                startY --;
              break;
            case 109:
              mapLayers.map(function (layer) {
                layer.setZoom("out");
                centerView(layer);

              });
              //			                startY --;
              break;
          }
        }
      });



      function draw() {
        context.clearRect(0, 0, CanvasControl().width,
          CanvasControl().height);

        for (i = 0; i < 0 + size; i++) {
          for (j = 0; j < 0 + size; j++) {
            mapLayers.map(function (layer) {
              if (layer.getTitle() === "Ground" || layer.getTitle() === "Resources" || layer.getTitle() === "Buildings" || layer.getTitle() === "Troops") {
                layer.draw(i, j); // Draw the graphics layer
              }
            });
          }
        }

        requestAnimFrame(draw);
      }

      return {
        init: function (layers) {
          for (var i = 0; i < 0 + layers.length; i++) {
            mapLayers[i] = new TileField(context,
              CanvasControl().height,
              CanvasControl().width);
            mapLayers[i].setup(layers[i]);

            mapLayers[i].setZoom(0.8);

            centerView(mapLayers[i]);
          };
          draw();
        }
      }
    }

    launch();


  }

}
