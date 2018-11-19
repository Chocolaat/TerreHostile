
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


			// Global variables used to ddisplay and update map
			var groundValueGlobal;
			var allGround = false;
			var mapLayers = [];
	
			
			document.getElementById('mapEditorGetMapByXYAndSize').addEventListener("click", mapEditorGetMapByXYAndSizeButton);
			
			document.getElementById('mapToolBarItemGroundType').addEventListener('click', function() {showMapToolBarSubMenu("mapToolBarSubMenu_groundType");});
			document.getElementById('mapToolBarItemBuildings').addEventListener('click', function() {showMapToolBarSubMenu("mapToolBarSubMenu_Buildings");});
			
			document.getElementById('saveJsonViewForm').addEventListener("click", saveJsonView);

			function showMapToolBarSubMenu(param_div_id) {
			    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById(param_div_id).innerHTML;
				document.getElementById('mapToolBarSubMenuItem_Grass').addEventListener('click', function() {setGroundTypeFocus("0");});
				document.getElementById('mapToolBarSubMenuItem_Ground').addEventListener('click', function() {setGroundTypeFocus("1");});
				document.getElementById('mapToolBarSubMenuItem_Ocean').addEventListener('click', function() {setGroundTypeFocus("2");});
				document.getElementById('mapToolBarSubMenuItem_Sand').addEventListener('click', function() {setGroundTypeFocus("3");});
				document.getElementById('mapToolBarSubMenuItem_GrassAll').addEventListener('click', function() {setAllGroundType("0");});
				document.getElementById('mapToolBarSubMenuItem_GroundAll').addEventListener('click', function() {setAllGroundType("1");});
				document.getElementById('mapToolBarSubMenuItem_OceanAll').addEventListener('click', function() {setAllGroundType("2");});
				document.getElementById('mapToolBarSubMenuItem_SandAll').addEventListener('click', function() {setAllGroundType("3");});
			    
			  }

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
				map.ground = mapLayers[0].getLayout();
				map.height = mapLayers[0].getHeightLayout();

				
				 $.ajax({
				        type: "POST",
				        url: "/TH_Web/admin/mapEditorSaveMap",
				        data: JSON.stringify(map),
				        dataType : "json" ,
			            contentType : "application/json",
				        success: function (result) {
				        },
				        error: function (result) {
				        	console.log("saveJsonView FAIL");
				        	console.log(result);
				        }
				    });
			}

			
			function mapEditorGetMapByXYAndSizeButton()
			{		
				
				var parameters = { 
						beginX : map.beginXCoord,
						beginY : map.beginYCoord,
						size : map.xSize
					}
				
				 $.ajax({
				        type: "GET",
				        url: "/TH_Web/admin/mapEditorGetMapByXYAndSize",
				        data: parameters,
				        success: function (result) {
				        	
				        	map = result;
							mapLayers[0].setLayout(result.ground);
							mapLayers[0].setHeightLayout(result.height);
							
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


			function updateCurrentCenterXY (x, y)
			{ 
				map.currentXCoord = x; 
				map.currentYCoord = y; 
				
					if (map.currentXCoord <= map.beginXCoord || map.currentYCoord <= map.beginYCoord || map.currentXCoord >= map.beginXCoord + map.size - 10 || map.currentYCoord >= map.beginYCoord + map.size - 10)
					{
						mapEditorGetMapByXYAndSizeButton();
					}
				
			}	
			
			
			function launch() {
				
console.log("map");
console.log(map);
console.log("JSON.stringify(map.ground)");
console.log(JSON.stringify(map.ground));
							
				jsonLoader([ "{\"ground\" : " + JSON.stringify(map.ground) + ", \"height\" : " + JSON.stringify(map.height) + "}", '../json/imageFiles.json' ])
						.then(
								function(jsonResponse) {
						            var images = [
							              {
							                graphics: jsonResponse[1].ground,
							              },
							              {
							                graphics: jsonResponse[1].monsters,
							              }
							            ];

									imgLoader(images)
											.then(
													function(imgResponse) {
											
														
														
														game = new main(0,
																0, map.xSize,
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
			
			function centerView(layer)
			{
				var mapViewWidth = document.getElementById('mapView').offsetWidth;
				var mapViewHeight = document.getElementById('mapView').offsetHeight;
            	layer.align("h-center",
						mapViewWidth, map.xSize, 0);
            	layer.align("v-center",
						mapViewHeight, map.xSize, 0);
			}

			function main(x, y, size, playerImages) {
				
				
				var mapMonsters = 
					[
			            {
			              id: 0,
			              image: playerImages.files["Dragon.png"],
			              xPos: 44,
			              yPos: 44
			            },
			            {
			              id: 1,
			              image: playerImages.files["Dragon.png"],
			              xPos: 45,
			              yPos: 45
			            },
			            {
			              id: 2,
			              image: playerImages.files["Unicorn.png"],
			              xPos: 43,
			              yPos: 43
			            },
			            {
			              id: 3,
			              image: playerImages.files["Unicorn.png"],
			              xPos: 42,
			              yPos: 42
			            }
			          ];
				
				self = this;
							
		        var context = CanvasControl.create("mapViewCanvas", 4000, 2000, {}, "mapView");
		        
				var input = new CanvasInput(document, CanvasControl());

				input.mouse_action(function(coords) {
					
					newTile = (groundValueGlobal != undefined) ? groundValueGlobal : 1;
					
					if (allGround)
					{
						for (var i = 0; i < 0 + size; i++) 
						{
							for (var j = 0; j < 0 + size; j++) 
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
			                	
				                  updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord + 10);
				                  
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
					                  updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord -10);
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
					                  updateCurrentCenterXY(map.currentXCoord +10, map.currentYCoord + 10);
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
					                updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord - 10);
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
			                updateCurrentCenterXY(map.currentXCoord + 10, map.currentYCoord);
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
				                updateCurrentCenterXY(map.currentXCoord, map.currentYCoord  + 10);
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
				                updateCurrentCenterXY(map.currentXCoord, map.currentYCoord - 10);
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
				                updateCurrentCenterXY(map.currentXCoord - 10, map.currentYCoord);
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
								if (layer.getTitle() === "Graphics") {
									layer.draw(i, j); // Draw the graphics layer
								}
				                  mapMonsters.map(function(monster) {
				                      if (i === monster.xPos  && j === monster.yPos  && layer.getTitle() === "Graphics") {
				                        layer.draw(i, j, monster.image);
				                      }
				                    });   
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



		});
