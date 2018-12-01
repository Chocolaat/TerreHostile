package org.terrehostile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.CoordinatesKey;
import org.terrehostile.business.mapTileItem.Resource;

@Repository("resourceRepository")
public interface ResourceRepository extends JpaRepository<Resource, CoordinatesKey> {

	Resource findById(int id);
}
