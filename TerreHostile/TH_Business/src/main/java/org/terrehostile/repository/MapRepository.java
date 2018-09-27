package org.terrehostile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.Map;


@Repository("mapRepository")
public interface MapRepository extends JpaRepository<Map, Long> {
	 Map findMapById(int id);
}