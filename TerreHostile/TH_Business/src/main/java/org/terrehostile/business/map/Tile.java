package org.terrehostile.business.map;

import java.util.List;

public class Tile {
	
	private List<TileLevel> levelList;
	
	public Tile (List<TileLevel> levelList)
	{
		this.levelList = levelList;
	}

	public List<TileLevel> getLevelList() {
		return levelList;
	}

	public void setLevelList(List<TileLevel> levelList) {
		this.levelList = levelList;
	}
	
}
