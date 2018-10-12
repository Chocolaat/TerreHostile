package org.terrehostile;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.stereotype.Component;
import org.terrehostile.business.map.MapView;
import org.terrehostile.business.map.MapViewPart;
import org.terrehostile.services.MapViewService;


@Component
public class TestSch {
	
	@Autowired
	MapViewService mapViewService;
	
	public void launch()
	{
//		MapViewPart mvp = MapViewPart.createMapViewPartWithRandomTiles(0,0);
//		mapViewService.save(mvp);
		
		
//		MapView mapView = MapView.createMapViewWithRandomTiles(0, 0, 100);
//		mapViewService.save(mapView);
		
		
		System.out.println(mapViewService.getMapByXYAndSize(50,50, 3).toString());
		
	}
	

    public static void main(String[] args) {
		MapView mv = MapView.createMapViewWithRandomTiles(100, 100, 100);
		List<MapViewPart> lmvp = mv.toMapViewPartList();
		
		MapView mv2 = new MapView(lmvp, 10);

		System.out.println(mv.toString());
		System.out.println("____________");
		System.out.println(mv2.toString());

    }

}
