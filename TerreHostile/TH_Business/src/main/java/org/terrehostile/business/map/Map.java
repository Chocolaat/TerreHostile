package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.terrehostile.business.admin.authentification.Role;
import org.terrehostile.business.admin.authentification.User;

public class Map {
	
	private int width;
	private int height;
	private List<Tile> map;
	
	public static Map createMapBack()
	{
		List<BackgroundType> backgroundTypes = new ArrayList<BackgroundType>();
		backgroundTypes.add(BackgroundType.STONE);
		backgroundTypes.add(BackgroundType.GRASS);
		
		
		return createMapFromBackgrounds(10, 10, backgroundTypes);
	}
	
	public static Map createMapStr()
	{
		List<String> backgroundStrTypes = new ArrayList<String>();
		backgroundStrTypes.add("GRASS");
		backgroundStrTypes.add("STONE");
		
		
		return createMapFromStringBackgrounds(10, 10, backgroundStrTypes);
	}
	
	public static User createUser()
	{
		User user = new User();
		user.setEmail("toto");
		
		Role role1 = new Role();
		role1.setRole("ADMIN");
		Role role2 = new Role();
		role2.setRole("USER");
		
		Set<Role> roles= new HashSet<Role>();
		roles.add(role1);
		roles.add(role2);
		
		user.setRoles(roles);
		
		return user;
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
				ArrayList<TileLevel> tileLevelList = new ArrayList<TileLevel>();
				int level = 0;
				for (BackgroundType bgType : lvlBackgroundTypes)
				{
					tileLevelList.add(new TileLevel(bgType, level));
					level --;
				}
				
				Tile tile = new Tile(tileLevelList);
				currentMap.map.add(tile);
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
