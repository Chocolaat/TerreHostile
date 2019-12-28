package org.terrehostile.tasks.models;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class TurnSummary {

	@Id
	private int turn;
	private String summary;

	public TurnSummary(int turn) {
		this.turn = turn;
		this.summary = "Résumé du tour " + turn;
	}

	public void addTasksSummary(TasksSummary tasksSummary) {
		this.summary += "\n";
		this.summary += tasksSummary.getSummary().toString();
	}
}
