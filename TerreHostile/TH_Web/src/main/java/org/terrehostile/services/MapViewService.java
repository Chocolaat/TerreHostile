package org.terrehostile.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.Constants;
import org.terrehostile.business.map.MapView;
import org.terrehostile.business.map.Tile;
import org.terrehostile.repository.TileRepository;


@Service("mapViewService")
public class MapViewService {
	

	@Autowired
	private TileRepository tileRepository;
	

	public void save(Tile tile) {
		tileRepository.save(tile); 
	}
	 
	public void save(MapView mapView) {
		for (Tile tile : mapView.toTileList())
		{
			save(tile); 
		}
	}
	
	public MapView getMapByXYAndSize(int x, int y, int xSize, int ySize) {
		
		
		List<Tile> mapTileList = new ArrayList<>();
//		
//		List<Integer> xCoords = new ArrayList<>();
//		List<Integer> yCoords = new ArrayList<>();
		
		x = (x < 0) ? x + Constants.XMAX : x;
		y = (y < 0) ? y + Constants.YMAX : y;
		x = (x > Constants.XMAX) ? x - Constants.XMAX : x;
		y = (y > Constants.YMAX) ? y - Constants.YMAX : y;
		
		
		int xMin = x;
		int yMin = y;
		int xMax = x + xSize;
		int yMax = y + ySize;
		
		ArrayList<Integer> xList = new ArrayList<>();
		ArrayList<Integer> yList = new ArrayList<>();
		
		int xMin1, xMax1, yMin1, yMax1;
		int xMin2, xMax2, yMin2, yMax2;
	
		
		// Classic case
		if (!((xMin < 0 || xMax > Constants.XMAX || yMin < 0 || yMax > Constants.YMAX)))
		{
			return new MapView(x, y, xSize, ySize, tileRepository.findByXYMinMax( xMin, xMax, yMin, yMax));
		}
		
		// Case where we're outbounds 
		else
		{
			if (xMin < 0)
			{
				xMin1 = xMin + Constants.XMAX;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax;
			}
			
			else if (xMax > Constants.XMAX)
			{
				xMin1 = xMin;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax - Constants.XMAX;
			}
			
			else
			{
				xMin1 = xMin;
				xMax1 = xMax;
				xMin2 = xMin;
				xMax2 = xMax;
			}

			if (yMin < 0)
			{
				yMin1 = yMin + Constants.YMAX;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax;
			}
			
			else if (yMax > Constants.YMAX)
			{
				yMin1 = yMin;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax - Constants.YMAX;
			}
			else
			{
				yMin1 = yMin;
				yMax1 = yMax;
				yMin2 = yMin;
				yMax2 = yMax;
			}
			
			mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1));
			mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
			mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
			mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2));
			
			
			return new MapView(x, y, xSize, ySize, mapTileList);
		}
		
	}
	
	
	
}