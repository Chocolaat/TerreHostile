package org.terrehostile.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.Tile;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;
import org.terrehostile.business.mapTileItem.Unit;
import org.terrehostile.repository.BuildingRepository;
import org.terrehostile.repository.ResourceRepository;
import org.terrehostile.repository.TileRepository;
import org.terrehostile.repository.TroopRepository;
import org.terrehostile.repository.UnitRepository;

@Service("tileItemService")
public class TileItemService {

	@Autowired
	public BuildingRepository buildingRepository;
	@Autowired
	public ResourceRepository resourceRepository;
	@Autowired
	public TroopRepository troopRepository;
	@Autowired
	public UnitRepository unitRepository;
	@Autowired
	public TileRepository tileRepository;

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

	public void save(Tile tile) {
		tileRepository.save(tile);
	}

}