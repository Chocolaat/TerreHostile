package org.terrehostile.tasks.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.ApplicationGlobalModel;
import org.terrehostile.ApplicationGlobalRepository;
import org.terrehostile.tasks.models.BuildTask;
import org.terrehostile.tasks.models.BuildTasksSummary;
import org.terrehostile.tasks.models.TurnSummary;
import org.terrehostile.tasks.repositories.BuildTaskRepository;
import org.terrehostile.tasks.repositories.TurnSummaryRepository;

@Service
public class ProcessTasksService {

	@Autowired
	BuildTaskRepository buildTaskRepository;

	@Autowired
	BuildTaskService buildTaskService;

	@Autowired
	ApplicationGlobalRepository applicationGlobalRepository;

	@Autowired
	TurnSummaryRepository turnSummaryRepository;

	public TurnSummary processTaks() {

		ApplicationGlobalModel appModel = applicationGlobalRepository.findAll().get(0);

		TurnSummary turnSummary = new TurnSummary(appModel.getCurrentTurn());

		turnSummary.addTasksSummary(processBuildTaks());

		appModel.setCurrentTurn(appModel.getCurrentTurn() + 1);
		applicationGlobalRepository.save(appModel);

		return turnSummaryRepository.save(turnSummary);
	}

	public BuildTasksSummary processBuildTaks() {

		BuildTasksSummary buildTasksSummary = new BuildTasksSummary();

		List<BuildTask> buildTaskList = buildTaskRepository.findAll();

		buildTaskList.forEach(buildTask -> {
			buildTasksSummary.addToSummary(buildTaskService.processTask(buildTask).getResult());
		});

		return buildTasksSummary;

	}

}
