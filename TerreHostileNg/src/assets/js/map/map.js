define(["require", "exports", '../libs/jsiso/canvas/Control', '../libs/jsiso/canvas/Input', '../libs/jsiso/img/load',
'../libs/jsiso/json/load', '../libs/jsiso/tile/Field'], function(require, exports, CanvasControl, CanvasInput, imgLoader, jsonLoader, TileField){

  exports.launchGame = function (map) {

    // -- FPS --------------------------------
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame
          || window.webkitRequestAnimationFrame
          || window.mozRequestAnimationFrame
          || window.oRequestAnimationFrame
          || window.msRequestAnimationFrame
          || function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
          };
    })();

    // Global variables used to display and update map
    var mapLayers = [];
    var sizeMapToLoad = 70;
    var moveCountReloadTrigger = 3;

    var groundConfigurationPropertyList = {"names":["Grass","Ground","Ocean","Sand"],"imgPaths":["../assets/img/grounds/grass_square.png","../assets/img/grounds/ground_square.png","../assets/img/grounds/ocean_square.png","../assets/img/grounds/sand_square.png"],"imgPathsGround":["../assets/img/grounds/grass.png","../assets/img/grounds/ground.png","../assets/img/grounds/ocean.png","../assets/img/grounds/sand.png"],"types":[0,1,2,3]};
    var buildingConfigurationPropertyList = {"names":["Delete","Castle"],"imgPaths":["../assets/img/pictograms/delete_cross.png","../assets/img/buildings/castle.png"],"types":[0,1]};
    var resourceConfigurationPropertyList = {"names":["Delete","Flours"],"imgPaths":["../assets/img/pictograms/delete_cross.png","../assets/img/resources/flours.png"],"types":[0,1]};
    var unitConfigurationPropertyList = {"names":["Delete","Dragon","Unicorn"],"imgPaths":["../assets/img/pictograms/delete_cross.png","../assets/img/troops/monsters/dragon.png","../assets/img/troops/monsters/unicorn.png"],"types":[0,1,2]};

    map.currentXCoord = map.beginXCoord;
    map.currentYCoord = map.beginYCoord;



    function updateCurrentCenterXY (x, y)
    {
      map.currentXCoord = x;
      map.currentYCoord = y;

        if (map.currentXCoord <= map.beginXCoord - (10 * moveCountReloadTrigger) || map.currentYCoord <= map.beginYCoord - (10 * moveCountReloadTrigger) || map.currentXCoord >= map.beginXCoord + (10 * moveCountReloadTrigger) || map.currentYCoord >= map.beginYCoord + (10 * moveCountReloadTrigger))
        {
          mapEditorGetMapByXYAndSizeButton();
        }
    }


    //DUPLICATED  mapEditorMouseEvent.js
    function mapEditorGetMapByXYAndSizeButton()
    {

      var parameters = {
          beginX : map.currentXCoord,
          beginY : map.currentYCoord,
          size : sizeMapToLoad
        }

       $.ajax({
              type: "GET",
              url: "/TH_Web/admin/mapEditorGetMapByXYAndSize",
              data: parameters,
              success: function (result) {

                map = result;
            mapLayers[0].setLayout(result.ground);
            mapLayers[0].setHeightLayout(result.height);

            mapLayers[1].setLayout(result.buildings);
            mapLayers[2].setLayout(result.resources);
            mapLayers[3].setLayout(result.troops);

            map.currentXCoord = map.beginXCoord;
            map.currentYCoord = map.beginYCoord;

            for (var i = 0; i < 0 + mapLayers.length; i++) {
              centerView(mapLayers[i]);
            };
              },
              error: function (result) {
                console.log("mapEditorGetMapByXYAndSize FAIL");
                console.log(result);
              }
          });
    }

    function launch() {

      jsonLoader([JSON.stringify(groundConfigurationPropertyList), JSON.stringify(buildingConfigurationPropertyList), JSON.stringify(resourceConfigurationPropertyList), JSON.stringify(unitConfigurationPropertyList)])
          .then(
              function(jsonResponse)
              {
                      var images = [
                          {
                          graphics:jsonResponse[0].imgPathsGround
                          },
                          {
                          graphics:jsonResponse[1].imgPaths
                          },
                          {
                            graphics:jsonResponse[2].imgPaths
                        },
                          {
                              graphics:jsonResponse[3].imgPaths
                        }
                        ];

                imgLoader(images)
                    .then(
                        function(imgResponse) {

                          game = new main(0,
                              0, map.xSize,
                              imgResponse[3]); // X & Y drawing position, and tile span to draw

                          game
                              .init([
                                  {
                                    title : "Ground",
                                    layout : map.ground,
                                    graphics : imgResponse[0].files,
                                    graphicsDictionary : imgResponse[0].dictionary,
                                    isometric: true,
                                    heightMap : {
                                      map : map.height,
                                      offset : 0,
                                      heightTile : imgResponse[0].files["ground.png"],
                                    },
                                    tileHeight : 50,
                                    tileWidth : 100,
                                    applyInteractions : true,
                                    shadow : {
                                      offset : 20, // Offset is the same height as the stack tile
                                      verticalColor : '(5, 5, 30, 0.4)',
                                      horizontalColor : '(6, 5, 50, 0.5)'
                                    }
                                  },
                                  {
                                    title : "Buildings",
                                    layout : map.buildings,
                                    graphics : imgResponse[1].files,
                                    graphicsDictionary : imgResponse[1].dictionary,
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
                                    heightMap : {
                                      map : map.height,
                                      offset : 0,
                                              heightMapOnTop: true
                                    },
                                    tileHeight : 50,
                                    tileWidth : 100
                                  },
                                  {
                                    title : "Resources",
                                    layout : map.resources,
                                    graphics : imgResponse[2].files,
                                    graphicsDictionary : imgResponse[2].dictionary,
                                    zeroIsBlank: true,
                                    heightMap : {
                                      map : map.height,
                                      offset : 0,
                                              heightMapOnTop: true
                                    },
                                    tileHeight : 50,
                                    tileWidth : 100
                                  },
                                  {
                                    title : "Troops",
                                    layout : map.troops,
                                    graphics : imgResponse[3].files,
                                    graphicsDictionary : imgResponse[3].dictionary,
                                    zeroIsBlank: true,
                                    heightMap : {
                                      map : map.height,
                                      offset : 0,
                                              heightMapOnTop: true
                                    },
                                    tileHeight : 50,
                                    tileWidth : 100
                                  }
                                  ]);

                        });
              }
              );


    }

    function centerView(layer)
    {
      var mapViewWidth = document.getElementById('mapContainer').offsetWidth;
      var mapViewHeight = document.getElementById('mapContainer').offsetHeight;
            layer.align("h-center",
          mapViewWidth, map.xSize, 0);
            layer.align("v-center",
          mapViewHeight, map.xSize, 0);
    }

    function main(x, y, size, playerImages) {

          var context = CanvasControl.create("mapViewCanvas", undefined, undefined, {}, "mapView");

      var input = new CanvasInput(document, CanvasControl());

          input.keyboard(function(pressed, keydown, event) {
        var mapViewWidth = document.getElementById('mapView').offsetWidth;
        var mapViewHeight = document.getElementById('mapView').offsetHeight;
            if (!keydown) {
              switch(pressed) {
                case 81:
                  mapLayers.map(function(layer) {
                      layer.rotate("right");
                  });
                break;
                case 87:
                  mapLayers.map(function(layer) {
                    layer.rotate("left");
                  });
                break;
                //flech droite ou numpad 6
                case 39:
                case 102:

                  mapLayers.map(function(layer) {
                    if (event.ctrlKey)
                      {
                        layer.rotate("right");
                      }
                    else
                      {
                        for (var i = 0 ; i < 10; i++)
                        {
                          layer.move("left");
                          layer.move("down");
                        }

                        if (layer.getTitle() === "Ground") {updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord + 10)};

                      }
                  });
              //    startY ++;
                break;
                  //fleche haut ou numpad8
                case 38:
                case 104:
                  mapLayers.map(function(layer) {
                    if (event.ctrlKey)
                    {
                      layer.setZoom("in");
                      centerView(layer);
                    }
                    else
                      {
                        for (var i = 0 ; i < 10; i++)
                        {
                            layer.move("down");
                            layer.move("up");
                        }
                        if (layer.getTitle() === "Ground") {updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord -10)};
                      }

                  });
              //    startX --;
                break;
              //fleche bas ou numpad 2
                case 40:
                case 98:
                  mapLayers.map(function(layer) {
                    if (event.ctrlKey)
                    {
                      layer.setZoom("out");
                      centerView(layer);
                    }
                    else
                      {
                        for (var i = 0 ; i < 10; i++)
                        {
                            layer.move("left");
                            layer.move("right");
                        }
                        if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord +10, map.currentYCoord + 10)};
                      }
                  });
             //     startX ++;
                break;
                //fleche gauche ou numpad 4
                case 37:
                case 100:
                  mapLayers.map(function(layer) {
                    if (event.ctrlKey)
                    {
                      layer.rotate("left");
                    }
                    else
                      {
                        for (var i = 0 ; i < 10; i++)
                        {
                            layer.move("right");
                            layer.move("up");
                        }
                        if (layer.getTitle() === "Ground") { updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord - 10)};
                      }

                  });
