package org.terrehostile.game.map.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.business.map.tileItem.models.Troop;
import org.terrehostile.business.web.ui.grids.FilterSortPaginateParams;
import org.terrehostile.business.web.ui.grids.GridPaginationResponse;
import org.terrehostile.game.map.services.TroopService;

@RestController
public class TroopController {
	@Autowired
	private TroopService troopService;

	@RequestMapping(value = "/troop", method = RequestMethod.GET)
	public Troop gettroop(int id) {
		return troopService.getTroopById(id);
	}

	@RequestMapping(value = "/troop/getPaginated", method = RequestMethod.GET)
	public GridPaginationResponse<Troop> getPaginatedtroops(FilterSortPaginateParams params) {
		return troopService.getPaginatedTroops(params);
	}

	@RequestMapping(value = "/troop", method = RequestMethod.POST)
	public void updatetroop(@RequestBody Troop t) {
		troopService.updateTroop(t);
	}

	@RequestMapping(value = "/troop/create", method = RequestMethod.POST)
	public void createtroop(@RequestBody Troop t) {
		troopService.saveTroop(t);
	}

	@RequestMapping(value = "/troop/delete", method = RequestMethod.POST)
	public void deletetroop(@RequestBody Troop t) {
		troopService.deleteTroop(t);
	}

}
