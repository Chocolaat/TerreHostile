package org.terrehostile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;
import org.terrehostile.business.mapTileItem.Unit;
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

		// CoordinatesKey c = new CoordinatesKey(7, 7);
//		Building b = tileItemService.buildingRepository.findById(c).orElse(null);

		Building b = new Building();
		b.setState(Building.STATE_PLANNED);
		b.setType(Building.TYPE_BARRACK);
		b.setxCoord(537);
		b.setyCoord(532);

		tileItemService.save(b);

		Building b3 = new Building();
		b3.setState(Building.STATE_PLANNED);
		b3.setType(Building.TYPE_BARRACK);
		b3.setxCoord(532);
		b3.setyCoord(537);

		tileItemService.save(b3);

//
		Resource r = new Resource();
		r.setQuantity(55);
		r.setType(Resource.TYPE_FLOURS);
		r.setxCoord(534);
		r.setyCoord(532);
		tileItemService.save(r);

		Resource r2 = new Resource();
		r2.setQuantity(55);
		r2.setType(Resource.TYPE_FLOURS);
		r2.setxCoord(537);
		r2.setyCoord(534);
		tileItemService.save(r);

		Troop t = new Troop();
		t.setxCoord(534);
		t.setyCoord(534);
		System.out.println("t begin = " + t.toString());

		// tileItemService.save(t);

		System.out.println("t first save = " + t.toString());

		Unit u = new Unit();
		u.setUnitType(Unit.TYPE_DRAGON);
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
