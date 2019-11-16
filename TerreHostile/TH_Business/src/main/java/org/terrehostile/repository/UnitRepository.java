package org.terrehostile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.tileItem.Unit;

@Repository("unitRepository")
public interface UnitRepository extends JpaRepository<Unit, Long> {

}
