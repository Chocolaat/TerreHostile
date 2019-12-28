
package org.terrehostile.tasks.models;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BuildTasksSummary implements TasksSummary {

	private StringBuilder summary = new StringBuilder("Résumé des constructions");

	public StringBuilder addToSummary(String messageToAdd) {
		return summary.append("\n").append(messageToAdd);
	}

	@Override
	public StringBuilder getSummary() {
		return summary;
	}

}
