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

			function launch() {

				jsonLoader([ '../json/map.json', '../json/imageFiles.json' ])
						.then(
								function(jsonResponse) {

									imgLoader([ {
										graphics : jsonResponse[1].ground
									}, {
										graphics : jsonResponse[1].players
									} ])
											.then(
													function(imgResponse) {

														var game = new main(0,
																0, 10, 10,
																imgResponse[1]); // X & Y drawing position, and tile span to draw 

														game
																.init([
																		{
																			title : "Graphics",
																			layout : jsonResponse[0].ground,
																			graphics : imgResponse[0].files,
																			graphicsDictionary : imgResponse[0].dictionary,
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
																		},
																		{
																			title : "AI",
																			layout : jsonResponse[0].objects,
																			heightMap : {
																				map : jsonResponse[0].height,
																				offset : 20, // Offset is the same height as the  graphics stack tile
																				heightMapOnTop : true
																			},
																			tileHeight : 50,
																			tileWidth : 100,
																			applyInteractions : true
																		} ]);

													});
								});
			}

			function main(x, y, xrange, yrange, playerImages) {

				self = this;
				var mapLayers = [];
				var rangeX = xrange;
				var rangeY = yrange;

				var calculatePaths = 0;

				var enemy = [];

				var enemyStart = [ 4, 0 ]; // Starting location of AI
				var enemyEnd = [ 4, 9 ]; // Ending location of AI

				var context = CanvasControl.create("canavas", 920, 600, {
					background : "#FFF",
					display : "block",
					marginLeft : "auto",
					marginRight : "auto"
				}, "mapView");
				CanvasControl.fullScreen();

				var input = new CanvasInput(document, CanvasControl());

				input.mouse_action(function(coords) {
					tile_coordinates = mapLayers[0].applyMouseFocus(coords.x,
							coords.y); // Get the current mouse location from X & Y Coords
					mapLayers[0]
							.setHeightmapTile(tile_coordinates.x,
									tile_coordinates.y, mapLayers[0]
											.getHeightMapTile(
													tile_coordinates.x,
													tile_coordinates.y) + 1); // Increase heightmap tile 
					mapLayers[0].setTile(tile_coordinates.x,
							tile_coordinates.y, 9); // Force the chaning of tile graphic
				});

				input.mouse_move(function(coords) {
					mapLayers.map(function(layer) {
						tile_coordinates = layer.applyMouseFocus(coords.x,
								coords.y); // Apply mouse rollover via mouse location X & Y
					});
				});

				function draw() {
					context.clearRect(0, 0, CanvasControl().width,
							CanvasControl().height);
					if (calculatePaths === 100) { // Calculate AI paths every 100 ticks
						enemy
								.map(function(e) {
									pathfind(e.id, [ e.xPos, e.yPos ],
											[ enemyEnd[0], enemyEnd[1] ],
											mapLayers[0].getHeightLayout(),
											false, true)
											.then(
													function(data) {
														if (data.length > 0
																&& data[1] !== undefined) {
															e.xPos = data[1].x;
															e.yPos = data[1].y;
														}
													});
								});
						calculatePaths = 0;
						enemy = enemy.filter(function(e) {
							if (e.xPos === Number(enemyEnd[0])
									&& e.yPos === Number(enemyEnd[1])) {
								return false;
							} else {
								return true
							}
						});
					}
					for (i = 0; i < 0 + rangeY; i++) {
						for (j = 0; j < 0 + rangeX; j++) {
							mapLayers.map(function(layer) {
								if (layer.getTitle() === "Graphics") {
									layer.draw(i, j); // Draw the graphics layer
								} else {
									enemy.map(function(e) {
										if (i === e.xPos && j === e.yPos) {
											layer.draw(i, j, e.image); // Only draw the enemy over writes of the AI layer
										}
									});
								}
							});
						}
					}

					calculatePaths += 1;
					requestAnimFrame(draw);
				}

				return {
					init : function(layers) {
						for (var i = 0; i < 0 + layers.length; i++) {
							mapLayers[i] = new TileField(context,
									CanvasControl().height,
									CanvasControl().width);
							mapLayers[i].setup(layers[i]);
							mapLayers[i].align("h-center",
									CanvasControl().width, xrange, 0);
							mapLayers[i].align("v-center",
									CanvasControl().height, yrange, 0);
						}
						;
						setInterval(function() {
							enemy.push({
								id : enemy.length,
								image : playerImages.files["enemy3.png"],
								xPos : enemyStart[0],
								yPos : enemyStart[1]
							});
						}, 2500); // Create new enemy AI every 2.5 seconds
						draw();
					}
				}
			}
			
			launch();

		});