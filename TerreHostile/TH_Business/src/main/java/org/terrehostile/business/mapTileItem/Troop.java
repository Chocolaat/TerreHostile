package org.terrehostile.business.mapTileItem;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.terrehostile.business.map.CoordinatesKey;

@Entity
@IdClass(CoordinatesKey.class)
@Table(name = "troops")
public class Troop implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@GeneratedValue
	private int id;

	/** Coordinates */
	@Id
	@Column(name = "x_coord", nullable = false)
	private int xCoord;

	@Id
	@Column(name = "y_coord", nullable = false)
	private int yCoord;

	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "troop_id", referencedColumnName = "id")
	private List<Unit> units;

	public Troop() {
		units = new ArrayList<>();
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
		return "Troop [xCoord=" + xCoord + ", yCoord=" + yCoord + ", units=" + units + "]";
	}

}
