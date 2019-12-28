
package org.terrehostile.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.tasks.models.TurnSummary;

@Repository
public interface TurnSummaryRepository extends JpaRepository<TurnSummary, Integer> {

}
