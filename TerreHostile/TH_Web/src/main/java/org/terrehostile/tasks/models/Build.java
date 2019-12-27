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
public class Build extends Task {

	public static final String CANNOT_BUILD_TILE_IS_NOT_EMPTY = "Emplacement déjà occupé";
	public static final String BUILDING_SUCCESSFULY_PLANNED = "Bâtiment planifié avec succès";

	@OneToOne(fetch = FetchType.LAZY)
	private Building building;

	private int builderCount;

}