package org.terrehostile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.CoordinatesKey;
import org.terrehostile.business.mapTileItem.Building;

@Repository("buildingRepository")
public interface BuildingRepository extends JpaRepository<Building, CoordinatesKey> {
	Building findById(int id);

}
