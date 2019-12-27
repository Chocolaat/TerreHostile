package org.terrehostile.tasks.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.configuration.models.BuildingConfiguration;
import org.terrehostile.map.tileItem.models.Building;
import org.terrehostile.tasks.models.Build;
import org.terrehostile.tasks.models.TaskProcessingResult;

@Service
public class BuildService {

	@Autowired
	List<BuildingConfiguration> buildingConfigurations;

	protected TaskProcessingResult process(Build build) {

		TaskProcessingResult taskProcessingResult = new TaskProcessingResult();
		build.getBuilding().setHealth(build.getBuilding().getHealth() + build.getBuilderCount());

		if (build.getBuilding().getHealth() >= buildingConfigurations.get(build.getBuilding().getType())
				.getTotalHealth()) {
			build.getBuilding().setHealth(buildingConfigurations.get(build.getBuilding().getType()).getTotalHealth());
			build.getBuilding().setState(Building.STATE_BUILT);
		}

		return taskProcessingResult;
	}

	public boolean isOver(Build build) {
		return build.getBuilding().getState() == Building.STATE_BUILT;
	}
}
