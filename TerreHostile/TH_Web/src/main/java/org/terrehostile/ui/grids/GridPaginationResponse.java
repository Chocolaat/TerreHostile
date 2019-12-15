package org.terrehostile.ui.grids;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GridPaginationResponse<T> {

	List<T> itemList;
	long itemsCount;

}
