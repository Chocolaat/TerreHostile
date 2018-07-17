package org.terrehostile.business.map;

public enum BackgroundType {

	
	GRASS(0),
	SAND(-1),
	FOREST(-2),
	SEA(0),
	COST_SEA(-2),
	STONE(-1000);

	private int moveMod;
	
	BackgroundType(int moveMod) {
		this.moveMod = moveMod;
	}

	public int getMoveMod() {
		return moveMod;
	}
	
}