//		                startY --;
                break;
                // numpad 1 (bas gauche)
                case 97:
                  mapLayers.map(function(layer) {
                    for (var i = 0 ; i < 5; i++)
                    {
                        layer.move("right");
                        layer.move("up");
                        layer.move("left");
                        layer.move("right");
                    }
                    if (layer.getTitle() === "Ground") {updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord)};
                  });
                break;
             // numpad 3 bas droite
                case 99:
                    mapLayers.map(function(layer) {
                      for (var i = 0 ; i < 5; i++)
                      {
                          layer.move("left");
                          layer.move("right");
                          layer.move("left");
                          layer.move("down");
                      }
                      if (layer.getTitle() === "Ground") {updateCurrentCenterXY(map.currentXCoord, map.currentYCoord  + 10)};
                    });
                  break;
             // numpad 7 haut gauche
                case 103:
                    mapLayers.map(function(layer) {
                      for (var i = 0 ; i < 5; i++)
                      {
                          layer.move("down");
                          layer.move("up");
                          layer.move("right");
                          layer.move("up");
                      }
                      if (layer.getTitle() === "Ground") {updateCurrentCenterXY(map.currentXCoord, map.currentYCoord - 10)};
                    });
                  break;
             // numpad 9 haut droite
                case 105:
                    mapLayers.map(function(layer) {
                      for (var i = 0 ; i < 5; i++)
                      {
                          layer.move("down");
                          layer.move("up");
                          layer.move("left");
                          layer.move("down");
                      }
                      if (layer.getTitle() === "Ground") {updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord)};
                    });
                  break;
                case 107:
                    mapLayers.map(function(layer) {
                      layer.setZoom("in");
                      centerView(layer);

                    });
