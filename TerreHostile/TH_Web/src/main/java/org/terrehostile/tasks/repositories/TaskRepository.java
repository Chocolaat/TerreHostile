package org.terrehostile.tasks.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.tasks.models.Task;

@Repository("taskRepository")
public interface TaskRepository extends JpaRepository<Task, Integer> {

}
