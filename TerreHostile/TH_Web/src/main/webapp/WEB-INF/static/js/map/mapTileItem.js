/**
 * 
 */


define(function() {
	
	
	
	
	var groundValueGlobal;
	var allGround = false;
	
	
	
	document.getElementById('mapToolBarItemGroundType').addEventListener('click', function() {showMapToolBarSubMenu("mapToolBarSubMenu_groundType");});
	document.getElementById('mapToolBarItemBuildings').addEventListener('click', function() {showMapToolBarSubMenu("mapToolBarSubMenu_Buildings");});
	

	function showMapToolBarSubMenu(param_div_id) {
	    document.getElementById('mapToolBarSubMenu').innerHTML = document.getElementById(param_div_id).innerHTML;
		document.getElementById('mapToolBarSubMenuItem_Grass').addEventListener('click', function() {_setGroundTypeFocus("0");});
		document.getElementById('mapToolBarSubMenuItem_Ground').addEventListener('click', function() {_setGroundTypeFocus("1");});
		document.getElementById('mapToolBarSubMenuItem_Ocean').addEventListener('click', function() {_setGroundTypeFocus("2");});
		document.getElementById('mapToolBarSubMenuItem_Sand').addEventListener('click', function() {_setGroundTypeFocus("3");});
		document.getElementById('mapToolBarSubMenuItem_GrassAll').addEventListener('click', function() {_setAllGroundType("0");});
		document.getElementById('mapToolBarSubMenuItem_GroundAll').addEventListener('click', function() {_setAllGroundType("1");});
		document.getElementById('mapToolBarSubMenuItem_OceanAll').addEventListener('click', function() {_setAllGroundType("2");});
		document.getElementById('mapToolBarSubMenuItem_SandAll').addEventListener('click', function() {_setAllGroundType("3");});
	    
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
        
        getTitle: function() {
            return title;
          },
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
    
    
    
	function _setGroundTypeFocus(groundValue)
	{
    	
		groundValueGlobal = groundValue;
		allGround = false;
	}


	function _setAllGroundType(groundValue)
	{
		groundValueGlobal = groundValue;
		allGround = true;
	}
        
});