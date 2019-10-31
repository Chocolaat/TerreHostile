package org.terrehostile.game.configuration.controllers;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	List<BuildingConfiguration> buildingConfigurations;

	@Autowired
	List<ResourceConfiguration> resourceConfigurations;

	@Autowired
	List<UnitConfiguration> unitConfigurations;

	@Autowired
	List<GroundConfiguration> groundConfigurations;

	@RequestMapping(value = { "/gameConfigurations" }, method = RequestMethod.GET)
	@ResponseBody
	public List<String> getGameConfigurations() {
		return Arrays.asList("building", "resource", "unit", "ground");
	}

	@RequestMapping(value = { "/gameConfigurations/building" }, method = RequestMethod.GET)
	@ResponseBody
	public List<BuildingConfiguration> getBuildingConfigurations() {
		return buildingConfigurations;
	}

	@RequestMapping(value = { "/gameConfigurations/resource" }, method = RequestMethod.GET)
	@ResponseBody
	public List<ResourceConfiguration> getResourceConfigurations() {
		return resourceConfigurations;
	}

	@RequestMapping(value = { "/gameConfigurations/unit" }, method = RequestMethod.GET)
	@ResponseBody
	public List<UnitConfiguration> getUnitConfigurations() {
		return unitConfigurations;
	}

	@RequestMapping(value = { "/gameConfigurations/ground" }, method = RequestMethod.GET)
	@ResponseBody
	public List<GroundConfiguration> getGroundConfigurations() {
		return groundConfigurations;
	}

}
