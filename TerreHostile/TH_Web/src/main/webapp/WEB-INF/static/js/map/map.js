

var groundValueGlobal;

function setGroundTypeFocus(groundValue)
{
	groundValueGlobal = groundValue;
}



require(
		[ 'jsiso/canvas/Control', 'jsiso/canvas/Input', 'jsiso/img/load',
				'jsiso/json/load', 'jsiso/tile/Field',
				'jsiso/pathfind/pathfind', 'jsiso/particles/EffectLoader',
				'jsiso/particles/Emitter', 'jsiso/particles/Effect',
				'jsiso/particles/Particle', 'jsiso/utils',
				'requirejs/domReady!' ],
		function(CanvasControl, CanvasInput, imgLoader, jsonLoader, TileField,
				pathfind) {

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
			// ---------------------------------------


			
			function constructJsonMap(javaMap)
			{
				var constructedMap = "";
				i = 0;
				
				for (x = 0; x < javaMap.width; x++) {

					
					for (y = 0; y < javaMap.height; y++) {

					    mapTile = javaMap.map[i] ;
						i++;
			
						if (y == 0)
							{
								constructedColumn = " [ " + mapTile.backgroundValue + ", ";
							}
						else if (y == javaMap.height - 1)
							{
								constructedColumn = constructedColumn + mapTile.backgroundValue + " ]";
							}
						else
							{
								constructedColumn = constructedColumn + mapTile.backgroundValue + ", ";
							}
					}
					
					if (x == 0)
						{
							constructedMap = "[ " + constructedColumn + ", "
						}
					else if (x == javaMap.width - 1)
						{
						constructedMap = constructedMap + constructedColumn + " ]"
						}
					else
						{
							constructedMap = constructedMap + constructedColumn + ", "
						}			
				}
				
				constructedMap = "{ \"ground\": " + constructedMap + ", \"height\": [ [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0] ]" +  " }";				
		
				return constructedMap;
			}
			
			
			function launch() {
				
				map = constructJsonMap(map);
				
				jsonLoader([ map, '../json/imageFiles.json' ])
						.then(
								function(jsonResponse) {

									imgLoader([ {
										graphics : jsonResponse[1].ground
									}
									])
											.then(
													function(imgResponse) {

														game = new main(0,
																0, 10, 10,
																imgResponse[1]); // X & Y drawing position, and tile span to draw 

														game
																.init([
																		{
																			title : "Graphics",
																			layout : jsonResponse[0].ground,
																			graphics : imgResponse[0].files,
																			graphicsDictionary : imgResponse[0].dictionary,
																			isometric: true,
																			heightMap : {
																				map : jsonResponse[0].height,
																				offset : 0,
																				heightTile : imgResponse[0].files["blank-block.png"],
																			},
																			tileHeight : 50,
																			tileWidth : 100,
																			applyInteractions : true,
																			shadow : {
																				offset : 20, // Offset is the same height as the stack tile
																				verticalColor : '(5, 5, 30, 0.4)',
																				horizontalColor : '(6, 5, 50, 0.5)'
																			}
																		}
//																		{
//																			title : "TestSCh",
//																			layout : jsonResponse[0].ground,
//																			graphics : imgResponse[0].files,
//																			graphicsDictionary : imgResponse[0].dictionary,
//																			heightMap : {
//																				map : jsonResponse[0].height,
//																				offset : 0,
//																				heightTile : imgResponse[0].files["1-grass-8.png"],
//																			},
//																			tileHeight : 50,
//																			tileWidth : 100,
//																			applyInteractions : true
//																		}
																		]);

													});
								});

				
			}

			function main(x, y, xrange, yrange, playerImages) {

				self = this;
				var mapLayers = [];
				var rangeX = xrange;
				var rangeY = yrange;
							
		        var context = CanvasControl.create("mapViewCanvas", 2000, 1000, {}, "mapView");
		        
				var input = new CanvasInput(document, CanvasControl());

				input.mouse_action(function(coords) {
					
					
					
					tile_coordinates = mapLayers[0].applyMouseFocus(coords.x,
							coords.y); // Get the current mouse location from X & Y Coords
					mapLayers[0]
							.setHeightmapTile(tile_coordinates.x,
									tile_coordinates.y, mapLayers[0]
											.getHeightMapTile(
													tile_coordinates.x,
													tile_coordinates.y) + 0); // Increase heightmap tile 
					
					newTile = (groundValueGlobal != undefined) ? groundValueGlobal : 1;
					mapLayers[0].setTile(tile_coordinates.x, tile_coordinates.y, newTile); // Force the changing of tile graphic
				});

				input.mouse_move(function(coords) {
					mapLayers.map(function(layer) {
						tile_coordinates = layer.applyMouseFocus(coords.x,
								coords.y); // Apply mouse rollover via mouse location X & Y
					});
				});
				

		        input.keyboard(function(pressed, keydown) {
		          if (!keydown) {
		            switch(pressed) {
		              case 65:
		                mapLayers.map(function(layer) {
		                  if (yrange < layer.getLayout().length) {
		                    xrange +=  4;
		                    yrange +=  4;
		                    startY -= 2;
		                    startX -= 2;
		                    if (startX < 0) { startX = 0; }
		                    if (startY < 0) { startY = 0; }
		                    layer.setZoom("out");

		                    layer.align("h-center", CanvasControl().width, xrange + startX, 0);
		                    layer.align("v-center", CanvasControl().height, yrange + startY, (yrange + startY));
		                 }
		                });
		              break;
		              case 83:
		                mapLayers.map(function(layer) {
		                  if (yrange > defaultyrange) {
		                    xrange -=  4;
		                    yrange -=  4;
		                    startY += 2;
		                    startX += 2;
		                    layer.setZoom("in");

		                    layer.align("h-center", CanvasControl().width, xrange + startX, 0);
		                    layer.align("v-center", CanvasControl().height, yrange + startY, (yrange + startY));

		                  }
		                })
		              break;
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
		              case 39:
		                mapLayers.map(function(layer) {
			                  layer.move("left");
			                  layer.move("down");
		                });
		                startY ++;
		              break;
		              case 38:
		                mapLayers.map(function(layer) {
			                  layer.move("down");
			                  layer.move("up");
		                });
		                startX --;
		              break;
		              case 40:
		                mapLayers.map(function(layer) {
			                  layer.move("left");
			                  layer.move("right");
		                });
		                startX ++;
		              break;
		              case 37:
		                mapLayers.map(function(layer) {
			                  layer.move("right");
			                  layer.move("up");
		                });
		                startY --;
		              break;
		            }
		          }
		        });


				
				function draw() {
					context.clearRect(0, 0, CanvasControl().width,
							CanvasControl().height);
					
					for (i = 0; i < 0 + rangeY; i++) {
						for (j = 0; j < 0 + rangeX; j++) {
							mapLayers.map(function(layer) {
								if (layer.getTitle() === "Graphics") {
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
						};
						draw();
					}
				}
			}
			
			launch();


		});
