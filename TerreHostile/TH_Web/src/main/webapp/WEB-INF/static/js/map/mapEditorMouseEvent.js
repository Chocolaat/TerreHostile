/**
 * 
 */


				
define(['mustache'], function(Mustache) {
	
	
	var newTileValueGlobal;
	var layerNumberGlobal = 0;

	var beginTile;
	var currentTile;
	
    
    function _updateTile(mapLayers, coords, beginTile, currentTile)
    {
    	
    	    	
    	// Get the current mouse location from X & Y Coords
		tile_coordinates = mapLayers[layerNumberGlobal].getXYCoords(coords.x,
				coords.y); 
		
		newTileValue = (newTileValueGlobal != undefined) ? newTileValueGlobal : 1;
		
		//if newTileValue = 0 : delete (ie set to null)
		if (!newTileValue) 
		{ 
			newTile = null;
		}
		else
		{
			switch(layerNumberGlobal) {
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
				  newTile = {xCoord:tile_coordinates.x + map.beginXCoord, yCoord:tile_coordinates.y + map.beginYCoord, units:newUnit};
			    break;
			  default:
					newTile = (newTileValueGlobal != undefined) ? newTileValueGlobal : 1;
			    break;
			}
		}
		
		if ((layerNumberGlobal === 0 || layerNumberGlobal === 2) && beginTile && currentTile)
			{
				var xBegin = Math.min(beginTile.x, currentTile.x)
				var xEnd = Math.max(beginTile.x, currentTile.x);;
				var yBegin = Math.min(beginTile.y, currentTile.y);
				var yEnd = Math.max(beginTile.y, currentTile.y);
				
				
				for (var i = xBegin; i <= xEnd; i++) 
				{
					for (var j = yBegin; j <= yEnd; j++) 
					{
						mapLayers[layerNumberGlobal].setTile(i, j, newTile); // Force the changing of tile graphic
					}
				}
			}

		else
			{
				mapLayers[layerNumberGlobal].setTile(tile_coordinates.x, tile_coordinates.y, newTile); // Force the changing of tile graphic
				
//				mapLayers[layerNumber]
//						.setHeightmapTile(tile_coordinates.x,
//								tile_coordinates.y, mapLayers[layerNumber]
//										.getHeightMapTile(
//												tile_coordinates.x,
//												tile_coordinates.y) + 0); // Increase heightmap tile 
				
			}
    }
    
    
    
	function _setCurrentSelection(newTileValue, layerNumber, allGround)
	{
		newTileValueGlobal = newTileValue;
		layerNumberGlobal = layerNumber;
		allGroundGlobal = allGround;
	}
	

	
	function _setInputEvents(input, mapLayers)
	{
	
		input.mouse_action(function(coords) 
				{
					
				
				beginTile =  mapLayers[0].getXYCoords(coords.x,
						coords.y);
					
					
				});
			
			input.mouse_up(function(coords) 
					{
						_updateTile(mapLayers, coords, beginTile, currentTile);
						beginTile = null;
						currentTile = null;
					});
			
						
			input.mouse_move(function(coords) {			
				mapLayers.map(function(layer) {
					currentTile =  mapLayers[0].getXYCoords(coords.x,
							coords.y);
					
					layer.applyFocus(currentTile.x, currentTile.y); // Apply mouse rollover via mouse location X & Y
					
					if(beginTile && currentTile)
						{
							layer.applyLargeFocus(beginTile.x, currentTile.x, beginTile.y, currentTile.y); // Apply mouse rollover via mouse location X & Y
						}
				});
			});
	}
	

	//TO REFACTOR : when mapView, elements are not defined.
	try {	
				
	document.getElementById('mapEditorGetMapByXYAndSize').addEventListener("click", mapEditorGetMapByXYAndSizeButton);
	document.getElementById('saveJsonViewForm').addEventListener("click", saveJsonView);
	
	document.getElementById('mapToolBarItemGroundType').addEventListener('click', function() {showMapToolBarSubMenu(groundConfigurations, 0);});
	document.getElementById('mapToolBarItemBuildings').addEventListener('click', function() {showMapToolBarSubMenu(buildingConfigurations, 1);});
	document.getElementById('mapToolBarItemResources').addEventListener('click', function() {showMapToolBarSubMenu(resourceConfigurations, 2);});
	document.getElementById('mapToolBarItemTroops').addEventListener('click', function() {showMapToolBarSubMenu(unitConfigurations, 3);});
		
		}
		catch(err) {
			// do nothing
		}
	


	
	
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
	
	//DUPLICATED map.js
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

	

	 
	function _setCurrentSelection(newTileValue, layerNumber, allGround)
	{
		newTileValueGlobal = newTileValue;
		layerNumberGlobal = layerNumber;
		allGroundGlobal = allGround;
	}
	
	function showMapToolBarSubMenu(configuration, layerValue) {
		
		$('#mapToolBarSubMenu').html("");
		var mapToolBarSubMenuItemButtonTemplate = $('#mapToolBarSubMenuItemButtonTemplate').html();
						
				$.each(configuration, function( index, value ) 
				{
					var htmlButton = Mustache.to_html(mapToolBarSubMenuItemButtonTemplate, value);
					var id = "mapToolBarSubMenuItem_" + value.name;
					$('#mapToolBarSubMenu').append(htmlButton);
					$('#' + id).click(function() 
					{
						_setCurrentSelection(value.type, layerValue, false);
					});
				});
	}
	
	
	
	
	
	
    return {
          setInputEvents: function(input, mapLayers)
    	{
    		 return _setInputEvents(input, mapLayers);
    	}
    }
    
        
});
		