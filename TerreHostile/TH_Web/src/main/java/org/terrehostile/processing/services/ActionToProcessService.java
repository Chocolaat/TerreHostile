package org.terrehostile.processing.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.processing.models.ActionResult;
import org.terrehostile.processing.models.ActionToProcess;
import org.terrehostile.processing.repositories.ActionToProcessRepository;

@Service
public class ActionToProcessService {

	@Autowired
	ActionToProcessRepository actionToProcessRepository;

	public ActionResult processAction(ActionToProcess actionToProcess) {

		ActionResult result = actionToProcess.processAction();

		if (actionToProcess.isOver()) {
			actionToProcessRepository.delete(actionToProcess);
		}

		return result;
	}

}
