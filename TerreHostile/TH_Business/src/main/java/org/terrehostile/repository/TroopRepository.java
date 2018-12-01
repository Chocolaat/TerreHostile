package org.terrehostile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.CoordinatesKey;
import org.terrehostile.business.mapTileItem.Troop;

@Repository("troopRepository")
public interface TroopRepository extends JpaRepository<Troop, CoordinatesKey> {

	Troop findById(String id);
}
