package org.terrehostile.web.admincontrolers;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.Map;
import org.terrehostile.business.map.MapBackgroundView;
import org.terrehostile.services.MapBackgroundViewService;

@Controller
public class MapEditorControler {
		
	@Autowired
	private MapBackgroundViewService mapBackgroundViewService;
	
	@RequestMapping(value={"/admin/mapEditor"}, method = RequestMethod.GET)
	public ModelAndView mapEditor(){
		
	    Map map = mapBackgroundViewService.getMapByXYAndSize(1, 1, 5);
	   	ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("map", map);
		modelAndView.addObject("mapJsonView", map.getJsonView());
		modelAndView.setViewName("admin/homeMapEditor");
				   	
		return modelAndView;
	}
	
	   @PostMapping("/admin/mapEditorGenerateMap")
	    public ModelAndView generateMap(@ModelAttribute Map map) {
		   	ModelAndView modelAndView = new ModelAndView();
		   	
		   	map = Map.createMapRandomBackgrounds(map.getBeginXCoord(), map.getBeginYCoord(), 10, 10);
		   	MapBackgroundView mBackView = new MapBackgroundView(map);
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", mBackView.toJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
					   	
			return modelAndView;
		
	    }
	   
		
	   @PostMapping("/admin/mapEditorSaveMap")
	    public ModelAndView saveMap(@ModelAttribute Map map, @RequestParam String mapLayoutValue, String mapLayoutHeightValue) {

		   mapBackgroundViewService.saveMapFromLayout(mapLayoutValue, mapLayoutHeightValue,  map.getWidth(), map.getHeight(), map.getBeginXCoord(), map.getBeginYCoord());
		   		   
		    map = mapBackgroundViewService.getMapByXYAndSize(map.getBeginXCoord(), map.getBeginYCoord(), map.getWidth() / 10);
		   	ModelAndView modelAndView = new ModelAndView();
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", map.getJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			
			return modelAndView;
	    }
	   
	   @PostMapping("/admin/mapEditorGetMapByXY")
	    public ModelAndView getMapByXY(@RequestParam int xCoord, int yCoord) {
		   		   		   
		    Map map = mapBackgroundViewService.getMapByXY(xCoord, yCoord);

		   	ModelAndView modelAndView = new ModelAndView();
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", map.getJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			
			return modelAndView;
	    }
	   
	   @PostMapping("/admin/mapEditorGetMapByXYAndSize")
	    public ModelAndView getMapByXYAndSize(@RequestParam int xCoord, int yCoord, int size) {   
		   		   
		    Map map = mapBackgroundViewService.getMapByXYAndSize(xCoord, yCoord, size);
		   	ModelAndView modelAndView = new ModelAndView();
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", map.getJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			
			return modelAndView;
	    }
	   
	   @PostMapping("/admin/mapEditorSave100x100TileMap")
	    public ModelAndView save100x100TileMap(@ModelAttribute Map map, @RequestParam String mapJsonView) {
		   		   
		   	ModelAndView modelAndView = new ModelAndView();
		   	
		   	
		   	MapBackgroundView mBackView;
		   	
		   	ArrayList<Integer> a = new ArrayList<Integer>(Arrays.asList(101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 201, 211, 221, 231, 241, 251, 261, 271, 281, 291, 301));
		   	ArrayList<Integer> a2 = new ArrayList<Integer>(Arrays.asList(101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 201, 211, 221, 231, 241, 251, 261, 271, 281, 291, 301));
		   	
		   	for (Integer i : a)
		   	{
		   		for (Integer j : a2)
		   		{
				   	map = Map.createMapRandomBackgrounds(i, j, 10, 10);
				   	mBackView = new MapBackgroundView(map);
				   	mapBackgroundViewService.saveMap(mBackView);
		   		}
		   	}
		   	
		   	map = Map.createMapRandomBackgrounds(map.getBeginXCoord(), map.getBeginYCoord(), 1, 11);
		   	mBackView = new MapBackgroundView(map);
		   	
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", mBackView.toJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			
			return modelAndView;
	    }
	
}