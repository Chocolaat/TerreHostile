package org.terrehostile.map.models;

import com.fasterxml.jackson.annotation.JsonValue;

public enum GroundType {

	Grass, Ground, Ocean, Sand, Sea;

	@JsonValue
	public int toValue() {
		return ordinal();
	}

}
