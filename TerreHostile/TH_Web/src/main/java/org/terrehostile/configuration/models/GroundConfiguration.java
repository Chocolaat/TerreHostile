package org.terrehostile.configuration.models;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class GroundConfiguration {

	private String name;
	private List<String> imgPath;
	private int type;
	private int movement;

}
