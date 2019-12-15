package org.terrehostile.business.map.tileItem.models;

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
@Table(name = "resources")
public class Resource {

	public final static int TYPE_FLOURS = 1;
	public final static int TYPE_FISH = 2;
	public final static int TYPE_GOLD = 3;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int resourceId;

	/** Coordinates */
	private int xCoord;
	private int yCoord;

	private int type;

	private int quantity;

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
