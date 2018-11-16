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

    for (int i = 0; i < 100; i++)
    {
    	for (int j = 0; j < 100; j++)
    	{
    		
    	}
    }
		
	}
	

    public static void main(String[] args) {
    	
    	


    }

}
