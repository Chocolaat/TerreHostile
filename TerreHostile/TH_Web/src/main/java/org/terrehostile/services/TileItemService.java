package org.terrehostile.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;
import org.terrehostile.business.mapTileItem.Unit;
import org.terrehostile.repository.BuildingRepository;
import org.terrehostile.repository.ResourceRepository;
import org.terrehostile.repository.TroopRepository;
import org.terrehostile.repository.UnitRepository;

@Service("tileItemService")
public class TileItemService {

	@Autowired
	private BuildingRepository buildingRepository;
	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private TroopRepository troopRepository;
	@Autowired
	private UnitRepository unitRepository;

	public void save(Building building) {
		buildingRepository.save(building);
	}

	public void save(Resource resource) {
		resourceRepository.save(resource);
	}

	public void save(Troop troop) {
		troopRepository.save(troop);
	}

	public void save(Unit unit) {
		unitRepository.save(unit);
	}

}