package org.terrehostile.game.map.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.tileItem.models.Troop;
import org.terrehostile.business.map.tileItem.models.Unit;
import org.terrehostile.business.map.tileItem.repositories.TroopRepository;
import org.terrehostile.business.map.tileItem.repositories.UnitRepository;
import org.terrehostile.business.web.ui.grids.FilterSortPaginateParams;
import org.terrehostile.business.web.ui.grids.GridPaginationResponse;

@Service("troopService")
public class TroopService {

	@Autowired
	private TroopRepository troopRepository;
	@Autowired
	private UnitRepository unitRepository;

	public Troop getTroopById(int id) {
		return troopRepository.findById(id).get();
	}

	public List<Troop> getAllTroops() {
		return troopRepository.findAll();
	}

	public GridPaginationResponse<Troop> getPaginatedTroops(FilterSortPaginateParams params) {

		GridPaginationResponse<Troop> gridPaginatedTroops = new GridPaginationResponse<Troop>();

		Sort sort = Sort.unsorted();
		if (!params.getSortName().isEmpty()) {
			sort = params.getSortOrder().equals("desc") ? Sort.by(params.getSortName()).descending()
					: Sort.by(params.getSortName()).ascending();
		}

		Pageable sortedByNameAsc = PageRequest.of(params.getPageNumber(), params.getPageSize(), sort);

		Page<Troop> TroopPageResult = troopRepository.findAll(sortedByNameAsc);

		gridPaginatedTroops.setItemList(TroopPageResult.getContent());
		gridPaginatedTroops.setItemsCount(TroopPageResult.getTotalElements());

		return gridPaginatedTroops;
	}

	public void updateTroop(Troop t) {
		troopRepository.updateTroopById(t.getxCoord(), t.getyCoord(), t.getUserId(), t.getTownId(), t.getTroopId());
	}

	public Troop saveTroop(Troop t) {
		return troopRepository.save(t);
	}

	public void saveAll(List<Troop> troops) {
		for (Troop t : troops) {
			troopRepository.save(t);
			List<Unit> unitListToSave = new ArrayList<Unit>();
			for (Unit u : t.getUnits()) {
				u.setTroopId(t.getTroopId());
				unitListToSave.add(u);
			}
			unitRepository.saveAll(unitListToSave);
		}
	}

	public void deleteTroop(Troop t) {
		troopRepository.delete(t);
	}
}
