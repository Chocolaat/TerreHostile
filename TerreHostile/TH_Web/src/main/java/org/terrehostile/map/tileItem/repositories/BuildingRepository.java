package org.terrehostile.map.tileItem.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.terrehostile.map.tileItem.models.Building;

@Repository("buildingRepository")
public interface BuildingRepository extends JpaRepository<Building, Integer> {

	@Query("select buildings from Building buildings where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Building> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);

	@Transactional
	@Modifying
	@Query("update Building b set b.health = ?1, b.state = ?2, b.townId = ?3, b.type = ?4, b.xCoord = ?5, b.yCoord = ?6 where b.id = ?7")
	void updateBuildingById(int health, int state, int townId, int type, int xCoord, int yCoord, Integer buildingId);

}
