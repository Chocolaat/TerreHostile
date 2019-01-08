package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.CoordinatesKey;
import org.terrehostile.business.mapTileItem.Building;

@Repository("buildingRepository")
public interface BuildingRepository extends JpaRepository<Building, CoordinatesKey> {
	Building findByBuildingId(int id);

	@Query("select buildings from Building buildings where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Building> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
}
