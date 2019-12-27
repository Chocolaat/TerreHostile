package org.terrehostile.tasks.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.tasks.models.Task;
import org.terrehostile.tasks.models.TaskProcessingResult;
import org.terrehostile.tasks.repositories.TaskRepository;

@Service
public abstract class TaskService {

	@Autowired
	TaskRepository taskRepository;

	protected abstract TaskProcessingResult process();

	public abstract boolean isOver();

	public TaskProcessingResult processTask() {

		TaskProcessingResult result = process();

		return result;
	}

	public TaskProcessingResult processTask(Task task) {

		TaskProcessingResult result = processTask();

		if (isOver()) {
			taskRepository.delete(task);
		}

		return result;
	}

}
