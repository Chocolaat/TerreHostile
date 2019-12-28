package org.terrehostile.tasks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.tasks.models.TurnSummary;
import org.terrehostile.tasks.services.ProcessTasksService;

@RestController
public class TasksController {

	@Autowired
	ProcessTasksService processTasksService;

	@RequestMapping(value = "/tasks/processTasks", method = RequestMethod.POST)
	public TurnSummary createBuilding() {
		return processTasksService.processTaks();
	}

}
