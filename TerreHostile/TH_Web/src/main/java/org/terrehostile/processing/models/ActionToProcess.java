package org.terrehostile.processing.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "actionToProcess")
public abstract class ActionToProcess {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private int nbTurnRemaining;

	@Lob
	private Object actionDetails;

	protected abstract ActionResult process();

	public boolean isOver() {
		return nbTurnRemaining == 0;
	}

	public ActionResult processAction() {

		ActionResult result = process();
		nbTurnRemaining--;

		return result;
	}

}
