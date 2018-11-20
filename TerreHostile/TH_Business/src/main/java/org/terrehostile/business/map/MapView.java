package org.terrehostile.business.map;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

import org.terrehostile.business.Constants;



public class MapView {
		
	
	private int[][] ground;
	private int[][] height;
	

	private int beginXCoord;
	private int beginYCoord;
	
	private int xSize;
	private int ySize;
	
	public MapView()
	{
		ground = new int[xSize][ySize];
	}
	
	public MapView(int beginXCoord, int beginYCoord, int xSize, int ySize, int[][] mapTilesGround, int[][] mapTilesHeight)
	{
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.xSize = xSize;
		this.ySize = ySize;
		this.ground = mapTilesGround;
		this.height = mapTilesHeight;
	}
	
	public MapView(int beginXCoord, int beginYCoord, int xSize, int ySize, List<Tile> tileList)
	{
				
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
		this.xSize = xSize;
		this.ySize = ySize;
		
		ground = new int[xSize][ySize];
		height = new int[xSize][ySize];
		
		System.out.println("tileList size = " + tileList.size());
		
		for (Tile currentTile : tileList) 
		{

			
			int newX = currentTile.getxCoord() - beginXCoord;
			int newY = currentTile.getyCoord() - beginYCoord;
			newX = (newX < 0) ? newX + Constants.XCOUNT : newX;
			newY = (newY < 0) ? newY + Constants.YCOUNT : newY;
			newX = (newX > Constants.XMAX) ? newX - Constants.XCOUNT : newX;
			newY = (newY > Constants.YMAX) ? newY - Constants.YCOUNT : newY;
			

			System.out.println("--------------");
			System.out.println("currentTile = " + currentTile.toString());
			System.out.println("ground[x][y] = " + "ground[" + (currentTile.getxCoord() - beginXCoord) + "][" + (currentTile.getyCoord() - beginYCoord) + "]");
			System.out.println("ground[x][y] = " + "ground[" + (newX) + "][" + (newY) + "]");
			System.out.println("--------------");
			
			ground[newX][newY] = currentTile.getBackground();
			height[newX][newY] = currentTile.getHeight();
		}

	}
	
	public List<Tile> toTileList()
	{		
		List<Tile> mapTileList = new ArrayList<>();
		
		for (int x = 0; x < xSize; x++)
		{
			for (int y = 0; y < ySize; y++)
			{
				mapTileList.add(new Tile(x + this.beginXCoord, y + this.beginXCoord, ground[x][y], height[x][y]));
			}
		}
	
		return mapTileList;
	}
	
	public static MapView createMapViewWithRandomTiles(int beginXCoord, int beginYCoord, int xSize, int ySize)
	{
		MapView resultMapView = new MapView();
		
		resultMapView.beginXCoord = beginXCoord;
		resultMapView.beginYCoord = beginYCoord;
		resultMapView.xSize = xSize;
		resultMapView.ySize = ySize;
		resultMapView.ground = new int[xSize][ySize];
		resultMapView.height = new int[xSize][ySize];
		
		for (int x = 0; x < xSize; x++)
		{
			for (int y = 0; y < ySize; y++)
			{
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

	@Override
	public String toString() {
		return "MapView [ground=" + Arrays.deepToString(ground) + ", height=" + Arrays.deepToString(height) + ", beginXCoord="
				+ beginXCoord + ", beginYCoord=" + beginYCoord + ", xSize=" + xSize + ", ySize=" + ySize + "]";
	}

	
}
