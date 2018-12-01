package org.terrehostile.business.map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;

@Entity
@IdClass(CoordinatesKey.class)
@Table(name = "mapview")
public class Tile {

	/** Coordinates */
	@Id
	@Column(name = "x_coord", nullable = false)
	private int xCoord;

	@Id
	@Column(name = "y_coord", nullable = false)
	private int yCoord;

	/** Background */
	@Column(name = "background", nullable = false)
	private GroundType background;

	/** Height */
	@Column(name = "height", nullable = false)
	private int height;

	/** Resource */
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumns({ @JoinColumn(name = "x_coord", referencedColumnName = "x_coord"),
			@JoinColumn(name = "y_coord", referencedColumnName = "y_coord") })
	private Resource resource;

	/** Buildings */
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumns({ @JoinColumn(name = "x_coord", referencedColumnName = "x_coord"),
			@JoinColumn(name = "y_coord", referencedColumnName = "y_coord") })
	private Building building;

	/** Troops */
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumns({ @JoinColumn(name = "x_coord", referencedColumnName = "x_coord"),
			@JoinColumn(name = "y_coord", referencedColumnName = "y_coord") })
	private Troop troop;

	public Tile() {
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

	public Resource getResource() {
		return resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	public Building getBuilding() {
		return building;
	}

	public void setBuilding(Building building) {
		this.building = building;
	}

	public Troop getTroop() {
		return troop;
	}

	public void setTroop(Troop troop) {
		this.troop = troop;
	}

	@Override
	public String toString() {
		return "Tile [xCoord=" + xCoord + ", yCoord=" + yCoord + ", background=" + background + ", height=" + height
				+ ", resource=" + resource + ", building=" + building + ", troop=" + troop + "]";
	}
}
