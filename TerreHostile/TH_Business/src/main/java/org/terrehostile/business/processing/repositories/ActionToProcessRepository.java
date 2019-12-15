package org.terrehostile.business.processing.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.processing.models.ActionToProcess;

@Repository("buildingRepository")
public interface ActionToProcessRepository extends JpaRepository<ActionToProcess, Integer> {

}
