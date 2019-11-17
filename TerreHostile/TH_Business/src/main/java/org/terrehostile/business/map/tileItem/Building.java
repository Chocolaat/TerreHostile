package org.terrehostile.business.map.tileItem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
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

	private int type;

	private int townId;

	private int health;
	private int state;

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

}
