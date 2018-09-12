package org.terrehostile.business.map;

public class TileLevel {
	
	private BackgroundType background;
	private int backgroundValue;
	private int levelValue;
	private OnTileLevelObject listElems;
	
	public TileLevel (BackgroundType background, int levelValue)
	{
		this.background = background;
		this.backgroundValue = background.getImgPositionInimageFilesJson();
		this.levelValue = levelValue;
	}

	public BackgroundType getBackground() {
		return background;
	}

	public void setBackground(BackgroundType background) {
		this.background = background;
	}

	public OnTileLevelObject getListElems() {
		return listElems;
	}

	public void setListElems(OnTileLevelObject listElems) {
		this.listElems = listElems;
	}

	public int getLevelValue() {
		return levelValue;
	}

	public void setLevelValue(int levelValue) {
		this.levelValue = levelValue;
	}

	public int getBackgroundValue() {
		return backgroundValue;
	}

	public void setBackgroundValue(int backgroundValue) {
		this.backgroundValue = backgroundValue;
	}
	
}
