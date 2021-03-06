package org.terrehostile.map.tileItem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.map.tileItem.models.Building;
import org.terrehostile.map.tileItem.services.BuildingService;
import org.terrehostile.tasks.models.TaskPlannificationResult;
import org.terrehostile.ui.grids.FilterSortPaginateParams;
import org.terrehostile.ui.grids.GridPaginationResponse;

@RestController
public class BuildingController {
	@Autowired
	private BuildingService buildingService;

	@RequestMapping(value = "/building", method = RequestMethod.GET)
	public Building getBuilding(int id) {
		return buildingService.getBuildingById(id);
	}

	@RequestMapping(value = "/building/getPaginated", method = RequestMethod.GET)
	public GridPaginationResponse<Building> getPaginatedBuildings(FilterSortPaginateParams params) {
		return buildingService.getPaginatedBuildings(params);
	}

	@RequestMapping(value = "/building", method = RequestMethod.POST)
	public void updateBuilding(@RequestBody Building b) {
		buildingService.updateBuilding(b);
	}

	@RequestMapping(value = "/building/save", method = RequestMethod.POST)
	public void saveBuilding(@RequestBody Building b) {
		buildingService.saveBuilding(b);
	}

	@RequestMapping(value = "/building/delete", method = RequestMethod.POST)
	public void deleteBuilding(@RequestBody Building b) {
		buildingService.deleteBuilding(b);
	}

	@RequestMapping(value = "/building/plan", method = RequestMethod.POST)
	public TaskPlannificationResult createBuilding(@RequestParam int xCoord, int yCoord, int type, int builderCount) {
		return buildingService.plan(xCoord, yCoord, type, builderCount);
	}

}
