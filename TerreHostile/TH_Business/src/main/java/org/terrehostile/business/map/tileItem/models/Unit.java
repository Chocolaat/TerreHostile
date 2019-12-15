package org.terrehostile.business.map.tileItem.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(name = "units")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@unitId")
public class Unit {

	public final static int TYPE_DRAGON = 1;
	public final static int TYPE_UNICORN = 2;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int unitId;

	private int troopId;

	private int type;

	private int unitNumber;

	private int health;

	private int experience;

	public Unit() {
	}

}
