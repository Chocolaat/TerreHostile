package org.terrehostile.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.Constants;
import org.terrehostile.business.map.MapView;
import org.terrehostile.business.map.MapViewPart;
import org.terrehostile.repository.MapViewPartRepository;


@Service("mapViewService")
public class MapViewService {
	

	@Autowired
	private MapViewPartRepository mapViewPartRepository;
	

	public void save(MapViewPart mapViewPart) {
		mapViewPartRepository.save(mapViewPart); 
	}
	 
	public void save(MapView mapView) {
		for (MapViewPart mapViewPart : mapView.toMapViewPartList())
		{
			save(mapViewPart); 
		}
	}
	
	public MapView getMapByXYAndSize(int x, int y, int size) {
		
		List<MapViewPart> mapViewPartList = new ArrayList<>();
		
		List<Integer> xCoords = new ArrayList<>();
		List<Integer> yCoords = new ArrayList<>();
		
		
		int xMin = x - (((size - 1) * MapViewPart.size)/2);
		int yMin = y - (((size - 1) * MapViewPart.size)/2);
		int xMax = x + (((size - 1) * MapViewPart.size)/2) + MapViewPart.size / 2;
		int yMax = y + (((size - 1) * MapViewPart.size)/2) + MapViewPart.size / 2;
		
		int xMin1 = -1;
		int xMin2 = -1;
		int xMax1 = -1;
		int xMax2 = -1;
		int yMin1 = -1;
		int yMin2 = -1;
		int yMax1 = -1;
		int yMax2 = -1;
		
		int begin;
		
		// Classic case
		if (!((xMin < 1 || xMax > Constants.XMAX || yMin < 1 || yMax > Constants.YMAX)))
		{
			return new MapView(mapViewPartRepository.findByXYMinMax(xMin, xMax, yMin, yMax), size, x, y);
		}
		
		// Case where we're outbounds 
		else
		{
			if (xMin < 1)
			{
				xMin1 = xMin + Constants.XMAX + (MapViewPart.size);
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax;
				
				begin = xMin1;
				while (begin <= xMax1)
				{
					xCoords.add(begin);
					begin += MapViewPart.size;
				}
				
				begin = xMin2;
				while (begin <= xMax2)
				{
					xCoords.add(begin);
					begin += MapViewPart.size;
				}
				
			}
			
			else if (xMax > Constants.XMAX)
			{
				xMin1 = xMin;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax - Constants.XMAX - (MapViewPart.size);
				
				begin = xMin1;
				while (begin <= xMax1)
				{
					xCoords.add(begin);
					begin += MapViewPart.size;
				}
				
				begin = xMin2;
				while (begin <= xMax2)
				{
					xCoords.add(begin);
					begin += MapViewPart.size;
				}

			}
			
			else
			{
				begin = xMin;
				while (begin <= xMax)
				{
					xCoords.add(begin);
					begin += MapViewPart.size;
				}
			}

			if (yMin < 1)
			{
				yMin1 = yMin + Constants.YMAX + (MapViewPart.size);
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax;
				
				begin = yMin1;
				while (begin <= yMax1)
				{
					yCoords.add(begin);
					begin += MapViewPart.size;
				}
				
				begin = yMin2;
				while (begin <= yMax2)
				{
					yCoords.add(begin);
					begin += MapViewPart.size;
				}
				
				
			}
			
			else if (yMax > Constants.YMAX)
			{
				yMin1 = yMin;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax - Constants.YMAX - (MapViewPart.size);
				
				begin = yMin1;
				while (begin <= yMax1)
				{
					yCoords.add(begin);
					begin += MapViewPart.size;
				}
				
				begin = yMin2;
				while (begin <= yMax2)
				{
					yCoords.add(begin);
					begin += MapViewPart.size;
				}
				
			}
			
			else
			{
				begin = yMin;
				while (begin <= yMax)
				{
					yCoords.add(begin);
					begin += MapViewPart.size;
				}
			}
			

			for (int i = 0 ; i < yCoords.size() ; i++)
			{
				for (int j = 0 ; j < xCoords.size() ; j++)
				{					
					mapViewPartList.add(mapViewPartRepository.findByXYMinMax(xCoords.get(j), xCoords.get(j), yCoords.get(i), yCoords.get(i)).get(0));
				}
			}
			
			return new MapView(mapViewPartList, size, x, y);
		}
		
	}
	
	
	
}