/**
 *
 */



define(['../_libs/mustache/mustache'], function(Mustache) {



	function _setInputEvents(input, mapLayers)
	{
		input.mouse_action(function(coords)
				{

				});

			input.mouse_up(function(coords)
					{
					});


			input.mouse_move(function(coords) {
			});
	}

    return {
          setInputEvents: function(input, mapLayers)
    	{
    		 return _setInputEvents(input, mapLayers);
    	}
    }


});
