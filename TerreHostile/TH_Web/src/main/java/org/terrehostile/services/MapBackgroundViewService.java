package org.terrehostile.services;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.Map;
import org.terrehostile.business.map.MapBackgroundView;
import org.terrehostile.repository.MapBackgroundViewRepository;


@Service("mapBackgroundViewService")
public class MapBackgroundViewService {
	

	@Autowired
	private MapBackgroundViewRepository mapBackgroundViewRepository;
	

	public void saveMap(MapBackgroundView mapBackgroundView) {
		mapBackgroundViewRepository.save(mapBackgroundView);
	}
	
    
	public void saveMapFromLayout(String mapValueLayout, String mapValueHeightLayout, int width, int height, int beginX, int beginY)
	{

		int squareSize = width / 10;
		
		MapBackgroundView[] array = new MapBackgroundView[squareSize*squareSize];
		
		for (int i = 0; i < array.length; i++)
		{
			array[i] = new MapBackgroundView();
		}
		
	      String pattern = "(.,.,.,.,.,.,.,.,.,.)";

	      // Create a Pattern object
	      Pattern r = Pattern.compile(pattern);

	      // Now create matcher object.
	      Matcher m = r.matcher(mapValueLayout);
	      Matcher m2 = r.matcher(mapValueHeightLayout);
	      
	      
	      int curBeginY = beginY;
	      int curBeginX = beginX;
	      
	      for (int j = 0; j < squareSize*squareSize; j+=squareSize)
	      {
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine1(m.group(1));
					array[i + j].setHeightLine1(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine2(m.group(1));
					array[i + j].setHeightLine2(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine3(m.group(1));
					array[i + j].setHeightLine3(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine4(m.group(1));
					array[i + j].setHeightLine4(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine5(m.group(1));
					array[i + j].setHeightLine5(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine6(m.group(1));
					array[i + j].setHeightLine6(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine7(m.group(1));
					array[i + j].setHeightLine7(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine8(m.group(1));
					array[i + j].setHeightLine8(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine9(m.group(1));
					array[i + j].setHeightLine9(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < squareSize; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine10(m.group(1));
					array[i + j].setHeightLine10(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
				}
				
				curBeginY += 10;
	      }
	      
			for (int i = 0; i < array.length; i++)
			{
				MapBackgroundView mres = array[i];
				mapBackgroundViewRepository.save(mres);
			}
	}
	
	public Map getMapByXYAndSize(int x, int y, int size) {
		
		int xMin = x - (((size - 1) * 10)/2);
		int yMin = y - (((size - 1) * 10)/2);
		int xMax = x + (((size - 1) * 10)/2) + 5;
		int yMax = y + (((size - 1) * 10)/2) + 5;
		
		xMin = xMin < 1 ? 1 : xMin;
		yMin = yMin < 1 ? 1 : yMin;
		
		System.out.println("xMin = " + xMin);
		System.out.println("yMin = " + yMin);
		System.out.println("xMax = " + xMax);
		System.out.println("yMax = " + yMax);
		
		List<MapBackgroundView> mList = mapBackgroundViewRepository.findByXYMinMax(xMin, xMax, yMin, yMax);
		
		
		StringBuilder jsonView = new StringBuilder();
		StringBuilder jsonViewGround = new StringBuilder();
		StringBuilder jsonViewHeight = new StringBuilder();		
		
		jsonViewGround.append("\"ground\": ");
		jsonViewHeight.append("\"height\": ");

		StringBuilder jsonViewGround1 = new StringBuilder();
		StringBuilder jsonViewHeight1 = new StringBuilder();
		StringBuilder jsonViewGround2 = new StringBuilder();
		StringBuilder jsonViewHeight2 = new StringBuilder();
		StringBuilder jsonViewGround3 = new StringBuilder();
		StringBuilder jsonViewHeight3 = new StringBuilder();
		StringBuilder jsonViewGround4 = new StringBuilder();
		StringBuilder jsonViewHeight4 = new StringBuilder();
		StringBuilder jsonViewGround5 = new StringBuilder();
		StringBuilder jsonViewHeight5 = new StringBuilder();
		StringBuilder jsonViewGround6 = new StringBuilder();
		StringBuilder jsonViewHeight6 = new StringBuilder();
		StringBuilder jsonViewGround7 = new StringBuilder();
		StringBuilder jsonViewHeight7 = new StringBuilder();
		StringBuilder jsonViewGround8 = new StringBuilder();
		StringBuilder jsonViewHeight8 = new StringBuilder();
		StringBuilder jsonViewGround9 = new StringBuilder();
		StringBuilder jsonViewHeight9 = new StringBuilder();
		StringBuilder jsonViewGround10 = new StringBuilder();
		StringBuilder jsonViewHeight10 = new StringBuilder();
		

		
		int previousY = 0;
		boolean firstX = true;
		String s = "";
		
		for (MapBackgroundView m : mList)
		{

			if (previousY == m.getBeginYCoord() || previousY == 0)
			{
				s = (previousY == 0) ? "[" : ",";
				
				jsonViewGround1.append(s).append(m.getGroundLine1());
				jsonViewHeight1.append(s).append(m.getHeightLine1());
				jsonViewGround2.append(s).append(m.getGroundLine2());
				jsonViewHeight2.append(s).append(m.getHeightLine2());
				jsonViewGround3.append(s).append(m.getGroundLine3());
				jsonViewHeight3.append(s).append(m.getHeightLine3());
				jsonViewGround4.append(s).append(m.getGroundLine4());
				jsonViewHeight4.append(s).append(m.getHeightLine4());
				jsonViewGround5.append(s).append(m.getGroundLine5());
				jsonViewHeight5.append(s).append(m.getHeightLine5());
				jsonViewGround6.append(s).append(m.getGroundLine6());
				jsonViewHeight6.append(s).append(m.getHeightLine6());
				jsonViewGround7.append(s).append(m.getGroundLine7());
				jsonViewHeight7.append(s).append(m.getHeightLine7());
				jsonViewGround8.append(s).append(m.getGroundLine8());
				jsonViewHeight8.append(s).append(m.getHeightLine8());
				jsonViewGround9.append(s).append(m.getGroundLine9());
				jsonViewHeight9.append(s).append(m.getHeightLine9());
				jsonViewGround10.append(s).append(m.getGroundLine10());
				jsonViewHeight10.append(s).append(m.getHeightLine10());
				
			}
			
			else
			{
				String str = firstX ? "[" : ",";
				firstX = false;
				
				jsonViewGround.append(str).append(jsonViewGround1).append("],").append(jsonViewGround2).append("],").append(jsonViewGround3).append("],").append(jsonViewGround4).append("],").append(jsonViewGround5).append("],").append(jsonViewGround6).append("],").append(jsonViewGround7).append("],").append(jsonViewGround8).append("],").append(jsonViewGround9).append("],").append(jsonViewGround10).append("]");
				jsonViewHeight.append(str).append(jsonViewHeight1).append("],").append(jsonViewHeight2).append("],").append(jsonViewHeight3).append("],").append(jsonViewHeight4).append("],").append(jsonViewHeight5).append("],").append(jsonViewHeight6).append("],").append(jsonViewHeight7).append("],").append(jsonViewHeight8).append("],").append(jsonViewHeight9).append("],").append(jsonViewHeight10).append("]");
				
				jsonViewGround1 = new StringBuilder();
				jsonViewHeight1 = new StringBuilder();
				jsonViewGround2 = new StringBuilder();
				jsonViewHeight2 = new StringBuilder();
				jsonViewGround3 = new StringBuilder();
				jsonViewHeight3 = new StringBuilder();
				jsonViewGround4 = new StringBuilder();
				jsonViewHeight4 = new StringBuilder();
				jsonViewGround5 = new StringBuilder();
				jsonViewHeight5 = new StringBuilder();
				jsonViewGround6 = new StringBuilder();
				jsonViewHeight6 = new StringBuilder();
				jsonViewGround7 = new StringBuilder();
				jsonViewHeight7 = new StringBuilder();
				jsonViewGround8 = new StringBuilder();
				jsonViewHeight8 = new StringBuilder();
				jsonViewGround9 = new StringBuilder();
				jsonViewHeight9 = new StringBuilder();
				jsonViewGround10 = new StringBuilder();
				jsonViewHeight10 = new StringBuilder();
				
				s = "[";
				
				jsonViewGround1.append(s).append(m.getGroundLine1());
				jsonViewHeight1.append(s).append(m.getHeightLine1());
				jsonViewGround2.append(s).append(m.getGroundLine2());
				jsonViewHeight2.append(s).append(m.getHeightLine2());
				jsonViewGround3.append(s).append(m.getGroundLine3());
				jsonViewHeight3.append(s).append(m.getHeightLine3());
				jsonViewGround4.append(s).append(m.getGroundLine4());
				jsonViewHeight4.append(s).append(m.getHeightLine4());
				jsonViewGround5.append(s).append(m.getGroundLine5());
				jsonViewHeight5.append(s).append(m.getHeightLine5());
				jsonViewGround6.append(s).append(m.getGroundLine6());
				jsonViewHeight6.append(s).append(m.getHeightLine6());
				jsonViewGround7.append(s).append(m.getGroundLine7());
				jsonViewHeight7.append(s).append(m.getHeightLine7());
				jsonViewGround8.append(s).append(m.getGroundLine8());
				jsonViewHeight8.append(s).append(m.getHeightLine8());
				jsonViewGround9.append(s).append(m.getGroundLine9());
				jsonViewHeight9.append(s).append(m.getHeightLine9());
				jsonViewGround10.append(s).append(m.getGroundLine10());
				jsonViewHeight10.append(s).append(m.getHeightLine10());
				
			}
			
			previousY = m.getBeginYCoord();
			
		}
		
		String str = firstX ? "[" : ",";
		jsonViewGround.append(str).append(jsonViewGround1).append("],").append(jsonViewGround2).append("],").append(jsonViewGround3).append("],").append(jsonViewGround4).append("],").append(jsonViewGround5).append("],").append(jsonViewGround6).append("],").append(jsonViewGround7).append("],").append(jsonViewGround8).append("],").append(jsonViewGround9).append("],").append(jsonViewGround10).append("]]");
		jsonViewHeight.append(str).append(jsonViewHeight1).append("],").append(jsonViewHeight2).append("],").append(jsonViewHeight3).append("],").append(jsonViewHeight4).append("],").append(jsonViewHeight5).append("],").append(jsonViewHeight6).append("],").append(jsonViewHeight7).append("],").append(jsonViewHeight8).append("],").append(jsonViewHeight9).append("],").append(jsonViewHeight10).append("]]");

		jsonView.append("{").append(jsonViewGround).append(", ").append(jsonViewHeight).append("}");
		
		Map map = new Map();
		map.setJsonView(jsonView.toString());
		
		map.setBeginXCoord(xMin - xMin%10 + 1);
		map.setBeginYCoord(yMin - yMin%10 + 1);
		map.setCurrentXCoord(map.getCurrentXCoord());
		map.setCurrentYCoord(map.getCurrentYCoord());
		map.setHeight(size * 10);
		map.setWidth(size * 10);
		
		System.out.println(	"x = " + x);
		System.out.println(	"y = " + y);
		System.out.println(	"size = " + size);
		System.out.println(	"beginx = " + map.getBeginXCoord());
		System.out.println(	"beginx = " + map.getBeginYCoord());
		System.out.println(	"getHeight = " + map.getHeight());
		System.out.println(	"jsonView = " + map.getJsonView());
		System.out.println(	"jsonView.toString() = " + jsonView.toString());
		
		
		return map;
	}

}