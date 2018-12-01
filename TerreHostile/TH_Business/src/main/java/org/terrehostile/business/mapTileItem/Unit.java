package org.terrehostile.business.mapTileItem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "units")
public class Unit {

	@Id
	@GeneratedValue
	private int id;

	private String troop_id;

	private UnitType unitType;
	private int unitNumber;
	private int health;
	private int experience;

	public Unit() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTroop_id() {
		return troop_id;
	}

	public void setTroop_id(String troop_id) {
		this.troop_id = troop_id;
	}

	public UnitType getUnitType() {
		return unitType;
	}

	public void setUnitType(UnitType unitType) {
		this.unitType = unitType;
	}

	public int getUnitNumber() {
		return unitNumber;
	}

	public void setUnitNumber(int unitNumber) {
		this.unitNumber = unitNumber;
	}

	public int getHealth() {
		return health;
	}

	public void setHealth(int health) {
		this.health = health;
	}

	public int getExperience() {
		return experience;
	}

	public void setExperience(int experience) {
		this.experience = experience;
	}

	@Override
	public String toString() {
		return "Unit [id=" + id + ", troop_id=" + troop_id + ", unitType=" + unitType + ", unitNumber=" + unitNumber
				+ ", health=" + health + ", experience=" + experience + "]";
	}

}
