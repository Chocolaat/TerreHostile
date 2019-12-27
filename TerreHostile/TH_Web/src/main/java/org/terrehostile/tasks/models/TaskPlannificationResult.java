package org.terrehostile.tasks.models;

import org.terrehostile.TechnicalException;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TaskPlannificationResult {

	private boolean succes;
	private String result;

	public TaskPlannificationResult() {
		this.succes = false;
		this.result = TechnicalException.TASK_PLANNIFICATION_EMPTY;
	}

	public void fail(String failureMessage) {
		this.succes = false;
		this.result = failureMessage;
	}

	public void succes(String successMessage) {
		this.succes = true;
		this.result = successMessage;
	}

}
