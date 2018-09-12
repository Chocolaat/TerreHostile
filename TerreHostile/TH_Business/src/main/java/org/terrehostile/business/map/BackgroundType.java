package org.terrehostile.business.map;

public enum BackgroundType {

	
	GRASS_1(1, 0),
	GRASS_2(2, 0),
	GRASS_3(3, 0),
	GRASS_4(4, 0),
	GRASS_5(5, 0),
	GRASS_6(6, 0),
	GRASS_7(7, 0),
	GRASS_8(8, 0),
	BLUETILES(9, 0),
	BLANK_BLOCK(10, 0),
	HOLE(11, 0),
	LAND(12, 0),
	MARSH(13, 0),
	PATH_OUTDOOR(14, 0),
	ROCK(15, -1000),
	SAND(16, -2),
	SWAMP(17, 0),
	WATER_PURPLE(18, 0),
	WATER(19, 0);

	private int imgPositionInimageFilesJson;
	private int moveMod;
	
	BackgroundType(int imgPositionInimageFilesJson, int moveMod) {
		this.moveMod = moveMod;
		this.imgPositionInimageFilesJson = imgPositionInimageFilesJson;
	}
	
	BackgroundType(int imgPositionInimageFilesJson) {
		this.moveMod = 0;
		this.imgPositionInimageFilesJson = imgPositionInimageFilesJson;
	}

	public int getMoveMod() {
		return moveMod;
	}

	public int getImgPositionInimageFilesJson() {
		return imgPositionInimageFilesJson;
	}
	
}
