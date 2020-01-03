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
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.terrehostile.authentification.models.User;
import org.terrehostile.configuration.Constants;
import org.terrehostile.map.tileItem.models.Building;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "towns", uniqueConstraints = @UniqueConstraint(columnNames = { "centerX", "centerY" }))
public class Town {

	public Town() {
		size = Constants.INITIAL_TOWN_SIZE;
		buildings = new ArrayList<Building>();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@ManyToOne
	private User user;

	private int centerX;
	private int centerY;

	private int size;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "town_id", referencedColumnName = "id")
	private List<Building> buildings;

	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties({ "town" })
	private Stock stocks;

	private String name;

}
