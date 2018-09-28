package org.terrehostile.business.map;

import java.io.Serializable;

public class MapsObjectKeys implements Serializable {
	
	private static final long serialVersionUID = 6292962577748821631L;
	
	private int beginXCoord;
	private int beginYCoord;
	
	
	public int getBeginXCoord() {
		return beginXCoord;
	}
	public void setBeginXCoord(int beginXCoord) {
		this.beginXCoord = beginXCoord;
	}
	public int getBeginYCoord() {
		return beginYCoord;
	}
	public void setBeginYCoord(int beginYCoord) {
		this.beginYCoord = beginYCoord;
	}
	
	

}
