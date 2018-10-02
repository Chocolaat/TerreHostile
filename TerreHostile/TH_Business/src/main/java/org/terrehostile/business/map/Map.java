package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;


public class Map {
	

	private int beginXCoord;
	private int beginYCoord;
	
	private int currentXCoord;
	private int currentYCoord;
	
	private int size;
	
	private List<Tile> mapTiles;
	private String jsonView;
	
		
	public static Map createMapBack(int beginXCoord, int beginYCoord, int size)
	{
		List<BackgroundType> backgroundTypes = new ArrayList<BackgroundType>();
		backgroundTypes.add(BackgroundType.GROUND);		
		
		return createMapFromBackgrounds(backgroundTypes, beginXCoord, beginYCoord, size);
	}
	
	public static Map createMapStr(int beginXCoord, int beginYCoord, int size)
	{
		List<String> backgroundStrTypes = new ArrayList<String>();
		
		int randomNum = ThreadLocalRandom.current().nextInt(1, 9);
		String randomGrass = "GRASS_" + randomNum;
		
		backgroundStrTypes.add(randomGrass);
		backgroundStrTypes.add("ROCK");
		
		
		return createMapFromStringBackgrounds(backgroundStrTypes, beginXCoord, beginYCoord, size);
	}
	
	public static Map createMapFromStringBackgrounds (List<String> strBackgroundTypes, int beginXCoord, int beginYCoord, int size)
	{
		List<BackgroundType> lvlBackgroundTypes = new ArrayList<BackgroundType>();
		for (String bgStrType : strBackgroundTypes)
		{
			lvlBackgroundTypes.add(BackgroundType.valueOf(bgStrType));
		} 
		
		return createMapFromBackgrounds (lvlBackgroundTypes, beginXCoord, beginYCoord, size);
	}
	
	public static Map createMapFromBackgrounds (List<BackgroundType> lvlBackgroundTypes, int beginXCoord, int beginYCoord, int size)
	{
	
		Map currentMap = new Map();
		currentMap.mapTiles = new ArrayList<Tile>();
		currentMap.beginXCoord = beginXCoord;
		currentMap.beginYCoord = beginYCoord;
		currentMap.size = size;
		
		for (int w = 0 ; w < size * 10 ; w++)
		{
			for (int h = 0 ; h < size * 10 ; h++)
			{
				for (BackgroundType bgType : lvlBackgroundTypes)
				{
					currentMap.mapTiles.add(new Tile(bgType, 0));
				}
			}
		}
		
		return currentMap;
	}
	
	public static Map createMapRandomBackgrounds (int beginXCoord, int beginYCoord, int size)
	{
	
		Map currentMap = new Map();
		currentMap.mapTiles = new ArrayList<Tile>();
		currentMap.beginXCoord = beginXCoord;
		currentMap.beginYCoord = beginYCoord;
		currentMap.size = size;
		
		for (int w = 0 ; w < size * 10 ; w++)
		{
			for (int h = 0 ; h < size * 10  ; h++)
			{
				
				int randomNum = ThreadLocalRandom.current().nextInt(0, 3);
				BackgroundType bgType;
				
				switch (randomNum)
				{
				case 0 : bgType = BackgroundType.GRASS; break;
				case 1 : bgType = BackgroundType.GROUND; break;
				case 2 : bgType = BackgroundType.OCEAN; break;
				case 3 : bgType = BackgroundType.SAND; break;
				default: bgType = BackgroundType.GROUND; break;
				}
				
				currentMap.mapTiles.add(new Tile(bgType, 0));
			}
		}
		
		return currentMap;
	}
		
	public Map (List<Tile> tileList)
	{
		this.mapTiles = tileList;
	}
	
	public Map ()
	{
		this.mapTiles = new ArrayList<Tile>();
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

	public List<Tile> getMapTiles() {
		return mapTiles;
	}

	public void setMapTiles(List<Tile> mapTiles) {
		this.mapTiles = mapTiles;
	}

	public String getJsonView() {
		return jsonView;
	}

	public void setJsonView(String jsonView) {
		this.jsonView = jsonView;
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

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}
	
	
	
	
}
