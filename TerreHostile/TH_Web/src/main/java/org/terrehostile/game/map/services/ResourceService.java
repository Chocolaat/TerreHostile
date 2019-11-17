package org.terrehostile.game.map.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.tileItem.Resource;
import org.terrehostile.repository.ResourceRepository;
import org.terrehostile.technic.FilterSortPaginateParams;
import org.terrehostile.technic.GridPaginationResponse;

@Service("resourceService")
public class ResourceService {

	@Autowired
	private ResourceRepository resourceRepository;

	public Resource getResourceById(int id) {
		return resourceRepository.findById(id).get();
	}

	public List<Resource> getAllResources() {
		return resourceRepository.findAll();
	}

	public GridPaginationResponse<Resource> getPaginatedResources(FilterSortPaginateParams params) {

		GridPaginationResponse<Resource> gridPaginatedResources = new GridPaginationResponse<Resource>();

		Sort sort = Sort.unsorted();
		if (!params.getSortName().isEmpty()) {
			sort = params.getSortOrder().equals("desc") ? Sort.by(params.getSortName()).descending()
					: Sort.by(params.getSortName()).ascending();
		}

		Pageable sortedByNameAsc = PageRequest.of(params.getPageNumber(), params.getPageSize(), sort);

		Page<Resource> ResourcePageResult = resourceRepository.findAll(sortedByNameAsc);

		gridPaginatedResources.setItemList(ResourcePageResult.getContent());
		gridPaginatedResources.setItemsCount(ResourcePageResult.getTotalElements());

		return gridPaginatedResources;
	}

	public void updateResource(Resource r) {
		resourceRepository.updateResourceById(r.getxCoord(), r.getyCoord(), r.getType(), r.getQuantity(),
				r.getResourceId());
	}

	public Resource saveResource(Resource r) {
		return resourceRepository.save(r);
	}

	public void deleteResource(Resource r) {
		resourceRepository.delete(r);
	}
}
