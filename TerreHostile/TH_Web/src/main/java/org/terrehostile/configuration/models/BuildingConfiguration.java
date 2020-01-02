package org.terrehostile.configuration.models;

import org.terrehostile.player.models.Stock;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BuildingConfiguration {

	private String name;
	private String imgPath;
	private int type;

	private int vision;

	private int totalHealth;
	private int power;
	private int armor;
	private int range;

	private Stock cost;
}
