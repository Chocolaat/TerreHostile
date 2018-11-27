package org.terrehostile.business.map;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.JoinColumns;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;


@Entity 
@IdClass(MapsObjectKeys.class)
@Table(name = "mapview")
public class Tile implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	/** Coordinates */
	@Id
	@Column(name="x_coord", nullable = false)
	private int xCoord;
	
	@Id
	@Column(name="y_coord", nullable = false)
	private int yCoord;
	
	/** Background */
	@Column(name="background", nullable = false)
	private int background;

	/** Height */
	@Column(name="height", nullable = false)
	private int height;
	
	/** Resource */
	@Column(name="troops", nullable = true)
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumns({
        @JoinColumn(name="x_coord", referencedColumnName="x_coord"),
        @JoinColumn(name="y_coord", referencedColumnName="y_coord")
    })
	private Resource resource;

	/** Buildings */
	@Column(name="buildings", nullable = true)
	@OneToOne(fetch = FetchType.EAGER)
    @JoinColumns({
        @JoinColumn(name="x_coord", referencedColumnName="x_coord"),
        @JoinColumn(name="y_coord", referencedColumnName="y_coord")
    })
	private Building building;

	/** Troops */
	@Column(name="troops", nullable = true)
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumns({
        @JoinColumn(name="x_coord", referencedColumnName="x_coord"),
        @JoinColumn(name="y_coord", referencedColumnName="y_coord")
    })
	private List<Troop> troops = new ArrayList<>();
	

	
	
	public Tile()
	{
		
	}
	
	public Tile(int xCoord, int yCoord, int background, int height) {
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.background = background;
		this.height = height;
	}
	
	

	public Tile(int xCoord, int yCoord, int background, int height, Resource resource, Building building,
			List<Troop> troops) {
		super();
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.background = background;
		this.height = height;
		this.resource = resource;
		this.building = building;
		this.troops = troops;
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

	public int getBackground() {
		return background;
	}

	public void setBackground(int background) {
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

	public List<Troop> getTroops() {
		return troops;
	}

	public void setTroops(List<Troop> troops) {
		this.troops = troops;
	}

	@Override
	public String toString() {
		return "Tile [xCoord=" + xCoord + ", yCoord=" + yCoord + ", background=" + background + ", height=" + height
				+ ", resource=" + resource + ", building=" + building + ", troops=" + troops + "]";
	}


	
 
}
