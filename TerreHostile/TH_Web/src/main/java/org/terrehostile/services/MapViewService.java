package org.terrehostile.services;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.Constants;
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
	
	public void save(List<Tile> tiles) {
		tileRepository.saveAll(tiles); 
	}
	 
	public void save(MapView mapView) {
		save(mapView.toTileList());
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
		int xMax = x + xSize - 1;
		int yMax = y + ySize - 1;
		
		System.out.println("yMin, yMax = " + yMin + ", " + yMax);
				
		int xMin1, xMax1, yMin1, yMax1;
		int xMin2, xMax2, yMin2, yMax2;
		
		boolean xOut = false;
		boolean yOut = false;
	
		
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
				xMin1 = xMin + Constants.XCOUNT;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax;
				xOut = true;
				System.out.println("yMin, yMax = " + yMin + ", " + yMax);
			}
			
			else if (xMax > Constants.XMAX)
			{
				xMin1 = xMin;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax - Constants.XCOUNT;
				xOut = true;
				System.out.println("yMin, yMax = " + yMin + ", " + yMax);
			}
			
			else
			{
				xMin1 = xMin;
				xMax1 = xMax;
				xMin2 = xMin;
				xMax2 = xMax;
				System.out.println("yMin, yMax = " + yMin + ", " + yMax);
			}

			if (yMin < 0)
			{
				yMin1 = yMin + Constants.YCOUNT;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax;
				yOut = true;
			}
			
			else if (yMax > Constants.YMAX)
			{
				yMin1 = yMin;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax - Constants.YCOUNT;
				yOut = true;
			}
			else
			{
				yMin1 = yMin;
				yMax1 = yMax;
				yMin2 = yMin;
				yMax2 = yMax;
			}

			System.out.println("yMin, yMax = " + yMin + ", " + yMax);
			
			if(xOut && yOut)
			{
				System.out.println("xOut && yOut");
				System.out.println("xMin, xMax, yMin, yMax = " + xMin1 + "," + xMax1 + "," + yMin1 + "," + yMax1);
				System.out.println(tileRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1).size());
				
				System.out.println("xMin, xMax, yMin, yMax = " + xMin2 + "," + xMax2 + "," + yMin1 + "," + yMax1);
				System.out.println(tileRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1).size());
				
				System.out.println("xMin, xMax, yMin, yMax = " + xMin1 + "," + xMax1 + "," + yMin2 + "," + yMax2);
				System.out.println(tileRepository.findByXYMinMax(xMin1, xMax1, yMin2, yMax2).size());
				
				System.out.println("xMin, xMax, yMin, yMax = " + xMin2 + xMax2 + yMin2 + yMax2);
				System.out.println(tileRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2).size());
				
				
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin2, yMax2));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2));
			}
			else if (xOut)
			{
				System.out.println("yMin, yMax = " + yMin + ", " + yMax);
				
				System.out.println("xOut");
				System.out.println("xMin, xMax, yMin, yMax = " + xMin1 + "," + xMax1 + "," + yMin + "," + yMax);
				System.out.println(tileRepository.findByXYMinMax(xMin1, xMax1, yMin, yMax).size());
				
				System.out.println("xMin, xMax, yMin, yMax = " + xMin2 + "," + xMax2 + "," + yMin + "," + yMax);
				System.out.println(tileRepository.findByXYMinMax(xMin2, xMax2, yMin, yMax).size());
				
				
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin, yMax));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin, yMax));
			}
			else if (yOut)
			{
				System.out.println("yOut");
				System.out.println("xMin, xMax, yMin, yMax = " + xMin + "," + xMax + "," + yMin1 + "," + yMax1);
				System.out.println(tileRepository.findByXYMinMax(xMin, xMax, yMin1, yMax1).size());
				
				System.out.println("xMin, xMax, yMin, yMax = " + xMin + "," + xMax + "," + yMin2 + "," + yMax2);
				System.out.println(tileRepository.findByXYMinMax(xMin, xMax, yMin2, yMax2).size());
				
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin, xMax, yMin1, yMax1));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin, xMax, yMin2, yMax2));
			}
			
			
			
			
			return new MapView(x, y, xSize, ySize, mapTileList);
		}
		
	}
	
	
	
}