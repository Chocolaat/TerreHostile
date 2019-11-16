package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.terrehostile.business.map.tileItem.Building;
import org.terrehostile.business.map.tileItem.Resource;

@Repository("resourceRepository")
public interface ResourceRepository extends JpaRepository<Resource, Integer> {
	Building findByResourceId(int id);

	@Query("select resources from Resource resources where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Resource> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);

	@Transactional
	@Modifying
	@Query("update Resource r set r.xCoord = ?1, r.yCoord = ?2, r.type = ?3, r.quantity = ?4 where r.id = ?5")
	void updateResourceById(int xCoord, int yCoord, int type, int quantity, Integer resourceId);

}
