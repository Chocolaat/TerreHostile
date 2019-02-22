package org.terrehostile.web.admincontrolers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.MapView;
import org.terrehostile.game.configuration.model.BuildingConfigurationPropertyList;
import org.terrehostile.game.configuration.model.GroundConfigurationPropertyList;
import org.terrehostile.game.configuration.model.ResourceConfigurationPropertyList;
import org.terrehostile.game.configuration.model.UnitConfigurationPropertyList;
import org.terrehostile.services.MapViewService;

@RestController
public class MapEditorControler {

	@Autowired
	private MapViewService mapViewService;

	@Autowired
	private UnitConfigurationPropertyList unitsConfiguration;
	@Autowired
	private BuildingConfigurationPropertyList buildingsConfiguration;
	@Autowired
	private ResourceConfigurationPropertyList resourcesConfiguration;
	@Autowired
	private GroundConfigurationPropertyList groundsConfiguration;

	// getMapByXYAndSize from form
	@RequestMapping(value = { "/admin/mapEditor" }, method = RequestMethod.GET)
	public ModelAndView mapEditorPost(@RequestParam(defaultValue = "500") int beginX,
			@RequestParam(defaultValue = "500") int beginY, @RequestParam(defaultValue = "70") int size) {
//	public ModelAndView mapEditorGet(@RequestParam(defaultValue = "530") int beginX,
//			@RequestParam(defaultValue = "530") int beginY, @RequestParam(defaultValue = "10") int size) {

		MapView map = mapViewService.getMapByXYAndSize(beginX, beginY, size, size);
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("map", map);

		modelAndView.setViewName("admin/mapEditor");

		return modelAndView;
	}

	@RequestMapping(value = "/admin/mapEditorSaveMap", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void saveMap(@RequestBody MapView map) {

		mapViewService.save(map);

	}

	// getMapByXYAndSize from ajax
	@RequestMapping(value = { "/admin/mapEditorGetMapByXYAndSize" }, method = RequestMethod.GET)
	@ResponseBody
	public MapView getMapByXYAndSize(@RequestParam int beginX, int beginY, int size) {

		MapView map = mapViewService.getMapByXYAndSize(beginX, beginY, size, size);

		return map;
	}

}