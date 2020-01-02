package org.terrehostile.player.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.terrehostile.authentification.models.User;
import org.terrehostile.configuration.Constants;
import org.terrehostile.map.tileItem.models.Building;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Town {

	public Town() {
		size = Constants.INITIAL_TOWN_SIZE;
		buildings = new ArrayList<Building>();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int townId;

	@ManyToOne
	private User user;

	private int centerX;
	private int centerY;

	private int size;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "townId", referencedColumnName = "townId")
	private List<Building> buildings;

	@OneToOne
	private Stock stocks;

	private String name;

}
