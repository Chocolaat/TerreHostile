package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.terrehostile.business.Constants;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;

public class MapView {

	private int[][] ground;
	private int[][] height;
	private Resource[][] resources;
	private Building[][] buildings;
	private Troop[][] troops;

	private int beginXCoord;
	private int beginYCoord;

	private int xSize;
	private int ySize;

	public MapView() {
		ground = new int[xSize][ySize];
	}

	public MapView(int[][] ground, int[][] height, Resource[][] resources, Building[][] buildings, Troop[][] troops,
			int beginXCoord, int beginYCoord, int xSize, int ySize) {
		super();
		this.ground = ground;
		this.height = height;
		this.resources = resources;
		this.buildings = buildings;
		this.troops = troops;
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.xSize = xSize;
		this.ySize = ySize;
	}

	public MapView(int beginXCoord, int beginYCoord, int xSize, int ySize, List<Tile> tileList) {
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.xSize = xSize;
		this.ySize = ySize;

		ground = new int[ySize][xSize];
		height = new int[ySize][xSize];
		buildings = new Building[ySize][xSize];
		resources = new Resource[ySize][xSize];
		troops = new Troop[ySize][xSize];

		for (Tile currentTile : tileList) {

			int newX = currentTile.getxCoord() - beginXCoord;
			int newY = currentTile.getyCoord() - beginYCoord;
			newX = (newX < 0) ? newX + Constants.XCOUNT : newX;
			newY = (newY < 0) ? newY + Constants.YCOUNT : newY;
			newX = (newX > Constants.XMAX) ? newX - Constants.XCOUNT : newX;
			newY = (newY > Constants.YMAX) ? newY - Constants.YCOUNT : newY;

			ground[newY][newX] = currentTile.getBackground().ordinal();
			height[newY][newX] = currentTile.getHeight();
			buildings[newY][newX] = currentTile.getBuilding();
			resources[newY][newX] = currentTile.getResource();
			troops[newY][newX] = currentTile.getTroops();
		}

	}

	public List<Tile> toTileList() {
		List<Tile> mapTileList = new ArrayList<>();

		for (int x = 0; x < xSize; x++) {
			for (int y = 0; y < ySize; y++) {
				mapTileList.add(new Tile(x + this.beginXCoord, y + this.beginYCoord, GroundType.values()[ground[x][y]],
						height[x][y]));
			}
		}

		return mapTileList;
	}

	public static MapView createMapViewWithRandomTiles(int beginXCoord, int beginYCoord, int xSize, int ySize) {
		MapView resultMapView = new MapView();

		resultMapView.beginXCoord = beginXCoord;
		resultMapView.beginYCoord = beginYCoord;
		resultMapView.xSize = xSize;
		resultMapView.ySize = ySize;
		resultMapView.ground = new int[xSize][ySize];
		resultMapView.height = new int[xSize][ySize];

		for (int x = 0; x < xSize; x++) {
			for (int y = 0; y < ySize; y++) {
				resultMapView.ground[x][y] = ThreadLocalRandom.current().nextInt(0, 3);
				resultMapView.height[x][y] = 0;
			}
		}
		return resultMapView;
	}

	public int[][] getGround() {
		return ground;
	}

	public void setGround(int[][] ground) {
		this.ground = ground;
	}

	public int[][] getHeight() {
		return height;
	}

	public void setHeight(int[][] height) {
		this.height = height;
	}

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

	public int getxSize() {
		return xSize;
	}

	public void setxSize(int xSize) {
		this.xSize = xSize;
	}

	public int getySize() {
		return ySize;
	}

	public void setySize(int ySize) {
		this.ySize = ySize;
	}

	public Troop[][] getTroops() {
		return troops;
	}

	public void setTroops(Troop[][] troops) {
		this.troops = troops;
	}

	public Resource[][] getResources() {
		return resources;
	}

	public void setResources(Resource[][] resources) {
		this.resources = resources;
	}

	public Building[][] getBuildings() {
		return buildings;
	}

	public void setBuildings(Building[][] buildings) {
		this.buildings = buildings;
	}

	@Override
	public String toString() {
		return "MapView [ground=" + Arrays.toString(ground) + ", height=" + Arrays.toString(height) + ", resources="
				+ Arrays.toString(resources) + ", buildings=" + Arrays.toString(buildings) + ", troops="
				+ Arrays.toString(troops) + ", beginXCoord=" + beginXCoord + ", beginYCoord=" + beginYCoord + ", xSize="
				+ xSize + ", ySize=" + ySize + "]";
	}

}
