package org.terrehostile.business.map.models;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.terrehostile.business.Constants;
import org.terrehostile.business.map.tileItem.models.Building;
import org.terrehostile.business.map.tileItem.models.Resource;
import org.terrehostile.business.map.tileItem.models.Troop;

public class MapView {

	private Tile[][] tiles;
	private Resource[][] resources;
	private Building[][] buildings;
	private Troop[][] troops;

	private int beginXCoord;
	private int beginYCoord;

	private int xSize;
	private int ySize;

	public MapView() {

	}

	public MapView(int xSize, int ySize) {
		this.tiles = new Tile[xSize][ySize];
		for (int x = 0; x < xSize; x++) {
			for (int y = 0; y < ySize; y++) {
				this.tiles[x][y] = new Tile(x, y);
			}
		}
	}

	public MapView(Tile[][] tiles, Resource[][] resources, Building[][] buildings, Troop[][] troops, int beginXCoord,
			int beginYCoord, int xSize, int ySize) {
		super();
		this.tiles = tiles;
		this.resources = resources;
		this.buildings = buildings;
		this.troops = troops;
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.xSize = xSize;
		this.ySize = ySize;
	}

	public MapView(int beginXCoord, int beginYCoord, int xSize, int ySize, List<Tile> tileList,
			List<Resource> resourceList, List<Building> buildingList, List<Troop> troopList) {
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.xSize = xSize;
		this.ySize = ySize;

		tiles = new Tile[xSize][ySize];
		buildings = new Building[xSize][ySize];
		resources = new Resource[xSize][ySize];
		troops = new Troop[xSize][ySize];

		for (Tile currentTile : tileList) {

			int newX = currentTile.getxCoord() - beginXCoord;
			int newY = currentTile.getyCoord() - beginYCoord;
			newX = (newX < 0) ? newX + Constants.XCOUNT : newX;
			newY = (newY < 0) ? newY + Constants.YCOUNT : newY;
			newX = (newX > Constants.XMAX) ? newX - Constants.XCOUNT : newX;
			newY = (newY > Constants.YMAX) ? newY - Constants.YCOUNT : newY;

			tiles[newX][newY] = currentTile;
		}

		for (Resource currentResource : resourceList) {

			int newX = currentResource.getxCoord() - beginXCoord;
			int newY = currentResource.getyCoord() - beginYCoord;
			newX = (newX < 0) ? newX + Constants.XCOUNT : newX;
			newY = (newY < 0) ? newY + Constants.YCOUNT : newY;
			newX = (newX > Constants.XMAX) ? newX - Constants.XCOUNT : newX;
			newY = (newY > Constants.YMAX) ? newY - Constants.YCOUNT : newY;

			resources[newX][newY] = currentResource;
		}
		for (Building currentBuilding : buildingList) {

			int newX = currentBuilding.getxCoord() - beginXCoord;
			int newY = currentBuilding.getyCoord() - beginYCoord;
			newX = (newX < 0) ? newX + Constants.XCOUNT : newX;
			newY = (newY < 0) ? newY + Constants.YCOUNT : newY;
			newX = (newX > Constants.XMAX) ? newX - Constants.XCOUNT : newX;
			newY = (newY > Constants.YMAX) ? newY - Constants.YCOUNT : newY;

			buildings[newX][newY] = currentBuilding;
		}
		for (Troop currentTroop : troopList) {

			int newX = currentTroop.getxCoord() - beginXCoord;
			int newY = currentTroop.getyCoord() - beginYCoord;
			newX = (newX < 0) ? newX + Constants.XCOUNT : newX;
			newY = (newY < 0) ? newY + Constants.YCOUNT : newY;
			newX = (newX > Constants.XMAX) ? newX - Constants.XCOUNT : newX;
			newY = (newY > Constants.YMAX) ? newY - Constants.YCOUNT : newY;

			troops[newX][newY] = currentTroop;
		}

	}

	public static MapView createMapViewWithRandomTiles(int beginXCoord, int beginYCoord, int xSize, int ySize) {
		MapView resultMapView = new MapView(xSize, ySize);

		resultMapView.beginXCoord = beginXCoord;
		resultMapView.beginYCoord = beginYCoord;
		resultMapView.xSize = xSize;
		resultMapView.ySize = ySize;

		for (int x = 0; x < xSize; x++) {
			for (int y = 0; y < ySize; y++) {
				resultMapView.tiles[x][y].setBackground(GroundType.values()[ThreadLocalRandom.current().nextInt(0, 3)]);
				resultMapView.tiles[x][y].setHeight(0);
			}
		}
		return resultMapView;
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

	public Tile[][] getTiles() {
		return tiles;
	}

	public void setTiles(Tile[][] tiles) {
		this.tiles = tiles;
	}

	@Override
	public String toString() {
		return "MapView [tiles=" + Arrays.toString(tiles) + ", resources=" + Arrays.toString(resources) + ", buildings="
				+ Arrays.toString(buildings) + ", troops=" + Arrays.toString(troops) + ", beginXCoord=" + beginXCoord
				+ ", beginYCoord=" + beginYCoord + ", xSize=" + xSize + ", ySize=" + ySize + "]";
	}

}
