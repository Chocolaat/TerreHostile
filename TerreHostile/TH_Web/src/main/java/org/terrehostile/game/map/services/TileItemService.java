package org.terrehostile.game.map.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.models.Tile;
import org.terrehostile.business.map.tileItem.models.Building;
import org.terrehostile.business.map.tileItem.models.Resource;
import org.terrehostile.business.map.tileItem.models.Troop;
import org.terrehostile.business.map.tileItem.models.Unit;
import org.terrehostile.business.map.tileItem.repositories.BuildingRepository;
import org.terrehostile.business.map.tileItem.repositories.ResourceRepository;
import org.terrehostile.business.map.tileItem.repositories.TileRepository;
import org.terrehostile.business.map.tileItem.repositories.TroopRepository;
import org.terrehostile.business.map.tileItem.repositories.UnitRepository;

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