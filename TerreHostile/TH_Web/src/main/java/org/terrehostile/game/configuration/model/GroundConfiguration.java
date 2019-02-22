package org.terrehostile.game.configuration.model;

public class GroundConfiguration {

	private String name;
	private String imgPath;
	private String imgPathGround;
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

	public String getImgPathGround() {
		return imgPathGround;
	}

	public void setImgPathGround(String imgPathGround) {
		this.imgPathGround = imgPathGround;
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
		return "GroundConfiguration [name=" + name + ", imgPath=" + imgPath + ", imgPathGround=" + imgPathGround
				+ ", type=" + type + ", movement=" + movement + "]";
	}

}
