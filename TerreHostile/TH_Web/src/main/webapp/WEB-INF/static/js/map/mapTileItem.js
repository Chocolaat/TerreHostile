/**
 * 
 */


define(function() {
	
	var newTileValueGlobal;
	var layerNumberGlobal;
	var allGroundGlobal = false;
		
	
	document.getElementById('mapToolBarItemGroundType').addEventListener('click', function() {showMapToolBarSubMenuGround();});
	document.getElementById('mapToolBarItemBuildings').addEventListener('click', function() {showMapToolBarSubMenuBuildings();});
	document.getElementById('mapToolBarItemTroops').addEventListener('click', function() {showMapToolBarSubMenuTroops();});
	document.getElementById('mapToolBarItemResources').addEventListener('click', function() {showMapToolBarSubMenuResources();});
	

	function showMapToolBarSubMenuGround() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_GroundType").innerHTML;
	    
		document.getElementById('mapToolBarSubMenuItem_Grass').addEventListener('click', function() {_setCurrentSelection(0, 0, false);});
		document.getElementById('mapToolBarSubMenuItem_Ground').addEventListener('click', function() {_setCurrentSelection(1, 0, false);});
		document.getElementById('mapToolBarSubMenuItem_Ocean').addEventListener('click', function() {_setCurrentSelection(2, 0, false);});
		document.getElementById('mapToolBarSubMenuItem_Sand').addEventListener('click', function() {_setCurrentSelection(3, 0, false);});
		document.getElementById('mapToolBarSubMenuItem_GrassAll').addEventListener('click', function() {_setCurrentSelection(0, 0, true);});
		document.getElementById('mapToolBarSubMenuItem_GroundAll').addEventListener('click', function() {_setCurrentSelection(1, 0, true);});
		document.getElementById('mapToolBarSubMenuItem_OceanAll').addEventListener('click', function() {_setCurrentSelection(2, 0, true);});
		document.getElementById('mapToolBarSubMenuItem_SandAll').addEventListener('click', function() {_setCurrentSelection(3, 0, true);});
	  }
	function showMapToolBarSubMenuBuildings() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_Buildings").innerHTML;
	    
		document.getElementById('mapToolBarSubMenuItem_Castle').addEventListener('click', function() {_setCurrentSelection(1, 1, false);});
	  }
	function showMapToolBarSubMenuResources() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_Resources").innerHTML;
	    
		document.getElementById('mapToolBarSubMenuItem_Flours').addEventListener('click', function() {_setCurrentSelection(1, 2, false);});
	  }
	function showMapToolBarSubMenuTroops() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_Troops").innerHTML;

		document.getElementById('mapToolBarSubMenuItem_Dragon').addEventListener('click', function() {_setCurrentSelection(1, 3, false);});
		document.getElementById('mapToolBarSubMenuItem_Unicorn').addEventListener('click', function() {_setCurrentSelection(2, 3, false);});
	  }
	
	
	
	
	function showMapToolBarSubMenu(param_div_id) {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById(param_div_id).innerHTML;
	  }
 
    return {
    	

        updateTile: function(mapLayers, coords) {
            return _updateTile(mapLayers, coords);
          }
    }
    
    function _updateTile(mapLayers, coords)
    {
    	
    	console.log("mapLayers[layerNumberGlobal]");
    	console.log(mapLayers[layerNumberGlobal].getLayout());
    	
    	// Get the current mouse location from X & Y Coords
		tile_coordinates = mapLayers[layerNumberGlobal].applyMouseFocus(coords.x,
				coords.y); 
		
		newTileValue = (newTileValueGlobal != undefined) ? newTileValueGlobal : 1;
		
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