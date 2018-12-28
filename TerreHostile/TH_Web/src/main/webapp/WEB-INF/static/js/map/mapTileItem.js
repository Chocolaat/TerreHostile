/**
 * 
 */


				
define(['mustache'], function(Mustache) {
	
	
	var newTileValueGlobal;
	var layerNumberGlobal;
	var allGroundGlobal = false;
		
	
	document.getElementById('mapToolBarItemGroundType').addEventListener('click', function() {showMapToolBarSubMenu(groundConfigurations, 0);});
	document.getElementById('mapToolBarItemBuildings').addEventListener('click', function() {showMapToolBarSubMenu(buildingConfigurations, 1);});
	document.getElementById('mapToolBarItemResources').addEventListener('click', function() {showMapToolBarSubMenu(resourceConfigurations, 2);});
	document.getElementById('mapToolBarItemTroops').addEventListener('click', function() {showMapToolBarSubMenu(unitConfigurations, 3);});
		
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
    	

        updateTile: function(mapLayers, coords) {
            return _updateTile(mapLayers, coords);
          }
    }
    
    function _updateTile(mapLayers, coords)
    {
    	
    	console.log(mapLayers[layerNumberGlobal].getLayout());
    	    	
    	// Get the current mouse location from X & Y Coords
		tile_coordinates = mapLayers[layerNumberGlobal].getXYCoords(coords.x,
				coords.y); 
		
		console.log(tile_coordinates);
		
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
			
		
		if (layerNumberGlobal === 0 && allGroundGlobal === true)
		{
			for (var i = 0; i < 0 + map.xSize; i++) 
			{
				for (var j = 0; j < 0 + map.xSize; j++) 
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
    

        
});
		