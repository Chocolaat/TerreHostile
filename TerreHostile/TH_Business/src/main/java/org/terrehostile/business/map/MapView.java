package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class MapView {
		
	
	private Integer[][] ground;
	private Integer[][] height;
	

	private int beginXCoord;
	private int beginYCoord;
	
	private int currentXCoord;
	private int currentYCoord;
	
	private int size;
	
	public MapView()
	{
		ground = new Integer[size][size];
	}
	
	public MapView(int beginXCoord, int beginYCoord, int size, Integer[][] mapTilesGround, Integer[][] mapTilesHeight)
	{
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.size = size;
		this.ground = mapTilesGround;
		this.height = mapTilesHeight;
	}
	
	public MapView(List<MapViewPart> mapViewPartList, int squaredSize, int currentXCoord, int currentYCoord)
	{
				
		this.beginXCoord = mapViewPartList.get(0).getBeginXCoord();
		this.beginYCoord = mapViewPartList.get(0).getBeginYCoord();
		this.currentXCoord = currentXCoord;
		this.currentYCoord = currentYCoord;
		
		this.size = MapViewPart.size * squaredSize ;
		ground = new Integer[size][size];
		height = new Integer[size][size];
		
		int xOffset = 0;
		int yOffset = 0;
		int j = 0; 
		
			for (int i = 0 ; i < mapViewPartList.size(); i++)
			{
				for (int y = 0; y < MapViewPart.size; y++)
				{
					for (int x = 0; x < MapViewPart.size; x++)
					{
						ground[(y + yOffset)][(x + xOffset)] = mapViewPartList.get(i).getMapViewPartTilesGround()[y][x];
						height[(y + yOffset)][(x + xOffset)] = mapViewPartList.get(i).getMapViewPartTilesHeight()[y][x];
					}
				}
				
				xOffset += MapViewPart.size;

				j++;
				
				if (j == squaredSize)
				{
					xOffset = 0;
					yOffset += MapViewPart.size;
					j = 0;
				}
			}

	}
	
	public List<MapViewPart> toMapViewPartList()
	{		
		List<MapViewPart> mapViewPartList = new ArrayList<>();
		int i = 0;
		for (int nb = 0 ; nb < this.size * this.size ; nb += (MapViewPart.size * MapViewPart.size))
		{
			mapViewPartList.add(i, new MapViewPart(0, 0, new Integer[MapViewPart.size][MapViewPart.size], new Integer[MapViewPart.size][MapViewPart.size]));
			i++;
		}
		
		int xpart = 0;
		int ypart = 0;
		int partNumber = 0;
		int yPartNumber = 0;
		
				for (int y = 0; y < this.size; y ++)
				{
					//scndYpart
					if(ypart >= MapViewPart.size)
					{
						xpart = 0;
						ypart = 0;
						yPartNumber++;
						partNumber = yPartNumber * ((size / MapViewPart.size));
					}
					
					for (int x = 0; x < this.size; x ++)
					{		
						// 2nd part
						if(xpart >= MapViewPart.size)
						{
							// 1st part done
							partNumber ++;
							xpart = 0;

						}
						
						mapViewPartList.get(partNumber).getMapViewPartTilesGround()[ypart][xpart] = this.ground[y][x];
						mapViewPartList.get(partNumber).getMapViewPartTilesHeight()[ypart][xpart] = this.height[y][x];
												
						if(xpart == 0 && ypart == 0)
						{
							mapViewPartList.get(partNumber).setBeginXCoord(x + beginXCoord);
							mapViewPartList.get(partNumber).setBeginYCoord(y + beginYCoord);
						}
						
						xpart++;
					}
					partNumber = yPartNumber * ((size / MapViewPart.size));
					xpart = 0;
					ypart++;
				}
		
		
		return mapViewPartList;
	}
	
	public static MapView createMapViewWithRandomTiles(int beginXCoord, int beginYCoord, int size)
	{
		MapView resultMapView = new MapView();
		
		resultMapView.beginXCoord = beginXCoord;
		resultMapView.beginYCoord = beginYCoord;
		resultMapView.size = size;
		resultMapView.ground = new Integer[size][size];
		resultMapView.height = new Integer[size][size];
		
		
		for (int x = 0; x < size; x++)
		{
			for (int y = 0; y < size; y++)
			{
				resultMapView.ground[x][y] = ThreadLocalRandom.current().nextInt(0, 3);
				resultMapView.height[x][y] = 0;
			}
		}
		return resultMapView;
	}
	
	public int getBeginXCoord() {
		return beginXCoord;
	}


	public void setBeginXCoord(int beginXCoord) {
		this.beginXCoord = beginXCoord;
	}


	public int getBeginYCoord() {
		return beginYCoord;
	}


	public void setBeginYCoord(int beginYCoord) {
		this.beginYCoord = beginYCoord;
	}


	public int getSize() {
		return size;
	}


	public void setSize(int size) {
		this.size = size;
	}	
	
	public Integer[][] getGround() {
		return ground;
	}

	public void setGround(Integer[][] ground) {
		this.ground = ground;
	}

	public Integer[][] getHeight() {
		return height;
	}

	public void setHeight(Integer[][] height) {
		this.height = height;
	}	

	public int getCurrentXCoord() {
		return currentXCoord;
	}

	public void setCurrentXCoord(int currentXCoord) {
		this.currentXCoord = currentXCoord;
	}

	public int getCurrentYCoord() {
		return currentYCoord;
	}

	public void setCurrentYCoord(int currentYCoord) {
		this.currentYCoord = currentYCoord;
	}

	public String toString()
	{
		ObjectMapper mapper = new ObjectMapper();
		StringBuilder result = new StringBuilder();
		result.append("MapView : ");
		result.append("\n");
		result.append("beginXCoord = " + beginXCoord);
		result.append("\n");
		result.append("beginYCoord = " + beginYCoord);
		result.append("\n");
		result.append("currentXCoord = " + currentXCoord);
		result.append("\n");
		result.append("currentYCoord = " + currentYCoord);
		result.append("\n");
		result.append("size = " + size);
		result.append("\n");
		try {
			result.append("mapViewPartTiles = " + mapper.writeValueAsString(ground));
			result.append("\n");
			result.append("mapViewPartTiles = " + mapper.writeValueAsString(height));
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result.toString(); 
	}
}
