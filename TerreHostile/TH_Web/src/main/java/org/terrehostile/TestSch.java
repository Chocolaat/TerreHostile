package org.terrehostile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
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

	@Autowired
	UnitConfigurationPropertyList unitsConfiguration;

	public void launch() {

		System.out.println("unitsConfiguration");

		System.out.println("----");
		System.out.println("unitsConfiguration.getNames");
		System.out.println(unitsConfiguration.getNames());
		System.out.println("----");
		System.out.println("unitsConfiguration.getImgPaths");
		System.out.println(unitsConfiguration.getImgPaths());
		System.out.println("----");
		System.out.println("unitsConfiguration.getTypes");
		System.out.println(unitsConfiguration.getTypes());
		System.out.println("----");
//
//		int unitType = 1;
//
//		System.out.println("----");
//		System.out.println("unitName = " + unitsConfiguration.getName(unitType));
//		System.out.println("uniImg = " + unitsConfiguration.getImgPath(unitType));
//		System.out.println("type = " + unitsConfiguration.getType(unitType));
//		System.out.println("vision = " + unitsConfiguration.getVision(unitType));
//		System.out.println("----");
//
//		UnitConfiguration uc = unitsConfiguration.getUnitConfiguration(0);
//		UnitConfiguration uc2 = unitsConfiguration.getUnitConfiguration(1);
//		// UnitConfiguration uc3 = unitsConfiguration.getUnitConfiguration(3);
//
//		System.out.println("----");
//		System.out.println("uc = " + uc.toString());
//		System.out.println("uc2 = " + uc2.toString());
//		// System.out.println("uc3 = " + uc3.toString());
//		System.out.println("----");

////		MapView m = mapViewService.getMapByXYAndSize(0, 0, 10, 10);
////		// mapViewService.save(m);
////
////		System.out.println(m);
//
////		Building b = tileItemService.buildingRepository.findByXCoordAndYCoord(7, 7);
//
//		// CoordinatesKey c = new CoordinatesKey(7, 7);
////		Building b = tileItemService.buildingRepository.findById(c).orElse(null);
//
//		Building b = new Building();
//		b.setState(Building.STATE_PLANNED);
//		b.setType(Building.TYPE_BARRACK);
//		b.setxCoord(537);
//		b.setyCoord(532);
//
//		tileItemService.save(b);
//
//		Building b3 = new Building();
//		b3.setState(Building.STATE_PLANNED);
//		b3.setType(Building.TYPE_BARRACK);
//		b3.setxCoord(532);
//		b3.setyCoord(537);
//
//		tileItemService.save(b3);
//
////
//		Resource r = new Resource();
//		r.setQuantity(55);
//		r.setType(Resource.TYPE_FLOURS);
//		r.setxCoord(534);
//		r.setyCoord(532);
//		tileItemService.save(r);
//
//		Resource r2 = new Resource();
//		r2.setQuantity(55);
//		r2.setType(Resource.TYPE_FLOURS);
//		r2.setxCoord(537);
//		r2.setyCoord(534);
//		tileItemService.save(r);
//
//		Troop t = new Troop();
//		t.setxCoord(534);
//		t.setyCoord(534);
//		System.out.println("t begin = " + t.toString());
//
//		// tileItemService.save(t);
//
//		System.out.println("t first save = " + t.toString());
//
//		Unit u = new Unit();
//		u.setUnitType(Unit.TYPE_DRAGON);
//		u.setUnitNumber(54);
//
//		t.getUnits().add(u);
//
//		tileItemService.save(t);
//
//		System.out.println("tsecond save = " + t.toString());
//
////		Tile tile = tileRepository.findByXCoordAndYCoord(5, 5);
////		System.out.println("t = " + tile.toString());

	}

	public static void main(String[] args) {

	}

}
