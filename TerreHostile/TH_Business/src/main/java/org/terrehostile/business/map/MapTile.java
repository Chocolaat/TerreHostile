package org.terrehostile.business.map;

import java.util.concurrent.ThreadLocalRandom;

import javax.persistence.Column;
import javax.persistence.Id;

import org.springframework.data.geo.Point;
import org.terrehostile.business.Constants;

public class MapTile {
	
	@Id
	@Column(name="x", nullable = false, columnDefinition = "Point")
	private Point coordinate;


	@Column(name="ground")
	private int ground;
	@Column(name="height")
	private int height;
	
	
	public MapTile()
	{
		
	}	
	
	public MapTile(Point coordinate, int ground, int height)
	{
		this.coordinate = coordinate;
		this.ground = ground;
		this.height = height;
	}
	
	public static MapTile randomMapTileGround(Point coordinate, int height)
	{
		MapTile result = new MapTile();
		
		result.coordinate = coordinate;
		result.ground = ThreadLocalRandom.current().nextInt(0, Constants.groundTypeCount - 1);
		result.height = height;
		
		return result;

	}
	
	public Point getCoordinate() {
		return coordinate;
	}

	public void setCoordinate(Point coordinate) {
		this.coordinate = coordinate;
	}

	public int getGround() {
		return ground;
	}
	public void setGround(int ground) {
		this.ground = ground;
	}
	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}

	
	
}
