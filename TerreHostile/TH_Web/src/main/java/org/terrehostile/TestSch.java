package org.terrehostile;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.terrehostile.business.map.MapView;
import org.terrehostile.services.MapViewService;


@Component
public class TestSch {
	
	@Autowired
	MapViewService mapViewService;
	
	public void launch()
	{

    	MapView m2 = mapViewService.getMapByXYAndSize(10, 10, 5);
    	System.out.println(m2.toString());
		
	}
	

    public static void main(String[] args) {
    	
    	


    }

}
