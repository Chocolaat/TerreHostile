package org.terrehostile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.map.CoordinatesKey;
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

//		MapView m = mapViewService.getMapByXYAndSize(0, 0, 10, 10);
//		// mapViewService.save(m);
//
//		System.out.println(m);

//		Building b = tileItemService.buildingRepository.findByXCoordAndYCoord(7, 7);

		CoordinatesKey c = new CoordinatesKey(7, 7);
//		Building b = tileItemService.buildingRepository.findById(c).orElse(null);

		Building b = new Building();
		b.setState(BuildingState.Planned);
		b.setType(BuildingType.Barrack);
		b.setxCoord(535);
		b.setyCoord(535);

		tileItemService.save(b);
//
		Resource r = new Resource();
		r.setQuantity(55);
		r.setType(ResourceType.Fish);
		r.setxCoord(535);
		r.setyCoord(540);
		tileItemService.save(r);

		Troop t = new Troop();
		t.setxCoord(542);
		t.setyCoord(542);
		System.out.println("t begin = " + t.toString());

		// tileItemService.save(t);

		System.out.println("t first save = " + t.toString());

		Unit u = new Unit();
		u.setUnitType(UnitType.Archer);
		u.setUnitNumber(54);

		t.getUnits().add(u);

		tileItemService.save(t);

		System.out.println("tsecond save = " + t.toString());

//		Tile tile = tileRepository.findByXCoordAndYCoord(5, 5);
//		System.out.println("t = " + tile.toString());

	}

	public static void main(String[] args) {

	}

}
