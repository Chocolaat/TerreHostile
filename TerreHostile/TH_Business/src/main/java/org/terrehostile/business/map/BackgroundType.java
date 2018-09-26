package org.terrehostile.business.map;

public enum BackgroundType {

	
	GRASS(0, 0),
	GROUND(1, 0),
	OCEAN(2, 0),
	SAND(3, 0);

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
