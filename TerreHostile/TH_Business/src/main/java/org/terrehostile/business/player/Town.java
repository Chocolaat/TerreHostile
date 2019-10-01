package org.terrehostile.business.player;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.terrehostile.business.mapTileItem.Building;

@Entity
public class Town {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int townId;

	private Integer userId;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "townId", referencedColumnName = "townId")
	private List<Building> buildings;

	@OneToOne
	private Stocks stocks;

	private String name;

	public int getTownId() {
		return townId;
	}

	public void setTownId(int townId) {
		this.townId = townId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Building> getBuildings() {
		return buildings;
	}

	public void setBuildings(List<Building> buildings) {
		this.buildings = buildings;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Town [townId=" + townId + ", userId=" + userId + ", buildings=" + buildings + ", name=" + name + "]";
	}

}
