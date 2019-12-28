package org.terrehostile.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.tasks.models.Task;
import org.terrehostile.tasks.models.TaskProcessingResult;
import org.terrehostile.tasks.repositories.TaskRepository;

@Service
public abstract class TaskService<Taskimpl extends Task> {

	@Autowired
	TaskRepository taskRepository;

	protected abstract TaskProcessingResult process(Taskimpl task);

	public abstract boolean isOver(Taskimpl task);

	public TaskProcessingResult processTask(Taskimpl task) {

		TaskProcessingResult result = process(task);

		if (isOver(task)) {
			taskRepository.delete(task);
		}

		return result;
	}

}
