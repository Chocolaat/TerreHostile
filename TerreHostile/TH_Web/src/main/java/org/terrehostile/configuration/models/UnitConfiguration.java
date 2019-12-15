package org.terrehostile.configuration.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UnitConfiguration {

	private String name;
	private String imgPath;
	private int type;

	private int vision;
	private int movement;

	private int totalHealth;
	private int power;
	private int armor;
	private int range;

}
