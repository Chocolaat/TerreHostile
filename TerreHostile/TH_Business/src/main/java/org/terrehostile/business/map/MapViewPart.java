package org.terrehostile.business.map;

import java.util.concurrent.ThreadLocalRandom;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

//Square of x*x tiles
@Entity 
@IdClass(MapsObjectKeys.class)
@Table(name = "mapViewPart")
public class MapViewPart {
	
	
	@Id
	@Column(name="begin_x_coord")
	private int beginXCoord;
	@Id
	@Column(name="begin_y_coord")
	private int beginYCoord;
	
	@Lob
	private Integer[][] mapViewPartTilesGround;
	@Lob
	private Integer[][] mapViewPartTilesHeight;
	
	
	public static final int size = 10; 

	
	public MapViewPart(int beginXCoord, int beginYCoord, Integer[][] mapViewPartTilesGround, Integer[][] mapViewPartTilesHeight)
	{
		this.mapViewPartTilesGround = mapViewPartTilesGround;
		this.mapViewPartTilesHeight = mapViewPartTilesHeight;
		this.beginXCoord = beginXCoord;
		this.beginYCoord = beginYCoord;
	}
	
	public MapViewPart()
	{
		mapViewPartTilesGround = new Integer[size][size];
		mapViewPartTilesHeight = new Integer[size][size];
	}
	
	public static MapViewPart createMapViewPartWithRandomTiles(int beginXCoord, int beginYCoord)
	{
		MapViewPart resultMapViewPart = new MapViewPart();
		resultMapViewPart.beginXCoord = beginXCoord;
		resultMapViewPart.beginYCoord = beginYCoord;
		
		for (int x = 0; x < size; x++)
		{
			for (int y = 0; y < size; y++)
			{
				resultMapViewPart.mapViewPartTilesGround[x][y] = ThreadLocalRandom.current().nextInt(0, 3);
				resultMapViewPart.mapViewPartTilesHeight[x][y] = 0;
			}
		}
		
		return resultMapViewPart;
	}

	public static int getSize() {
		return size;
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
	
	public Integer[][] getMapViewPartTilesGround() {
		return mapViewPartTilesGround;
	}

	public void setMapViewPartTilesGround(Integer[][] mapViewPartTilesGround) {
		this.mapViewPartTilesGround = mapViewPartTilesGround;
	}

	public Integer[][] getMapViewPartTilesHeight() {
		return mapViewPartTilesHeight;
	}

	public void setMapViewPartTilesHeight(Integer[][] mapViewPartTilesHeight) {
		this.mapViewPartTilesHeight = mapViewPartTilesHeight;
	}

	public String toString()
	{

		ObjectMapper mapper = new ObjectMapper();
		
		StringBuilder result = new StringBuilder();
		result.append("MapView : ");
		result.append("\n");
		result.append("beginXCoord = " + beginXCoord);
		result.append("\n");
		result.append("beginYCoord = " + beginYCoord);
		result.append("\n");
		result.append("size = " + size);
		result.append("\n");
		try {
			result.append("mapViewPartTiles = " + mapper.writeValueAsString(mapViewPartTilesGround));
			result.append("mapViewPartTiles = " + mapper.writeValueAsString(mapViewPartTilesHeight));
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return result.toString(); 
	}
}
