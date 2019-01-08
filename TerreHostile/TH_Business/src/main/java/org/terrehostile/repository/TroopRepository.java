package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.CoordinatesKey;
import org.terrehostile.business.mapTileItem.Troop;

@Repository("troopRepository")
public interface TroopRepository extends JpaRepository<Troop, CoordinatesKey> {

	Troop findByTroopId(String id);

	@Query("select troops from Troop troops where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Troop> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
}
