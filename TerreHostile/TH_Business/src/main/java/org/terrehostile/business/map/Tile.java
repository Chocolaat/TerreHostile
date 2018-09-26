package org.terrehostile.business.map;

public class Tile {
	
	private BackgroundType background;
	private int backgroundValue;
	private OnTileObject listElems;
	private int height;
	
	public Tile (BackgroundType background, int height)
	{
		this.background = background;
		this.backgroundValue = background.getImgPositionInimageFilesJson();
		this.height = height;
	}
	
	

	public int getHeight() {
		return height;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}

	public BackgroundType getBackground() {
		return background;
	}

	public void setBackground(BackgroundType background) {
		this.background = background;
	}

	public OnTileObject getListElems() {
		return listElems;
	}

	public void setListElems(OnTileObject listElems) {
		this.listElems = listElems;
	}

	public int getBackgroundValue() {
		return backgroundValue;
	}

	public void setBackgroundValue(int backgroundValue) {
		this.backgroundValue = backgroundValue;
	}
	
}
