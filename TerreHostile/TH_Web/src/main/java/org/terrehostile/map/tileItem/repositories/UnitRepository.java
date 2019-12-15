package org.terrehostile.map.tileItem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.map.tileItem.models.Unit;

@Repository("unitRepository")
public interface UnitRepository extends JpaRepository<Unit, Long> {

}
