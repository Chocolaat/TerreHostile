package org.terrehostile;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TechnicalException extends Exception {

	private static final long serialVersionUID = 1L;

	public static String TASK_PLANNIFICATION_EMPTY = "Erreur technique : code [TASK_PLANNIFICATION_EMPTY]";

	private String errorMessage;

}
