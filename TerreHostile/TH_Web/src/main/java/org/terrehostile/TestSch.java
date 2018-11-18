package org.terrehostile;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.map.MapView;
import org.terrehostile.business.map.Tile;
import org.terrehostile.services.MapViewService;


@Component
public class TestSch {
	
	@Autowired
	MapViewService mapViewService;
	
	



	
	
	public void launch()
	{
//    	MapView m1 = mapViewService.getMapByXYAndSize(0, 0, 10, 10);
//    	System.out.println("m1 = " + m1.toString());
//    	
//    	List<Tile> tileList = m1.toTileList();
//    	
//    	for (Tile t : tileList)
//    	{
//        	System.out.println("tile = " + t.toString());
//    	}
//
//    	MapView m2 = new MapView(0,0,10,10, tileList);
//    	System.out.println("m2 = " + m2.toString());
//		
		
		
		MapView m1 = MapView.createMapViewWithRandomTiles(0, 0, 10, 10);
		mapViewService.save(m1);
    	
	}
	

    public static void main(String[] args) {
    	
    	
    	MapView m1 = MapView.createMapViewWithRandomTiles(0, 0, 10, 10);
    	System.out.println("m1 = " + m1.toString());
    	
    	List<Tile> tileList = m1.toTileList();
    	
    	for (Tile t : tileList)
    	{
        	System.out.println("tile = " + t.toString());
    	}

    	MapView m2 = new MapView(0,0,10,10, tileList);
    	System.out.println("m2 = " + m2.toString());

    }

}
