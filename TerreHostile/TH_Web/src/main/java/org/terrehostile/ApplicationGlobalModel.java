package org.terrehostile;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ApplicationGlobalModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private int currentTurn;

	public ApplicationGlobalModel() {
		this.id = 0;
	}
}
