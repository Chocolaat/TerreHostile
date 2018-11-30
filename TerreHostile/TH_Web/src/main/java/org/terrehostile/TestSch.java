package org.terrehostile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.map.Tile;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.BuildingState;
import org.terrehostile.business.mapTileItem.BuildingType;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.ResourceType;
import org.terrehostile.business.mapTileItem.Troop;
import org.terrehostile.business.mapTileItem.Unit;
import org.terrehostile.business.mapTileItem.UnitType;
import org.terrehostile.repository.TileRepository;
import org.terrehostile.services.MapViewService;
import org.terrehostile.services.TileItemService;

@Component
public class TestSch {

	@Autowired
	MapViewService mapViewService;
	@Autowired
	TileItemService tileItemService;
	@Autowired
	TileRepository tileRepository;

	public void launch() {

		Building b = new Building();
		b.setState(BuildingState.UnderConstruction);
		b.setType(BuildingType.Barrack);
		b.setxCoord(121);
		b.setyCoord(121);

		tileItemService.save(b);

		Resource r = new Resource();
		r.setQuantity(1243);
		r.setType(ResourceType.Fish);
		r.setxCoord(121);
		r.setyCoord(121);
		tileItemService.save(r);

		Troop t = new Troop();
		Unit u = new Unit();
		u.setUnitType(UnitType.Archer);
		u.setUnitNumber(24);
		// tileItemService.save(u);

		t.getUnits().add(u);
		t.setxCoord(122);
		t.setyCoord(122);

		tileItemService.save(t);

		Tile tile = tileRepository.findByXCoordAndYCoord(121, 121);
		System.out.println("t = " + tile.toString());

	}

	public static void main(String[] args) {

	}

}
