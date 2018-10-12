package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;


public class MapView {
		
	private int beginXCoord;
	private int beginYCoord;
	
	private int size;
	
	private Integer[][] mapTilesGround;
	private Integer[][] mapTilesHeight;
	
	public MapView()
	{
		mapTilesGround = new Integer[size][size];
	}
	
	public MapView(int beginXCoord, int beginYCoord, int size, Integer[][] mapTilesGround, Integer[][] mapTilesHeight)
	{
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.size = size;
		this.mapTilesGround = mapTilesGround;
		this.mapTilesHeight = mapTilesHeight;
	}
	
	public MapView(List<MapViewPart> mapViewPartList, int squaredSize)
	{
		
		for (MapViewPart mpv : mapViewPartList)
		{
			System.out.println(mpv);
		}
		
		this.beginXCoord = mapViewPartList.get(0).getBeginXCoord();
		this.beginYCoord = mapViewPartList.get(0).getBeginYCoord();
		this.size = MapViewPart.size * squaredSize ;
		mapTilesGround = new Integer[size][size];
		mapTilesHeight = new Integer[size][size];
		
		int xOffset = 0;
		int yOffset = 0;
		int j = 0; 
		
			for (int i = 0 ; i < mapViewPartList.size(); i++)
			{
				for (int y = 0; y < MapViewPart.size; y++)
				{
					for (int x = 0; x < MapViewPart.size; x++)
					{
						
						System.out.println("i = " + i);
						System.out.println("j = " + j);
						System.out.println("beginn[x,y] = [" + y + ","+ x + "]");
						System.out.println("result[x,y] = [" + (y + yOffset) + ","+ (x + xOffset) + "]");
						System.out.println("mapTilesGround size " + mapTilesGround.length);
						System.out.println("getMapViewPartTilesGround size " + mapViewPartList.get(i).getMapViewPartTilesGround().length);
						System.out.println("getMapViewPartTilesHeight size " + mapViewPartList.get(i).getMapViewPartTilesHeight().length);
						System.out.println("---------------");
						
						mapTilesGround[(y + yOffset)][(x + xOffset)] = mapViewPartList.get(i).getMapViewPartTilesGround()[y][x];
						mapTilesHeight[(y + yOffset)][(x + xOffset)] = mapViewPartList.get(i).getMapViewPartTilesHeight()[y][x];
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
						partNumber = yPartNumber * MapViewPart.size;
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
						
						mapViewPartList.get(partNumber).getMapViewPartTilesGround()[ypart][xpart] = this.mapTilesGround[y][x];
						mapViewPartList.get(partNumber).getMapViewPartTilesHeight()[ypart][xpart] = this.mapTilesHeight[y][x];
						
						if(xpart == 0 && ypart == 0)
						{
							mapViewPartList.get(partNumber).setBeginXCoord(x + beginXCoord);
							mapViewPartList.get(partNumber).setBeginYCoord(y + beginYCoord);
						}
						
						xpart++;
					}
					partNumber = yPartNumber * MapViewPart.size;
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
		resultMapView.mapTilesGround = new Integer[size][size];
		resultMapView.mapTilesHeight = new Integer[size][size];
		
		
		for (int x = 0; x < size; x++)
		{
			for (int y = 0; y < size; y++)
			{
				resultMapView.mapTilesGround[x][y] = ThreadLocalRandom.current().nextInt(1, 9);
				resultMapView.mapTilesHeight[x][y] = 0;
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

	public Integer[][] getMapTilesGround() {
		return mapTilesGround;
	}

	public void setMapTilesGround(Integer[][] mapTilesGround) {
		this.mapTilesGround = mapTilesGround;
	}

	public Integer[][] getMapTilesHeight() {
		return mapTilesHeight;
	}

	public void setMapTilesHeight(Integer[][] mapTilesHeight) {
		this.mapTilesHeight = mapTilesHeight;
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
		result.append("size = " + size);
		result.append("\n");
		try {
			result.append("mapViewPartTiles = " + mapper.writeValueAsString(mapTilesGround));
			result.append("\n");
			result.append("mapViewPartTiles = " + mapper.writeValueAsString(mapTilesHeight));
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result.toString(); 
	}
}
