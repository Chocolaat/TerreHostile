package org.terrehostile.game.configuration.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ResourceConfiguration {

	private String name;
	private String imgPath;
	private int type;

	private int regeneration;

}
