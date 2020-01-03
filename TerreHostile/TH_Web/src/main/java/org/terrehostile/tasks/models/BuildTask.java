package org.terrehostile.tasks.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;

import org.terrehostile.map.tileItem.models.Building;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class BuildTask extends Task {

	public static final String CANNOT_BUILD_TILE_IS_NOT_EMPTY = "CANNOT_BUILD_TILE_IS_NOT_EMPTY";
	public static final String CANNOT_BUILD_NO_TOWN = "CANNOT_BUILD_NO_TOWN";
	public static final String BUILDING_SUCCESSFULY_PLANNED = "BUILDING_SUCCESSFULY_PLANNED";
	public static final String BUILDING_IN_PROGRESS = "BUILDING_IN_PROGRESS";
	public static final String BUILDING_SUCCESSFULY_BUILT = "BUILDING_SUCCESSFULY_BUILT";

	@OneToOne(fetch = FetchType.LAZY)
	private Building building;

	private int builderCount;

}