package org.terrehostile.processing.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.processing.models.ActionToProcess;

@Repository("buildingRepository")
public interface ActionToProcessRepository extends JpaRepository<ActionToProcess, Integer> {

}
