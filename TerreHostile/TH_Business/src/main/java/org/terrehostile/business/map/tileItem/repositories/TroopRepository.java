package org.terrehostile.business.map.tileItem.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.terrehostile.business.map.tileItem.models.Troop;

@Repository("troopRepository")
public interface TroopRepository extends JpaRepository<Troop, Integer> {

	Troop findByTroopId(String id);

	@Query("select troops from Troop troops where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Troop> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);

	@Transactional
	@Modifying
	@Query("update Troop t set t.xCoord = ?1, t.yCoord = ?2, t.userId = ?3, t.townId = ?4 where t.id = ?5")
	void updateTroopById(int xCoord, int yCoord, int userId, int townId, Integer troopId);

}
