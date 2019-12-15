package org.terrehostile.map.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(CoordinatesKey.class)
@Table(name = "mapview")
public class Tile {

	/** Coordinates */
	@Id
	private int xCoord;

	@Id
	private int yCoord;

	/** Background */
	@Column(name = "background", nullable = false)
	private GroundType background;

	/** Height */
	@Column(name = "height", nullable = false)
	private int height;

	public Tile() {
		this.background = GroundType.values()[0];
		this.height = 0;
	}

	public Tile(int xCoord, int yCoord) {
		this.background = GroundType.values()[0];
		this.height = 0;
		this.xCoord = xCoord;
		this.yCoord = yCoord;
	}

	public Tile(int xCoord, int yCoord, GroundType background, int height) {
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.background = background;
		this.height = height;
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

	public GroundType getBackground() {
		return background;
	}

	public void setBackground(GroundType background) {
		this.background = background;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	@Override
	public String toString() {
		return "Tile [xCoord=" + xCoord + ", yCoord=" + yCoord + ", background=" + background + ", height=" + height
				+ "]";
	}

}
