package org.terrehostile.business.mapTileItem;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "troops")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@troopId")
public class Troop implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int troopId;

	/** Coordinates */
	@Column(name = "x_coord", nullable = false)
	private int xCoord;

	@Column(name = "y_coord", nullable = false)
	private int yCoord;

	private Integer userId;

	@Column(nullable = true)
	private Integer townId;

	@OneToMany(mappedBy = "troopId", cascade = CascadeType.ALL, orphanRemoval = true)
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public int getTroopId() {
		return troopId;
	}

	public void setTroopId(int troopId) {
		this.troopId = troopId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Troop [troopId=" + troopId + ", xCoord=" + xCoord + ", yCoord=" + yCoord + ", userId=" + userId
				+ ", units=" + units + "]";
	}

}
