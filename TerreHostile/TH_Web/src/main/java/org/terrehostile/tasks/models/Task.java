package org.terrehostile.tasks.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "tasks")
public abstract class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

}
