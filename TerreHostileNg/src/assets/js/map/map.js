define(["require", "exports", '../libs/jsiso/canvas/Control', '../libs/jsiso/canvas/Input', '../libs/jsiso/img/load',
'../libs/jsiso/json/load', '../libs/jsiso/tile/Field'], function(require, exports, CanvasControl, CanvasInput, imgLoader, jsonLoader, TileField){

  exports.launchGame = function (map, gameConfigurations) {
console.log("MAP");
console.log(map);
console.log("MAP");
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


    var mapChunkCurrentXCoord = map.xSize / 2;
    var mapChunkCurrentYCoord = map.ySize / 2;
    var frame = 0;
    var waterIndex = 0;

    function launch() {



    
                
                      var images = [
                          {
                            graphics: gameConfigurations.ground.map(b => b.imgPath)
                          },
                          {
                            graphics:gameConfigurations.buildings.map(b => [b.imgPath])
                          },
                          {
                            graphics:gameConfigurations.resources.map(b => [b.imgPath])
                          },
                          { 
                            graphics:gameConfigurations.units.map(b => [b.imgPath])
                          }
                        ];
                imgLoader(images)
                    .then(
                        function(imgResponse) {
                          let game = new main(0,
                              0, map.xSize); // X & Y drawing position, ;nd tile span to draw
                             let heightMapTmp = map.tiles.map(tilex => tilex.map(tiley => tiley.height) );
                             
                          game
                              .init([
                                  {
                                    title : "Ground",
                                    layout : map.tiles,
                                    graphics : imgResponse[0].files,
                                    graphicsDictionary : imgResponse[0].dictionary,
                                    isometric: true,
                                    heightMap : {
                                      map : heightMapTmp,
                                      offset : 0,
                                      heightMapOnTop: true
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
                                      map : heightMapTmp,
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
                                      map : heightMapTmp,
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
                                      map : heightMapTmp,
                                      offset : 0,
                                              heightMapOnTop: true
                                    },
                                    tileHeight : 50,
                                    tileWidth : 100
                                  }
                                  ]);

                        });
         //     }
        //      );


    }

    function centerView(layer)
    {

      var mapViewWidth = document.getElementsByTagName('app-map-view').item(0).offsetWidth;
      var mapViewHeight = document.getElementsByTagName('app-map-view').item(0).offsetHeight;

            layer.align("h-center",
          mapViewWidth, map.xSize, 0);
            layer.align("v-center",
          mapViewHeight, map.xSize, 0);
    }

    function main(x, y, size) {

          var context = CanvasControl.create("mapViewCanvas", undefined, undefined, {}, "mapView");


      function draw() {

        if (!document.getElementsByTagName('app-map-view').item(0)) {
          return;
        }
        var mapViewWidth = document.getElementsByTagName('app-map-view').item(0).offsetWidth;
        var mapViewHeight = document.getElementsByTagName('app-map-view').item(0).offsetHeight;

        context.clearRect(0, 0, mapViewWidth, mapViewHeight);

        // Calcul approximatif pour dessiner uniquement les tile effectivement affichées dans le canvas
       // var milieu = size / 2;
       var milieu = mapChunkCurrentXCoord;
        var nbTileWidth = mapViewWidth / 37;
        var nbTileHeight = mapViewHeight / 18;

        var iDeb = mapChunkCurrentXCoord - nbTileHeight / 2;
        var iFin = mapChunkCurrentXCoord + nbTileHeight / 2;
        var jDeb = mapChunkCurrentYCoord - nbTileWidth / 2;
        var jFin = mapChunkCurrentYCoord + nbTileWidth / 2;

/*         frame++;
        if (frame == 30 || frame == 60 || frame == 90)
        {
          waterIndex +=1;
        }
        else if ((frame >= 120) ) {
          waterIndex = 0;
          frame = 0;
        }
 */


        for (let i = iDeb; i < iFin; i++) {
          for (let j = jDeb; j < jFin; j++) {
            mapLayers.map(function(layer) {
              if (layer.getTitle() === "Ground" || layer.getTitle() === "Resources" || layer.getTitle() === "Buildings" || layer.getTitle() === "Troops") {


                layer.draw(i, j, layer.getTitle()); // Draw the graphics layer
              }
            });
          }
        }

/*         var offset = mapLayers[0].getOffset();
        context.drawImage(testWater.files[waterIndex], 10 - testWater.files[0].width / 2 - 10 + offset.x, 10 - 20 - testWater.files[0].height / 2 + offset.y);
 */
/*         var offset = mapLayers[0].getOffset();
        context.drawImage(testWater.files[directionFrame + charF], xpos - testWater.files[0].width / 2 - 10 + offset.x, ypos - 20 - testWater.files[0].height / 2 + offset.y); */

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

    exports.mapLayers =      mapLayers;

    exports.TileField = TileField;

    exports.incOrDecXYChunkCoords =     function _incOrDecXYChunkCoords(offsetX, offsetY)
    {
      mapChunkCurrentXCoord = mapChunkCurrentXCoord + offsetX;
      mapChunkCurrentYCoord = mapChunkCurrentYCoord + offsetY;

      let newX; let newY;

      if (mapChunkCurrentXCoord <= map.xSize / 2) {newX = map.beginXCoord - (map.xSize / 2 - mapChunkCurrentXCoord);}
      else {newX = map.beginXCoord + (mapChunkCurrentXCoord - map.xSize / 2)}

      if (mapChunkCurrentYCoord <= map.ySize / 2) {newY = map.beginYCoord - (map.ySize / 2 - mapChunkCurrentYCoord);}
      else {newY = map.beginYCoord + (mapChunkCurrentYCoord - map.ySize / 2)}


      if (mapChunkCurrentXCoord <= 10 || mapChunkCurrentXCoord >= map.xSize - 10 || mapChunkCurrentYCoord <= 10 || mapChunkCurrentYCoord >= map.xSize - 10)
      {
        return {"newX" : newX, "newY" : newY}
      }
      else
      {
        return undefined;
      }

    };

    exports.setMap =     function _setMap(newMap)
    {

      map = newMap;
      mapLayers[0].setLayout(newMap.tiles);
      mapLayers[0].setHeightLayout(newMap.tiles.map(tilex => tilex.map(tiley => tiley.height)));

      mapLayers[1].setLayout(newMap.buildings);
      mapLayers[2].setLayout(newMap.resources);
      mapLayers[3].setLayout(newMap.troops);

      mapChunkCurrentXCoord = map.xSize / 2;
      mapChunkCurrentYCoord = map.ySize / 2;

      mapLayers.map(function(layer) {
         centerView(layer);
        });

    };

  exports.updateTile =       function _updateTile(event, layerNumber, newValue, beginTile, currentTile)
  {
    // Get the current mouse location from X & Y Coords
  let tile_coordinates = mapLayers[layerNumber].getXYCoords(event.offsetX,
    event.offsetY);

    let newTileValue = (newValue != undefined) ? newValue : 1;
    let newTile = undefined;

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
        newTile = {background: newTileValue, height: 0, xCoord:tile_coordinates.x + map.beginXCoord, yCoord:tile_coordinates.y + map.beginYCoord};
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
        let newUnit = [{type:newTileValue, experience: 0, health:1, unitNumber:1}];
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
