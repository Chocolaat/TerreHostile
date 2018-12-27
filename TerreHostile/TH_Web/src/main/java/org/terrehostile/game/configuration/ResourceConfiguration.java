package org.terrehostile.game.configuration;

public class ResourceConfiguration {

	private String name;
	private String imgPath;
	private int type;

	private int regeneration;

	public ResourceConfiguration() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getRegeneration() {
		return regeneration;
	}

	public void setRegeneration(int regeneration) {
		this.regeneration = regeneration;
	}

	@Override
	public String toString() {
		return "ResourceConfiguration [name=" + name + ", imgPath=" + imgPath + ", type=" + type + ", regeneration="
				+ regeneration + "]";
	}

}
