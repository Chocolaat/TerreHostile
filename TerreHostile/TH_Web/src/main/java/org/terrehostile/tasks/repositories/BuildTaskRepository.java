
package org.terrehostile.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.tasks.models.BuildTask;

@Repository
public interface BuildTaskRepository extends JpaRepository<BuildTask, Integer> {

}
