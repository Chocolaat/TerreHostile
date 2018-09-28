package org.terrehostile.services;



import java.util.List;

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
	
	public Map getMapByXY(int x, int y) {
		MapBackgroundView m = mapBackgroundViewRepository.findByBeginXCoordAndBeginYCoord(x, y);
		Map map = new Map();
		map.setJsonView(m.toJsonView());
		map.setBeginXCoord(x);
		map.setBeginYCoord(y);
		map.setHeight(10);
		map.setWidth(10);
		
		
		return map;
	}
	
	public Map getMapByXYAndSize(int x, int y, int size) {
		
		int xMin = x - size * 10;
		int xMax = x + size * 10;
		int yMin = y - size * 10;
		int yMax = y + size * 10;
		
		List<MapBackgroundView> mList = mapBackgroundViewRepository.findByXYMinMax(xMin, xMax, yMin, yMax);
		
		StringBuilder jsonView = new StringBuilder();
		StringBuilder jsonViewGround = new StringBuilder();
		StringBuilder jsonViewHeigth = new StringBuilder();
		
		jsonViewGround.append("\"ground\": ");
		jsonViewHeigth.append("\"height\": ");
		
		for (MapBackgroundView m : mList)
		{
			jsonViewGround.append(m.getGroundLine1()).append("], [").append(m.getGroundLine2()).append("], [").append(m.getGroundLine3()).append("], [").append(m.getGroundLine4()).append("], [").append(m.getGroundLine5()).append("], [").append(m.getGroundLine6()).append("], [").append(m.getGroundLine7()).append("], [").append(m.getGroundLine8()).append("], [").append(m.getGroundLine9()).append("], [").append(m.getGroundLine10()).append("] ]");
			jsonViewGround.append(m.getHeightLine1()).append("], [").append(m.getHeightLine2()).append("], [").append(m.getHeightLine3()).append("], [").append(m.getHeightLine4()).append("], [").append(m.getHeightLine5()).append("], [").append(m.getHeightLine6()).append("], [").append(m.getHeightLine7()).append("], [").append(m.getHeightLine8()).append("], [").append(m.getHeightLine9()).append("], [").append(m.getHeightLine10()).append("] ]");
		}
		
	//	jsonView.append("{ ").append(jsonViewGround).append(", ").append(jsonViewHeight).append(" }");
		

				
		
		Map map = new Map();
		map.setJsonView(jsonView.toString());
		
		map.setBeginXCoord(xMin - xMin%10);
		map.setBeginYCoord(yMin - yMin%10);
		map.setHeight(size * 10);
		map.setWidth(size * 10);
		
		
		return map;
	}

}