//			                startY --;
                  break;
                case 109:
                    mapLayers.map(function(layer) {
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
            mapLayers.map(function(layer) {
              if (layer.getTitle() === "Ground" || layer.getTitle() === "Resources" || layer.getTitle() === "Buildings" || layer.getTitle() === "Troops") {
                layer.draw(i, j); // Draw the graphics layer
              }
            });
          }
        }

        requestAnimFrame(draw);
      }





      return {

        init : function(layers) {
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

    exports.map =      map;

  exports.updateTile =       function _updateTile(event, layerNumber, newValue)
  {
    // Get the current mouse location from X & Y Coords
  tile_coordinates = mapLayers[layerNumber].getXYCoords(event.offsetX,
    event.offsetY);

// let tile_coordinates = {};

//   tile_coordinates.x = xCoord;
//   tile_coordinates.y = yCoord;
  let beginTile;
  let currenTile;


  newTileValue = (newValue != undefined) ? newValue : 1;

  //if newTileValue = 0 : delete (ie set to null)
  if (!newTileValue)
  {
    newTile = null;
  }
  else
  {
    switch(layerNumber) {
    //Ground
      case 0:
        newTile = newTileValue;
        break;
        //Buildings
      case 1:
        newTile = {health: 0, state: 0, type: newTileValue, xCoord:tile_coordinates.x + map.beginXCoord, yCoord:tile_coordinates.y + map.beginYCoord};
        break;
        //Resources
      case 2:
        newTile = {xCoord:tile_coordinates.x + map.beginXCoord, yCoord:tile_coordinates.y + map.beginYCoord, type: newTileValue, quantity: 1};
        break;
        //Troops
      case 3:
        newUnit = [{unitType:newTileValue, experience: 0, health:1,unitNumber:1}];
        newTile = {xCoord:tile_coordinates.x + map.beginXCoord, yCoord:tile_coordinates.y + map.beginYCoord, units:newUnit, userId:0};
        break;
      default:
        newTile = (newTileValueGlobal != undefined) ? newTileValueGlobal : 1;
        break;
    }
  }

  if ((layerNumber=== 0 || layerNumber=== 2) && beginTile && currentTile)
    {
      var xBegin = Math.min(beginTile.x, currentTile.x)
      var xEnd = Math.max(beginTile.x, currentTile.x);;
      var yBegin = Math.min(beginTile.y, currentTile.y);
      var yEnd = Math.max(beginTile.y, currentTile.y);


      for (var i = xBegin; i <= xEnd; i++)
      {
        for (var j = yBegin; j <= yEnd; j++)
        {
          mapLayers[layerNumber].setTile(i, j, newTile); // Force the changing of tile graphic
        }
      }
    }

  else
    {
      mapLayers[layerNumber].setTile(tile_coordinates.x, tile_coordinates.y, newTile); // Force the changing of tile graphic

//				mapLayers[layerNumber]
//						.setHeightmapTile(tile_coordinates.x,
//								tile_coordinates.y, mapLayers[layerNumber]
//										.getHeightMapTile(
//												tile_coordinates.x,
//												tile_coordinates.y) + 0); // Increase heightmap tile

    }
  }

  }

});
