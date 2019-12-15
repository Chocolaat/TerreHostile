package org.terrehostile.business.processing.models;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;
import org.terrehostile.business.processing.repositories.ActionToProcessRepository;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "actionToProcess")
public abstract class ActionToProcess {

	@Autowired
	ActionToProcessRepository actionToProcessRepository;

	private int nbTurnRemaining;

	private Object actionDetails;

	public abstract ActionResult process();

	private ActionResult genericProcess() {

		ActionResult result = process();
		if (result.success) {
			nbTurnRemaining--;
		}

		if (nbTurnRemaining == 0) {
			actionToProcessRepository.delete(this);
		}

		return result;
	}

}
