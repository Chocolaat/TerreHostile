package org.terrehostile.business.map;

import javax.persistence.Column;
import javax.persistence.Id;

public class Tile {
	
	
	@Id
	@Column(name="xCoord", nullable = false)
	private int xCoord;
	
	@Id
	@Column(name="yCoord", nullable = false)
	private int yCoord;
	

	@Column(name="background", nullable = false)
	private int background;
	@Column(name="height", nullable = false)
	private int height;
	
	
	public Tile()
	{
		
	}
	
	public Tile(int xCoord, int yCoord, int background, int height) {
		this.xCoord = xCoord;
		this.yCoord = yCoord;
		this.background = background;
		this.height = height;
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
	public int getBackground() {
		return background;
	}
	public void setBackground(int background) {
		this.background = background;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}
	
	@Override
	public String toString() {
		return "Tile [xCoord=" + xCoord + ", yCoord=" + yCoord + ", background=" + background + ", height=" + height
				+ "]";
	}
}
