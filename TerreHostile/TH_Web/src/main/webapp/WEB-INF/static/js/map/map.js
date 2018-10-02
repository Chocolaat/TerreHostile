


var groundValueGlobal;
var allGround = false;
var mapLayers = [];
var currentXcenter;
var currentYcenter;




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
				
			
			document.getElementById('mapEditorGetMapByXYAndSizeButton').addEventListener("click", mapEditorGetMapByXYAndSize);
			document.getElementById('mapEditorGetMapByXYAndSizeButton2').addEventListener("click", mapEditorGetMapByXYAndSize2);
						
			
			function setGroundTypeFocus(groundValue)
			{
				groundValueGlobal = groundValue;
				allGround = false;
			}


			function setAllGroundType(groundValue)
			{
				groundValueGlobal = groundValue;
				allGround = true;
			}


			function saveJsonView()
			{
				document.getElementById('mapLayoutValue').value = mapLayers[0].getLayout();
				document.getElementById('mapLayoutHeightValue').value = mapLayers[0].getHeightLayout();
			}

			function mapEditorGetMapByXYAndSize()
			{
				var parameters = { 
						xCoord : currentXcenter,
						yCoord : currentYcenter,
						size : map.width / 10
					}
				
				console.log("parameters =");
				console.log(parameters);
				
				console.log("mapEditorGetMapByXYAndSize START");
				 $.ajax({
				        type: "GET",
				        url: "/TH_Web/admin/mapEditorGetMapByXYAndSize",
				        data: parameters,
				        success: function (result) {
				        	console.log("mapEditorGetMapByXYAndSize SUCCESS");
				        	launch();
				        	$('#mapView').replaceWith(result);
				        },
				        error: function (result) {
				        	console.log("mapEditorGetMapByXYAndSize FAIL");
				        }
				    });
				
				 console.log("mapEditorGetMapByXYAndSize END");
			}
			
			function mapEditorGetMapByXYAndSize2()
			{
				console.log("22222222222");
				
				var parameters = { 
						xCoord : document.getElementById('xCoord').value,
						yCoord : document.getElementById('yCoord').value,
						size : document.getElementById('size').value
					}
				
				console.log("parameters =");
				console.log(parameters);
				
				console.log("mapEditorGetMapByXYAndSize START");
				 $.ajax({
				        type: "GET",
				        url: "/TH_Web/admin/mapEditorGetMapByXYAndSize",
				        data: parameters,
				        success: function (result) {
				        	console.log("mapEditorGetMapByXYAndSize SUCCESS");
				        	var map = /*[[${map}]]*/ "map";  
				        	var mapJsonView = /*[[${mapJsonView}]]*/ "mapJsonView"; 
				        	$('#mapView').replaceWith(result);
				        	launch();
				        },
				        error: function (result) {
				        	console.log("mapEditorGetMapByXYAndSize FAIL");
				        }
				    });
				
				 console.log("mapEditorGetMapByXYAndSize END");
			}


			function updateCurrentCenterXY (x, y)
			{ 

				
				console.log("updateCurrentCenterXY x = " + x + " / y = " + y)
				console.log("map.beginXCoord x = " + map.beginXCoord)
				console.log("map.beginYCoord x = " + map.beginYCoord)
				
				currentXcenter = x;
				currentYcenter = y ;
				document.getElementById('currentCenterX').innerHTML = x;
				document.getElementById('currentCenterY').innerHTML = y;
				
				document.getElementById('xCoord').value = currentXcenter;
				document.getElementById('yCoord').value = currentYcenter;
				document.getElementById('size').value = map.width / 10;
				
				var toto = currentYcenter + 20;
				var tata = map.beginYCoord + map.height;
				console.log("PPP = " + toto);
				console.log("PPP = " + tata);
				
					if (currentXcenter < map.beginXCoord + 20 || currentXcenter > map.beginXCoord + map.width - 20 || currentYcenter < map.beginYCoord + 20 || currentYcenter > map.beginYCoord + map.height - 20)
					{
						console.log("SUBMIT")
						document.updateMap.submit();
						
					}
				
				
			}	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			function launch() {
				
				

			
				

				console.log("mapJsonView = " + mapJsonView);
				
				
				
		
				jsonLoader([ mapJsonView, '../json/imageFiles.json' ])
						.then(
								function(jsonResponse) {

									imgLoader([ {
										graphics : jsonResponse[1].ground
									}
									])
											.then(
													function(imgResponse) {

														game = new main(0,
																0, map.width, map.height,
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

				updateCurrentCenterXY(map.beginXCoord + (map.width - 10) / 2, map.beginYCoord + (map.height - 10) / 2);
				
				self = this;
				var rangeX = xrange;
				var rangeY = yrange;
							
		        var context = CanvasControl.create("mapViewCanvas", 2000, 1000, {}, "mapView");
		        
				var input = new CanvasInput(document, CanvasControl());

				input.mouse_action(function(coords) {
					
					newTile = (groundValueGlobal != undefined) ? groundValueGlobal : 1;
					
					if (allGround)
					{
						for (var i = 0; i < 0 + xrange; i++) 
						{
							for (var j = 0; j < 0 + yrange; j++) 
							{
								mapLayers[0].setTile(i, j, newTile); // Force the changing of tile graphic
							}
						}
					}

					else
						{
							tile_coordinates = mapLayers[0].applyMouseFocus(coords.x,
									coords.y); // Get the current mouse location from X & Y Coords
							mapLayers[0]
									.setHeightmapTile(tile_coordinates.x,
											tile_coordinates.y, mapLayers[0]
													.getHeightMapTile(
															tile_coordinates.x,
															tile_coordinates.y) + 0); // Increase heightmap tile 
							
							mapLayers[0].setTile(tile_coordinates.x, tile_coordinates.y, newTile); // Force the changing of tile graphic
						}

					

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
//		                    startY -= 2;
//		                    startX -= 2;
//		                    if (startX < 0) { startX = 0; }
//		                    if (startY < 0) { startY = 0; }
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
//		                    startY += 2;
//		                    startX += 2;
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
		              //flech droite
		              case 39:
		                mapLayers.map(function(layer) {
		                	for (var i = 0 ; i < 10; i++)
		                		{
				                  layer.move("left");
				                  layer.move("down");
		                		}
			                  updateCurrentCenterXY(currentXcenter - 10, currentYcenter + 10);
		                });
		            //    startY ++;
		              break;
	                	//fleche haut
		              case 38:
		                mapLayers.map(function(layer) {
		                	for (var i = 0 ; i < 10; i++)
	                		{
				                  layer.move("down");
				                  layer.move("up");
	                		}
			                  updateCurrentCenterXY(currentXcenter - 10, currentYcenter -10);
		                });
		            //    startX --;
		              break;
		            //fleche bas
		              case 40:
		                mapLayers.map(function(layer) {
		                	for (var i = 0 ; i < 10; i++)
	                		{
				                  layer.move("left");
				                  layer.move("right");
	                		}
			                  updateCurrentCenterXY(currentXcenter +10, currentYcenter + 10);
		                });
		           //     startX ++;
		              break;
		              //fleche gauche
		              case 37:
		                mapLayers.map(function(layer) {
		                	for (var i = 0 ; i < 10; i++)
	                		{
				                  layer.move("right");
				                  layer.move("up");
	                		}
			                updateCurrentCenterXY(currentXcenter + 10, currentYcenter - 10);
		                });
//		                startY --;
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
							
							var mapViewWidth = document.getElementById('mapView').offsetWidth;
							var mapViewHeight = document.getElementById('mapView').offsetHeight;
														
							mapLayers[i].align("h-center",
									mapViewWidth, xrange, 0);
							mapLayers[i].align("v-center",
									mapViewHeight, yrange, 0);
						};
						draw();
					}
				}
			}
			
			launch();


		});
