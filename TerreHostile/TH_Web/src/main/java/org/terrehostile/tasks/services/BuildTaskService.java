package org.terrehostile.tasks.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.configuration.models.BuildingConfiguration;
import org.terrehostile.map.tileItem.models.Building;
import org.terrehostile.tasks.models.BuildTask;
import org.terrehostile.tasks.models.TaskProcessingResult;

@Service
public class BuildTaskService extends TaskService<BuildTask> {

	@Autowired
	List<BuildingConfiguration> buildingConfigurations;

	protected TaskProcessingResult process(BuildTask build) {

		BuildingConfiguration buildingConfiguration = buildingConfigurations.get(build.getBuilding().getType());
		TaskProcessingResult taskProcessingResult = new TaskProcessingResult();

		// Increment health
		build.getBuilding().setHealth(build.getBuilding().getHealth() + build.getBuilderCount());

		// If health > totalHealth, construction is finished
		if (build.getBuilding().getHealth() >= buildingConfiguration.getTotalHealth()) {
			build.getBuilding().setHealth(buildingConfiguration.getTotalHealth());
			build.getBuilding().setState(Building.STATE_BUILT);

			taskProcessingResult
					.setResult(BuildTask.BUILDING_SUCCESSFULY_BUILT + " : " + build.getBuilding().getType());
		}
		// Else, return progression
		else {
			int progress = (build.getBuilding().getHealth() * 100) / buildingConfiguration.getTotalHealth();
			taskProcessingResult.setResult(BuildTask.BUILDING_IN_PROGRESS + " : " + progress + "%");
		}

		return taskProcessingResult;
	}

	public boolean isOver(BuildTask build) {
		return build.getBuilding().getState() == Building.STATE_BUILT;
	}

}
