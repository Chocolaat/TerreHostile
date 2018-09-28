package org.terrehostile.business.map;

import java.util.Iterator;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity 
@IdClass(MapsObjectKeys.class)
@Table(name = "map_background_view")
public class MapBackgroundView {
	
	@Id
	@Column(name="begin_x_coord")
	private int beginXCoord;
	
	@Id
	@Column(name="begin_y_coord")
	private int beginYCoord;
	
	@Column(name="ground_line_1")
	private String groundLine1;
	@Column(name="ground_line_2")
	private String groundLine2;
	@Column(name="ground_line_3")
	private String groundLine3;
	@Column(name="ground_line_4")
	private String groundLine4;
	@Column(name="ground_line_5")
	private String groundLine5;
	@Column(name="ground_line_6")
	private String groundLine6;
	@Column(name="ground_line_7")
	private String groundLine7;
	@Column(name="ground_line_8")
	private String groundLine8;
	@Column(name="ground_line_9")
	private String groundLine9;
	@Column(name="ground_line_10")
	private String groundLine10;
	
	@Column(name="height_line_1")
	private String heightLine1;
	@Column(name="height_line_2")
	private String heightLine2;
	@Column(name="height_line_3")
	private String heightLine3;
	@Column(name="height_line_4")
	private String heightLine4;
	@Column(name="height_line_5")
	private String heightLine5;
	@Column(name="height_line_6")
	private String heightLine6;
	@Column(name="height_line_7")
	private String heightLine7;
	@Column(name="height_line_8")
	private String heightLine8;
	@Column(name="height_line_9")
	private String heightLine9;
	@Column(name="height_line_10")
	private String heightLine10;
	
	public MapBackgroundView()
	{
		
	}
	
	public MapBackgroundView (String jsonView)
	{
		
	}
	
