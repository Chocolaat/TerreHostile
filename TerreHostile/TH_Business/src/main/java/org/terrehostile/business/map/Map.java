package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;


public class Map {
	
	private int width;
	private int height;
	private List<Tile> map;
	
	public String toJsonView()
	{
		StringBuilder jsonView = new StringBuilder();
		StringBuilder jsonViewGround = new StringBuilder();
		StringBuilder jsonViewHeight = new StringBuilder();

		jsonView.append("{ ");
		jsonViewGround.append("\"ground\": ");
		jsonViewHeight.append("\"height\": ");
		
		
		int indexInMap = 0;
		
		for (int i = 0; i < width; i++)
		{

			StringBuilder jsonViewColGround = new StringBuilder();
			StringBuilder jsonViewColHeight = new StringBuilder();
			
			for (int j = 0; j < height; j++)
			{
				Tile t = map.get(indexInMap);
				indexInMap++;
								
				if (j == 0)
				{
					jsonViewColGround.append(" [ " + t.getBackgroundValue() + ", ");
					jsonViewColHeight.append(" [ " + t.getHeight() + ", ");
				}
				else if (j == height - 1)
				{
					jsonViewColGround.append(t.getBackgroundValue() + " ]");
					jsonViewColHeight.append(t.getHeight() + " ]");
				}
				else
				{
					jsonViewColGround.append(t.getBackgroundValue() + ", ");
					jsonViewColHeight.append(t.getHeight() + ", ");
				}
			}
			
			if (i == 0)
			{
				jsonViewGround.append("[ ").append(jsonViewColGround).append(", ");
				jsonViewHeight.append("[ ").append(jsonViewColHeight).append(", ");
			}
			else if (i == width - 1)
			{
				jsonViewGround.append(jsonViewColGround).append(" ]");
				jsonViewHeight.append(jsonViewColHeight).append(" ]");
			}
			else
			{
				jsonViewGround.append(jsonViewColGround).append(", ");
				jsonViewHeight.append(jsonViewColHeight).append(", ");
			}	
		}
		
		jsonView.append(jsonViewGround).append(", ").append(jsonViewHeight).append(" }");
		return jsonView.toString();
	}
	
	
	public static Map createMapBack()
	{
		List<BackgroundType> backgroundTypes = new ArrayList<BackgroundType>();
		backgroundTypes.add(BackgroundType.GROUND);		
		
		return createMapFromBackgrounds(10, 10, backgroundTypes);
	}
	
	public static Map createMapStr()
	{
		List<String> backgroundStrTypes = new ArrayList<String>();
		
		int randomNum = ThreadLocalRandom.current().nextInt(1, 9);
		String randomGrass = "GRASS_" + randomNum;
		
		backgroundStrTypes.add(randomGrass);
		backgroundStrTypes.add("ROCK");
		
		
		return createMapFromStringBackgrounds(10, 10, backgroundStrTypes);
	}
	
	public static Map createMapFromStringBackgrounds (int width, int height, List<String> strBackgroundTypes)
	{
		List<BackgroundType> lvlBackgroundTypes = new ArrayList<BackgroundType>();
		for (String bgStrType : strBackgroundTypes)
		{
			lvlBackgroundTypes.add(BackgroundType.valueOf(bgStrType));
		} 
		
		return createMapFromBackgrounds (width, height, lvlBackgroundTypes);
	}
	
	public static Map createMapFromBackgrounds (int width, int height, List<BackgroundType> lvlBackgroundTypes)
	{
	
		Map currentMap = new Map();
		currentMap.height = height;
		currentMap.width = height;
		currentMap.map = new ArrayList<Tile>();
		
		for (int w = 0 ; w < width ; w++)
		{
			for (int h = 0 ; h < height ; h++)
			{
				for (BackgroundType bgType : lvlBackgroundTypes)
				{
					currentMap.map.add(new Tile(bgType, 0));
				}
			}
		}
		
		return currentMap;
	}
	
	public static Map createMapRandomBackgrounds (int width, int height)
	{
	
		Map currentMap = new Map();
		currentMap.height = height;
		currentMap.width = height;
		currentMap.map = new ArrayList<Tile>();
		
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
				
				currentMap.map.add(new Tile(bgType, 0));
			}
		}
		
		return currentMap;
	}
	
	
	public Map (int width, int height)
	{
		this.height = height;
		this.width = width;
		this.map = new ArrayList<Tile>();
	}
	
	public Map (int width, int height, List<Tile> tileList)
	{
		this.height = height;
		this.width = width;
		this.map = tileList;
	}
	
	public Map ()
	{
	}
	

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public List<Tile> getMap() {
		return map;
	}

	public void setMap(List<Tile> map) {
		this.map = map;
	}
	
}
