package org.terrehostile.game.configuration.controllers;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.game.configuration.model.BuildingConfiguration;
import org.terrehostile.game.configuration.model.GroundConfiguration;
import org.terrehostile.game.configuration.model.ResourceConfiguration;
import org.terrehostile.game.configuration.model.UnitConfiguration;

@RestController
public class GameConfigurationController {

	@Autowired
	Map<Integer, BuildingConfiguration> buildingConfigurations;

	@Autowired
	Map<Integer, ResourceConfiguration> resourceConfigurations;

	@Autowired
	Map<Integer, UnitConfiguration> unitConfigurations;

	@Autowired
	Map<Integer, GroundConfiguration> groundConfigurations;

	@RequestMapping(value = { "/gameConfigurations" }, method = RequestMethod.GET)
	@ResponseBody
	public List<String> getGameConfigurations() {
		return Arrays.asList("building", "resource", "unit", "ground");
	}

	@CrossOrigin
	@RequestMapping(value = { "/gameConfigurations/building" }, method = RequestMethod.GET)
	@ResponseBody
	public Map<Integer, BuildingConfiguration> getBuildingConfigurations() {
		return buildingConfigurations;
	}

	@CrossOrigin
	@RequestMapping(value = { "/gameConfigurations/resource" }, method = RequestMethod.GET)
	@ResponseBody
	public Map<Integer, ResourceConfiguration> getResourceConfigurations() {
		return resourceConfigurations;
	}

	@CrossOrigin
	@RequestMapping(value = { "/gameConfigurations/unit" }, method = RequestMethod.GET)
	@ResponseBody
	public Map<Integer, UnitConfiguration> getUnitConfigurations() {
		return unitConfigurations;
	}

	@CrossOrigin
	@RequestMapping(value = { "/gameConfigurations/ground" }, method = RequestMethod.GET)
	@ResponseBody
	public Map<Integer, GroundConfiguration> getGroundConfigurations() {
		return groundConfigurations;
	}

}
