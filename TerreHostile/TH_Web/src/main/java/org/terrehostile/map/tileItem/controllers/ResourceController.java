package org.terrehostile.map.tileItem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.map.tileItem.models.Resource;
import org.terrehostile.map.tileItem.services.ResourceService;
import org.terrehostile.ui.grids.FilterSortPaginateParams;
import org.terrehostile.ui.grids.GridPaginationResponse;

@RestController
public class ResourceController {
	@Autowired
	private ResourceService resourceService;

	@RequestMapping(value = "/resource", method = RequestMethod.GET)
	public Resource getResource(int id) {
		return resourceService.getResourceById(id);
	}

	@RequestMapping(value = "/resource/getPaginated", method = RequestMethod.GET)
	public GridPaginationResponse<Resource> getPaginatedResources(FilterSortPaginateParams params) {
		return resourceService.getPaginatedResources(params);
	}

	@RequestMapping(value = "/resource", method = RequestMethod.POST)
	public void updateResource(@RequestBody Resource r) {
		resourceService.updateResource(r);
	}

	@RequestMapping(value = "/resource/create", method = RequestMethod.POST)
	public void createResource(@RequestBody Resource r) {
		resourceService.saveResource(r);
	}

	@RequestMapping(value = "/resource/delete", method = RequestMethod.POST)
	public void deleteResource(@RequestBody Resource r) {
		resourceService.deleteResource(r);
	}

}
