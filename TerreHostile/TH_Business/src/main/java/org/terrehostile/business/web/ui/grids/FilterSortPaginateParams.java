package org.terrehostile.business.web.ui.grids;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FilterSortPaginateParams {
	int pageNumber;
	int pageSize;
	String sortName;
	String sortOrder;
	String filter;
}
