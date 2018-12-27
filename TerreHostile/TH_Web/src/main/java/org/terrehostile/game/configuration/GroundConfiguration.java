package org.terrehostile.game.configuration;

public class GroundConfiguration {

	private String name;
	private String imgPath;
	private String imgPathSquare;
	private int type;

	private int movement;

	public GroundConfiguration() {
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

	public String getImgPathSquare() {
		return imgPathSquare;
	}

	public void setImgPathSquare(String imgPathSquare) {
		this.imgPathSquare = imgPathSquare;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getMovement() {
		return movement;
	}

	public void setMovement(int movement) {
		this.movement = movement;
	}

	@Override
	public String toString() {
		return "GroundConfiguration [name=" + name + ", imgPath=" + imgPath + ", imgPathSquare=" + imgPathSquare
				+ ", type=" + type + ", movement=" + movement + "]";
	}

}
