package org.terrehostile.business.map;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.JoinColumns;

import javax.annotation.Resource;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.terrehostile.business.mapTileItem.Building;
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

	/** Buildings */
	@Column(name="buildings", nullable = true)
    @OneToMany
    @JoinColumns({
        @JoinColumn(name="x_coord", referencedColumnName="x_coord"),
        @JoinColumn(name="y_coord", referencedColumnName="y_coord")
    })
	private List<Building> buildings = new ArrayList<>();
	
//	/** Troops */
//	@Column(name="troops", nullable = true)
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name = "id")
//	private List<Troop> troops = new ArrayList<>();
//
//	@Column(name="resources", nullable = true)
//	/** Resources */
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name = "id")
//	private List<Resource> resources = new ArrayList<>();
	
	
	public Tile()
	{
		
	}
	
	public Tile(int xCoord, int yCoord, int background, int height) {
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.background = background;
		this.height = height;
	}

	public Tile(int xCoord, int yCoord, int background, int height, List<Building> buildings, List<Troop> troops,
			List<Resource> resources) {
		super();
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.background = background;
		this.height = height;
		this.buildings = buildings;
//		this.troops = troops;
//		this.resources = resources;
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

	public List<Building> getBuildings() {
		return buildings;
	}

	public void setBuildings(List<Building> buildings) {
		this.buildings = buildings;
	}
	

//	public List<Troop> getTroops() {
//		return troops;
//	}
//
//	public void setTroops(List<Troop> troops) {
//		this.troops = troops;
//	}
//
//	public List<Resource> getResources() {
//		return resources;
//	}
//
//	public void setResources(List<Resource> resources) {
//		this.resources = resources;
//	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Tile [xCoord=" + xCoord + ", yCoord=" + yCoord + ", background=" + background + ", height=" + height
				+ ", buildings=" + buildings + "]";
	}
	
	

//	@Override
//	public String toString() {
//		return "Tile [xCoord=" + xCoord + ", yCoord=" + yCoord + ", background=" + background + ", height=" + height
//				+ ", buildings=" + buildings + ", troops=" + troops + ", resources=" + resources + "]";
//	}
	
	
 
}
