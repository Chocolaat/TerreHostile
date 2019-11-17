package org.terrehostile.game.map.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.tileItem.Building;
import org.terrehostile.repository.BuildingRepository;
import org.terrehostile.technic.FilterSortPaginateParams;
import org.terrehostile.technic.GridPaginationResponse;

@Service("buildingService")
public class BuildingService {

	@Autowired
	private BuildingRepository buildingRepository;

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
		buildingRepository.updateBuildingById(b.getTownId(), b.getType(), b.getHealth(), b.getState(), b.getxCoord(),
				b.getyCoord(), b.getBuildingId());
	}

	public Building saveBuilding(Building b) {
		return buildingRepository.save(b);
	}

	public void deleteBuilding(Building b) {
		buildingRepository.delete(b);
	}
}
