package org.terrehostile;

import org.terrehostile.services.MapBackgroundViewService;

public class TestSch {
	
//	@Autowired
//	private MapBackgroundViewService mapBackgroundViewService;

	public static void main(String[] args) {
		
	//	Map map = Map.createMapRandomBackgrounds(0, 0);
	//	MapBackgroundView mapBGV = new MapBackgroundView(map);
		
		new MapBackgroundViewService().getMapByXYAndSize(311, -9, 3);
	}

}