	public MapBackgroundView (Map map)
	{
		this.beginXCoord = map.getBeginXCoord();
		this.beginYCoord = map.getBeginYCoord();
		groundLine1 = groundLine2 = groundLine3 = groundLine4 = groundLine5 = groundLine6 = groundLine7 = groundLine8 = groundLine9 = groundLine10 = "";
		heightLine1 = heightLine2 = heightLine3 = heightLine4 = heightLine5 = heightLine6 = heightLine7 = heightLine8 = heightLine9 = heightLine10 = "";
		
		
		Iterator<Tile> tileIterator = map.getMapTiles().iterator();
		Tile currentTile;
		
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine1 = groundLine1 + currentTile.getBackgroundValue() + ", ";
			heightLine1 = heightLine1 + currentTile.getHeight() + ", ";
		}
		groundLine1 = groundLine1.substring(0, groundLine1.length() - 2);	
		heightLine1 = heightLine1.substring(0, heightLine1.length() - 2);		
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine2 = groundLine2 + currentTile.getBackgroundValue() + ", ";
			heightLine2 = heightLine2 + currentTile.getHeight() + ", ";
		}
		groundLine2 = groundLine2.substring(0, groundLine2.length() - 2);	
		heightLine2 = heightLine2.substring(0, heightLine2.length() - 2);		
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine3 = groundLine3 + currentTile.getBackgroundValue() + ", ";
			heightLine3 = heightLine3 + currentTile.getHeight() + ", ";
		}
		groundLine3 = groundLine3.substring(0, groundLine3.length() - 2);	
		heightLine3 = heightLine3.substring(0, heightLine3.length() - 2);	
				
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine4 = groundLine4 + currentTile.getBackgroundValue() + ", ";
			heightLine4 = heightLine4 + currentTile.getHeight() + ", ";
		}
		
		groundLine4 = groundLine4.substring(0, groundLine4.length() - 2);
		heightLine4 = heightLine4.substring(0, heightLine4.length() - 2);		
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine5 = groundLine5 + currentTile.getBackgroundValue() + ", ";
			heightLine5 = heightLine5 + currentTile.getHeight() + ", ";
		}
		groundLine5 = groundLine5.substring(0, groundLine5.length() - 2);	
		heightLine5 = heightLine5.substring(0, heightLine5.length() - 2);	
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine6 = groundLine6 + currentTile.getBackgroundValue() + ", ";
			heightLine6 = heightLine6 + currentTile.getHeight() + ", ";
		}
		groundLine6 = groundLine6.substring(0, groundLine6.length() - 2);	
		heightLine6 = heightLine6.substring(0, heightLine6.length() - 2);	
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine7 = groundLine7 + currentTile.getBackgroundValue() + ", ";
			heightLine7 = heightLine7 + currentTile.getHeight() + ", ";
		}
		groundLine7 = groundLine7.substring(0, groundLine7.length() - 2);	
		heightLine7 = heightLine7.substring(0, heightLine7.length() - 2);	
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine8 = groundLine8 + currentTile.getBackgroundValue() + ", ";
			heightLine8 = heightLine8 + currentTile.getHeight() + ", ";
		}
		groundLine8 = groundLine8.substring(0, groundLine8.length() - 2);	
		heightLine8 = heightLine8.substring(0, heightLine8.length() - 2);	
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine9 = groundLine9 + currentTile.getBackgroundValue() + ", ";
			heightLine9 = heightLine9 + currentTile.getHeight() + ", ";
		}
		groundLine9 = groundLine9.substring(0, groundLine9.length() - 2);	
		heightLine9 = heightLine9.substring(0, heightLine9.length() - 2);
		for (int i = 0 ; i < 10 ; i++)
		{
			currentTile = tileIterator.next();
			groundLine10 = groundLine10 + currentTile.getBackgroundValue() + ", ";
			heightLine10 = heightLine10 + currentTile.getHeight() + ", ";
		}
		groundLine10 = groundLine10.substring(0, groundLine10.length() - 2);
		heightLine10 = heightLine10.substring(0, heightLine10.length() - 2);
		
	}
	
	public String toJsonView()
	{
		StringBuilder jsonView = new StringBuilder();
		StringBuilder jsonViewGround = new StringBuilder();
		StringBuilder jsonViewHeight = new StringBuilder();
		
		jsonViewGround.append("\"ground\": [ [").append(groundLine1).append("], [").append(groundLine2).append("], [").append(groundLine3).append("], [").append(groundLine4).append("], [").append(groundLine5).append("], [").append(groundLine6).append("], [").append(groundLine7).append("], [").append(groundLine8).append("], [").append(groundLine9).append("], [").append(groundLine10).append("] ]");
		jsonViewHeight.append("\"height\": [ [").append(heightLine1).append("], [").append(heightLine2).append("], [").append(heightLine3).append("], [").append(heightLine4).append("], [").append(heightLine5).append("], [").append(heightLine6).append("], [").append(heightLine7).append("], [").append(heightLine8).append("], [").append(heightLine9).append("], [").append(heightLine10).append("] ]");
		jsonView.append("{ ").append(jsonViewGround).append(", ").append(jsonViewHeight).append(" }");
		
		return jsonView.toString();
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

	public String getGroundLine1() {
		return groundLine1;
	}

	public void setGroundLine1(String groundLine1) {
		this.groundLine1 = groundLine1;
	}

	public String getGroundLine2() {
		return groundLine2;
	}

	public void setGroundLine2(String groundLine2) {
		this.groundLine2 = groundLine2;
	}

	public String getGroundLine3() {
		return groundLine3;
	}

	public void setGroundLine3(String groundLine3) {
		this.groundLine3 = groundLine3;
	}

	public String getGroundLine4() {
		return groundLine4;
	}

	public void setGroundLine4(String groundLine4) {
		this.groundLine4 = groundLine4;
	}

	public String getGroundLine5() {
		return groundLine5;
	}

	public void setGroundLine5(String groundLine5) {
		this.groundLine5 = groundLine5;
	}

	public String getGroundLine6() {
		return groundLine6;
	}

	public void setGroundLine6(String groundLine6) {
		this.groundLine6 = groundLine6;
	}

	public String getGroundLine7() {
		return groundLine7;
	}

	public void setGroundLine7(String groundLine7) {
		this.groundLine7 = groundLine7;
	}

	public String getGroundLine8() {
		return groundLine8;
	}

	public void setGroundLine8(String groundLine8) {
		this.groundLine8 = groundLine8;
	}

	public String getGroundLine9() {
		return groundLine9;
	}

	public void setGroundLine9(String groundLine9) {
		this.groundLine9 = groundLine9;
	}

	public String getGroundLine10() {
		return groundLine10;
	}

	public void setGroundLine10(String groundLine10) {
		this.groundLine10 = groundLine10;
	}

	public String getHeightLine1() {
		return heightLine1;
	}

	public void setHeightLine1(String heightLine1) {
		this.heightLine1 = heightLine1;
	}

	public String getHeightLine2() {
		return heightLine2;
	}

	public void setHeightLine2(String heightLine2) {
		this.heightLine2 = heightLine2;
	}

	public String getHeightLine3() {
		return heightLine3;
	}

	public void setHeightLine3(String heightLine3) {
		this.heightLine3 = heightLine3;
	}

	public String getHeightLine4() {
		return heightLine4;
	}

	public void setHeightLine4(String heightLine4) {
		this.heightLine4 = heightLine4;
	}

	public String getHeightLine5() {
		return heightLine5;
	}

	public void setHeightLine5(String heightLine5) {
		this.heightLine5 = heightLine5;
	}

	public String getHeightLine6() {
		return heightLine6;
	}

	public void setHeightLine6(String heightLine6) {
		this.heightLine6 = heightLine6;
	}

	public String getHeightLine7() {
		return heightLine7;
	}

	public void setHeightLine7(String heightLine7) {
		this.heightLine7 = heightLine7;
	}

	public String getHeightLine8() {
		return heightLine8;
	}

	public void setHeightLine8(String heightLine8) {
		this.heightLine8 = heightLine8;
	}

	public String getHeightLine9() {
		return heightLine9;
	}

	public void setHeightLine9(String heightLine9) {
		this.heightLine9 = heightLine9;
	}

	public String getHeightLine10() {
		return heightLine10;
	}

	public void setHeightLine10(String heightLine10) {
		this.heightLine10 = heightLine10;
	}
	
	
}
