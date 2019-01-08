package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.CoordinatesKey;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;

@Repository("resourceRepository")
public interface ResourceRepository extends JpaRepository<Resource, CoordinatesKey> {
	Building findByResourceId(int id);

	@Query("select resources from Resource resources where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Resource> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
}
