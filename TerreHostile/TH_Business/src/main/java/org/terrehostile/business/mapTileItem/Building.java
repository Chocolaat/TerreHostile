package org.terrehostile.business.mapTileItem;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import org.terrehostile.business.map.CoordinatesKey;

@Entity
@IdClass(CoordinatesKey.class)
@Table(name = "buildings")
public class Building {

	public final static int TYPE_BARRACK = 1;
	public final static int TYPE_ARCHERY = 2;

	public final static int STATE_PLANNED = 1;
	public final static int STATE_UNDER_CONSTRUCTION = 2;
	public final static int STATE_BUILT = 3;

	@Column(name = "id", nullable = false)
	private int id;

	/** Coordinates */
	@Id
	@Column(name = "x_coord", nullable = false)
	private int xCoord;

	@Id
	@Column(name = "y_coord", nullable = false)
	private int yCoord;

	@Column(name = "type", nullable = false)
	private int type;

	@Column(name = "health", nullable = false)
	private int health;

	@Column(name = "state", nullable = false)
	private int state;

	public Building() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	@Override
	public String toString() {
		return "Building [id=" + id + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", type=" + type + ", health="
				+ health + ", state=" + state + "]";
	}

}
