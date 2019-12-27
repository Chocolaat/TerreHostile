package org.terrehostile.map.tileItem.models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "troops", uniqueConstraints = @UniqueConstraint(columnNames = { "xCoord", "yCoord" }))
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
	private int xCoord;
	private int yCoord;

	private Integer userId;

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

}
