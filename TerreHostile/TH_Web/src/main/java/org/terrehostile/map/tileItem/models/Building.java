package org.terrehostile.map.tileItem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.terrehostile.player.models.Town;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "buildings", uniqueConstraints = @UniqueConstraint(columnNames = { "xCoord", "yCoord" }))
public class Building {

	public final static int TYPE_BARRACK = 1;
	public final static int TYPE_ARCHERY = 2;

	public final static int STATE_PLANNED = 1;
	public final static int STATE_UNDER_CONSTRUCTION = 2;
	public final static int STATE_BUILT = 3;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int buildingId;

	/** Coordinates */
	private int xCoord;
	private int yCoord;

	private int type;

	@ManyToOne
	private Town town;

	private int health;
	private int state = STATE_PLANNED;

	public Building(int xCoord, int yCoord, int type) {
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.type = type;
	}

	/** Lower case Setter/getter for JPA */

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

}
