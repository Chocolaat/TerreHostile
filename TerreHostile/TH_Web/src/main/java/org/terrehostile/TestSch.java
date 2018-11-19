package org.terrehostile;


import java.util.Arrays;
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
		//X AND Y OUTBOUNDS
		MapView mdeb = mapViewService.getMapByXYAndSize(95, 95, 5, 5);
		MapView mdeb2 = mapViewService.getMapByXYAndSize(95, 0, 5, 5);
		MapView mfin = mapViewService.getMapByXYAndSize(0, 95, 5, 5);
		MapView mfin2 = mapViewService.getMapByXYAndSize(0, 0, 5, 5);

	
    	MapView mtot = mapViewService.getMapByXYAndSize(95, 95, 10, 10);
    	
		
		
		//x OUTBOUNDS
//		MapView mdeb = mapViewService.getMapByXYAndSize(95, 0, 5, 5);
//		MapView mdeb2 = mapViewService.getMapByXYAndSize(95, 5, 5, 5);
//		MapView mfin = mapViewService.getMapByXYAndSize(0, 0, 5, 5);
//		MapView mfin2 = mapViewService.getMapByXYAndSize(0, 5, 5, 5);
//
//	
//    	MapView mtot = mapViewService.getMapByXYAndSize(95, 0, 10, 10);

		
		//y outbounds
//		MapView mdeb = mapViewService.getMapByXYAndSize(0, 95, 5, 5);
//		MapView mdeb2 = mapViewService.getMapByXYAndSize(0, 0, 5, 5);
//  	
//		MapView mfin = mapViewService.getMapByXYAndSize(5, 95, 5, 5);
//		MapView mfin2 = mapViewService.getMapByXYAndSize(5, 0, 5, 5);
//
//		
//    	MapView mtot = mapViewService.getMapByXYAndSize(0, 95, 10, 10);

    	
    	System.out.println(Arrays.toString(mtot.getGround()[0]));
    	System.out.println(Arrays.toString(mdeb.getGround()[0]) + Arrays.toString(mdeb2.getGround()[0]));
    	System.out.println("------------------------");
    	
    	System.out.println(Arrays.toString(mtot.getGround()[1]));
    	System.out.println(Arrays.toString(mdeb.getGround()[1]) + Arrays.toString(mdeb2.getGround()[1]));
    	System.out.println("------------------------");
    	
    	System.out.println(Arrays.toString(mtot.getGround()[2]));
    	System.out.println(Arrays.toString(mdeb.getGround()[2]) + Arrays.toString(mdeb2.getGround()[2]));
    	System.out.println("------------------------");
    	
    	System.out.println(Arrays.toString(mtot.getGround()[3]));
    	System.out.println(Arrays.toString(mdeb.getGround()[3]) + Arrays.toString(mdeb2.getGround()[3]));
    	System.out.println("------------------------");

    	
    	System.out.println(Arrays.toString(mtot.getGround()[4]));
    	System.out.println(Arrays.toString(mdeb.getGround()[4]) + Arrays.toString(mdeb2.getGround()[4]));
    	System.out.println("------------------------");

    	
    	System.out.println(Arrays.toString(mtot.getGround()[5]));
    	System.out.println(Arrays.toString(mfin.getGround()[0]) + Arrays.toString(mfin2.getGround()[0]));
    	System.out.println("------------------------");
    	System.out.println(Arrays.toString(mtot.getGround()[6]));
    	System.out.println(Arrays.toString(mfin.getGround()[1]) + Arrays.toString(mfin2.getGround()[1]));
    	System.out.println("------------------------");

    	System.out.println(Arrays.toString(mtot.getGround()[7]));
    	System.out.println(Arrays.toString(mfin.getGround()[2]) + Arrays.toString(mfin2.getGround()[2]));
    	System.out.println("------------------------");

    	System.out.println(Arrays.toString(mtot.getGround()[8]));
    	System.out.println(Arrays.toString(mfin.getGround()[3]) + Arrays.toString(mfin2.getGround()[3]));
    	System.out.println("------------------------");

    	System.out.println(Arrays.toString(mtot.getGround()[9]));
    	System.out.println(Arrays.toString(mfin.getGround()[4]) + Arrays.toString(mfin2.getGround()[4]));
    	System.out.println("------------------------");
    	
    	
    	
 	
    	System.out.println("mtot = " + mtot.toString());
    	
    	System.out.println("mdeb = " + mdeb.toString());
    	System.out.println("mdeb2 = " + mdeb2.toString());
    	System.out.println("mfin = " + mfin.toString());
    	System.out.println("mfin2 = " + mfin2.toString());
    	
    	
//    	
//    	//System.out.println("m1 = " + m1.toString());
//    	
//    	List<Tile> tileListdeb = mdeb.toTileList();
//    	List<Tile> tileListfin = mfin.toTileList();
//    	List<Tile> tileListtot = mtot.toTileList();
//    	
//    	for (Tile t : tileListdeb)
//    	{
//        	System.out.println("tileListdeb = " + t.toString());
//    	}
//    	for (Tile t : tileListfin)
//    	{
//        	System.out.println("tileListfin = " + t.toString());
//    	}
//    	for (Tile t : tileListtot)
//    	{
//        	System.out.println("tileListtot = " + t.toString());
//    	}
//
////
//    	MapView m2deb = new MapView(0,0,5,5, tileListdeb);
//    	MapView m2fin = new MapView(0,0,5,5, tileListfin);
//    	MapView m2tot = new MapView(0,0,10,10, tileListtot);
//    	
//    	
//    	System.out.println("m2deb = " + m2deb.toString());
//    	System.out.println("m1tm2finer = " + m2fin.toString());
//    	System.out.println("m2tot = " + m2tot.toString());
//		
		
//		MapView m1 = MapView.createMapViewWithRandomTiles(0, 0, 100, 100);
//		mapViewService.save(m1);
    	
	}
	

    public static void main(String[] args) {
    	
    	
    	MapView m1 = MapView.createMapViewWithRandomTiles(0, 0, 100, 100);
    	System.out.println("m1 = " + m1.toString());
    	
    	List<Tile> tileList = m1.toTileList();
    	
    	for (Tile t : tileList)
    	{
        	System.out.println("tile = " + t.toString());
    	}

    	MapView m2 = new MapView(0,0,10,10, tileList);
    	
    	

    	System.out.println("m1 = " + m1.toString());
    	System.out.println("m2 = " + m2.toString());

    }

}
