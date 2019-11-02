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

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
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

}
