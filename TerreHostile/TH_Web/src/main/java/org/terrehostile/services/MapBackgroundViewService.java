package org.terrehostile.services;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.Constants;
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
	
    
	public void saveMapFromLayout(String mapLayoutValue, String mapLayoutHeightValue, int size, int beginX, int beginY)
	{
		
		MapBackgroundView[] array = new MapBackgroundView[size*size];
		
		for (int i = 0; i < array.length; i++)
		{
			array[i] = new MapBackgroundView();
		}
		
	      String pattern = "(.,.,.,.,.,.,.,.,.,.)";

	      // Create a Pattern object
	      Pattern r = Pattern.compile(pattern);

	      // Now create matcher object.
	      Matcher m = r.matcher(mapLayoutValue);
	      Matcher m2 = r.matcher(mapLayoutHeightValue);
	      
	      

			System.out.println("mapValueLayout = " + mapLayoutValue);
			System.out.println("mapValueHeightLayout = " + mapLayoutHeightValue);
	      
	      int curBeginY = beginY;
	      int curBeginX = beginX;
	      
	      for (int j = 0; j < size*size; j+=size)
	      {
				for (int i = 0; i < size; i++)
				{
					System.out.println("m = " + m.toString());
					System.out.println("m2 = " + m.toString());
					m.find();
					m2.find();
					array[i + j].setGroundLine1(m.group(1));
					array[i + j].setHeightLine1(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine2(m.group(1));
					array[i + j].setHeightLine2(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine3(m.group(1));
					array[i + j].setHeightLine3(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine4(m.group(1));
					array[i + j].setHeightLine4(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine5(m.group(1));
					array[i + j].setHeightLine5(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine6(m.group(1));
					array[i + j].setHeightLine6(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine7(m.group(1));
					array[i + j].setHeightLine7(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine8(m.group(1));
					array[i + j].setHeightLine8(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
				{
					m.find();
					m2.find();
					array[i + j].setGroundLine9(m.group(1));
					array[i + j].setHeightLine9(m2.group(1));
					array[i + j].setBeginXCoord(curBeginX + 10 * i);
					array[i + j].setBeginYCoord(curBeginY);
				}
				for (int i = 0; i < size; i++)
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

		List<MapBackgroundView> mList = new ArrayList<>();
		List<Integer> xCoords = new ArrayList<>();
		List<Integer> yCoords = new ArrayList<>();
		
		int xMin = x - (((size - 1) * 10)/2);
		int yMin = y - (((size - 1) * 10)/2);
		int xMax = x + (((size - 1) * 10)/2) + 5;
		int yMax = y + (((size - 1) * 10)/2) + 5;
		
		int xMin1 = -1;
		int xMin2 = -1;
		int xMax1 = -1;
		int xMax2 = -1;
		int yMin1 = -1;
		int yMin2 = -1;
		int yMax1 = -1;
		int yMax2 = -1;
		
		int begin;
		
		System.out.println("xMin = " + xMin);
		System.out.println("xMax = " + xMax);
		System.out.println("yMin = " + yMin);
		System.out.println("yMax = " + yMax);
		
		if (xMin < 1 || xMax > Constants.XMAX || yMin < 1 || yMax > Constants.YMAX)
		{
			if (xMin < 1)
			{
				xMin1 = xMin + Constants.XMAX + 9;
				xMax1 = Constants.XMAX;
				xMin2 = 1;
				xMax2 = xMax;
				
				begin = xMin1;
				while (begin <= xMax1)
				{
					xCoords.add(begin);
					begin += 10;
				}
				
				begin = xMin2;
				while (begin <= xMax2)
				{
					xCoords.add(begin);
					begin += 10;
				}
				
			}
			
			else if (xMax > Constants.XMAX)
			{
				xMin1 = xMin;
				xMax1 = Constants.XMAX;
				xMin2 = 1;
				xMax2 = xMax - Constants.XMAX - 9;
				
				begin = xMin1;
				while (begin <= xMax1)
				{
					xCoords.add(begin);
					begin += 10;
				}
				
				begin = xMin2;
				while (begin <= xMax2)
				{
					xCoords.add(begin);
					begin += 10;
				}

			}
			
			else
			{
				begin = xMin;
				while (begin <= xMax)
				{
					xCoords.add(begin);
					begin += 10;
				}
			}

			if (yMin < 1)
			{
				yMin1 = yMin + Constants.YMAX + 9;
				yMax1 = Constants.YMAX;
				yMin2 = 1;
				yMax2 = yMax;
				
				begin = yMin1;
				while (begin <= yMax1)
				{
					yCoords.add(begin);
					begin += 10;
				}
				
				begin = yMin2;
				while (begin <= yMax2)
				{
					yCoords.add(begin);
					begin += 10;
				}
				
				
			}
			
			else if (yMax > Constants.YMAX)
			{
				yMin1 = yMin;
				yMax1 = Constants.YMAX;
				yMin2 = 1;
				yMax2 = yMax - Constants.YMAX - 9;
				
				begin = yMin1;
				while (begin <= yMax1)
				{
					yCoords.add(begin);
					begin += 10;
				}
				
				begin = yMin2;
				while (begin <= yMax2)
				{
					yCoords.add(begin);
					begin += 10;
				}
				
			}
			
			else
			{
				begin = yMin;
				while (begin <= yMax)
				{
					yCoords.add(begin);
					begin += 10;
				}
			}
			

			for (int i = 0 ; i < xCoords.size() ; i++)
			{
				for (int j = 0 ; j < yCoords.size() ; j++)
				{
					System.out.println("TOTO xCoord, yCoord = [" + xCoords.get(i) + "], [" + yCoords.get(j) + "]");
					
					mList.add(mapBackgroundViewRepository.findByXYMinMax(xCoords.get(i), xCoords.get(i), yCoords.get(j), yCoords.get(j)).get(0));
				}
			}
		}
		
		else
		{
			mList = mapBackgroundViewRepository.findByXYMinMax(xMin, xMax, yMin, yMax);
		}
		

		System.out.println("1111");
				
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
		

		System.out.println("222");
		
		for (MapBackgroundView m : mList)
		{
			System.out.println("tata xCoord, yCoord = [" + m.getBeginXCoord() + "], [" + m.getBeginYCoord() + "]");

			

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
		

		System.out.println("aaa");
		
		String str = firstX ? "[" : ",";
		jsonViewGround.append(str).append(jsonViewGround1).append("],").append(jsonViewGround2).append("],").append(jsonViewGround3).append("],").append(jsonViewGround4).append("],").append(jsonViewGround5).append("],").append(jsonViewGround6).append("],").append(jsonViewGround7).append("],").append(jsonViewGround8).append("],").append(jsonViewGround9).append("],").append(jsonViewGround10).append("]]");
		jsonViewHeight.append(str).append(jsonViewHeight1).append("],").append(jsonViewHeight2).append("],").append(jsonViewHeight3).append("],").append(jsonViewHeight4).append("],").append(jsonViewHeight5).append("],").append(jsonViewHeight6).append("],").append(jsonViewHeight7).append("],").append(jsonViewHeight8).append("],").append(jsonViewHeight9).append("],").append(jsonViewHeight10).append("]]");


		System.out.println("trtr");
		
		jsonView.append("{").append(jsonViewGround).append(", ").append(jsonViewHeight).append("}");
		
		Map map = new Map();
		map.setJsonView(jsonView.toString());
		

		System.out.println("tyty");
		
		map.setBeginXCoord(x);
		System.out.println("&&&&&");
		map.setBeginYCoord(y);
		System.out.println("&2222&&&");
		map.setCurrentXCoord(map.getBeginXCoord());
		System.out.println("&444444&&&");
		map.setCurrentYCoord(map.getBeginYCoord());
		System.out.println("&55555555&&&");
		map.setSize(size);
		System.out.println("&6666666&&&");
		
		System.out.println("jsonView = [" + map.getJsonView() + "]");
		
		return map;
	}

}