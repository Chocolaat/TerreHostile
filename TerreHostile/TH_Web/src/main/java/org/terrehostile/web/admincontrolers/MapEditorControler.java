package org.terrehostile.web.admincontrolers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.Map;
import org.terrehostile.services.MapService;

@Controller
public class MapEditorControler {
	
	@Autowired
	private MapService mapService;
	
	@RequestMapping(value={"/admin/mapEditor"}, method = RequestMethod.GET)
	public ModelAndView mapEditor(){
		ModelAndView modelAndView = new ModelAndView();
		Map m = new Map();
		modelAndView.addObject("map", m);
		modelAndView.setViewName("admin/homeMapEditor");
		return modelAndView;
	}
	
	   @PostMapping("/admin/mapEditor")
	    public ModelAndView generateMap(@ModelAttribute Map map) {
		   	ModelAndView modelAndView = new ModelAndView();
		   	map = Map.createMapRandomBackgrounds(map.getWidth(), map.getHeight());
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", map.toJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			return modelAndView;
	    }
	
		
	   @PostMapping("/admin/mapEditorSaveMap")
	    public ModelAndView saveMap(@ModelAttribute Map map) {
		   System.out.println("toto");
		   System.out.println("mapHeight" + map.getHeight());
		   System.out.println("map.getMap().size()" + map.getMap().size());
		   
		   
			mapService.saveMap(map);
		   	ModelAndView modelAndView = new ModelAndView();
			modelAndView.addObject("map", map);
			modelAndView.addObject("mapJsonView", map.toJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			
			return modelAndView;
	    }
	
}