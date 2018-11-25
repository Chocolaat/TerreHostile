package org.terrehostile.business.mapTileItem;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

public abstract class Troop {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
	@Column(name="x_coord", nullable = false)
	private int xCoord ;
	
	@Column(name="y_coord", nullable = false)
	private int yCoord;
	
	@Column(name="y_coord", nullable = false)
	private List<Unit> units;
	
	public Troop() {
		super();
	}

	public Troop(int id, int xCoord, int yCoord) {
		super();
		this.id = id;
		this.xCoord = xCoord;
		this.yCoord = yCoord;
	}

	public Troop(int id, int xCoord, int yCoord, List<Unit> units) {
		super();
		this.id = id;
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.units = units;
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

	public List<Unit> getUnits() {
		return units;
	}

	public void setUnits(List<Unit> units) {
		this.units = units;
	}

	@Override
	public String toString() {
		return "Troop [id=" + id + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", units=" + units + "]";
	}
	
	
	

}
