package org.terrehostile.business.mapTileItem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
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

	public Resource() {
	}

	public int getResourceId() {
		return resourceId;
	}

	public void setResourceId(int resourceId) {
		this.resourceId = resourceId;
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

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "Resource [resourceId=" + resourceId + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", type=" + type
				+ ", quantity=" + quantity + "]";
	}

}
