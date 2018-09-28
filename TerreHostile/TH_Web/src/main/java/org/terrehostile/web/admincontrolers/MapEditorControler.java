package org.terrehostile.web.admincontrolers;

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
		
		ModelAndView modelAndView = new ModelAndView();
		Map map = Map.createMapRandomBackgrounds(0, 0, 10, 10);
		MapBackgroundView mBackView = new MapBackgroundView(map);
		modelAndView.addObject("map", map);
		modelAndView.addObject("mapJsonView", mBackView.toJsonView());
		modelAndView.setViewName("admin/homeMapEditor");
		return modelAndView;
	}
	
	   @PostMapping("/admin/mapEditor")
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
	    public ModelAndView saveMap(@ModelAttribute Map map, @RequestParam String mapJsonView) {
		   		   
		   	ModelAndView modelAndView = new ModelAndView();
		   	map = Map.createMapRandomBackgrounds(map.getBeginXCoord(), map.getBeginYCoord(), 10, 10);
		   	MapBackgroundView mBackView = new MapBackgroundView(map);
		   	
		   	mapBackgroundViewService.saveMap(mBackView);
		   	
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", mBackView.toJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			
			return modelAndView;
	    }
	
}