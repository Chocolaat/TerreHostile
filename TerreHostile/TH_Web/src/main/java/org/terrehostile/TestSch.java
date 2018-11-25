package org.terrehostile;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.BuildingState;
import org.terrehostile.business.mapTileItem.BuildingType;
import org.terrehostile.services.BuildingService;
import org.terrehostile.services.MapViewService;


@Component
public class TestSch {
	
	@Autowired
	MapViewService mapViewService;
	@Autowired
	BuildingService buildingService;
	
		
	
	public void launch()
	{
		Building b = new Building();
		b.setxCoord(100);
		b.setyCoord(100);
		b.setState(BuildingState.Planned);
		b.setType(BuildingType.Archery);
		
		buildingService.save(b);
	}
	

    public static void main(String[] args) {
    	
    	
  

    }

}
