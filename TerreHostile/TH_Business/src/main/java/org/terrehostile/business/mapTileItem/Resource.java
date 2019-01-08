package org.terrehostile.business.mapTileItem;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import org.terrehostile.business.map.CoordinatesKey;

@Entity
@IdClass(CoordinatesKey.class)
@Table(name = "resources")
public class Resource {

	public final static int TYPE_FLOURS = 1;
	public final static int TYPE_FISH = 2;
	public final static int TYPE_GOLD = 3;

	@Column(name = "resourceId", nullable = false)
	private int resourceId;

	/** Coordinates */
	@Id
	@Column(name = "x_coord", nullable = false)
	private int xCoord;

	@Id
	@Column(name = "y_coord", nullable = false)
	private int yCoord;

	@Column(name = "userId")
	private Integer userId;

	@Column(name = "type", nullable = false)
	private int type;

	@Column(name = "quantity", nullable = false)
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

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Resource [resourceId=" + resourceId + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", userId=" + userId
				+ ", type=" + type + ", quantity=" + quantity + "]";
	}

}
