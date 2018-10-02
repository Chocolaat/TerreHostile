package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;


public class Map {
	

	private int beginXCoord;
	private int beginYCoord;
	
	private int currentXCoord;
	private int currentYCoord;
	
	private int width;
	private int height;
	
	private List<Tile> mapTiles;
	private String jsonView;
	
		
	public static Map createMapBack(int beginXCoord, int beginYCoord, int width, int height)
	{
		List<BackgroundType> backgroundTypes = new ArrayList<BackgroundType>();
		backgroundTypes.add(BackgroundType.GROUND);		
		
		return createMapFromBackgrounds(backgroundTypes, beginXCoord, beginYCoord, width, height);
	}
	
	public static Map createMapStr(int beginXCoord, int beginYCoord, int width, int height)
	{
		List<String> backgroundStrTypes = new ArrayList<String>();
		
		int randomNum = ThreadLocalRandom.current().nextInt(1, 9);
		String randomGrass = "GRASS_" + randomNum;
		
		backgroundStrTypes.add(randomGrass);
		backgroundStrTypes.add("ROCK");
		
		
		return createMapFromStringBackgrounds(backgroundStrTypes, beginXCoord, beginYCoord, width, height);
	}
	
	public static Map createMapFromStringBackgrounds (List<String> strBackgroundTypes, int beginXCoord, int beginYCoord, int width, int height)
	{
		List<BackgroundType> lvlBackgroundTypes = new ArrayList<BackgroundType>();
		for (String bgStrType : strBackgroundTypes)
		{
			lvlBackgroundTypes.add(BackgroundType.valueOf(bgStrType));
		} 
		
		return createMapFromBackgrounds (lvlBackgroundTypes, beginXCoord, beginYCoord, width, height);
	}
	
	public static Map createMapFromBackgrounds (List<BackgroundType> lvlBackgroundTypes, int beginXCoord, int beginYCoord, int width, int height)
	{
	
		Map currentMap = new Map();
		currentMap.mapTiles = new ArrayList<Tile>();
		currentMap.beginXCoord = beginXCoord;
		currentMap.beginYCoord = beginYCoord;
		currentMap.width = width;
		currentMap.height = height;
		
		for (int w = 0 ; w < width ; w++)
		{
			for (int h = 0 ; h < height ; h++)
			{
				for (BackgroundType bgType : lvlBackgroundTypes)
				{
					currentMap.mapTiles.add(new Tile(bgType, 0));
				}
			}
		}
		
		return currentMap;
	}
	
	public static Map createMapRandomBackgrounds (int beginXCoord, int beginYCoord, int width, int height)
	{
	
		Map currentMap = new Map();
		currentMap.mapTiles = new ArrayList<Tile>();
		currentMap.beginXCoord = beginXCoord;
		currentMap.beginYCoord = beginYCoord;
		currentMap.width = width;
		currentMap.height = height;
		
		for (int w = 0 ; w < width ; w++)
		{
			for (int h = 0 ; h < height ; h++)
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


	public int getWidth() {
		return width;
	}

	public int getHeight() {
		return height;
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

	public void setWidth(int width) {
		this.width = width;
	}

	public void setHeight(int height) {
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
	
	
}
