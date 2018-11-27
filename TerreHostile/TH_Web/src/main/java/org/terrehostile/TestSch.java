package org.terrehostile;



import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.map.MapView;
import org.terrehostile.business.map.Tile;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.BuildingState;
import org.terrehostile.business.mapTileItem.BuildingType;
import org.terrehostile.repository.TileRepository;
import org.terrehostile.services.BuildingService;
import org.terrehostile.services.MapViewService;


@Component
public class TestSch {
	
	@Autowired
	MapViewService mapViewService;
	@Autowired
	BuildingService buildingService;
	@Autowired
	TileRepository tileRepository;
	
		
	
	public void launch()
	{
//		Building b = new Building();
//		b.setxCoord(100);
//		b.setyCoord(100);
//		b.setState(BuildingState.Planned);
//		b.setType(BuildingType.Archery);
//		
//		buildingService.save(b);
		
//		Building b = new Building();
//		b.setxCoord(100);
//		b.setyCoord(100);
//		b.setState(BuildingState.Planned);
//		b.setType(BuildingType.Archery);
//		
//		buildingService.save(b);
//		
		
		
		MapView m = mapViewService.getMapByXYAndSize(100, 100, 10, 10);
		System.out.println("m = " + m.toString());
		
		
		
		
		Tile t = tileRepository.findByXCoordAndYCoord(99, 99);
		System.out.println("t = " + t.toString());	

		t = tileRepository.findByXCoordAndYCoord(100, 100);
		System.out.println("t = " + t.toString());	

		List<Tile> tiles = tileRepository.findByXYMinMax(95, 105, 95, 105);
		System.out.println("t = " + Arrays.deepToString(tiles.toArray()));	
		
	}
	

    public static void main(String[] args) {
    	
    	
  

    }

}
