
require(
		[ 'jsiso/canvas/Control', 'jsiso/canvas/Input', 'jsiso/img/load',
				'jsiso/json/load', 'jsiso/tile/Field',
				'jsiso/pathfind/pathfind', 'map/mapTileItem'],
		function(CanvasControl, CanvasInput, imgLoader, jsonLoader, TileField,
				pathfind, MapTileItem) {
			
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
			
			map.currentXCoord = map.beginXCoord;
			map.currentYCoord = map.beginYCoord;

			document.getElementById('mapEditorGetMapByXYAndSize').addEventListener("click", mapEditorGetMapByXYAndSizeButton);
			document.getElementById('saveJsonViewForm').addEventListener("click", saveJsonView);
			
			
			function saveJsonView()
			{
				 $.ajax({
				        type: "POST",
				        url: "/TH_Web/admin/mapEditorSaveMap",
				        data: JSON.stringify(map),
				        dataType : "json" ,
			            contentType : "application/json",
				        success: function (result) {
				        },
				        error: function(xhr, textStatus, error){
				            console.log(xhr.statusText);
				            console.log(textStatus);
				            console.log(error);
				        }
				    });
			}

			
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


			function updateCurrentCenterXY (x, y)
			{ 
				map.currentXCoord = x; 
				map.currentYCoord = y; 
								
					if (map.currentXCoord <= map.beginXCoord - (10 * moveCountReloadTrigger) || map.currentYCoord <= map.beginYCoord - (10 * moveCountReloadTrigger) || map.currentXCoord >= map.beginXCoord + (10 * moveCountReloadTrigger) || map.currentYCoord >= map.beginYCoord + (10 * moveCountReloadTrigger))
					{
						mapEditorGetMapByXYAndSizeButton();
					}
			}	
			

			
			function launch() {

				console.log("-------");
				console.log("unitConfigurations");
				console.log(unitConfigurations);
				console.log("-------");

				console.log("-------");
				console.log("unitConfigurationPropertyList");
				console.log(unitConfigurationPropertyList);
				console.log("-------");
				
				console.log("-------");
				console.log("JSON.stringify(unitConfigurationPropertyList)");
				console.log(JSON.stringify(unitConfigurationPropertyList));
				console.log("-------");
				
				
				
				jsonLoader(['../json/imageFiles.json', JSON.stringify(unitConfigurationPropertyList)])
						.then(
								function(jsonResponse) 
								{
									console.log("-------");
									console.log("jsonResponse[0].troops");
									console.log(jsonResponse[0].troops);
									console.log("-------");
									

									console.log("-------");
									console.log("jsonResponse[1].imgPaths");
									console.log(jsonResponse[1].imgPaths);
									console.log("-------");
									
						            var images = [
							              {
							            	graphics:jsonResponse[0].ground
							              },
							              {
							            	graphics:jsonResponse[0].buildings
							              },
							              {
								            	graphics:jsonResponse[0].resources
								          },
							              {
								                graphics:jsonResponse[1].imgPaths
								          }
							            ];
						            				            	  		
									imgLoader(images)
											.then(
													function(imgResponse) {	
														console.log("-------");
														console.log("imgResponse[0]");
														console.log(imgResponse[0]);
														console.log("-------");	
														
														console.log("-------");
														console.log("imgResponse[2]");
														console.log(imgResponse[2]);
														console.log("-------");	
														
														console.log("-------");
														console.log("imgResponse[3]");
														console.log(imgResponse[3]);
														console.log("-------");
														
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

				input.mouse_action(function(coords) {
					
					MapTileItem.updateTile(mapLayers, coords);

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



		});
