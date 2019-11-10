package org.terrehostile.technic;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FilterSortPaginateParams {
	String filter;
	String sortOrder;
	int pageNumber;
	int pageSize;
}
