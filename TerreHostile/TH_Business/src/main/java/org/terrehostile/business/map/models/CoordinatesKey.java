package org.terrehostile.business.map.models;

import java.io.Serializable;

public class CoordinatesKey implements Serializable {

	private static final long serialVersionUID = 6292962577748821631L;

	private int xCoord;
	private int yCoord;

	public CoordinatesKey() {
	}

	public CoordinatesKey(int xCoord, int yCoord) {
		this.xCoord = xCoord;
		this.yCoord = yCoord;
	}

	public int getxCoord() {
		return xCoord;
	}

	public void setxCoord(int xCoord) {
		this.xCoord = xCoord;
	}

	public int getyCoord() {
		return yCoord;
	}

	public void setyCoord(int yCoord) {
		this.yCoord = yCoord;
	}

}
