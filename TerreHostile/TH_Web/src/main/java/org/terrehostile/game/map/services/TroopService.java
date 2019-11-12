package org.terrehostile.game.map.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.mapTileItem.Troop;
import org.terrehostile.business.mapTileItem.Unit;
import org.terrehostile.repository.TroopRepository;
import org.terrehostile.repository.UnitRepository;

@Service("troopService")
public class TroopService {
	@Autowired
	private TroopRepository troopRepository;
	@Autowired
	private UnitRepository unitRepository;

	public void saveAll(List<Troop> troops) {
		for (Troop t : troops) {
			troopRepository.save(t);
			List<Unit> unitListToSave = new ArrayList<Unit>();
			for (Unit u : t.getUnits()) {
				u.setTroopID(t.getTroopId());
				unitListToSave.add(u);
			}
			unitRepository.saveAll(unitListToSave);
		}
	}

}
