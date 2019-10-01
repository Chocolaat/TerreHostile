package org.terrehostile.business.mapTileItem;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "units")
public class Unit {

	public final static int TYPE_DRAGON = 1;
	public final static int TYPE_UNICORN = 2;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int unitId;

	private int troopId;

	private int unitType;

	private int unitNumber;

	private int health;

	private int experience;

	public Unit() {
	}

	public int getUnitId() {
		return unitId;
	}

	public void setUnitId(int unitId) {
		this.unitId = unitId;
	}

	public int getUnitType() {
		return unitType;
	}

	public void setUnitType(int unitType) {
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

	public int getTroopID() {
		return troopId;
	}

	public void setTroopID(int troopID) {
		this.troopId = troopID;
	}

	@Override
	public String toString() {
		return "Unit [unitId=" + unitId + ", troopID=" + troopId + ", unitType=" + unitType + ", unitNumber="
				+ unitNumber + ", health=" + health + ", experience=" + experience + "]";
	}

}
