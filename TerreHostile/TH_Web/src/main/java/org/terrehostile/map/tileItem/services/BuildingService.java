package org.terrehostile.map.tileItem.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.terrehostile.map.models.MapView;
import org.terrehostile.map.tileItem.models.Building;
import org.terrehostile.map.tileItem.repositories.BuildingRepository;
import org.terrehostile.player.models.Town;
import org.terrehostile.player.repositories.TownRepository;
import org.terrehostile.player.services.TownService;
import org.terrehostile.tasks.models.BuildTask;
import org.terrehostile.tasks.models.TaskPlannificationResult;
import org.terrehostile.tasks.repositories.TaskRepository;
import org.terrehostile.ui.grids.FilterSortPaginateParams;
import org.terrehostile.ui.grids.GridPaginationResponse;

@Service
public class BuildingService {

	@Autowired
	private BuildingRepository buildingRepository;

	@Autowired
	private TownRepository townRepository;

	@Autowired
	private TownService townService;

	@Autowired
	private MapViewService mapViewService;

	@Autowired
	private TaskRepository taskRepository;

	public Building getBuildingById(int id) {
		return buildingRepository.findById(id).get();
	}

	public List<Building> getAllBuildings() {
		return buildingRepository.findAll();
	}

	public GridPaginationResponse<Building> getPaginatedBuildings(FilterSortPaginateParams params) {

		GridPaginationResponse<Building> gridPaginatedBuildings = new GridPaginationResponse<Building>();

		Sort sort = Sort.unsorted();
		if (!params.getSortName().isEmpty()) {
			sort = params.getSortOrder().equals("desc") ? Sort.by(params.getSortName()).descending()
					: Sort.by(params.getSortName()).ascending();
		}

		Pageable sortedByNameAsc = PageRequest.of(params.getPageNumber(), params.getPageSize(), sort);

		Page<Building> BuildingPageResult = buildingRepository.findAll(sortedByNameAsc);

		gridPaginatedBuildings.setItemList(BuildingPageResult.getContent());
		gridPaginatedBuildings.setItemsCount(BuildingPageResult.getTotalElements());

		return gridPaginatedBuildings;
	}

	public void updateBuilding(Building b) {
		buildingRepository.updateBuildingById(b.getTown().getId(), b.getType(), b.getHealth(), b.getState(),
				b.getxCoord(), b.getyCoord(), b.getBuildingId());
	}

	public Building saveBuilding(Building b) {
		return buildingRepository.save(b);
	}

	public void deleteBuilding(Building b) {
		buildingRepository.delete(b);
	}

	public TaskPlannificationResult plan(int xCoord, int yCoord, int type, int builderCount, String newTownName) {
		townService.createTown(xCoord, yCoord, newTownName);
		return plan(xCoord, yCoord, type, builderCount);
	}

	public TaskPlannificationResult plan(int xCoord, int yCoord, int type, int builderCount) {

		TaskPlannificationResult taskPlannificationResult = new TaskPlannificationResult();

		MapView tileToBuildOn = mapViewService.getMapByXYAndSize(xCoord, yCoord, 1, 1);

		if ((tileToBuildOn.getBuildingAt(0, 0) != null) || (tileToBuildOn.getResourceAt(0, 0) != null)
				|| (tileToBuildOn.getTroopAt(0, 0) != null)) {
			taskPlannificationResult.fail(BuildTask.CANNOT_BUILD_TILE_IS_NOT_EMPTY);
		}

		else {

			Optional<Town> townOpt = townRepository.getTownByCoords(xCoord, yCoord);
			if (!townOpt.isPresent()) {
				// Town town = townRepository.getTownByCoords(xCoord, yCoord);
				// if (town != null) {
				taskPlannificationResult.fail(BuildTask.CANNOT_BUILD_NO_TOWN);
			} else {

				Town town = townOpt.get();

				Building building = new Building(xCoord, yCoord, type);
				building.setTown(town);
				town.getBuildings().add(building);
				building = saveBuilding(building);

				BuildTask build = new BuildTask();
				build.setBuilding(building);
				build.setBuilderCount(builderCount);

				taskRepository.save(build);

				taskPlannificationResult.succes(BuildTask.BUILDING_SUCCESSFULY_PLANNED);
			}
		}
		return taskPlannificationResult;

	}
}
