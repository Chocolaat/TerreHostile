package org.terrehostile.business.mapTileItem;

import javax.persistence.Column;

public abstract class TileItem {
	
	@Column(name="x_coord", nullable = false)
	private int xCoord ;
	
	
	@Column(name="y_coord", nullable = false)
	private int yCoord;

}
