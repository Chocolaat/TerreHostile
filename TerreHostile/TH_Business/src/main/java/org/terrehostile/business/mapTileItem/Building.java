package org.terrehostile.business.mapTileItem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "buildings")
public class Building {

	public final static int TYPE_BARRACK = 1;
	public final static int TYPE_ARCHERY = 2;

	public final static int STATE_PLANNED = 1;
	public final static int STATE_UNDER_CONSTRUCTION = 2;
	public final static int STATE_BUILT = 3;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int buildingId;

	/** Coordinates */
	private int xCoord;
	private int yCoord;

	private int townId;

	private int type;
	private int health;
	private int state;

	public Building() {
	}

	public int getxCoord() {
		return xCoord;
	}

	public void setxCoord(int xCoord) {
		this.xCoord = xCoord;
	}

	public int getyCoord() {
		return yCoord;
	}

	public void setyCoord(int yCoord) {
		this.yCoord = yCoord;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public int getBuildingId() {
		return buildingId;
	}

	public void setBuildingId(int buildingId) {
		this.buildingId = buildingId;
	}

	public int getTownId() {
		return townId;
	}

	public void setTownId(int townId) {
		this.townId = townId;
	}

	@Override
	public String toString() {
		return "Building [buildingId=" + buildingId + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", townId=" + townId
				+ ", type=" + type + ", health=" + health + ", state=" + state + "]";
	}

}
