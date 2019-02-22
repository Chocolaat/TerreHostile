package org.terrehostile.game.configuration;

public class UnitConfiguration {

	private String name;
	private String imgPath;
	private int type;

	private int vision;
	private int movement;

	private int totalHealth;
	private int power;
	private int armor;
	private int range;

	public UnitConfiguration() {
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

	public int getVision() {
		return vision;
	}

	public void setVision(int vision) {
		this.vision = vision;
	}

	public int getMovement() {
		return movement;
	}

	public void setMovement(int movement) {
		this.movement = movement;
	}

	public int getTotalHealth() {
		return totalHealth;
	}

	public void setTotalHealth(int totalHealth) {
		this.totalHealth = totalHealth;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

	public int getArmor() {
		return armor;
	}

	public void setArmor(int armor) {
		this.armor = armor;
	}

	public int getRange() {
		return range;
	}

	public void setRange(int range) {
		this.range = range;
	}

	@Override
	public String toString() {
		return "UnitConfiguration [name=" + name + ", imgPath=" + imgPath + ", type=" + type + ", vision=" + vision
				+ ", movement=" + movement + ", totalHealth=" + totalHealth + ", power=" + power + ", armor=" + armor
				+ ", range=" + range + "]";
	}

}
