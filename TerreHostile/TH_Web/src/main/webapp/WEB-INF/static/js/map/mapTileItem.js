/**
 * 
 */


define(function() {
	
	
	
	
	var newTileValueGlobal;
	var layerNumberGlobal;
	
	var allGround = false;
		
	
	document.getElementById('mapToolBarItemGroundType').addEventListener('click', function() {showMapToolBarSubMenuGround();});
	document.getElementById('mapToolBarItemBuildings').addEventListener('click', function() {showMapToolBarSubMenuBuildings();});
	document.getElementById('mapToolBarItemTroops').addEventListener('click', function() {showMapToolBarSubMenuTroops();});
	document.getElementById('mapToolBarItemResources').addEventListener('click', function() {showMapToolBarSubMenuResources();});
	

	function showMapToolBarSubMenuGround() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_GroundType").innerHTML;
	    
		document.getElementById('mapToolBarSubMenuItem_Grass').addEventListener('click', function() {_setCurrentSelection("0", "0");});
		document.getElementById('mapToolBarSubMenuItem_Ground').addEventListener('click', function() {_setCurrentSelection("1", "0");});
		document.getElementById('mapToolBarSubMenuItem_Ocean').addEventListener('click', function() {_setCurrentSelection("2", "0");});
		document.getElementById('mapToolBarSubMenuItem_Sand').addEventListener('click', function() {_setCurrentSelection("3", "0");});
		document.getElementById('mapToolBarSubMenuItem_GrassAll').addEventListener('click', function() {_setCurrentSelection("0", "0");});
		document.getElementById('mapToolBarSubMenuItem_GroundAll').addEventListener('click', function() {_setCurrentSelection("1", "0");});
		document.getElementById('mapToolBarSubMenuItem_OceanAll').addEventListener('click', function() {_setCurrentSelection("2", "0");});
		document.getElementById('mapToolBarSubMenuItem_SandAll').addEventListener('click', function() {_setCurrentSelection("3", "0");});
	  }
	function showMapToolBarSubMenuBuildings() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_Buildings").innerHTML;
	    
		document.getElementById('mapToolBarSubMenuItem_Castle').addEventListener('click', function() {_setCurrentSelection("1", "1");});
	  }
	function showMapToolBarSubMenuResources() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_Resources").innerHTML;
	    
		document.getElementById('mapToolBarSubMenuItem_Flours').addEventListener('click', function() {_setCurrentSelection("1", "2");});
	  }
	function showMapToolBarSubMenuTroops() {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById("mapToolBarSubMenu_Troops").innerHTML;

		document.getElementById('mapToolBarSubMenuItem_Dragon').addEventListener('click', function() {_setCurrentSelection("1", "3");});
		document.getElementById('mapToolBarSubMenuItem_Unicorn').addEventListener('click', function() {_setCurrentSelection("2", "3");});
	  }
	
	
	
	
	function showMapToolBarSubMenu(param_div_id) {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById(param_div_id).innerHTML;
	  }
 
    return {
    	

    	setGroundTypeFocus: function(groundValue) {
          return _setGroundTypeFocus(groundValue);
        },

        setAllGroundType: function(groundValue) {
          return _setAllGroundType(groundValue);
        },

        updateGround: function(mapLayers, coords) {
          return _updateGround(mapLayers, coords);
        },
        
        updateTile: function(mapLayers, coords) {
            return _updateTile(mapLayers, coords);
          },
        
        getTitle: function() {
            return title;
          },
    }
    
    function _updateTile(mapLayers, coords)
    {
    	
		newTile = (newTileValueGlobal != undefined) ? newTileValueGlobal : 1;
		
		if (layerNumberGlobal == 0 && allGround)
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
				tile_coordinates = mapLayers[layerNumberGlobal].applyMouseFocus(coords.x,
						coords.y); // Get the current mouse location from X & Y Coords
				

				mapLayers[layerNumberGlobal].setTile(tile_coordinates.x, tile_coordinates.y, newTile); // Force the changing of tile graphic
				
//				mapLayers[layerNumber]
//						.setHeightmapTile(tile_coordinates.x,
//								tile_coordinates.y, mapLayers[layerNumber]
//										.getHeightMapTile(
//												tile_coordinates.x,
//												tile_coordinates.y) + 0); // Increase heightmap tile 
				
			}
    	
    }
    
    
    function _updateGround(mapLayers, coords)
    {
    	
		newTile = (groundValueGlobal != undefined) ? groundValueGlobal : 1;
		
		if (allGround)
		{
			for (var i = 0; i < 0 + map.xSize; i++) 
			{
				for (var j = 0; j < 0 + map.xSize; j++) 
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
		

    	
    }
    
    
	function _setCurrentSelection(newTileValue, layerNumber)
	{
		console.log("newTileValue = " + newTileValue);
		console.log("layerNumber = " + layerNumber);
		newTileValueGlobal = newTileValue;
		layerNumberGlobal = layerNumber;
	}
    
    
	function _setGroundTypeFocus(groundValue)
	{
		console.log("groundValue = " + groundValue);
    	
		groundValueGlobal = groundValue;
		allGround = false;
	}
	

	function _setToto(groundValue, toto2)
	{
		console.log("groundValue = " + groundValue);
		console.log("toto2 = " + toto2);
    	
		groundValueGlobal = groundValue;
		allGround = false;
	}


	function _setAllGroundType(groundValue)
	{
		groundValueGlobal = groundValue;
		allGround = true;
	}
        
});