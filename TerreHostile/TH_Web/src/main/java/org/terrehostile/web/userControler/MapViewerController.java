package org.terrehostile.web.userControler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.MapView;
import org.terrehostile.game.configuration.BuildingConfigurationPropertyList;
import org.terrehostile.game.configuration.GroundConfigurationPropertyList;
import org.terrehostile.game.configuration.ResourceConfigurationPropertyList;
import org.terrehostile.game.configuration.UnitConfigurationPropertyList;
import org.terrehostile.services.MapViewService;

@Controller
public class MapViewerController {

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

	@RequestMapping(value = { "/user/mapView" }, method = RequestMethod.GET)
	public ModelAndView login(@RequestParam(defaultValue = "530") int beginX,
			@RequestParam(defaultValue = "530") int beginY, @RequestParam(defaultValue = "10") int size) {
		ModelAndView modelAndView = new ModelAndView();

		MapView map = mapViewService.getMapByXYAndSize(beginX, beginY, size, size);
		modelAndView.addObject("map", map);

		modelAndView.addObject("unitConfigurationPropertyList", unitsConfiguration.getUnitConfigurationPropertyList());
		modelAndView.addObject("unitConfigurations", unitsConfiguration.getUnitConfigurations());

		modelAndView.addObject("buildingConfigurationPropertyList",
				buildingsConfiguration.getBuildingConfigurationPropertyList());
		modelAndView.addObject("buildingConfigurations", buildingsConfiguration.getBuildingConfigurations());

		modelAndView.addObject("resourceConfigurationPropertyList",
				resourcesConfiguration.getResourceConfigurationPropertyList());
		modelAndView.addObject("resourceConfigurations", resourcesConfiguration.getResourceConfigurations());

		modelAndView.addObject("groundConfigurationPropertyList",
				groundsConfiguration.getGroundConfigurationPropertyList());
		modelAndView.addObject("groundConfigurations", groundsConfiguration.getGroundConfigurations());

		modelAndView.setViewName("user/mapView");

		return modelAndView;
	}
}
