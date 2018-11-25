package org.terrehostile.business.mapTileItem;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table(name = "resources")
public class Resource {
	
	@Id
	@GeneratedValue
	private int id;	
	
	@Column(name="x_coord", nullable = false)
	private int xCoord ;
	
	@Column(name="y_coord", nullable = false)
	private int yCoord;
	
	@Column(name="type", nullable = false)
	private ResourceType type;
	
	@Column(name="quantity", nullable = false)
	private int quantity;
	
	public Resource() {
		super();
	}

	public Resource(int id, int xCoord, int yCoord, ResourceType type, int quantity) {
		super();
		this.id = id;
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.type = type;
		this.quantity = quantity;
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

	public ResourceType getType() {
		return type;
	}

	public void setType(ResourceType type) {
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
		return "Resource [id=" + id + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", type=" + type + ", quantity="
				+ quantity + "]";
	}

	

}
