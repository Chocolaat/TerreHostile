package org.terrehostile.web.admincontrolers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.UnitConfigurationPropertyList;
import org.terrehostile.business.map.MapView;
import org.terrehostile.services.MapViewService;

@RestController
public class MapEditorControler {

	@Autowired
	private MapViewService mapViewService;

	@Autowired
	private UnitConfigurationPropertyList unitsConfiguration;

	// getMapByXYAndSize from form
	@RequestMapping(value = { "/admin/mapEditor" }, method = RequestMethod.GET)
//	public ModelAndView mapEditorPost(@RequestParam(defaultValue = "500") int beginX, @RequestParam(defaultValue = "500") int beginY, @RequestParam(defaultValue = "70") int size){
	public ModelAndView mapEditorPost(@RequestParam(defaultValue = "530") int beginX,
			@RequestParam(defaultValue = "530") int beginY, @RequestParam(defaultValue = "10") int size) {

		MapView map = mapViewService.getMapByXYAndSize(beginX, beginY, size, size);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("map", map);
		modelAndView.addObject("unitConfigurationPropertyList", unitsConfiguration.getUnitConfigurationPropertyList());
		modelAndView.addObject("unitConfigurations", unitsConfiguration.getUnitConfigurations());

		modelAndView.setViewName("admin/homeMapEditor");

		return modelAndView;
	}

	// getMapByXYAndSize from ajax
	@RequestMapping(value = { "/admin/mapEditorGetMapByXYAndSize" }, method = RequestMethod.GET)
	@ResponseBody
	public MapView getMapByXYAndSize(@RequestParam int beginX, int beginY, int size) {

		MapView map = mapViewService.getMapByXYAndSize(beginX, beginY, size, size);
		// ModelAndView modelAndView = new ModelAndView();
		// modelAndView.setViewName("fragments/map/mapView");
		// modelAndView.addObject("map", map);

		return map;
	}

	@PostMapping("/admin/mapEditorGenerateMap")
	public ModelAndView generateMap(@RequestParam int beginX, int beginY, int size) {
		ModelAndView modelAndView = new ModelAndView();
		MapView map = MapView.createMapViewWithRandomTiles(beginX, beginY, size, size);
		modelAndView.addObject("map", map);
		modelAndView.setViewName("admin/homeMapEditor");

		return modelAndView;

	}

	@PostMapping("/admin/mapEditorSaveGenerateRandomTileMap")
	public ModelAndView generateRandomTileMap(@RequestParam int beginX, int beginY, int size) {

		ModelAndView modelAndView = new ModelAndView();
		MapView map = MapView.createMapViewWithRandomTiles(beginX, beginY, size, size);
		mapViewService.save(map);
		modelAndView.addObject("map", map);
		modelAndView.setViewName("admin/homeMapEditor");

		return modelAndView;
	}

	@RequestMapping(value = "/admin/mapEditorSaveMap", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void saveMap(@RequestBody MapView map) {

		mapViewService.save(map);

		System.out.println(map.toString());

	}

}